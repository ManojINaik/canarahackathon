[GSAPGSAP](https://gsap.com/) Menu

- Tools




- [Core](https://gsap.com/core/)
- [Scroll](https://gsap.com/scroll/)
- [SVG](https://gsap.com/svg/)
- [UI](https://gsap.com/ui/)
- [Text](https://gsap.com/text/)

- [Installation](https://gsap.com/docs/v3/Installation)
- [Starter Templates](https://gsap.com/demos)
- [GSAP & React](https://gsap.com/resources/React)
- [Video Lessons](https://www.youtube.com/@GreenSockLearning)

Professional-grade JavaScript animation for the modern web

![](https://gsap.com/img/header-shapes.png)

- [Pricing](https://gsap.com/pricing/)
- [Showcase](https://gsap.com/showcase/)
- [Community](https://gsap.com/community/)
- [Learn GSAP](https://gsap.com/resources/)
- [Docs](https://gsap.com/docs/v3)

- Notifications






#### Notifications



[Notification Settings](https://gsap.com/community/notifications/options) [View All](https://gsap.com/community/notifications/)

- Messages






#### Messages



[Compose new](https://gsap.com/community/messenger/compose) [Go to Inbox](https://gsap.com/community/messenger)

- Login/Create Account




#### Sign In







Login [Forgot your password?](https://gsap.com/community/lostpassword/)





#### Why create an account?



- It's free

- Participate in the forums

- Updates on the products you use

- Exclusive offers and more


[Create an Account](https://gsap.com/community/register)

- [My Account](https://gsap.com/community/account-dashboard)








![Guest](https://gsap.com/community/uploads/set_resources_8/84c1e40ea0e759e3f1505eb1788ddf3c_default_photo.png)





Guest







Guests







- [Dashboard](https://gsap.com/community/account-dashboard)
- [Orders & Billing](https://gsap.com/community/clients/orders)
- [Account Settings](https://gsap.com/community/settings)
- [Logout](https://gsap.com/community/logout/?csrfKey=8455977edc7a2a842f89e6b42eabbabc)

- [Get GSAP](https://gsap.com/docs/v3/Installation)

- Tools
  - [Core](https://gsap.com/core/)
  - [Scroll](https://gsap.com/scroll/)
  - [SVG](https://gsap.com/svg/)
  - [UI](https://gsap.com/ui/)
  - [Text](https://gsap.com/text/)
- [Pricing](https://gsap.com/pricing/)
- [Showcase](https://gsap.com/showcase/)
- [Community](https://gsap.com/community/)
- [Learn GSAP](https://gsap.com/resources/)
- [Docs](https://gsap.com/docs/v3/)

- Login/Create Account
- ![Guest](https://gsap.com/community/uploads/set_resources_8/84c1e40ea0e759e3f1505eb1788ddf3c_default_photo.png)





Guest







Guests


![Guest](https://gsap.com/community/uploads/set_resources_8/84c1e40ea0e759e3f1505eb1788ddf3c_default_photo.png)

Guest

Guests

- [Dashboard](https://gsap.com/community/account-dashboard)
- [Orders & Billing](https://gsap.com/community/clients/orders)
- [Account Settings](https://gsap.com/community/settings)
- [Logout](https://gsap.com/community/logout/?csrfKey=8455977edc7a2a842f89e6b42eabbabc)
- [Messages](https://gsap.com/community/messenger/)
- [Notifications](https://gsap.com/community/notifications/)

#### Sign In

Login [Forgot your password?](https://gsap.com/community/lostpassword/)

#### Not got an account?

[Create an Account](https://gsap.com/community/register)

- [CodePen](https://codepen.io/GreenSock)
- [GitHub](https://github.com/greensock/GreenSock-JS/)
- [Facebook](https://www.facebook.com/greensock/)
- [LinkedIn](https://www.linkedin.com/company/greensock)
- [x](https://www.twitter.com/greensock/)

![](https://gsap.com/img/header-shapes.png)

[Skip to main content](https://gsap.com/blog/3-2/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.2 release

March 24, 2020 · 3 min read

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- New: "alignOrigin" for motion paths
- New: getRelativeDistance() that transcends coordinate spaces
- convert coordinates between elements/contexts

GSAP 3.2 has some groundbreaking features for converting coordinates and aligning elements. Check out the video explanation below. Warning: it's a bit advanced, but hopefully you'll see how crazy-useful these capabilities can be.

Convert coordinates between DOM elements with GSAP, including nested transforms! from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/866834231-89ceef96a96b27530a109ea8e70e2659327f4e08cb4e97dd2822f6a06d63bc3e-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Convert coordinates between DOM elements with GSAP, including nested transforms!

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Share

Play

Show controls

SettingsChaptersPicture-in-PictureFullscreen

# Settings

QualityAuto

# Chapters

Challenge

00:00

Copy link

Coordinate spaces

01:19

Copy link

Solution: convert coordinates

03:15

Copy link

getRelativePosition()

06:20

Copy link

Examples

09:53

Copy link

Performance tip: convert multiple coordinates

12:41

Copy link

## New: "alignOrigin" for motion paths [​](https://gsap.com/blog/3-2/\#new-alignorigin-for-motion-paths "Direct link to New: \"alignOrigin\" for motion paths")

[MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) recognizes a new `alignOrigin` property that pins a certain spot on the target to the path. For example, `alignOrigin: [0.5, 0.5]` pins the **center** of the target on the path and sets the transformOrigin accordingly so that rotations are around that point as well. To get a similar effect before 3.2, you'd need to set the transformOrigin separately as well as a -50 xPercent/yPercent.

Use the Array syntax to define progress values along the x and y axis, so `[1, 0.5]` would be the right side, centered vertically. Or use a point object like `{x: 20, y: 50}` to specify a coordinate (measured from the top left corner in pixels at its native size).

### Sample code [​](https://gsap.com/blog/3-2/\#sample-code "Direct link to Sample code")

```codeBlockLines_p187
// Move the element along a path, rotating it along with the line
gsap.to("#spaceship", {
  duration: 5,
  motionPath: {
    path: "#path",
    autoRotate: true,
    align: "#path",
    alignOrigin: [0.5, 0.5] // aligns the center of the target on the path
  }
});

```

#### loading...

CodePen Embed - MotionPath alignOrigin Demo (GSAP)

- [HTML](https://codepen.io/GreenSock/embed/gOpdKpm?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/gOpdKpm?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/gOpdKpm?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/gOpdKpm?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/gOpdKpm?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/gOpdKpm "Edit on CodePen")

``` cm-s-default
<svg id="motionPath" viewBox="-20 0 557 190">
  <path id="path" fill="none" d="M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 292,125 328,155 377,155 464,155 497,97 504,74"/>
</svg>

<div id="box">

</div>
```

``` cm-s-default
body {
  background-color: black;
  overflow: hidden;
}

#motionPath {
  overflow: visible;
  height: 100%;
  max-width: 100%;
}

#motionPath path {
  stroke-width: 2;
  stroke: gray;
}

#box {
  width: 100px;
  height: 100px;
  background-color: rgba(136, 206, 2, 0.6);;
  border: 2px solid white;
  position: absolute;
  top: 0;
  left: 0;
}

```

``` cm-s-default
//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

var tween = gsap.to("#box", {
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5], // <-- play with these numbers
    autoRotate: true
  },
  duration: 5,
  ease: "power1.inOut",
  repeat: 100,
  yoyo: true
});

// to make it responsive on window resize...
window.addEventListener("resize", function() {
  var time = tween.totalTime();
  tween.seek(0).invalidate().totalTime(time);
});

```

MotionPath alignOrigin Demo (GSAP)

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js)
2. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathPlugin.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathPlugin.min.js)
3. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathHelper.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathHelper.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

See the [MotionPathPlugin docs](https://gsap.com/docs/v3/Plugins/MotionPathPlugin) for details.

## New: getRelativeDistance() that transcends coordinate spaces [​](https://gsap.com/blog/3-2/\#new-getrelativedistance-that-transcends-coordinate-spaces "Direct link to New: getRelativeDistance() that transcends coordinate spaces")

Have you ever wanted to move one element to another element even if they're in different containers... which may have various transforms, warping the coordinate systems and making it super difficult to calculate? If so, you will love this magical function which is explained in the video at the top of this page.

#### loading...

CodePen Embed - GSAP getRelativePosition() Demo 2

- [HTML](https://codepen.io/GreenSock/embed/vYOmWLb/4c7902f691dd5e2216200e5f14f75071?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/vYOmWLb/4c7902f691dd5e2216200e5f14f75071?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/vYOmWLb/4c7902f691dd5e2216200e5f14f75071?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/vYOmWLb/4c7902f691dd5e2216200e5f14f75071?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/vYOmWLb/4c7902f691dd5e2216200e5f14f75071?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/vYOmWLb/4c7902f691dd5e2216200e5f14f75071 "Edit on CodePen")

``` cm-s-default
<h3>Spin/drag the SVG dial. Click on a blue DOM element circle to see the magic!</h3>
<div class="circleHolder"></div>

<svg id="svg" x="0px" y="0px" width="400px" height="400px" viewBox="0 0 400 400">
<g id="gear">
  <path fill="#F4F4F4" stroke="#000000" stroke-miterlimit="10" d="M357.483,157.251c-12.491-0.651-23.885,4.055-32.096,12.026
    c-13.898,13.492-32.183,21.526-51.553,21.526h-14.729c-27.564,0-49.908-22.345-49.908-49.908v-26.973
    c0-13.844,6.376-26.902,17.257-35.462c10.513-8.271,17.056-21.36,16.296-35.943c-1.144-21.935-19.127-39.648-41.076-40.485
    c-24.406-0.93-44.483,18.579-44.483,42.777c0,13.087,5.874,24.799,15.129,32.648c11.52,9.77,18.483,23.863,18.483,38.968v24.469
    c0,27.564-22.345,49.908-49.908,49.908h-20.576c-16.564,0-32.508-6.848-43.51-19.231c-8.306-9.349-20.645-15.033-34.292-14.321
    c-21.935,1.144-39.648,19.127-40.485,41.076c-0.93,24.405,18.579,44.483,42.777,44.483c12.305,0,23.395-5.193,31.201-13.507
    c12.101-12.888,29.057-20.105,46.735-20.105h18.149c27.564,0,49.908,22.345,49.908,49.908v19.166
    c0,17.462-7.602,33.854-20.27,45.874c-8.728,8.282-13.968,20.204-13.283,33.338c1.144,21.935,19.127,39.648,41.076,40.485
    c24.405,0.93,44.483-18.579,44.483-42.777c0-13.087-5.874-24.799-15.129-32.648c-11.938-10.125-18.483-25.24-18.483-40.893v-22.543
    c0-27.564,22.345-49.908,49.908-49.908h18.74c17.301,0,34.074,6.896,45.742,19.671c7.825,8.567,19.085,13.941,31.603,13.941
    c24.198,0,43.708-20.078,42.777-44.483C397.163,177.208,378.588,158.351,357.483,157.251z"/>
  <circle id="pink" cx="43.779" cy="200" r="33.779"/>
  <circle cx="356.221" cy="200" r="33.779"/>
  <circle cx="200.334" cy="41.773" r="33.779"/>
  <circle cx="200" cy="356.221" r="33.779"/>
</g>
  <rect id="trigger" fill="#88CE02" x="-10" y="-10" width="73" height="33"/>
</svg>

```

``` cm-s-default
body {
  background:#111;
  margin:0;
  padding:0;
  font-family: Signika Negative;
}

h3 {
  color: white;
  font-family: Signika Negative;
  font-size: 21px;
  margin-left: 15px;
}

#svgWrapper {
  width:400px;
  height:400px;
}

svg {
  display:block;
  position:relative;
  margin: 50px;
  border: 10px solid #88CE02;
  overflow: visible;
}

.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2F83C1;
  position: relative;
  margin: 5px;
  cursor: pointer;
}

#pink {
  fill: #CE4C9C;
}

.circleHolder {
  position: absolute;
  padding: 5px;
  z-index: 200;
  background: #ccc;

}

circle {
  fill: #6A6D6D;
  stroke: black;
  stroke-miterlimit: 10;
}
```

``` cm-s-default
gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin);

var pink = document.querySelector("#pink");

function toPinkCircle(element) {
    var p = MotionPathPlugin.getRelativePosition(element, pink, [0.5, 0.5], [0.5, 0.5]);
    gsap.timeline()
        .to(element, {
            x: "+=" + p.x,
            y: "+=" + p.y
        }).to(element, {scale: 5, backgroundColor: "white", autoAlpha: 0, duration: 1});
}

// create 16 blue circle <div> elements and drop them into the ".circleHolder" <div>
var circleHolder = document.querySelector(".circleHolder"),
    circles = [],
    i = 16,
    circle;
while (i--) {
  circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  circleHolder.appendChild(circle);
  circle.addEventListener("click", function(event) {
    toPinkCircle(event.target);
  });
}

// initially apply some funky transforms to the various elements.
gsap.to("svg", { rotation:-20, x:200, y: 20, duration:1.5 });
gsap.to(".circleHolder", {rotation: -10, scale: 0.5, transformOrigin:"left top", duration: 1.5, delay:1});
gsap.to("#gear", {rotation:180, transformOrigin:"50% 50%", duration:1, delay:1.5});

// make the gear spinnable, and the SVG container draggable
Draggable.create("#gear", { type: "rotation", inertia: true });
Draggable.create("#svg", { trigger: "#trigger", zIndexBoost: false });
```

GSAP getRelativePosition() Demo 2

### Spin/drag the SVG dial. Click on a blue DOM element circle to see the magic!

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.5/gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.5/gsap.min.js)
2. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.5/Draggable.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.5/Draggable.min.js)
3. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.5/MotionPathPlugin.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.5/MotionPathPlugin.min.js)
4. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/InertiaPlugin.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/InertiaPlugin.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

See the [getRelativePosition() docs](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/static.getRelativePosition()) for details.

## New: convert coordinates between elements/contexts [​](https://gsap.com/blog/3-2/\#new-convert-coordinates-between-elementscontexts "Direct link to New: convert coordinates between elements/contexts")

GSAP can now take a local coordinate from inside one element and calculate exactly where that coordinate lines up inside of ANOTHER element's local coordinate space! So you could take a "click" pointer event from the window and map that to an element's local coordinate system **even if it's deeply nested inside various containers that have transforms applied!** Or, as you can see in the demo below, convert between coordinate spaces to make the blue arm stay connected with the rotating red arm:

#### loading...

CodePen Embed - GSAP 3 convertCoordinates()

- [HTML](https://codepen.io/GreenSock/embed/GRJEGzB?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/GRJEGzB?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/GRJEGzB?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/GRJEGzB?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/GRJEGzB?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/GRJEGzB "Edit on CodePen")

``` cm-s-default
<h1>GSAP 3 convertCoordinates()</h1>
<p>The #redArm is being rotated and then inside of an onUpdate, <a href="https://greensock.com/docs/v3/Plugins/MotionPathPlugin/static.convertCoordinates()">MotionPathPlugin.convertCoordinates()</a> is used to map where the tip of the arm is located in the coordinate system of the #kolben element so that the tip of the #blueElement can be positioned there dynamically...in a totally different container element.</p>
<svg stroke-linecap="round" stroke-linejoin="round" viewBox="40 50 180 42">
  <path fill="none" stroke="#444" stroke-width="2" d="M150 89h54l.133-36h-54"/>
  <circle id="wheelPath" cx="71" cy="71" r="17.5"/>

  <polyline id="redArm" fill="none" stroke="red" stroke-width="4" stroke-opacity="0.7" points="71 71 88.5 71" />

  <g id="kolben">
    <path fill="none" stroke="#444" stroke-width="2" d="M186.211 54.511h15.964v33.184h-15.964z"/>
    <line id="blueArm" fill="none" stroke="blue" stroke-width="4" x1="88.5" y1="71" x2="194.5" y2="71" stroke-opacity="0.5" />
    <circle class="joint" cx="194.193" cy="71" r="1"/>
    <circle id="joint" class="joint" cx="88.5" cy="71" r="1"/>
  </g>
</svg>

```

``` cm-s-default
@import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');
body {
  font-family: "Signika Negative", sans-serif;
  font-weight: 300;
  background-color: #111;
  color: #aaa;
  text-align: center;
  padding: 5px 15px;
  font-size: 18px;
}

h1, h2, h3 {
  color: white;
}
p {
  font-weight: 300;
  max-width: 900px;
  display: inline-block;
  text-align: left;
  margin-top: 1px;
}

.joint, #wheelPath {
  stroke: black;
  fill: none;
  vector-effect: non-scaling-stroke;
}

#wheelPath {
  stroke: red;
  stroke-width: 4px;
  opacity: 0.4;
  stroke-dasharray: 12px 12px;
}
a {
  color: #88ce02;
  text-decoration: none;
  font-weight: 600;
}
a:hover {
  text-decoration: underline;
}
```

``` cm-s-default
gsap.registerPlugin(MotionPathPlugin);

var redArm = document.querySelector("#redArm"),
    blueArm = document.querySelector("#blueArm"),
    joint = document.querySelector("#joint"),
    kolben = document.querySelector("#kolben"),
    duration = 5,
    radius = 17.5,

    // local coordinates in the redArm that'll be the joint. It's 17.5px wide so the right tip is at {x: 17.5, y: 0}
    armTip = { x: radius, y: 0 };

var tl = gsap.timeline({ onUpdate: onUpdate, repeat: -1 })
  .to(redArm, {
    duration: duration,
    rotation: 360,
    ease: "none"
  }, 0)
  .to(kolben, {
    duration: duration / 2,
    x: -radius * 2,
    ease: "sine.inOut",
    repeat: 1,
    yoyo: true
  }, 0);

function onUpdate() {
  // convert from redArm's local coordinates {x: 17.5, y: 0} into where that exact point would be in kolben's local coordinates.
  var p = MotionPathPlugin.convertCoordinates(redArm, kolben, armTip);
  blueArm.setAttribute("x1", p.x);
  blueArm.setAttribute("y1", p.y);
  joint.setAttribute("cx", p.x);
  joint.setAttribute("cy", p.y);
}
```

GSAP 3 convertCoordinates()

# GSAP 3 convertCoordinates()

The #redArm is being rotated and then inside of an onUpdate, [MotionPathPlugin.convertCoordinates()](https://greensock.com/docs/v3/Plugins/MotionPathPlugin/static.convertCoordinates()) is used to map where the tip of the arm is located in the coordinate system of the #kolben element so that the tip of the #blueElement can be positioned there dynamically...in a totally different container element.

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)
2. [https://assets.codepen.io/16327/MotionPathPlugin.min.js](https://assets.codepen.io/16327/MotionPathPlugin.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

See the [convertCoordinates() docs](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/static.convertCoordinates()) for details.

* * *

## And more... [​](https://gsap.com/blog/3-2/\#and-more "Direct link to And more...")

GSAP 3.2 also delivers various bug fixes, so [install the latest version today](https://gsap.com/docs/v3/Installation/) (3.2.6). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, etc.)

## Resources [​](https://gsap.com/blog/3-2/\#resources "Direct link to Resources")

- [Full release notes on each release is on Github](https://github.com/greensock/GSAP/releases/)
- [Full documentation](https://gsap.com/docs/v3/)
- In case you missed it: [GSAP 3.1 highlights](https://gsap.com/3-1/) (previous release)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources/)
- [Community forums](https://gsap.com/community/)

Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [motionpath](https://gsap.com/blog/tags/motionpath)

[Newer Post\\
\\
3.4 release](https://gsap.com/blog/3-4) [Older Post\\
\\
3.1 release](https://gsap.com/blog/3-1)

## Contents

- [New: "alignOrigin" for motion paths](https://gsap.com/blog/3-2/#new-alignorigin-for-motion-paths)
  - [Sample code](https://gsap.com/blog/3-2/#sample-code)
- [New: getRelativeDistance() that transcends coordinate spaces](https://gsap.com/blog/3-2/#new-getrelativedistance-that-transcends-coordinate-spaces)
- [New: convert coordinates between elements/contexts](https://gsap.com/blog/3-2/#new-convert-coordinates-between-elementscontexts)
- [And more...](https://gsap.com/blog/3-2/#and-more)
- [Resources](https://gsap.com/blog/3-2/#resources)

## [GSAP](https://gsap.com/)

- [Core](https://gsap.com/core/)
- [Docs](https://gsap.com/docs/v3)
- [All Plugins](https://gsap.com/docs/v3/Plugins/)

## [Scroll](https://gsap.com/scroll/)

- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother)
- [ScrollTo](https://gsap.com/docs/v3/Plugins/ScrollToPlugin)
- [Observer](https://gsap.com/docs/v3/Plugins/Observer)

## [SVG](https://gsap.com/svg/)

- [MorphSVG](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin)
- [DrawSVG](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin)
- [MotionPath](https://gsap.com/docs/v3/Plugins/MotionPathPlugin)
- [MotionPathHelper](https://gsap.com/docs/v3/Plugins/MotionPathHelper)

## [UI](https://gsap.com/ui/)

- [Flip](https://gsap.com/docs/v3/Plugins/Flip)
- [SplitText](https://gsap.com/docs/v3/Plugins/SplitText)
- [Draggable](https://gsap.com/docs/v3/Plugins/Draggable)
- [Inertia](https://gsap.com/docs/v3/Plugins/InertiaPlugin)
- [Observer](https://gsap.com/docs/v3/Plugins/Observer)

## [Text](https://gsap.com/text/)

- [SplitText](https://gsap.com/docs/v3/Plugins/SplitText)
- [ScrambleText](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin)
- [Text](https://gsap.com/docs/v3/Plugins/TextPlugin)

Subscribe to the GSAP® newsletter to stay up-to-date with the latest releases

Email \*

## Company

- [About](https://gsap.com/about/)
- [Blog](https://gsap.com/blog/)
- [Contact Us](https://gsap.com/community/contact/)

## GSAP

- [Pricing](https://gsap.com/pricing/)
- [Showcase](https://gsap.com/showcase/)
- [Learn GSAP](https://gsap.com/resources/)
- [Community](https://gsap.com/community/)

## Connect

- [Codepen](https://www.codepen.io/GreenSock)
- [GitHub](https://github.com/greensock/GreenSock-JS)
- [Facebook](https://www.facebook.com/greensock)
- [LinkedIn](https://www.linkedin.com/company/greensock)
- [X](https://www.twitter.com/greensock)

©2025 GSAP - A Webflow Product. All rights reserved.

- [Privacy Policy.](https://gsap.com/community/privacy-policy/)
- [Terms of Use.](https://gsap.com/community/terms-of-use/)