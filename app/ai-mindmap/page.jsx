"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Bot, Copy, Loader2, FileText, Upload, Download, RefreshCw, Trash } from "lucide-react";

const AI_MINDMAP_PAGE = () => {
  const [content, setContent] = useState("");
  const [mindMapData, setMindMapData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const diagramRef = useRef(null);
  const myDiagramRef = useRef(null);
  const goRef = useRef(null); // Ref to store the GoJS library instance

  useEffect(() => {
    // Load GoJS library
    const loadGoJS = async () => {
      try {
        const go = await import('gojs');
        goRef.current = go; // Store go in ref for use elsewhere
        
        // Check if diagram already exists
        if (diagramRef.current && !diagramRef.current.__goDiagram__) {
          initDiagram(go);
        }
      } catch (error) {
        console.error("Error loading GoJS or initializing diagram:", error);
      }
    };

    if (typeof window !== 'undefined') {
      loadGoJS();
    }

    return () => {
      // Clean up diagram properly
      if (myDiagramRef.current) {
        try {
          myDiagramRef.current.div = null;
          myDiagramRef.current = null;
        } catch (e) {
          console.error("Error cleaning up diagram:", e);
        }
      }
    };
  }, []);

  useEffect(() => {
    // Update diagram when mindMapData changes
    if (mindMapData && myDiagramRef.current && goRef.current) {
      try {
        // Parse the model first if it's a string
        const modelData = typeof mindMapData === 'string' 
          ? JSON.parse(mindMapData) 
          : mindMapData;
          
        console.log("Updating diagram with data:", modelData);
        
        try {
          // Try direct fromJson method first
          myDiagramRef.current.model = goRef.current.Model.fromJson(JSON.stringify(modelData));
          console.log("Model applied via fromJson method");
        } catch (modelError) {
          console.log("FromJson method failed, trying alternative approach:", modelError);
          
          // Fallback to manually creating a model
          const model = new goRef.current.TreeModel();
          model.nodeDataArray = modelData.nodeDataArray || [];
          myDiagramRef.current.model = model;
          console.log("Model applied via manual TreeModel creation");
        }
        
        // Apply layout after model update
        setTimeout(() => {
          if (myDiagramRef.current) {
            try {
              console.log("Applying layout to the diagram with nodes:", 
                myDiagramRef.current.model.nodeDataArray.length);
              
              // Force proper location values for all nodes if missing
              myDiagramRef.current.model.nodeDataArray.forEach(node => {
                if (!node.loc || node.loc === "0 0") {
                  if (node.key === 0) {
                    // For root node, place it in center
                    myDiagramRef.current.model.setDataProperty(node, "loc", "0 0");
                  } else if (node.parent === 0) {
                    // For first-level nodes, give them initial positions based on index
                    const index = myDiagramRef.current.model.nodeDataArray.indexOf(node);
                    const xPos = (node.dir === "left") ? -100 : 100;
                    const yPos = (index % 10) * 30 - 150;
                    myDiagramRef.current.model.setDataProperty(node, "loc", `${xPos} ${yPos}`);
                  }
                }
              });
              
              // Apply layout and zoom
              layoutAll(myDiagramRef.current);
              myDiagramRef.current.zoomToFit();
            } catch (layoutError) {
              console.error("Error during layout:", layoutError);
            }
          }
        }, 200); // Increased timeout to ensure model is ready
      } catch (error) {
        console.error("Error updating diagram with new mind map data:", error);
        console.error("Data received:", mindMapData);
      }
    }
  }, [mindMapData]);

  const initDiagram = (go) => {
    const $ = go.GraphObject.make;
    
    const myDiagram = new go.Diagram(diagramRef.current, {
      'commandHandler.copiesTree': true,
      'commandHandler.copiesParentKey': true,
      'commandHandler.deletesTree': true,
      'draggingTool.dragsTree': true,
      'undoManager.isEnabled': true,
      'initialContentAlignment': go.Spot.Center,
      'allowZoom': true,
      'allowHorizontalScroll': true,
      'allowVerticalScroll': true,
    });

    // Initialize with a default model
    const model = new go.TreeModel();
    model.nodeDataArray = [
      { key: 0, text: "Mind Map", loc: "0 0" }
    ];
    myDiagram.model = model;
    
    myDiagram.addDiagramListener('Modified', (e) => {
      var idx = document.title.indexOf('*');
      if (myDiagram.isModified) {
        if (idx < 0) document.title += '*';
      } else {
        if (idx >= 0) document.title = document.title.slice(0, idx);
      }
    });

    // Define the Node template
    myDiagram.nodeTemplate = $(go.Node,
      'Vertical',
      { selectionObjectName: 'TEXT' },
      $(go.TextBlock,
        {
          name: 'TEXT',
          minSize: new go.Size(30, 15),
          editable: true,
        },
        new go.Binding('text', 'text').makeTwoWay(),
        new go.Binding('scale', 'scale').makeTwoWay(),
        new go.Binding('font', 'font').makeTwoWay()
      ),
      $(go.Shape,
        'LineH',
        {
          stretch: go.Stretch.Horizontal,
          strokeWidth: 3,
          height: 3,
          portId: '',
          fromSpot: go.Spot.LeftRightSides,
          toSpot: go.Spot.LeftRightSides,
        },
        new go.Binding('stroke', 'brush'),
        new go.Binding('fromSpot', 'dir', (d) => spotConverter(d, true)),
        new go.Binding('toSpot', 'dir', (d) => spotConverter(d, false))
      ),
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      new go.Binding('locationSpot', 'dir', (d) => spotConverter(d, false))
    );

    // Add the + button on node selection
    myDiagram.nodeTemplate.selectionAdornmentTemplate = $(go.Adornment,
      'Spot',
      $(go.Panel,
        'Auto',
        $(go.Shape, { fill: null, stroke: 'dodgerblue', strokeWidth: 3 }),
        $(go.Placeholder, { margin: new go.Margin(4, 4, 0, 4) })
      ),
      $('Button',
        {
          alignment: go.Spot.Right,
          alignmentFocus: go.Spot.Left,
          click: (e, obj) => addNodeAndLink(e, obj, myDiagram),
        },
        $(go.TextBlock,
          '+',
          { font: 'bold 8pt sans-serif' }
        )
      )
    );

    // Context menu for nodes
    myDiagram.nodeTemplate.contextMenu = $('ContextMenu',
      $('ContextMenuButton', $(go.TextBlock, 'Bigger'), { 
        click: (e, obj) => changeTextSize(e, obj, myDiagram, 1.1) 
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Smaller'), { 
        click: (e, obj) => changeTextSize(e, obj, myDiagram, 1/1.1) 
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Bold/Normal'), { 
        click: (e, obj) => toggleTextWeight(e, obj, myDiagram) 
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Copy'), { 
        click: (e, obj) => e.diagram.commandHandler.copySelection() 
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Delete'), { 
        click: (e, obj) => e.diagram.commandHandler.deleteSelection() 
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Layout'), {
        click: (e, obj) => {
          var adorn = obj.part;
          adorn.diagram.startTransaction('Subtree Layout');
          layoutTree(adorn.adornedPart, myDiagram);
          adorn.diagram.commitTransaction('Subtree Layout');
        },
      })
    );

    // Define the Link template
    myDiagram.linkTemplate = $(go.Link,
      {
        curve: go.Curve.Bezier,
        fromShortLength: -2,
        toShortLength: -2,
        selectable: false,
      },
      $(go.Shape,
        { strokeWidth: 3 },
        new go.Binding('stroke', 'toNode', (n) => {
          if (n.data.brush) return n.data.brush;
          return 'black';
        }).ofObject()
      )
    );

    // Context menu for the diagram background
    myDiagram.contextMenu = $('ContextMenu',
      $('ContextMenuButton',
        $(go.TextBlock, 'Paste'),
        { 
          click: (e, obj) => e.diagram.commandHandler.pasteSelection(
            e.diagram.toolManager.contextMenuTool.mouseDownPoint
          ) 
        },
        new go.Binding(
          'visible',
          '',
          (o) => o.diagram && o.diagram.commandHandler.canPasteSelection(
            o.diagram.toolManager.contextMenuTool.mouseDownPoint
          )
        ).ofObject()
      ),
      $('ContextMenuButton',
        $(go.TextBlock, 'Undo'),
        { click: (e, obj) => e.diagram.commandHandler.undo() },
        new go.Binding('visible', '', (o) => o.diagram && o.diagram.commandHandler.canUndo()).ofObject()
      ),
      $('ContextMenuButton',
        $(go.TextBlock, 'Redo'),
        { click: (e, obj) => e.diagram.commandHandler.redo() },
        new go.Binding('visible', '', (o) => o.diagram && o.diagram.commandHandler.canRedo()).ofObject()
      ),
      $('ContextMenuButton', 
        $(go.TextBlock, 'Save'), 
        { click: (e, obj) => saveMindMap(myDiagram) }
      )
    );

    // Update node direction based on position relative to root
    myDiagram.addDiagramListener('SelectionMoved', (e) => {
      var rootNode = myDiagram.findNodeForKey(0);
      if (!rootNode) return;
      
      var rootX = rootNode.location.x;
      myDiagram.selection.each((node) => {
        if (node.data.parent !== 0) return;
        var nodeX = node.location.x;
        if (rootX < nodeX && node.data.dir !== 'right') {
          updateNodeDirection(node, 'right', myDiagram);
        } else if (rootX > nodeX && node.data.dir !== 'left') {
          updateNodeDirection(node, 'left', myDiagram);
        }
        layoutTree(node, myDiagram);
      });
    });

    // Save reference to myDiagram
    myDiagramRef.current = myDiagram;
  };

  const generateMindMap = async (e) => {
    e.preventDefault();
    
    if (!content.trim() && !file) {
      setError("Please provide either text or upload a file");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      let textContent = content;

      // If a file is uploaded, read its contents
      if (file) {
        textContent = await readFileContent(file);
      }

      // Call the API
      const response = await fetch('/api/ai-mindmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: textContent }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (data.error && data.error.includes('API key not configured')) {
          throw new Error('Gemini API key is missing or invalid. Please configure it in the .env file.');
        } else if (response.status === 400) {
          throw new Error('Bad request. Check your input content and try again.');
        } else {
          throw new Error(data.message || data.error || 'Failed to generate mind map');
        }
      }

      setMindMapData(data);
    } catch (err) {
      console.error("Error generating mind map:", err);
      // Format a user-friendly error message
      let errorMessage = err.message || "An error occurred while generating the mind map";
      
      // Make specific errors more user-friendly
      if (errorMessage.includes('API key')) {
        errorMessage = '⚠️ Configuration error: Gemini API key is not properly set up. Please contact an administrator.';
      } else if (errorMessage.includes('400')) {
        errorMessage = '⚠️ Request error: The request to Gemini API was invalid. Try with different or shorter content.';
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      
      reader.onerror = (error) => {
        reject(error);
      };
      
      if (file.type === 'application/pdf') {
        // For PDF files, we'll need to send the file to the server for processing
        // Here we just handle text files for simplicity
        reject(new Error('PDF processing is handled on the server'));
      } else {
        reader.readAsText(file);
      }
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const clearAll = () => {
    setContent("");
    setFile(null);
    setMindMapData(null);
    setError("");
    
    // Reset diagram
    if (myDiagramRef.current && goRef.current) {
      try {
        myDiagramRef.current.model = new goRef.current.TreeModel({
          nodeDataArray: [{"key":0, "text":"Mind Map", "loc":"0 0"}] 
        });
      } catch (error) {
        console.error("Error resetting diagram:", error);
      }
    }
  };

  const saveMindMap = (diagram) => {
    if (!diagram) return;
    
    const mapData = diagram.model.toJson();
    const blob = new Blob([mapData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const mapName = prompt("Enter the name of the map (without extension):", "mind_map");
    if (mapName) {
      a.download = mapName + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // GoJS helper functions
  const spotConverter = (dir, from) => {
    if (!goRef.current) return null;
    
    if (dir === 'left') {
      return from ? goRef.current.Spot.Left : goRef.current.Spot.Right;
    } else {
      return from ? goRef.current.Spot.Right : goRef.current.Spot.Left;
    }
  };

  const changeTextSize = (e, obj, diagram, factor) => {
    var adorn = obj.part;
    adorn.diagram.startTransaction('Change Text Size');
    var node = adorn.adornedPart;
    var tb = node.findObject('TEXT');
    tb.scale *= factor;
    adorn.diagram.commitTransaction('Change Text Size');
  };

  const toggleTextWeight = (e, obj, diagram) => {
    var adorn = obj.part;
    adorn.diagram.startTransaction('Change Text Weight');
    var node = adorn.adornedPart;
    var tb = node.findObject('TEXT');
    var idx = tb.font.indexOf('bold');
    if (idx < 0) {
      tb.font = 'bold ' + tb.font;
    } else {
      tb.font = tb.font.slice(idx + 5);
    }
    adorn.diagram.commitTransaction('Change Text Weight');
  };

  const updateNodeDirection = (node, dir, diagram) => {
    diagram.model.setDataProperty(node.data, 'dir', dir);
    var chl = node.findTreeChildrenNodes();
    while (chl.next()) {
      updateNodeDirection(chl.value, dir, diagram);
    }
  };

  const addNodeAndLink = (e, obj, diagram) => {
    var adorn = obj.part;
    diagram.startTransaction('Add Node');
    var oldnode = adorn.adornedPart;
    var olddata = oldnode.data;
    var newdata = { text: 'idea', brush: olddata.brush, dir: olddata.dir, parent: olddata.key };
    diagram.model.addNodeData(newdata);
    layoutTree(oldnode, diagram);
    diagram.commitTransaction('Add Node');
    var newnode = diagram.findNodeForData(newdata);
    if (newnode !== null) diagram.scrollToRect(newnode.actualBounds);
  };

  const layoutTree = (node, diagram) => {
    if (node.isTreeRoot) {
      layoutAll(diagram);
    } else {
      var parts = node.findTreeParts();
      layoutAngle(parts, node.data.dir === 'left' ? 180 : 0);
    }
  };

  const layoutAngle = (parts, angle) => {
    if (!goRef.current || !parts) return;
    
    var layout = new goRef.current.TreeLayout({
      angle: angle,
      arrangement: goRef.current.TreeArrangement.FixedRoots,
      nodeSpacing: 5,
      layerSpacing: 20,
      setsPortSpot: false,
      setsChildPortSpot: false,
    });
    layout.doLayout(parts);
  };

  const layoutAll = (diagram = myDiagramRef.current) => {
    if (!diagram || !goRef.current) return;
    
    const root = diagram.findNodeForKey(0) || diagram.findTreeRoots().first();
    if (root === null) {
      console.warn("No root node found for layout");
      return;
    }
    
    console.log("Laying out diagram from root:", root.data);
    
    diagram.startTransaction('Layout');
    var rightward = new goRef.current.Set();
    var leftward = new goRef.current.Set();
    
    // Add root to both sets
    rightward.add(root);
    leftward.add(root);
    
    root.findLinksConnected().each((link) => {
      var child = link.toNode;
      if (!child) return; // Skip if no child
      
      // Determine child direction, default to right if not specified
      const dir = child.data.dir || 'right';
      
      if (dir === 'left') {
        leftward.add(link);
        leftward.addAll(child.findTreeParts());
      } else {
        rightward.add(link);
        rightward.addAll(child.findTreeParts());
      }
    });
    
    // Apply layouts
    if (rightward.count > 1) layoutAngle(rightward, 0);
    if (leftward.count > 1) layoutAngle(leftward, 180);
    
    diagram.commitTransaction('Layout');
    
    // Center and fit after layout
    diagram.zoomToFit();
    diagram.contentAlignment = goRef.current.Spot.Center;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-green-600 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-6 w-6 text-white mr-3" />
              <h1 className="text-xl font-bold text-white">AI Mind Map Creator - Powered by Gemini</h1>
            </div>
            <button
              onClick={clearAll}
              className="flex items-center text-white/80 hover:text-white transition-colors text-sm"
            >
              <Trash className="h-4 w-4 mr-1" />
              <span>Clear all</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Input Section */}
            <div className="p-4 lg:w-1/3 lg:border-r border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Input</h2>
              <form onSubmit={generateMindMap}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Text Input
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter text to generate a mind map... For example: 'Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.'"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or Upload a File
                  </label>
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
                      <Upload className="h-4 w-4 mr-2" />
                      <span className="text-sm">Select File</span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".txt,.pdf"
                      />
                    </label>
                    {file && (
                      <span className="text-sm text-gray-600 truncate max-w-[180px]">
                        {file.name}
                      </span>
                    )}
                  </div>
                </div>
                
                {error && (
                  <div className="mb-4 text-sm text-red-600 p-2 bg-red-50 rounded-md">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading || (!content.trim() && !file)}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${
                    isLoading || (!content.trim() && !file)
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  } transition-colors`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Bot className="h-5 w-5 mr-2" />
                      <span>Generate Mind Map</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Mind Map Section */}
            <div className="p-4 lg:w-2/3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Mind Map</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => layoutAll()}
                    className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    <span>Layout</span>
                  </button>
                  
                  <button
                    onClick={() => saveMindMap(myDiagramRef.current)}
                    className="flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    disabled={!mindMapData}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
              
              <div
                ref={diagramRef}
                className="border border-gray-300 rounded-md h-[calc(100vh-280px)]"
                style={{ backgroundColor: "#f8f9fa" }}
              ></div>
              
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  <strong>Tip:</strong> Click on nodes to edit them. Use the <strong>+</strong> button 
                  to add child nodes. Right-click for more options.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI_MINDMAP_PAGE; 