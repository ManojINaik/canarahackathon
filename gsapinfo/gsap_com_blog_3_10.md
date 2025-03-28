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
- [Logout](https://gsap.com/community/logout/?csrfKey=afd9d213e8013cdf82f10383eddc3286)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=afd9d213e8013cdf82f10383eddc3286)
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

[Skip to main content](https://gsap.com/blog/3-10/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.10 release

March 31, 2022 · 5 min read

[![Cassie Evans](https://gsap.com/img/cassie-about.jpg)](https://twitter.com/cassiecodes)

[Cassie Evans](https://twitter.com/cassiecodes)

Developer Education

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- [ScrollSmoother plugin](https://gsap.com/blog/3-10/#ScrollSmoother) for delicious, buttery-smooth scrolling that leverages native scroll. 💚
- [Observer plugin](https://gsap.com/blog/3-10/#observer) that greatly simplifies setup for reacting to various events across devices.
- [gsap.quickTo()](https://gsap.com/blog/3-10/#quickTo) for frequent redirection to new values like mouse followers
- [ScrollTrigger.normalizeScroll()](https://gsap.com/blog/3-10/#normalizeScroll) solves a bunch of scroll-related annoyances across devices and browsers.
- ["\*=" and "/=" relative prefixes](https://gsap.com/blog/3-10/#relative) \- multiply or divide the current value.

## Introducing ScrollSmoother.🥳 [​](https://gsap.com/blog/3-10/\#introducing-scrollsmoother "Direct link to introducing-scrollsmoother")

A shiny new plugin, **_exclusively_** for [Club GSAP](https://gsap.com/pricing/) members!

[ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother) makes it simple to add a buttery smooth vertical scrolling effect to your ScrollTrigger pages. Under the hood, ScrollSmoother leverages **native** scrolling which allows it to sidestep many of the accessibility annoyances that plague smooth-scrolling sites. No fake scrollbars, and no messing with pointer or touch functionality.

#### loading...

CodePen Embed - ScrollSmoother exploration - Cassie Evans

- [HTML](https://codepen.io/GreenSock/embed/bGaWjpw?default-tab=result&theme-id=41164#html-box)
- [SCSS](https://codepen.io/GreenSock/embed/bGaWjpw?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/bGaWjpw?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/bGaWjpw?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/bGaWjpw?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/bGaWjpw "Edit on CodePen")

``` cm-s-default
<div id="wrapper">
 <section id="content">
  <!--  smooth scrolling biz goes in here -->
  <div class="heading" aria-hidden="true">
   <p>smooooth</p>
   <div class="text-container">
    <p>scrolling</p>
    <p data-speed="0.95">scrolling</p>
    <p data-speed="0.9">scrolling</p>
    <p data-speed="0.85">scrolling</p>
    <p data-speed="0.8">scrolling</p>
    <p data-speed="0.75">scrolling</p>
    <p data-speed="0.7">scrolling</p>
   </div>
  </div>

  <section class="image-grid container">
   <div class="image_cont" data-speed="1">
    <img data-speed="auto" src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="">
   </div>
   <div class="image_cont" data-speed="1.7">
    <img data-speed="auto" src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="">
   </div>
   <div class="image_cont" data-speed="1.5">
    <img data-speed="auto" src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="">
   </div>
  </section>

  <section class="title container flow--lg">
   <h1><span class="eyebrow" aria-hidden="true">with </span>GSAP scrollsmoother</h1>
   <p>Seamlessly integrated with GSAP and ScrollTrigger. Leveraging native scrolling - no "fake" scrollbars or event hijacking.</p>
  </section>

  <section class="bars container">

   <div class="bars-text">
    <div class="flow content">
     <h2>Speed Control</h2>
     <p>Animate elements along at different speeds, slow them down or make them whizz past.</p>
    </div>

   </div>

   <div class="bars-cont">
    <div class="bar" data-speed="0.8">
     <p>0.8</p>
    </div>

    <div class="bar" data-speed="0.9">
     <p>0.9</p>
    </div>

    <div class="bar" data-speed="1">
     <p>1</p>
    </div>

    <div class="bar" data-speed="1.1">
     <p>1.1</p>
    </div>

    <div class="bar" data-speed="1.2">
     <p>1.2</p>
    </div>
   </div>

  </section>

  <section class="v-center">
   <div class="parallax-slab">
    <img data-speed="auto" src="https://assets.codepen.io/756881/smoothscroller-1.jpg" alt="">
   </div>
  </section>

  <section class="staggered container">

   <div class="staggered_text">
    <div class="flow content">
     <h2>Add some lag (the good kind!)</h2>
     <p>loosen the connection to the scroll to give a feeling of 'follow through.'</p>
    </div>

   </div>

   <div class="staggered_demo">
    <h3 id="split-stagger">stagger...</h3>
   </div>

  </section>

  <section class="parallax-images container">
   <div class="parallax-text">
    <div class="flow content">
     <h2>Easy parallax image effects</h2>
     <p>Pop your images in a container with overflow hidden, size them a little larger than the container and set data-speed to auto. GSAP does the rest.</p>
    </div>
   </div>

   <div class="image_cont">
    <img data-speed="auto" src="https://assets.codepen.io/756881/neon3.jpg" alt="">
   </div>
   <div class="image_cont">
    <img data-speed="auto" src="https://assets.codepen.io/756881/neon2.jpg" alt="">
   </div>
  </section>

  <section class="spacer"></section>
 </section>
</div>
```

``` cm-s-default
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap");

@font-face {
 font-family: "wild_worldbold";
 src: url("https://assets.codepen.io/756881/wild_world-webfont.woff2")
   format("woff2"),
  url("https://assets.codepen.io/756881/wild_world-webfont.woff") format("woff");
 font-weight: normal;
 font-style: normal;
}

/* @link https://utopia.fyi/type/calculator?c=320,20,1.2,1140,24,1.25,1,0,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

:root {
 --fluid-min-width: 320;
 --fluid-max-width: 1140;

 --fluid-screen: 100vw;
 --fluid-bp: calc(
  (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
   (var(--fluid-max-width) - var(--fluid-min-width))
 );
}

@media screen and (min-width: 1140px) {
 :root {
  --fluid-screen: calc(var(--fluid-max-width) * 1px);
 }
}

:root {
 --f-0-min: 18;
 --f-0-max: 20;
 --step-0: calc(
  ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
   var(--fluid-bp)
 );

 --f-1-min: 20;
 --f-1-max: 24;
 --step-1: calc(
  ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
   var(--fluid-bp)
 );
}

* {
 box-sizing: border-box;
}

body {
 background-color: #111;
 font-family: "Open Sans", sans-serif;
 color: white;
 overscroll-behavior: none;
 margin: 0;
 padding: 0;
 font-weight: 300;
 overflow-x: hidden;
 font-size: var(--step-0);
}

section {
 min-height: 100vh;
}

p {
 line-height: 1.35;
}

#content {
 padding: 0 0.75rem;
}

.container {
 max-width: 1100px;
 margin: 0 auto;
 padding: 0 0.5rem;
}

h1,
h2,
h3,
h4,
p {
 margin: 0;
}

.flow--lg > * + * {
 margin-top: 2em;
}

.flow > * + * {
 margin-top: 1em;
}

.title {
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 min-height: 50vh;
}

#content {
 overflow: visible;
 width: 100%;
}

.heading {
 position: absolute;
 top: 50vh;
 left: 50%;
 transform: translateX(-50%);
 opacity: 0;
}

h1 {
 font-size: clamp(12px, 8vw, 100px);
 text-align: center;
 line-height: 0.67;
 margin: 0 auto;
 font-family: "wild_worldbold";

 .eyebrow {
  font-family: "Open sans", sans-serif;
  font-size: clamp(12px, 3vw, 40px);
  font-weight: 400;
 }
}

.heading p {
 font-family: "wild_worldbold";
 font-size: 15.5vw;
 font-size: clamp(12px, 15.5vw, 250px);
 text-align: center;
 line-height: 0.67;
 margin: 0;
 text-align: center;
 color: #111;
 -webkit-text-stroke-width: 1.5px;
 -webkit-text-stroke-color: white;
 z-index: -10;
}

.intro,
h2,
h3 {
 font-size: var(--step-1);
 font-weight: 500;
}

.text-container {
 position: relative;
}

.text-container p {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 z-index: 999;
 color: transparent;
}

.text-container p:first-child {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 z-index: 999;
 color: white;
}

.image-grid {
 position: relative;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: repeat(3, 1fr);
 grid-column-gap: 0.2rem;
 grid-row-gap: 0.2rem;
 width: 70vw;
 margin: 0 auto;
 padding-top: 40vh;
 z-index: -1;

 .image_cont {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
 }

 img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 150%;
  object-fit: cover;
 }

 .image_cont:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
 }

 .image_cont:nth-child(2) {
  grid-column: 3;
  grid-row: 2;
 }

 .image_cont:nth-child(3) {
  grid-column: 2;
  grid-row: 3;
 }
}

.parallax-images {
 margin-top: 10vh;
 padding: 10rem 1rem;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-column-gap: 1rem;
 grid-row-gap: 20vh;
 align-items: center;
 justify-items: center;

 .image_cont {
  position: relative;
  height: 80vh;
  overflow: hidden;
 }

 img {
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  height: 140%;
  width: 100%;
  object-fit: cover;
 }

 .parallax-text {
  grid-column: 2;
  grid-row: 1;
 }

 .image_cont:nth-child(2) {
  grid-column: 1 / span 1;
  grid-row: 1;
  width: 100%;
 }

 .image_cont:nth-child(3) {
  grid-column: 2 / span 1;
  grid-row: 2;
 }
}

.spacer {
 min-height: 50vh;
 display: flex;
 align-items: center;
 justify-content: center;
}

.stagger {
 font-size: 8vw;
}

.bars {
 display: flex;
 flex-wrap: wrap;
 column-gap: 4rem;

 .bars-text {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 }

 .bars-cont {
  flex: 1 1 500px;
  display: flex;
  width: 100%;
  height: 60vh;
  align-items: flex-end;
 }

 .bar {
  border-radius: 10px;
  margin: 2vw;
  text-align: center;
  flex: 1 0 auto;
  font-size: var(--step-0);
  justify-self: flex-end;
  font-family: "wild_worldbold";
  font-size: clamp(16px, 3vw, 36px);
 }
}

.content {
 border-left: solid 1px white;
 padding: 0.5rem 2rem;
}

.staggered {
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 column-gap: 4rem;

 h3 {
  font-family: "wild_worldbold";
  font-size: clamp(16px, 6vw, 80px);
  letter-spacing: 0.03em;
 }

 &_text {
  flex: 1 1 300px;
 }

 &_demo {
  flex: 1 1 500px;
  display: flex;
  align-items: center;
  justify-content: center;
 }
}

.parallax-slab {
 position: relative;
 height: 500px;
 width: 100%;
 max-height: 500px;
 overflow: hidden;

 img {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 180%;
  object-fit: cover;
 }
}

.v-center {
 display: flex;
 align-items: center;
}

.spacer {
 height: 10vh;
}

```

[View Compiled](https://codepen.io/GreenSock/embed/bGaWjpw?default-tab=result&theme-id=41164#0)

``` cm-s-default
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
 wrapper: "#wrapper",
 content: "#content",
 smooth: 1,
 normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
 ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
 effects: true,
 preventDefault: true
});

gsap.set(".heading", {
 yPercent: -150,
 opacity: 1
});

let tl = gsap.timeline();
let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
let chars = mySplitText.chars;

chars.forEach((char, i) => {
 smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
});

// 💚 This just adds the GSAP link to this pen, don't copy this bit
import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js";
new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollSmoother/" });
// 💚 Happy tweening!

```

ScrollSmoother exploration - Cassie Evans

smooooth

scrolling

scrolling

scrolling

scrolling

scrolling

scrolling

scrolling

![](https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)

![](https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80)

![](https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80)

# with GSAP scrollsmoother

Seamlessly integrated with GSAP and ScrollTrigger. Leveraging native scrolling - no "fake" scrollbars or event hijacking.

## Speed Control

Animate elements along at different speeds, slow them down or make them whizz past.

0.8

0.9

1

1.1

1.2

![](https://assets.codepen.io/756881/smoothscroller-1.jpg)

## Add some lag (the good kind!)

loosen the connection to the scroll to give a feeling of 'follow through.'

### s    t    a    g    g    e    r    .    .    .

## Easy parallax image effects

Pop your images in a container with overflow hidden, size them a little larger than the container and set data-speed to auto. GSAP does the rest.

![](https://assets.codepen.io/756881/neon3.jpg)

![](https://assets.codepen.io/756881/neon2.jpg)

[Learn More](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=v3.11.3](https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=v3.11.3)
2. [https://assets.codepen.io/16327/ScrollTrigger.min.js](https://assets.codepen.io/16327/ScrollTrigger.min.js)
3. [https://assets.codepen.io/16327/ScrollSmoother.min.js?v=94387867](https://assets.codepen.io/16327/ScrollSmoother.min.js?v=94387867)
4. [https://assets.codepen.io/16327/SplitText3.min.js](https://assets.codepen.io/16327/SplitText3.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

```codeBlockLines_p187
ScrollSmoother.create({
  content: "#smooth-content",
  wrapper: "#smooth-wrapper",
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
});

```

## Effects... [​](https://gsap.com/blog/3-10/\#effects "Direct link to Effects...")

ScrollSmoother will integrate seamlessly with **all** your scroll-triggered animations. but we've also added some bonus ScrollSmoother effects. ✨

- **speed -** Great for **parallax** effects! It adjusts the speed at which an element moves vertically while scrolling through the viewport. A speed of 1 is normal speed, 2 is double speed, etc.
- **lag -** Add some lag\* to gently flow elements behind the scroll before they ease back to their natural scroll position.

\* no seriously, trust us. It's the **_good_** kind of lag.

```codeBlockLines_p187
<div data-speed="0.5"></div> <!-- half-speed of scroll -->
<div data-speed="2"></div> <!-- double-speed of scroll -->
<div data-speed="1"></div> <!-- normal speed of scroll -->

<div data-lag="0.5"></div> <!-- takes 0.5 seconds to "catch up" -->
<div data-lag="0.8"></div> <!-- takes 0.8 seconds to "catch up" -->

```

Video Explainer

[Read the docs](https://gsap.com/docs/v3/Plugins/ScrollSmoother) for all the juicy details, or pull up a seat and watch this short explainer video.

Introducing ScrollSmoother for GSAP from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1402333943-1f754b4d962397fdea2cc838c80c9015793a589e8fad21692238774d2ad1c8c7-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Introducing ScrollSmoother for GSAP

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

Intro

00:00

Copy link

Setup

01:06

Copy link

Navigating a smooth scrolling page

03:39

Copy link

Smooth effects

05:16

Copy link

Adding animations

06:49

Copy link

Parallax Effects

07:46

Copy link

Pausing smooth scrolling

08:39

Copy link

Callbacks

09:12

Copy link

'Horizontal' scrolling

11:17

Copy link

Club GreenSock

12:10

Copy link

## Observer [​](https://gsap.com/blog/3-10/\#observer "Direct link to Observer")

The brand new 3.5kb [Observer plugin](https://gsap.com/docs/v3/Plugins/Observer) offers a super-flexible, unified way to sense meaningful events across all (touch/mouse/pointer) devices without wrestling with all the implementation details. Perhaps you want to respond to "scroll-like" user behavior which could be a mouse wheel spin, finger swipe on a touch device, a scrollbar drag, or a pointer press & drag...and of course you need directional data and velocity. No problem! Tell Observer which event types to watch (wheel, touch, pointer, and/or scroll) and it will collect delta values over the course of each requestAnimationFrame tick (debounced for performance by default) and automatically determine the biggest delta and then trigger the appropriate callback(s) like `onUp`, `onDown`, `onDrag`, etc.

Look how easy it is to trigger next()/previous() functions based on when the user swipes up/down or uses their mouse wheel:

```codeBlockLines_p187
Observer.create({
  target: window,         // can be any element (selector text is fine)
  type: "wheel,touch",    // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
  onUp: () => previous(),
  onDown: () => next(),
});

```

## Demo [​](https://gsap.com/blog/3-10/\#demo "Direct link to Demo")

Notice there's no actual scrolling in the demo below but you can use your mouse wheel (or swipe on touch devices) to initiate movement so it "feels" like a scroll:

#### loading...

CodePen Embed - Animated Continuous Sections with GSAP Observer

- [HTML](https://codepen.io/GreenSock/embed/XWzRraJ/875422646f9f12b202cb5037f5cf4b19?default-tab=result&theme-id=41164#html-box)
- [SCSS](https://codepen.io/GreenSock/embed/XWzRraJ/875422646f9f12b202cb5037f5cf4b19?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/XWzRraJ/875422646f9f12b202cb5037f5cf4b19?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/XWzRraJ/875422646f9f12b202cb5037f5cf4b19?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/XWzRraJ/875422646f9f12b202cb5037f5cf4b19?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/XWzRraJ "Edit on CodePen")

``` cm-s-default
<!--
Sections animate in and out on scroll. Scroll up or down and the sections will wrap around after hitting the start or end. Uses GSAP for the animations.
-->

<header>
  <div>Animated Sections</div>
  <div><a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a></div>
</header>
<section class="first">
  <div class="outer">
    <div class="inner">
      <div class="bg one">
        <h2 class="section-heading">Scroll down</h2>
      </div>
    </div>
  </div>

</section>
<section class="second">
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">Animated with GSAP</h2>
      </div>
    </div>
  </div>
</section>
<section class="third">
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">GreenSock</h2>
      </div>
    </div>
  </div>
</section>
<section class="fourth">
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">Animation platform</h2>
      </div>
    </div>
  </div>
</section>
<section class="fifth">
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">Keep scrolling</h2>
      </div>
    </div>
  </div>
</section>
```

``` cm-s-default
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

$bg-gradient: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.3) 100%
);

* {
  box-sizing: border-box;
  user-select: none;
}

a {
  color: #fff;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: white;
  background: black;
  font-family: "Cormorant Garamond", serif;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  color: hsl(0, 0, 80%);
  width: 90vw;
  max-width: 1200px;
}

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  z-index: 3;
  height: 7em;
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(0.66rem, 2vw, 1rem);
  letter-spacing: 0.5em;
}

section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;

  .outer,
  .inner {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-size: cover;
    background-position: center;

    h2 {
      z-index: 2;
    }

    .clip-text {
      overflow: hidden;
    }
  }
}

.first {
  .bg {
    background-image: $bg-gradient,
      url(https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920);
  }
}

.second {
  .bg {
    background-image: $bg-gradient,
      url("https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920");
  }
}

.third {
  .bg {
    background-image: $bg-gradient,
      url(https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920);
  }
}

.fourth {
  .bg {
    background-image: $bg-gradient,
      url(https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920);
  }
}

.fifth {
  .bg {
    background-image: $bg-gradient,
      url("https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920");
    background-position: 50% 45%;
  }
}

h2 * {
  will-change: transform;
}
```

[View Compiled](https://codepen.io/GreenSock/embed/XWzRraJ/875422646f9f12b202cb5037f5cf4b19?default-tab=result&theme-id=41164#0)

``` cm-s-default
gsap.registerPlugin(Observer);

let sections = document.querySelectorAll("section"),
  images = document.querySelectorAll(".bg"),
  headings = gsap.utils.toArray(".section-heading"),
  outerWrappers = gsap.utils.toArray(".outer"),
  innerWrappers = gsap.utils.toArray(".inner"),
  splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })),
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length),
  animating;

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = wrap(index); // make sure it's valid
  animating = true;
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });
  if (currentIndex >= 0) {
    // The first time this function runs, current is -1
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(images[currentIndex], { yPercent: -15 * dFactor })
      .set(sections[currentIndex], { autoAlpha: 0 });
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo([outerWrappers[index], innerWrappers[index]], {
      yPercent: i => i ? -100 * dFactor : 100 * dFactor
    }, {
      yPercent: 0
    }, 0)
    .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
    .fromTo(splitHeadings[index].chars, {
        autoAlpha: 0,
        yPercent: 150 * dFactor
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
      }, 0.2);

  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true
});

gotoSection(0, 1);

// original: https://codepen.io/BrianCross/pen/PoWapLP
// horizontal version: https://codepen.io/GreenSock/pen/xxWdeMK

```

Animated Continuous Sections with GSAP Observer

Animated Sections

[Original By Brian](https://codepen.io/BrianCross/pen/PoWapLP)

## S    c    r    o    l    l        d    o    w    n

## A    n    i    m    a    t    e    d        w    i    t    h            G    S    A    P

## G    r    e    e    n    S    o    c    k

## A    n    i    m    a    t    i    o    n            p    l    a    t    f    o    r    m

## K    e    e    p        s    c    r    o    l    l    i    n    g

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)
2. [https://assets.codepen.io/16327/Observer.min.js](https://assets.codepen.io/16327/Observer.min.js)
3. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText3.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText3.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

Since ScrollTrigger leverages Observer internally for normalizeScroll(), we exposed it via [ScrollTrigger.observe()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.observe()/) so you don't have to load an extra file if you're already using ScrollTrigger.

Video Walkthorugh

Excited? Why don't you **_observe_** this video or check out the [docs](https://gsap.com/docs/v3/Plugins/Observer) (see what we did there?).

Observer from GSAP from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1403446008-eaca5a7bf99dec304e2420f68705731b636a28650a3ab9f8339eacc83fd6e0df-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Observer from GSAP

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

Intro

00:00

Copy link

Setup

01:11

Copy link

Adding some animation

01:59

Copy link

Delta and Velocity

02:25

Copy link

ScrollTrigger.observe

03:10

Copy link

## gsap.quickTo() [​](https://gsap.com/blog/3-10/\#gsapquickto "Direct link to gsap.quickTo()")

If you find yourself calling gsap.to() many times on the same numeric property of the same target, like in a "mousemove" event, you can boost performance by creating a quickTo() function instead. Think of a quickTo() like an optimized function tied to one particular numeric property, where it directly pipes a new number to it.

**Example**

```codeBlockLines_p187
let xTo = gsap.quickTo("#id", "x", {duration: 0.4, ease: "power3"}),
    yTo = gsap.quickTo("#id", "y", {duration: 0.4, ease: "power3"});

document.querySelector("#container").addEventListener("mousemove", e => {
  xTo(e.pageX);
  yTo(e.pageY);
});

```

## Mouse Follower Demo [​](https://gsap.com/blog/3-10/\#mouse-follower-demo "Direct link to Mouse Follower Demo")

#### loading...

CodePen Embed - gsap.quickTo() mouse follower (GSAP 3)

- [HTML](https://codepen.io/GreenSock/embed/xxpbORN?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/xxpbORN?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/xxpbORN?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/xxpbORN?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/xxpbORN?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/xxpbORN "Edit on CodePen")

``` cm-s-default
<div class="flair flair--3"></div>
```

``` cm-s-default
.flair {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}
```

``` cm-s-default
// requires GSAP 3.10.0 or later
// older quickSetter version: https://codepen.io/GreenSock/pen/WNNNBpo

gsap.set(".flair", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".flair", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".flair", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});

// 💚 This just adds the GSAP link to this pen, don't copy this bit
import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js"
new GSAPInfoBar({ link: "https://gsap.com/docs/v3/GSAP/gsap.quickTo()/" });
// 💚 Happy tweening!
```

gsap.quickTo() mouse follower (GSAP 3)

[Learn More](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/)

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js?v=3.10.1a](https://assets.codepen.io/16327/gsap-latest-beta.min.js?v=3.10.1a)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

## ScrollTrigger.normalizeScroll() and ignoreMobileResize [​](https://gsap.com/blog/3-10/\#scrolltriggernormalizescroll-and-ignoremobileresize "Direct link to ScrollTrigger.normalizeScroll() and ignoreMobileResize")

Have you ever run into these problems?:

- Address bar on mobile browsers shows/hides and resizes the viewport, causing jumps
- When scrolling fast, a pinned element seems to shoot past for a brief moment and then jump to the correct pinned position (multi-thread synchronization issues)
- iOS jitter
- Overscroll behavior that seems impossible to prevent on iOS
- Inconsistent momentum scrolling across devices

The powerful new [normalizeScroll()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()) functionality intercepts native browser scroll behavior and handles it on the JavaScript thread instead which solves the problems mentioned above on most devices (iOS Phones in portrait orientation still show/hide the address bar). To enable it, simply:

```codeBlockLines_p187
ScrollTrigger.normalizeScroll(true);

```

To prevent [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) from running (and recalculating start/end positions) when a mobile browser shows/hides its address bar, you can now do:

```codeBlockLines_p187
ScrollTrigger.config({ ignoreMobileResize: true });

```

So easy!

Read more in [the docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()).

## New "\*=" and "/=" relative prefixes [​](https://gsap.com/blog/3-10/\#new--and--relative-prefixes "Direct link to new--and--relative-prefixes")

You've always been able to add or subtract from the current value, like:

```codeBlockLines_p187
gsap.to(".box", {
  x: "+=100", // 100 more than the current value
  y: "-=100", // 100 less than the current value
});

```

...and now you can multiply or divide accordingly:

```codeBlockLines_p187
gsap.to(".box", {
  x: "*=2", // double the current value
  y: "/=2", // halve the current value
});

```

## [​](https://gsap.com/blog/3-10/\#- "Direct link to -")

## And more... [​](https://gsap.com/blog/3-10/\#and-more "Direct link to And more...")

tip

GSAP 3.10 also delivers various bug fixes, so we'd highly recommend [installing the latest version today](https://gsap.com/docs/v3/Installation). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, Github, etc.).

## Resources [​](https://gsap.com/blog/3-10/\#resources "Direct link to Resources")

- [Full release notes on Github](https://github.com/greensock/GSAP/releases/tag/3.10.0)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources)
- [Community forums](https://gsap.com/community/)

Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [ScrollSmoother](https://gsap.com/blog/tags/scroll-smoother)
- [normalizeScroll](https://gsap.com/blog/tags/normalize-scroll)

[Newer Post\\
\\
3.11 release](https://gsap.com/blog/3-11) [Older Post\\
\\
3.9 release](https://gsap.com/blog/3-9)

## Contents

- [Introducing ScrollSmoother.🥳](https://gsap.com/blog/3-10/#introducing-scrollsmoother)
- [Effects...](https://gsap.com/blog/3-10/#effects)
- [Observer](https://gsap.com/blog/3-10/#observer)
- [Demo](https://gsap.com/blog/3-10/#demo)
- [gsap.quickTo()](https://gsap.com/blog/3-10/#gsapquickto)
- [Mouse Follower Demo](https://gsap.com/blog/3-10/#mouse-follower-demo)
- [ScrollTrigger.normalizeScroll() and ignoreMobileResize](https://gsap.com/blog/3-10/#scrolltriggernormalizescroll-and-ignoremobileresize)
- [New "\*=" and "/=" relative prefixes](https://gsap.com/blog/3-10/#new--and--relative-prefixes)
- [And more...](https://gsap.com/blog/3-10/#and-more)
- [Resources](https://gsap.com/blog/3-10/#resources)

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