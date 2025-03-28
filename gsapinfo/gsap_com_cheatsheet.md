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
- [Logout](https://gsap.com/community/logout/?csrfKey=ef51266b32c36b41b66abc6824db3f9a)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=ef51266b32c36b41b66abc6824db3f9a)
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

[Skip to main content](https://gsap.com/cheatsheet/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

### GSAP Cheat Sheet

We get it. Syntax can be tricky to remember. Here's a quick reference to some of the most commonly used parts of GSAP. Most code is linked to the appropriate page in the [Docs](https://gsap.com/community/contact/)

[Request an addition to the sheet](https://gsap.com/community/contact/)

## Basics [→](https://gsap.com/resources/get-started/) [​](https://gsap.com/cheatsheet/\#basics- "Direct link to basics-")

```codeBlockLines_p187
// "to" tween - animate to provided values
gsap.to(".selector", { // selector text, Array, or object
  x: 100, // any properties (not limited to CSS)
  backgroundColor: "red", // camelCase
  duration: 1, // seconds
  delay: 0.5,
  ease: "power2.inOut",
  stagger: 0.1, // stagger start times
  paused: true, // default is false
  overwrite: "auto", // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
  immediateRender: false,
  onComplete: () => {
    console.log("finished")
  },
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
});

```

```codeBlockLines_p187
// "from" tween - animate from provided values
gsap.from('.selector', { fromVars });

```

```codeBlockLines_p187
// "fromTo" tween (define both start and end values)
gsap.fromTo('.selector', { fromVars }, { toVars });
// special properties (duration, ease, etc.) go in toVars

```

```codeBlockLines_p187
// set values immediately (no animation)
gsap.set('.selector', { toVars });

```

## Timelines [→](https://gsap.com/docs/v3/GSAP/gsap.timeline()/) [​](https://gsap.com/cheatsheet/\#timelines- "Direct link to timelines-")

```codeBlockLines_p187
// Create a timeline
let tl = gsap.timeline({
    delay: 0.5,
    paused: true, // default is false
    repeat: 2, // number of repeats (-1 for infinite)
    repeatDelay: 1, // seconds between repeats
    repeatRefresh: true, // invalidates on each repeat
    yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
    defaults: {
        // children inherit these defaults
        duration: 1,
        ease: 'none'
    },
    smoothChildTiming: true,
    autoRemoveChildren: true,
    onComplete: () => {
        console.log("finished")
    },
    // other callbacks:
    // onStart, onUpdate, onRepeat, onReverseComplete
});

```

```codeBlockLines_p187
// Sequence multiple tweens
tl.to('.selector', { duration: 1, x: 50, y: 0 })
    .to('#id', { autoAlpha: 0 })
    .to(elem, { duration: 1, backgroundColor: 'red' })
    .to([elem, elem2], { duration: 3, x: 100 });

```

```codeBlockLines_p187
// position parameter (controls placement)
tl.to(target, { toVars }, positionParameter);

0.7; // exactly 0.7 seconds into the timeline (absolute)
('-=0.7'); // overlap with previous by 0.7 sec
('myLabel'); // insert at "myLabel" position
('myLabel+=0.2'); // 0.2 seconds after "myLabel"
('<'); // align with start of most recently-added child
('<0.2'); // 0.2 seconds after ^^
('-=50%'); // overlap half of inserting animation's duration
('<25%'); // 25% into the previous animation (from its start)

```

## Control Methods [→](https://gsap.com/resources/get-started/\#timeline-control) [​](https://gsap.com/cheatsheet/\#control-methods- "Direct link to control-methods-")

```codeBlockLines_p187
// retain animation reference to control later
let anim = gsap.to(...); // or gsap.timeline(...);
// most methods can be used as getters or setters
anim.play() // plays forward
  .pause()
  .resume() // respects direction
  .reverse()
  .restart()
  .timeScale(2) // 2 = double speed, 0.5 = half speed
  .seek(1.5) // jump to a time (in seconds) or label
  .progress(0.5) // jump to halfway
  .totalProgress(0.8) // includes repeats
  // when used as setter, returns animation (chaining)

  // other useful methods (tween and timeline)
  .kill() // immediately destroy
  .isActive() // true if currently animating
  .then() // Promise
  .invalidate() // clear recorded start/end values
  .eventCallback() // get/set an event callback

  // timeline-specific methods
  // add label, tween, timeline, or callback
  .add(thing, position)
  // calls function at given point
  .call(func, params, position)
  // get an Array of the timeline's children
  .getChildren()
  // empties the timeline
  .clear()
  // animate playhead to a position linearly
  .tweenTo(timeOrLabel, {vars})
  // ^^ with both start and end positions
  .tweenFromTo(from, to, {vars})

```

## Eases [→](https://gsap.com/docs/v3/Eases/) [​](https://gsap.com/cheatsheet/\#eases- "Direct link to eases-")

```codeBlockLines_p187
// see greensock.com/ease-visualizer
ease: 'none'; // no ease (same as "linear")

// basic core eases
'power1', 'power2', 'power3', 'power4', 'circ', 'expo', 'sine';
// each has .in, .out, and .inOut extensions
// i.e. "power1.inOut"

// expressive core eases
'elastic', 'back', 'bounce', 'steps(n)';

// in EasePack plugin (not core)
'rough', 'slow', 'expoScale(1, 2)'

// members-only expressive plugins
CustomEase,
CustomWiggle,
CustomBounce;

```

## ScrollTrigger [→](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) [​](https://gsap.com/cheatsheet/\#scrolltrigger- "Direct link to scrolltrigger-")

```codeBlockLines_p187
scrollTrigger: {
  trigger: ".selector", // selector or element
  start: "top center",  // [trigger] [scroller] positions
  end: "20px 80%", // [trigger] [scroller] positions
  // or relative amount: "+=500"
  scrub: true, // or time (in seconds) to catch up
  pin: true, // or selector or element to pin
  markers: true, // only during development!
  toggleActions: "play pause resume reset",
  // other actions: complete reverse none
  toggleClass: "active",
  fastScrollEnd: true, // or velocity number
  containerAnimation: tween, // linear animation
  id: "my-id",
  anticipatePin: 1, // may help avoid jump
  snap: {
    snapTo: 1 / 10, // progress increment
    // or "labels" or function or Array
    duration: 0.5,
    directional: true,
    ease: "power3",
    onComplete: callback,
    // other callbacks: onStart, onInterrupt
  },
  pinReparent: true, // moves to documentElement during pin
  pinSpacing: false,
  pinType: "transform" // or "fixed"
  pinnedContainer: ".selector",
  preventOverlaps: true, // or arbitrary string
  once: true,
  endTrigger: ".selector", // selector or element
  horizontal: true, // switches mode
  invalidateOnRefresh: true, // clears start values on refresh
  refreshPriority: 1, // influence refresh order
  onEnter: callback
  // other callbacks:
  // onLeave, onEnterBack, onLeaveBack, onUpdate,
  // onToggle, onRefresh, onRefreshInit, onScrubComplete
}

```

## Plugins [→](https://gsap.com/docs/v3/Plugins) [​](https://gsap.com/cheatsheet/\#plugins- "Direct link to plugins-")

```codeBlockLines_p187
// Register GSAP plugins (once) before using them
gsap.registerPlugin(Draggable, TextPlugin);

// Available plugins
Draggable, DrawSVGPlugin*, EaselPlugin, Flip,
GSDevTools*, InertiaPlugin*, MorphSVGPlugin*,
MotionPathPlugin*, MotionPathHelper*, Observer Physics2DPlugin*,
Physics2DPlugin*, PhysicsPropsPlugin*, PixiPlugin, ScrambleTextPlugin*,
ScrollToPlugin, ScrollTrigger, ScrollSmoother*, SplitText*, TextPlugin
// * available to Club GSAP members. gsap.com/club

```

## Installation [→](https://gsap.com/docs/v3/Installation) [​](https://gsap.com/cheatsheet/\#installation- "Direct link to installation-")

```codeBlockLines_p187
// Import and register GSAP
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);

```

## Utility Methods [→](https://gsap.com/docs/v3/GSAP/UtilityMethods) [​](https://gsap.com/cheatsheet/\#utility-methods- "Direct link to utility-methods-")

```codeBlockLines_p187
// accessible through gsap.utils.foo()
checkPrefix() // get relevant browser prefix for property
clamp() // clamp value to range
distribute() // distribute value among and array
getUnit() // get unit of string
interpolate() // interpolate between values
mapRange() // map one range to another
normalize() // map a range to the 0-1 range
pipe() // sequence function calls
random() // generates a random value
selector() // get a scoped selector function
shuffle() // shuffles an array in-place
snap() // snap a value to either increment or array
splitColor() // splits color into RGB array
toArray() // convert array-like thing to array
unitize() // adds specified unit to function results
wrap() // place number in range, wrapping to start
wrapYoyo(); // place number in range, wrapping in reverse

```

## Nesting Timelines [​](https://gsap.com/cheatsheet/\#nesting-timelines "Direct link to Nesting Timelines")

```codeBlockLines_p187
function scene1() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 1
  return tl;
}

function scene2() {
  let tl = gsap.timeline();
  tl.to(...).to(...); // build scene 2
  return tl;
}

let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0.5") // overlap slightly

```

## Misc... [​](https://gsap.com/cheatsheet/\#misc "Direct link to Misc...")

```codeBlockLines_p187
// Get the current value of a property
gsap.getProperty("#id", "x");       // 20
gsap.getProperty("#id", "x", "px"); // "20px"

```

```codeBlockLines_p187
// Set GSAP's global tween defaults
gsap.defaults({ease: "power2.in", duration: 1});

```

```codeBlockLines_p187
// Configure GSAP's non-tween-related settings
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});

```

```codeBlockLines_p187
// Register an effect for reuse
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0
    });
  },
  defaults: {duration: 2},
  extendTimeline: true
});

// Now we can use it like this
gsap.effects.fade(".box");
// Or directly on timelines
tl.fade(".box", {duration: 3})

```

```codeBlockLines_p187
// Add listener with gsap.ticker
gsap.ticker.add(myFunction);
function myFunction(time, deltaTime, frame) {
  // Executes on every tick after
  // the core engine updates
}
// To remove the listener later...
gsap.ticker.remove(myFunction);

```

```codeBlockLines_p187
// faster way to repeatedly set property than .set()
let setX = gsap.quickSetter("#id", "x", "px");
document.addEventListener("mousemove", e => setX(e.clientX) );

// quickTo - for animation!
let xTo = gsap.quickTo("#id", "x", { duration: 0.4, ease: "power3" })
document.addEventListener("mousemove", e => xTo(e.pageX) );

```

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