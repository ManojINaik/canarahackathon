"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// Wrap entire component with ClientOnly to prevent hydration mismatches
const ClientOnly = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return children;
};

// Create a simplified tabs component that doesn't use portals
const SimpleTabs = ({ defaultValue, onValueChange, className, children }) => {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  const triggers = [];
  const contents = {};

  // Extract triggers and contents from children
  React.Children.forEach(children, (child) => {
    if (!child) return;
    
    if (child.type.displayName === 'TabsList') {
      const listChildren = React.Children.map(child.props.children, (listChild) => {
        if (!listChild) return null;
        
        if (listChild.type.displayName === 'TabsTrigger') {
          const tabValue = listChild.props.value;
          triggers.push({
            value: tabValue,
            trigger: React.cloneElement(listChild, {
              isActive: value === tabValue,
              onClick: () => setValue(tabValue),
            }),
          });
        }
        return null;
      });
    } else if (child.type.displayName === 'TabsContent') {
      contents[child.props.value] = child;
    }
  });

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        
        if (child.type.displayName === 'TabsList') {
          return React.cloneElement(child, {
            children: triggers.map((item) => item.trigger)
          });
        } else if (child.type.displayName === 'TabsContent' && child.props.value === value) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

// Use our actual implementation only on the client side
const Tabs = (props) => {
  return (
    <ClientOnly>
      <TabsPrimitive.Root {...props} />
    </ClientOnly>
  );
};

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <ClientOnly>
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
        className
      )}
      {...props}
    />
  </ClientOnly>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, isActive, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
      isActive && "bg-white text-gray-950 shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent }; 