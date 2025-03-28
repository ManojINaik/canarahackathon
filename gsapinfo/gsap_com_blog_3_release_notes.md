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
- [Logout](https://gsap.com/community/logout/?csrfKey=5e70e50e98afc5def2ae746db652958f)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=5e70e50e98afc5def2ae746db652958f)
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

[Skip to main content](https://gsap.com/blog/3-release-notes/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3 Release Notes

November 1, 2019 · 22 min read

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- Roughly Half the file size of the old TweenMax!
- Simplified API
- Backward compatibility
- Advanced staggers everywhere
- And more...

## Roughly Half the file size of the old TweenMax! [​](https://gsap.com/blog/3-release-notes/\#roughly-half-the-file-size-of-the-old-tweenmax "Direct link to Roughly Half the file size of the old TweenMax!")

No kidding! It retains virtually all of the old functionality while adding 50+ features (as you'll see below).

## Simplified API [​](https://gsap.com/blog/3-release-notes/\#simplified-api "Direct link to Simplified API")

1. **No more "Lite/Max" flavors.** TweenMax, TweenLite, TimelineLite, and TimelineMax have all been consolidated into a single " **[gsap](https://gsap.com/docs/v3/GSAP)**" object. So simple! For example:





```codeBlockLines_p187
//simple tween like the old TweenMax.to(...)
gsap.to('.class', { duration: 2, x: 100 });

//create a timeline and add a tween
var tl = gsap.timeline();
tl.to('.class', { duration: 2, x: 100 });

```









Internally, there's one " [Tween](https://gsap.com/docs/v3/GSAP/Tween)" class (replaces TweenLite/TweenMax) and one " [Timeline](https://gsap.com/docs/v3/GSAP/Timeline)" class (replaces TimelineLite/TimelineMax), and both have **all** of the features like repeat, yoyo, etc. When you call one of the gsap methods like [.to()](https://gsap.com/docs/v3/GSAP/gsap.to()), [.from()](https://gsap.com/docs/v3/GSAP/gsap.from()), etc., it returns an instance of the appropriate class with easily chainable methods.

2. **Duration is now defined in the vars object (the old syntax still works)**. This offers several benefits:


   - Improved readability
   - It fits much better with keyframes
   - It allows default durations to be inherited (more on that below)
   - You can use function-based values

```codeBlockLines_p187
//OLD - duration was 2nd parameter
TweenMax.to('.class', 1, { x: 100 });

//NEW - duration is now a property of the vars object
gsap.to('.class', { duration: 1, x: 100 });

```

3. **Shortened string-based eases** \- less typing, more readable, and zero import hassles. Here's the new convention for **all** of the standard eases:





```codeBlockLines_p187
// OLD ==> NEW
Elastic.easeOut ==> "elastic.out" // or just "elastic" because ".out" is the default flavor
Elastic.easeIn ==> "elastic.in"
Elastic.easeInOut ==> "elastic.inOut"
Elastic.easeOut.config(1, 0.5) ==> "elastic.out(1, 0.5)" // or just "elastic(1, 0.5)"

// and the other configurable eases are much easier!:
SteppedEase.config(5) ==> "steps(5)"
SlowMo.ease.config(0.5, 0.8) ==> "slow(0.5, 0.8)"
RoughEase.ease.config({points:40}) ==> "rough(40)"
ExpoScaleEase.config(0.5, 3) ==> "expoScale(0.5, 3)"

```


## Backward compatibility [​](https://gsap.com/blog/3-release-notes/\#backward-compatibility "Direct link to Backward compatibility")

The new GSAP even adjusts itself to accommodate the old syntax! There's technically no more TweenMax, TweenLite, TimelineLite, or TimelineMax, but they're all aliased so that the vast majority of legacy code still works, untouched! You don't have to rewrite all your code to use GSAP 3, but we'd recommend shifting to the new, more concise syntax for all your new projects.

## Timeline defaults that get inherited by child tweens [​](https://gsap.com/blog/3-release-notes/\#timeline-defaults-that-get-inherited-by-child-tweens "Direct link to Timeline defaults that get inherited by child tweens")

You don't have to keep setting the same ease over and over again...or duration...or whatever. Just set defaults on the parent timeline:

```codeBlockLines_p187
gsap
    .timeline({ defaults: { ease: 'back', duration: 2 } })
    .to('.class-1', { x: 100 }) // inherits the ease and duration from the parent timeline!
    .to('.class-2', { y: 200 }); // this one too

```

Any defaults you set this way will get pushed into every child tween - it's not limited to a certain subset of properties.

## Advanced staggers everywhere [​](https://gsap.com/blog/3-release-notes/\#advanced-staggers-everywhere "Direct link to Advanced staggers everywhere")

There's no need for the old staggerTo()/staggerFrom()/staggerFromTo() methods because you can add staggers to regular tweens:

```codeBlockLines_p187
gsap.to('.class', {
    x: '+=100',
    duration: 1,
    stagger: 0.5 // simple stagger of 0.5 seconds
});

// or get advanced:
gsap.to('.class', {
    x: '+=100',
    duration: 1,
    stagger: {
        amount: 2,
        from: 'center',
        grid: 'auto',
        onComplete: myFunction // define callbacks inside the stagger to make them apply to each sub-tween
    }
});

```

Don't worry - the stagger methods are still there to support legacy code.

## MotionPathPlugin (replaces BezierPlugin) [​](https://gsap.com/blog/3-release-notes/\#motionpathplugin-replaces-bezierplugin "Direct link to MotionPathPlugin (replaces BezierPlugin)")

Turn any SVG `<path>` into a motion path! There's even a MotionPathHelper utility that lets you EDIT your own path interactively in the browser (club members only)! Watch the video:

The basic playground from the video is at: [https://codepen.io/GreenSock/pen/LwzMKL](https://codepen.io/GreenSock/pen/LwzMKL)

**Features:**

- autoRotate along the path. Offset by any amount.
- Animate from any spot along the path to any other spot using "start" and "end" progress values like start:0.3, end:0.8 to animate from 30% along the path to 80%. you can even loop around (like end:1.5) or go backwards!
- Align the target with any other element, like make a `<div>` line up perfectly with an SVG `<path>` or another element, and start animating along the motion path from there.
- Feed in an array of values to have it build a motion path that goes through them. It doesn't even have to be "x" and "y" values - it can be almost any property of the target. You can even control the "curviness" of that path that gets plotted.
- There are some utility methods attached to MotionPathPlugin like stringToRawPath(), rawPathToString(), getRawPath(), sliceRawPath(), transformRawPath(), and pointsToSegment().

[MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin) is in the public files, and the MotionPathHelper utility is a bonus plugin that comes with ["Shockingly Green" memberships](https://gsap.com/pricing/) and up.

## New random(...) capabilities [​](https://gsap.com/blog/3-release-notes/\#new-random-capabilities "Direct link to New random(...) capabilities")

Define random values in a string as a range (like **"random(-100, 100)"**) or an array (like **"random(\[red, blue, green\])"**) and GSAP will swap in an appropriate random value for each target! This makes advanced randomized effects crazy simple. You can even have the random number rounded to the closest increment of any number! For example:

```codeBlockLines_p187
gsap.to('.class', {
    x: 'random(-100, 100, 5)' // chooses a random number between -100 and 100 for each target, rounding to the closest 5!
});

```

Or pass in an array-like set of values and GSAP will randomly select one of those:

```codeBlockLines_p187
// randomly selects one of the values (0, 100, 200, or 500)
x: 'random([0, 100, 200, 500])';

```

There's also a **[gsap.utils.random()](https://gsap.com/docs/v3/GSAP/UtilityMethods/random())** function that you can use directly if you prefer. We'll cover the utility methods later.

## Get property values (with unit conversion capabilities!) [​](https://gsap.com/blog/3-release-notes/\#get-property-values-with-unit-conversion-capabilities "Direct link to Get property values (with unit conversion capabilities!)")

```codeBlockLines_p187
gsap.getProperty('#myElement', 'backgroundColor');
gsap.getProperty('#myElement', 'x'); // works with GSAP transform properties too. This would return something like "100px"

```

Pass a **unit** as the 3rd parameter and GSAP will return the value converted for you!

```codeBlockLines_p187
gsap.getProperty('#element', 'width', 'em'); // returns the width in em units! (for CSS values only)

```

If you omit the unit parameter, it will return a NUMBER (at least for simple values where parseFloat() returns a number). For example, a "top" or "left" or "x" property that's technically "20px" would be returned as **20** (no unit suffix) because it's so common to need to deal with numbers in animation. In practical use, it would be annoying to get values like "20px" back from [getProperty()](https://gsap.com/docs/v3/GSAP/gsap.getProperty()) and have to manually wrap it in parseFloat(). But again, if you want the unit included, just pass in that unit like `gsap.getProperty("#element", "x", "px");`

## New "effects" extensibility [​](https://gsap.com/blog/3-release-notes/\#new-effects-extensibility "Direct link to New \"effects\" extensibility")

You can author a function that does custom animation and then make it into a named effect that can be called anytime with new targets and configurations. So, for example, think of writing an “explode” effect yourself (a function that accepts targets and a configuration object and spits back an animation/timeline). You define it once, and call it anytime, like:

```codeBlockLines_p187
gsap.effects.explode('.class', { speed: 25 });

```

GSAP wizards can build crazy-cool effects that folks can simply copy/paste into their project once and then trigger effects easily directly through GSAP. Here's a super-simple "fade" effect to show the concept:

```codeBlockLines_p187
// register the effect with GSAP:
gsap.registerEffect({
    name: 'fade',
    defaults: { duration: 2 }, // defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 });
    }
});

// now we can use it like this:
gsap.effects.fade('.box');

```

GSAP is providing 3 key services here:

- It parses the “targets” into an array. So if selector text is passed in, it becomes an array of elements passed to the effect function.
- It applies defaults to the vars object for you. No need to add a bunch of if statements or do the defaults yourself.
- It provides a centralized way of registering/accessing these “effects”.

You can think of it almost like jQuery plugins, but for GSAP-based animation effects.

## Keyframes [​](https://gsap.com/blog/3-release-notes/\#keyframes "Direct link to Keyframes")

If you have one set of targets that should animate to various states, instead of creating a whole new tween for each one (re-defining the same targets each time), you can pass an array of keyframes (vars objects) and they'll be perfectly sequenced. Use a "delay" value to create gaps/overlaps!:

```codeBlockLines_p187
gsap.to('.class', {
    // an array of keyframes!
    keyframes: [\
        { x: 100, duration: 1 },\
        { y: 200, duration: 1, delay: 0.5 }, //create a 0.5 second gap\
        { rotation: 360, duration: 2, delay: -0.25 } //overlap by 0.25 seconds\
    ]
});

```

These keyframes are basically like individual tweens, so you can even use callbacks like onStart, onComplete, etc.

## Relative ">" and "<" position prefixes [​](https://gsap.com/blog/3-release-notes/\#relative--and--position-prefixes "Direct link to Relative \">\" and \"<\" position prefixes")

When building out a timeline sequence, it's VERY common to want to place the next animation relative to the previous tween's start or end. Since the default behavior is to put things at the end of the timeline, it's usually easy to get that effect, but what if you want the next tween to start at the same time as (or like 0.2 seconds after) the previously-inserted one? What do you do?

I bet you either slap a label in there and keep referencing that label. Or maybe you memorize time stamps. Or if you're like me, sometimes you even look at the duration and do the math ("the duration of the previous one is 1 second, and I want it to start 0.2 seconds after that one starts, so I'll do "-=0.8" and pray that I don't need to mess with the timings very much and remember to edit in 2 places").

In GSAP 3 there's a better way. There are now these prefixes for the position parameter in timelines:

- "<" references the most recently-added animation's START time
- ">" references the most recently-added animation's END time

And you could optionally offset things with numbers too. Examples:

```codeBlockLines_p187
var tl = gsap.timeline();
tl.to(...)
  .to(..., "") //starts immediately after the previous tween's end time (sequenced)
  .to(..., ">-0.5") //overlaps with the previous tween by 0.5 seconds (because the number is negative)

```

Think of them like pointers - "<" points to the start, ">" points to the end (of the most recently-added animation).

Why do we even need ">"? Imagine a scenario like this:

```codeBlockLines_p187
tl.to(... {duration:10})
  .to(... {duration:2}, "-=10") //starts way earlier
  .to(...) //

```

See the issue? Since it's tacked onto the end of the timeline, that's actually at the end of that first 10-second tween, NOT the 2nd tween. It's the correct behavior, but when you're animating it's often very handy to be able to insert things relative to the most recently-added one.

## Animate to a width/height of "auto" [​](https://gsap.com/blog/3-release-notes/\#animate-to-a-widthheight-of-auto "Direct link to Animate to a width/height of \"auto\"")

This sounds simple, but it can be very handy when you're expanding something to whatever size would naturally fit its contents.

## New "repeatRefresh" feature [​](https://gsap.com/blog/3-release-notes/\#new-repeatrefresh-feature "Direct link to New \"repeatRefresh\" feature")

Setting **repeatRefresh:true** causes a repeating tween to invalidate() and re-record its starting/ending values internally on each iteration. This is only useful when you use dynamic values (relative, random, or function-based). For example...

```codeBlockLines_p187
gsap.to('.class', {
    duration: 1,
    repeat: 5,
    repeatRefresh: true, //<- forces things to refresh each repeat iteration
    x: 'random(-100,100)', //now x will go to a different random value on each repeat
    y: '+=50' //and y will keep moving 50px further down on each repeat
});

```

Note: duration and delay do NOT refresh on each iteration.

## New SnapPlugin (included in the core) [​](https://gsap.com/blog/3-release-notes/\#new-snapplugin-included-in-the-core "Direct link to New SnapPlugin (included in the core)")

Think of this as a replacement for RoundPropsPlugin (still in the core for backward compatibility) but with a more intuitive name and more features. It basically adds a modifier to any property that implements one of the following snapping behaviors to every value DURING the tween (live, not just to the end value):

```codeBlockLines_p187
//snap to an increment:
gsap.to('.class', {
    x: 1000,
    snap: {
        x: 20 //x snaps to the closest increment of 20 (0, 20, 40, 60, etc.)
    }
});

//snap to the closest value in an array:
gsap.to('.class', {
    x: 1000,
    snap: {
        x: [0, 50, 150, 500] //x snaps to the closest value in this array
    }
});

//snap to a value in an array, but only when it's within a certain distance/radius of one of those values:
gsap.to('.class', {
    x: 1000,
    snap: {
        x: { values: [0, 50, 150, 500], radius: 20 } //x snaps to the closest value in the array but only when it's within 20 pixels of it.
    }
});

```

You can define as many snap properties as you want.

## Access/control the global timeline [​](https://gsap.com/blog/3-release-notes/\#accesscontrol-the-global-timeline "Direct link to Access/control the global timeline")

```codeBlockLines_p187
gsap.globalTimeline.timeScale(0.1); //slow everything down
gsap.globalTimeline.pause(); //stop everything, though you might want to use gsap.exportRoot() instead so that you can exclude delayedCalls()

```

## translateX, translateY, rotate, rotateX, and rotateY aliases [translateX, translateY, rotate, rotateX, and rotateY aliases](https://gsap.com/blog/3-release-notes/\#transform-aliases) [​](https://gsap.com/blog/3-release-notes/\#translatex-translatey-rotate-rotatex-and-rotatey-aliases-translatex-translatey-rotate-rotatex-and-rotatey-aliases "Direct link to translatex-translatey-rotate-rotatex-and-rotatey-aliases-translatex-translatey-rotate-rotatex-and-rotatey-aliases")

To better match the names that most developers are used to in CSS, "translateX", "translateY", "rotate", "rotateX", and "rotateY" are mapped to x, y, rotation, rotationX, and rotationY. So, for example, you can do this:

```codeBlockLines_p187
gsap.to('.class', {
    translateX: 100, // same as x:100
    translateY: 100, // same as y:100
    rotate: 360 // same as rotation:360
});

```

And yes, directional rotation values work for DOM elements:

```codeBlockLines_p187
rotation: '270_short'; //animates in the shortest direction!
rotation: '270_cw'; //animates clockwise
rotation: '270_ccw'; //animates counter-clockwise

```

## You can define units for x/y transforms [​](https://gsap.com/blog/3-release-notes/\#you-can-define-units-for-xy-transforms "Direct link to You can define units for x/y transforms")

```codeBlockLines_p187
gsap.to('.class', {
    x: '50vw', //units! (default is px)
    y: '5em'
});

```

GSAP 3 no longer leverages matrix() and matrix3d() for CSS transforms which is why it can accommodate units like this.

## Built as modern ES6 modules with exports [Built as modern ES6 modules with exports](https://gsap.com/blog/3-release-notes/\#es6) [​](https://gsap.com/blog/3-release-notes/\#built-as-modern-es6-modules-with-exports-built-as-modern-es6-modules-with-exports "Direct link to built-as-modern-es6-modules-with-exports-built-as-modern-es6-modules-with-exports")

Nuff said. And of course there are browser-friendly, minified ES5 files provided as well.

## Utility methods [​](https://gsap.com/blog/3-release-notes/\#utility-methods "Direct link to Utility methods")

GSAP exposes some very useful utility methods. Many of them can even return functions so that they can be plugged directly into tweens and leverage GSAP's function-based capabilities meaning they'll get called once for each target (rather than just using the same end value for them all).

The included functions are [checkPrefix()](https://gsap.com/docs/v3/GSAP/UtilityMethods/checkPrefix()), [clamp()](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()), [distribute()](https://gsap.com/docs/v3/GSAP/UtilityMethods/distribute()), [getUnit()](https://gsap.com/docs/v3/GSAP/UtilityMethods/getUnit()), [interpolate()](https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()), [mapRange()](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()), [normalize()](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()), [pipe()](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()), [random()](https://gsap.com/docs/v3/GSAP/UtilityMethods/random()), [snap()](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()), [splitColor()](https://gsap.com/docs/v3/GSAP/UtilityMethods/splitColor()), [toArray()](https://gsap.com/docs/v3/GSAP/UtilityMethods/toArray()), [unitize()](https://gsap.com/docs/v3/GSAP/UtilityMethods/unitize()), [wrap()](https://gsap.com/docs/v3/GSAP/UtilityMethods/wrap()), and [wrapYoyo()](https://gsap.com/docs/v3/GSAP/UtilityMethods/wrapYoyo()).

Below is a demo that covers several of the utility methods. Check out [the utility methods docs](https://gsap.com/docs/v3/GSAP/UtilityMethods) for more info.

And here's one that demonstrates how to build your own custom plugin (in this case, it's an unofficial BlurPlugin):

## Other improvements and changes [​](https://gsap.com/blog/3-release-notes/\#other-improvements-and-changes "Direct link to Other improvements and changes")

01. **[gsap.getById()](https://gsap.com/docs/v3/GSAP/gsap.getById())**- When you assign an id to an animation, you can find that instance by id.

02. The core engine will **find colors inside complex strings and animate them** properly (no plugins necessary). And of course it'll find all the numbers inside complex strings and animate those as well.

03. **function-based values receive a 3rd parameter - the entire array of targets from the tween.** This can be useful for advanced effects.





    ```codeBlockLines_p187
    gsap.to('.class', {
        x: function (index, target, targets) {
            return index * 50;
        }
    });

    ```

04. **timeScale() can go negative!** In GSAP 3 the timeScale controls the direction of playback, so setting it to a negative number makes the animation play backwards. That means it is intuitively linked with the reversed() method. If, for example, timeScale is 0.5 and then you call reverse() it will be set to -0.5. In GSAP 2 and earlier, the "reversed" state of the animation was completely independent from timeScale (which wasn't allowed to be negative). So in GSAP 3, you could even animate timeScale from positive to negative and back again!

05. **New [iteration()](https://gsap.com/docs/v3/GSAP/Tween/iteration()) method** that lets you get/set the iteration number of a repeating animation.

06. **overwrite is false by default**, and all other overwrite modes have been eliminated except:


    - **"auto"** \- looks for other active tweens and only kills duplicate/conflicting properties
    - **true** \- immediately overwrites all tweens of the same target(s) regardless of whether or not there are duplicate/conflicting properties.

Why make this change? Overwriting caused confusion for some folks and could be tricky to troubleshoot, so it seemed prudent to have users opt-in. Of course you can change the default mode with gsap.defaults({overwrite:"auto"}); (in GSAP 2.x and earlier, "auto" was the default)

07. **nextLabel(), previousLabel(), and currentLabel() methods** in Timelines (previously getLabelAfter(), getLabelBefore(), and currentLabel())

08. **New read-only [Tween.targets()](https://gsap.com/docs/v3/GSAP/Tween/targets()) method** that returns an array of the targets (previously the API didn't provide a way to access the targets of a tween instance).

09. **[gsap.updateRoot(time)](https://gsap.com/docs/v3/GSAP/gsap.updateRoot())** lets game developers update the root timeline manually.

10. [Listening for tick](https://gsap.com/docs/v3/GSAP/gsap.ticker()) events has been streamlined:


```codeBlockLines_p187
//OLD:
TweenMax.ticker.addEventListener('tick', yourFunction);
TweenMax.ticker.removeEventListener('tick', yourFunction);

//NEW:
gsap.ticker.add(yourFunction);
gsap.ticker.remove(yourFunction);

```

The callback also gets passed some valuable information as parameters: time, deltaTime, and frame (in that order)

11. **[ModifiersPlugin](https://gsap.com/docs/v3/GSAP/CorePlugins/Modifiers)** is baked into the core, as is **[SnapPlugin](https://gsap.com/docs/v3/GSAP/CorePlugins/Snap)**, **RoundPropsPlugin, EndArrayPlugin** and **[AttrPlugin](https://gsap.com/docs/v3/GSAP/CorePlugins/Attributes)**. And yes, it's still about half the size that TweenMax 2.x was.

12. **ease:"linear"** is a shortcut for the old ease:Linear.easeNone (which still works). **ease:"none"** also works.

13. In advanced staggers, grid:\[columns, rows\] is flip-flopped to grid:\[rows, columns\] to follow convention with 2D arrays.

14. The default `autoKill` behavior in ScrollToPlugin is now false. That way, it helps developers be more aware and opt-in to that behavior rather than being surprised by it.

15. [TextPlugin](https://gsap.com/docs/v3/Plugins/TextPlugin), [ScrambleTextPlugin](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin), and [SplitText](https://gsap.com/docs/v3/Plugins/SplitText) all handle even complex Emojis now.

16. **onOverwrite** was removed in favor of a new **onInterrupt** callback that fires if/when the tween is killed before it completes. This could happen because its kill() method is called or due to overwriting.

17. **Defaults have been consolidated** to 2 methods. So instead of TweenLite.defaultEase, TweenLite.defaultOverwrite, TweenLite.defaultStringFilter, etc., there is now


```codeBlockLines_p187
gsap.defaults({ ease: 'power2.in', duration: 1 }); //for tween-related default (stuff you'd pass in via vars objects)
gsap.config({ autoSleep: 120, force3D: 'auto' }); //for other, more general settings.

```

## What was REMOVED? [​](https://gsap.com/blog/3-release-notes/\#what-was-removed "Direct link to What was REMOVED?")

- BezierPlugin - replaced with [MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin) (not in the core).

- [RoughEase](https://gsap.com/docs/v3/Eases/RoughEase), [SlowMo](https://gsap.com/docs/v3/Eases/SlowMo), and [ExpoScaleEase](https://gsap.com/docs/v3/Eases/ExpoScaleEase) are in an external EasePack file - they just seemed so rarely used that it wasn't worth the kb cost for everyone.

- `cycle` (formerly only in the stagger methods) has been replaced by `gsap.utils.wrap()` which is more flexible.

- skewType. It’s all just “normal” CSS-style skewing (not “compensated”)

- “ `useFrames`”

- `className` tweens.

- No more `Timeline.gotoAndPlay()` \- use `Timeline.play()` instead.

- `CSSPlugin.cascadeTo()`

- `&#x201C;{self}&#x201D;` reference in params. Seemed like a waste and almost nobody uses it, especially since by default callbacks are scoped to the tween/timeline instance anyway.

- “scope” values at all (except `callbackScope`). So no `onCompleteScope`, `onUpdateScope`, `onStartScope`, etc.

- There's no `TweenMax.updateTo()` or `TweenMax.killChildTweensOf()` methods.

- No more `TweenLite.selector` or `TweenMax.selector` (it's pointless with `document.querySelectorAll()` that's in browsers now).

- No `Timeline.addCallback()` method (it overlaps in functionality with `Timeline.call()`, or you can even use `add()` to add a simple callback with no parameters).

- `MorphSVG's pathDataToRawBezier()` method - use `rawPathToString()` instead.

- There's no more Ease class - everything is either string-based or plain functions (which can be passed to [gsap.registerEase()](https://gsap.com/docs/v3/GSAP/gsap.registerEase())).

- Draggable's "scroll" \| "scrollTop" \| "scrollLeft" types **(added back in 3.0.2 due to popular request)**.

- The ticker's `useRAF()` method (modern browsers throttle even `setTimeout()` calls when the window is inactive/hidden anyway, so there's not much value to toggling it off).

- `TweenLite.defaultEase`, `TweenLite.defaultOverwrite`, `TweenLite.defaultStringFilter`, etc. There is now [`gsap.defaults()`](https://gsap.com/docs/v3/GSAP/gsap.defaults()) and [`gsap.config()`](https://gsap.com/docs/v3/GSAP/gsap.config()) where you can change properties like:





```codeBlockLines_p187
gsap.defaults({ ease: 'power2.in', duration: 1 }); //for tween-related default (stuff you'd pass in via vars objects)
gsap.config({ autoSleep: 120, force3D: 'auto' }); //for other, more general settings.

```

- `TweenMax.pauseAll()`, `TweenMax.resumeAll()`, and `TweenMax.globalTimeScale()` are gone in favor of directly accessing methods on the [`globalTimeline`](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline()) \`:





```codeBlockLines_p187
gsap.globalTimeline.pause();
gsap.globalTimeline.resume();
gsap.globalTimeline.timeScale(0.5);

```


## Other notes [​](https://gsap.com/blog/3-release-notes/\#other-notes "Direct link to Other notes")

1. To avoid tree shaking issues and avoid fancy instantiation tricks, users should register any plugins that aren't in the core before using them, like:




```codeBlockLines_p187
//list as many as you want. It doesn't hurt to register the same one multiple times. No need to include ones that are in the GSAP core like CSSPlugin, AttrPlugin, ModifiersPlugin, SnapPlugin, EndArrayPlugin, and RoundPropsPlugin.
gsap.registerPlugin(MotionPathPlugin, TextPlugin);

```

2. You can directly access the " [labels](https://gsap.com/docs/v3/GSAP/Timeline/labels)" object of Timeline instances to get the key/value pairs.
3. Module imports **no longer create globals**. In other words, if you imported TweenMax as a module in v2, it would end up creating globals for TweenMax, TweenLite, all the eases, etc. That's generally frowned upon for module development which is why we made the change in v3. This helps avoid any conflicts down the road too. Globals are only created in the ES5/UMD files (the ones typically loaded directly into the browser).
4. **ThrowPropsPlugin** has been renamed **[InertiaPlugin](https://gsap.com/docs/v3/Plugins/InertiaPlugin)** and has some new features.
5. `lagSmoothing()` is applied directly on the ticker, like:




```codeBlockLines_p187
gsap.ticker.lagSmoothing(false);

```


## FAQ [​](https://gsap.com/blog/3-release-notes/\#faq "Direct link to FAQ")

1. ### How did you cut the file size so much? [​](https://gsap.com/blog/3-release-notes/\#how-did-you-cut-the-file-size-so-much "Direct link to How did you cut the file size so much?")


   - Removed BezierPlugin, RoughEase, SlowMo (ease), and ExpoScaleEase from the core, but all of those eases (RoughEase, SlowMo, and ExpoScaleEase) are in a separate EasePack file that's only about 1kb gzipped.
   - Dumped legacy code for thing like IE8 and workarounds for very old browsers.
   - Removed some of the complex math code involved in building matrix() and matrix3d() values from scratch in favor of using native strings like translate(), rotate(), rotateY(), etc. in CSS transforms.
   - Handle fewer edge cases where it's appropriate to just train users to input cleaner values. For example, the old CSSPlugin would parse things like margin:"10px 5px" to bust it out into marginTop, marginBottom, marginLeft, and marginRight internally. But it seemed appropriate to keep the core leaner and tell people to define those values individually. (Let me know if you disagree).
   - It helped to consolidate all the Lite/Max flavors into a single Tween and Timeline class. Instead of 4 different render() methods with lots of redundancies, we only have 2 that are much more concise.
   - Skipped inlining some things like pieces of the easing logic.
   - Lots of refining and reorganizing code, passing around object references instead of using "this" keyword, arrow functions, and various techniques for shortening code.
2. ### What old code will definitely break? [​](https://gsap.com/blog/3-release-notes/\#what-old-code-will-definitely-break "Direct link to What old code will definitely break?")


   - Anything that references TweenMax.ticker or TweenLite.ticker (use the new gsap.ticker, and remember that to add listeners to the ticker it's much simpler - see above)
   - Anything that references \_gsTransform (use the new gsap.getProperty() method instead)
   - TweenLite.isTweening() - it's now gsap.isTweening()
   - TimelineLite.exportRoot() - it's now gsap.exportRoot()
   - Anything referencing one of the removed features mentioned above, like className tweens.
   - BezierPlugin-based animations (replaced by MotionPathPlugin).
   - Timeline .call() method no longer has a "scope" parameter (3rd). In modern development, it just seemed unnecessary and got in the way.
   - The "cycle" feature of the old stagger methods is gone, in favor of the new (cleaner) way explained above.
   - timeline.getLabelTime("myLabel") has been removed. Use timeline.labels.myLabel instead.
   - Anything that references a tween's "target" property (it's now a targets() getter that always returns an array).
   - Anything that directly references ThrowPropsPlugin (it's renamed InertiaPlugin and it doesn't have a .to() method attached to it because it's totally unnecessary now with the new API not requiring a duration).
   - Anything that references an ease's "getRatio()" method. Eases are pure functions now, so you'd feed the value into the ease directly, like "power2(0.25)".
   - Anything that uses get/set properties inside of a tween. It's easily done [using other methods](https://gsap.com/community/forums/topic/22027-setters-getters-eg-setx-getx-detection-is-broken/) these days.
   - .killDelayedCallsTo() is now .killTweensOf().
3. ### Can't you make the file size even smaller? [​](https://gsap.com/blog/3-release-notes/\#cant-you-make-the-file-size-even-smaller "Direct link to Can't you make the file size even smaller?")


Kb is such an easy metric to focus on, but it only tells part of the story. GSAP isn't aiming to be the smallest animation library - for us, it's about being the most trusted, capable tool that professional animators can rely on day in and day out. That means we had to make some design decisions that cost a bit more kb but we think they're well worth the tradeoff:

   - **Solve browser bugs and inconsistencies**. For example, Safari doesn't honor the z component of transform-origin when doing 3D rotations, Firefox doesn't play nicely with origins on SVG elements and some browsers ignore transforms that are applied in CSS or the transform attribute when they're also applied a different way as well. GSAP implements workarounds under the hood so your animations "just work" across browsers whenever possible.
   - **Performance**. Sometimes it actually takes more code to ensure things perform better, like avoiding layout thrashing and various other caching techniques that make your animations buttery smooth. After all, animation is the most performance-sensitive part of UX. It's typically better to pay a few extra milliseconds on load to get smoother animations across your user's entire experience on your site.
   - **Capability and flexibility** \- you want confidence as an animator that your toolset is going to be rich and strong enough to tackle whatever challenges come your way. Plenty of animation engines cover the basics, but GSAP aims to go well beyond the basics and let you do complex sequencing, morphing, inertia-based animations, custom easing and just about anything else you can imagine.
4. ### Do you have demos for all these cool new features? [​](https://gsap.com/blog/3-release-notes/\#do-you-have-demos-for-all-these-cool-new-features "Direct link to Do you have demos for all these cool new features?")


Absolutely! Check out [the collection](https://codepen.io/collection/7a84da7eadcea7b5a4ed8f8430c597fd). We included some of our favorites below as well.


   - [GSAP 3 Logo](https://codepen.io/GreenSock/pen/db46d9aac9a02dcbcdafbb7ca0b578ba) by Jack Doyle
   - [Stack Loader](https://codepen.io/chrisgannon/pen/582282f8f5b59706e641319fb9a2253e) by Chris Gannon
   - [Race Car Island](https://codepen.io/ste-vg/pen/7d02048feb462e51d4642eb7ce4825eb/) by Steve Gardner
   - [Squiggle Text Animation](https://codepen.io/cassie-codes/pen/550390c37227578e2c6a0cbce8e44700) by Cassie Evans
   - [GSAP 3 Cube Swimmer](https://codepen.io/petebarr/pen/e9e81a9c0c23789208525b2839536ce7) by Pete Barr
   - [Low Poly Experiment](https://codepen.io/chrisgannon/pen/WNNJqXz) by Chris Gannon
   - [Alien Abduction](https://codepen.io/cassie-codes/pen/0bbfd64169a6c54202cf8e1aaddb4e2f) by Cassie Evans
   - [Cube Walk 3](https://codepen.io/petebarr/pen/2ca21b5ceb526a2c373803761a00855a?editors=0010) by Pete Barr

A special shout-out to [@dsenneff](https://twitter.com/dsenneff) who created [the GreenSock 3 intro animation](https://codepen.io/dsenneff/full/6b2bb89edaac4b4ce3b8ecb8fd0ecb73)!

## Resources [​](https://gsap.com/blog/3-release-notes/\#resources "Direct link to Resources")

- [GSAP 3 Highlights video](https://www.youtube.com/watch?v=RWKJJpaqdA0) \- Learn more about a few of the features we think you'll like most about GSAP 3.
- [GSAP 3 Starter Pen](https://codepen.io/GreenSock/pen/aYYOdN) \- Play around with GSAP 3 in CodePen! [This pen](https://codepen.io/GreenSock/pen/JjPwRob) allows you to copy the resource URLs easily.
- **[Download the files](https://gsap.com/blog/3-release-notes/#download)** to use locally.
- Using a build tool? `npm install gsap` will get you the files. If you're a Club GSAP user, there's a gsap-bonus.tgz tarball file in the local download above that you can simply drop into your project's folder and then `npm install ./gsap-bonus.tgz` and BOOM, it'll be installed just like any other package! See [the installation docs](https://gsap.com/docs/v3/Installation) for more information.

## Questions? [​](https://gsap.com/blog/3-release-notes/\#questions "Direct link to Questions?")

Hit us up in the [forums](https://gsap.com/community/) or [contact us](https://gsap.com/community/contact/) directly.

We'd love to hear what you think of GSAP 3. Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [GSAP3](https://gsap.com/blog/tags/gsap-3)

[Newer Post\\
\\
3.1 release](https://gsap.com/blog/3-1) [Older Post\\
\\
The "Why" Behind the GreenSock License](https://gsap.com/blog/why-license)

## Contents

- [Roughly Half the file size of the old TweenMax!](https://gsap.com/blog/3-release-notes/#roughly-half-the-file-size-of-the-old-tweenmax)
- [Simplified API](https://gsap.com/blog/3-release-notes/#simplified-api)
- [Backward compatibility](https://gsap.com/blog/3-release-notes/#backward-compatibility)
- [Timeline defaults that get inherited by child tweens](https://gsap.com/blog/3-release-notes/#timeline-defaults-that-get-inherited-by-child-tweens)
- [Advanced staggers everywhere](https://gsap.com/blog/3-release-notes/#advanced-staggers-everywhere)
- [MotionPathPlugin (replaces BezierPlugin)](https://gsap.com/blog/3-release-notes/#motionpathplugin-replaces-bezierplugin)
- [New random(...) capabilities](https://gsap.com/blog/3-release-notes/#new-random-capabilities)
- [Get property values (with unit conversion capabilities!)](https://gsap.com/blog/3-release-notes/#get-property-values-with-unit-conversion-capabilities)
- [New "effects" extensibility](https://gsap.com/blog/3-release-notes/#new-effects-extensibility)
- [Keyframes](https://gsap.com/blog/3-release-notes/#keyframes)
- [Relative ">" and "<" position prefixes](https://gsap.com/blog/3-release-notes/#relative--and--position-prefixes)
- [Animate to a width/height of "auto"](https://gsap.com/blog/3-release-notes/#animate-to-a-widthheight-of-auto)
- [New "repeatRefresh" feature](https://gsap.com/blog/3-release-notes/#new-repeatrefresh-feature)
- [New SnapPlugin (included in the core)](https://gsap.com/blog/3-release-notes/#new-snapplugin-included-in-the-core)
- [Access/control the global timeline](https://gsap.com/blog/3-release-notes/#accesscontrol-the-global-timeline)
- [translateX, translateY, rotate, rotateX, and rotateY aliases translateX, translateY, rotate, rotateX, and rotateY aliases](https://gsap.com/blog/3-release-notes/#translatex-translatey-rotate-rotatex-and-rotatey-aliases-translatex-translatey-rotate-rotatex-and-rotatey-aliases)
- [You can define units for x/y transforms](https://gsap.com/blog/3-release-notes/#you-can-define-units-for-xy-transforms)
- [Built as modern ES6 modules with exports Built as modern ES6 modules with exports](https://gsap.com/blog/3-release-notes/#built-as-modern-es6-modules-with-exports-built-as-modern-es6-modules-with-exports)
- [Utility methods](https://gsap.com/blog/3-release-notes/#utility-methods)
- [Other improvements and changes](https://gsap.com/blog/3-release-notes/#other-improvements-and-changes)
- [What was REMOVED?](https://gsap.com/blog/3-release-notes/#what-was-removed)
- [Other notes](https://gsap.com/blog/3-release-notes/#other-notes)
- [FAQ](https://gsap.com/blog/3-release-notes/#faq)
- [Resources](https://gsap.com/blog/3-release-notes/#resources)
- [Questions?](https://gsap.com/blog/3-release-notes/#questions)

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