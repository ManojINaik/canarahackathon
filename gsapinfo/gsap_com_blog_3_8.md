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
- [Logout](https://gsap.com/community/logout/?csrfKey=e6ddbe0e7364b23d387141ea8ef0df79)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=e6ddbe0e7364b23d387141ea8ef0df79)
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

[Skip to main content](https://gsap.com/blog/3-8/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.8 release

September 27, 2021 · 6 min read

[![Cassie Evans](https://gsap.com/img/cassie-about.jpg)](https://twitter.com/cassiecodes)

[Cassie Evans](https://twitter.com/cassiecodes)

Developer Education

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- [containerAnimation](https://gsap.com/blog/3-8/#containerAnimation) \- vertical scrolling can animate a container horizontally; now you can set up ScrollTriggers on that horizontal movement. It's like having nested ScrollTriggers!
- [preventOverlaps & fastScrollEnd](https://gsap.com/blog/3-8/#preventOverlapsAndFastScrollEnd) \- when you jump to a section, do you have lingering animations that overlap? These features can save the day.
- [isInViewport()](https://gsap.com/blog/3-8/#isInViewport) \- a simple way to check if an element is in the viewport
- [positionInViewport()](https://gsap.com/blog/3-8/#positionInViewport) \- find out exactly where an element is in relation to the viewport
- [Directional snapping](https://gsap.com/blog/3-8/#snapDirectional) \- by default, snapping will now always go in the direction that the user last scrolled. Much more intuitive! There's even a `.snapDirectional()` utility method.

## containerAnimation [​](https://gsap.com/blog/3-8/\#containeranimation "Direct link to containerAnimation")

info

[iframe](https://player.vimeo.com/video/618147701?h=172487e9d8&badge=0&autopause=0&player_id=0&app_id=58479)

We try to keep an eye on common challenges that the GSAP community faces. A popular effect is to create **horizontally-moving** sections that are tied to **vertical scrolling**.

That's simple enough with the [animated horizontal "scroll"](https://codepen.io/GreenSock/pen/YzygYvM) technique where a pinned container is animated along the x-axis to emulate horizontal scrolling.

However, since the effect is an **animation** as opposed to **native scroll**, it's very tricky to trigger animations **_within_** this horizontally "scrolling" container.

Enter `containerAnimation`. 🥳

With `containerAnimation`, you can actually create ScrollTriggers on that fake-scrolling container to detect when an element is 'scrolled' into view horizontally and then trigger an animation. Think of it like a ScrollTrigger _inside_ a ScrollTrigger. 🤯

- First, we create a linear tween to handle the horizontal 'scroll'
- Then we can pass **that animation** (as the `containerAnimation`) to the ScrollTriggers of tweens or timelines

```codeBlockLines_p187
// keep a reference of the horizontal 'fake scrolling' animation so we can pass it around
let scrollTween = gsap.to('.container', {
    xPercent: -100 * (sections.length - 1),
    ease: 'none', // <-- IMPORTANT!
    scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 0.5
    }
});

// now let's create an animation that triggers based on the horizontal fake-scroll:
gsap.to('.box', {
    y: -100,
    scrollTrigger: {
        trigger: '.box',
        start: 'left center',
        containerAnimation: scrollTween // <-- NEW!!
    }
});

```

Check out this demo to see it in action!

#### loading...

[iframe](https://codepen.io/GreenSock/embed/9be5d371346765a8c9a426e8f65f1cea?default-tab=result&theme-id=41164)

## preventOverlaps and fastScrollEnd [​](https://gsap.com/blog/3-8/\#preventoverlaps-and-fastscrollend "Direct link to preventOverlaps and fastScrollEnd")

Creative Coding Club Walkthrough

[iframe](https://player.vimeo.com/video/617582040?byline=0&title=0&portrait=0)

Special thanks to Creative Coding Club for providing this video. We highly recommend their courses at [CreativeCodingClub.com](https://www.creativecodingclub.com/bundles/creative-coding-club?ref=44f484). Take your animation skills to the next level.

Scroll-triggered animations pose unique challenges. Unlike animations that play on load, you're putting control in the users' hands. They decide how fast to scroll, which direction to scroll – and by association – when the animations get triggered. With this in mind, we added two new features to ScrollTrigger to help avoid overlaps between successive non-scrubbed animations:

- `preventOverlaps` kicks in as a ScrollTrigger is about to trigger an animation; it finds preceding scrollTrigger-based animations and forces those previous animations to their end state – avoiding unsightly overlaps.
- `fastScrollEnd` will force the current ScrollTrigger's animation to completion if you **leave** its trigger area above a certain velocity (default 2500px/s). This property can help to avoid overlapping animations when the user scrolls quickly.

We're especially excited about the UX benefits this brings. When users are in a hurry to access information, slow animation can be a [frustrating hindrance to their goal](https://www.nngroup.com/articles/scroll-animations/). With `fastScrollEnd`, we can avoid wearing down the patience of task-focused users by quickly forcing animations to their end state when scrolling quickly.

```codeBlockLines_p187
scrollTrigger: {
  trigger: ".container",
  fastScrollEnd: true // (default 2500px/s)
  // or
  fastScrollEnd: 3000 // (custom 3000px/s velocity)

  preventOverlaps: true // prevent overlaps in preceding scrollTrigger animations
  // or
  preventOverlaps: "group1" // prevent overlaps in specific group of scrollTrigger animations
}

```

You can take a look at how these new properties work, independently and in unison, by scrolling down in this demo at different speeds and toggling the options:

#### loading...

[iframe](https://codepen.io/GreenSock/embed/7d22c763b9edd0c0c48150ecd1c921c9?default-tab=result&theme-id=41164)

In addition to these new features we've added some handy methods to help you detect when an element is in view, and where.

## isInViewport() [​](https://gsap.com/blog/3-8/\#isinviewport "Direct link to isInViewport()")

`ScrollTrigger.isInViewport()` lets you find out if a particular element is in the viewport.

```codeBlockLines_p187
if (ScrollTrigger.isInViewport('#selector')) {
    // in the viewport vertically
}

```

You can also find out if a certain proportion is in view. The following will return true if at least 20% of the element is in the viewport:

```codeBlockLines_p187
if (ScrollTrigger.isInViewport(element, 0.2)) {
    // at least 20% of the element is in the viewport vertically
}

```

To check horizontally instead of vertically, just use the 3rd parameter (boolean):

```codeBlockLines_p187
if (ScrollTrigger.isInViewport(element, 0.2, true)) {
    // at least 20% of the element is in the viewport horizontally
}

```

## positionInViewport() [​](https://gsap.com/blog/3-8/\#positioninviewport "Direct link to positionInViewport()")

The `ScrollTrigger.positionInViewPort()` method lets you get a normalized value representing an element's position in relation to the viewport where 0 is at the top of the viewport, 0.5 is in the center, and 1 is at the bottom. So, for example, if the center of the element is 80% down from the top of the viewport, the following code would return `0.8`:

```codeBlockLines_p187
ScrollTrigger.positionInViewport(element, 'center');

```

For the reference point (2nd parameter), you can use keywords like `"center"` (the default), `"top"`, or `"bottom"`. Or you can use a number of pixels from the element's top, so `20` would make the reference point 20 pixels down from the top of the element.

## Demo [​](https://gsap.com/blog/3-8/\#demo "Direct link to Demo")

#### loading...

[iframe](https://codepen.io/GreenSock/embed/WNOzrqg?default-tab=result&theme-id=41164)

## Directional snapping [​](https://gsap.com/blog/3-8/\#directional-snapping "Direct link to Directional snapping")

By default, snapping will now always go in the direction that the user last scrolled. Much more intuitive! Previously, it would snap to the closest value regardless of direction which could lead to annoying snap-back behavior.

There's even a `ScrollTrigger.snapDirectional()` utility method that lets you do your own directional snapping for any numeric values. It returns a snapping function that you can feed a value to snap, and a direction where `1` is forward (greater than) and `-1` is backward (less than). For example:

```codeBlockLines_p187
// returns a function that snaps to the closest increment of 5
let snap = ScrollTrigger.snapDirectional(5);
snap(11); // 10 (closest, not directional)
snap(11, 1); // 15 (closest greater than)
snap(11, -1); // 10 (closest less than)

```

You can even use an Array of values!

```codeBlockLines_p187
let values = [0, 5, 20, 100];
// returns a function that'll snap to the closest value in the Array
let snap = ScrollTrigger.snapDirectional(values);
snap(8); // 5  (closest, non-directional)
snap(8, 1); // 20 (closest greater than)
snap(99, -1); // 20 (closest less than)

```

* * *

## And more... [​](https://gsap.com/blog/3-8/\#and-more "Direct link to And more...")

tip

Make sure to check out the [ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger) for more information.

GSAP 3.8 also delivers various bug fixes, so we'd highly recommend [installing the latest version today](https://gsap.com/docs/v3/Installation). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, Github, etc.). :::

## Resources [​](https://gsap.com/blog/3-8/\#resources "Direct link to Resources")

- [Full release notes on Github](https://github.com/greensock/GSAP/releases/tag/3.8.0)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources)
- [Community forums](https://gsap.com/community/)
- [ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger)

Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [matchMedia](https://gsap.com/blog/tags/match-media)
- [context](https://gsap.com/blog/tags/context)

[Newer Post\\
\\
3.9 release](https://gsap.com/blog/3-9) [Older Post\\
\\
3.7 release](https://gsap.com/blog/3-7)

## Contents

- [containerAnimation](https://gsap.com/blog/3-8/#containeranimation)
- [preventOverlaps and fastScrollEnd](https://gsap.com/blog/3-8/#preventoverlaps-and-fastscrollend)
- [isInViewport()](https://gsap.com/blog/3-8/#isinviewport)
- [positionInViewport()](https://gsap.com/blog/3-8/#positioninviewport)
- [Demo](https://gsap.com/blog/3-8/#demo)
- [Directional snapping](https://gsap.com/blog/3-8/#directional-snapping)
- [And more...](https://gsap.com/blog/3-8/#and-more)

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