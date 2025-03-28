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
- [Logout](https://gsap.com/community/logout/?csrfKey=28d7021b9e09f88f0ea75d4086d43725)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=28d7021b9e09f88f0ea75d4086d43725)
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

[Skip to main content](https://gsap.com/blog/3-11/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.11 release

August 15, 2022 · 6 min read

[![Cassie Evans](https://gsap.com/img/cassie-about.jpg)](https://twitter.com/cassiecodes)

[Cassie Evans](https://twitter.com/cassiecodes)

Developer Education

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- [gsap.matchMedia()](https://gsap.com/blog/3-11/#matchmedia) is a **game-changer** for responsive, accessible-friendly animations.
- [gsap.context()](https://gsap.com/blog/3-11/#context) that greatly simplifies setup and reverting of a bunch of animations/ScrollTriggers, especially for React developers!
- You can now [revert()](https://gsap.com/blog/3-11/#revert) any animation to return the targets to their original state.
- Set [lockAxis: true](https://gsap.com/blog/3-11/#lockAxis) on an Observer to make it lock into whichever direction the user first drags

## Responsive, accessibility-friendly animations with gsap.matchMedia() [​](https://gsap.com/blog/3-11/\#responsive-accessibility-friendly-animations-with-gsapmatchmedia "Direct link to Responsive, accessibility-friendly animations with gsap.matchMedia()")

One of the hardest challenges for web-animators is crafting animations that work seamlessly on all screen sizes **_and_** respect users [motion preferences](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). Well, not anymore!

[gsap.matchMedia()](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) lets you easily tuck setup code into a function that **_only_** executes when a particular [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) matches and then when it no longer matches, all the GSAP animations and [ScrollTriggers](https://gsap.com/docs/v3/Plugins/ScrollTrigger) created during that function 's execution get **reverted automatically**! Customizing for mobile/desktop or `prefers-reduced-motion` is remarkably simple and incredibly flexible.

Video Walkthrough

Introducing gsap.matchMedia() from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1488736084-8c6d72d5898452a571a11057e6273bea815e6747def74d4c69e03fb7219041d7-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Introducing gsap.matchMedia()

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Like

Add to Watch Later

Share

Play

Show controls

CC/SubtitlesTranscriptSettingsChaptersPicture-in-PictureFullscreen

[Watch on Vimeo](https://vimeo.com/739773785)

# CC/Subtitles

Off

English (United Kingdom) CC

English (auto-generated) CC

Customize

Preview

# Settings

QualityAuto

SpeedNormal

# Chapters

Creating responsive animations

01:08

Copy link

Conditions

03:58

Copy link

Playing animations through once

05:00

Copy link

Prefers reduced motion

06:00

Copy link

Interactivity and cleanup

07:44

Copy link

Scope

09:58

Copy link

React example

10:35

Copy link

matchMediaRefresh

11:00

Copy link

AAA WCAG - animation toggle

11:30

Copy link

### Basic syntax [​](https://gsap.com/blog/3-11/\#basic-syntax "Direct link to Basic syntax")

```codeBlockLines_p187
// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 800px)", () => {

  // this setup code only runs when viewport is at least 800px wide
  gsap.to(...);
  gsap.from(...);
  ScrollTrigger.create({...});

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});

// later, if we need to revert all the animations/ScrollTriggers...
mm.revert();

```

## Conditions syntax - 💪 POWERFUL 💪 [​](https://gsap.com/blog/3-11/\#conditions-syntax-----powerful- "Direct link to conditions-syntax-----powerful-")

What if your setup code for various media queries is mostly identical but a few key values are different? If you `add()` each media query individually, you may end up with a lot of **redundant code**. Just use the conditions syntax! Instead of a string for the first parameter, use an **object with arbitrarily-named conditions** and then the function will get called when **any** of those conditions match and you can check each condition as a boolean (matching or not). The conditions object could look like this:

```codeBlockLines_p187
{
  isDesktop: "(min-width: 800px)",
  isMobile: "(max-width: 799px)",
  reduceMotion: "(prefers-reduced-motion: reduce)"
}

```

Name your conditions whatever you want.

Below we 'll set the breakpoint at 800px wide and honor the user 's `prefers-reduced-motion` preference, leveraging the same setup code and using conditional logic where necessary:

```codeBlockLines_p187
let mm = gsap.matchMedia(),
    breakPoint = 800;

mm.add({

  // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
  isDesktop: `(min-width: ${breakPoint}px)`,
  isMobile: `(max-width: ${breakPoint - 1}px)`,
  reduceMotion: "(prefers-reduced-motion: reduce)"

}, (context) => {

  // context.conditions has a boolean property for each condition defined above indicating if it 's matched or not.
  let { isDesktop, isMobile, reduceMotion } = context.conditions;

  gsap.to(".box", {
    rotation: isDesktop ? 360 : 180, // spin further if desktop
    duration: reduceMotion ? 0 : 2 // skip to the end if prefers-reduced-motion
  });

  return () => {
    // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
  }
});

```

Nice and concise!

#### loading...

CodePen Embed - gsap.matchMedia() Demo

- [HTML](https://codepen.io/GreenSock/embed/KKoMpMv?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/KKoMpMv?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/KKoMpMv?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/KKoMpMv?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/KKoMpMv?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/KKoMpMv "Edit on CodePen")

``` cm-s-default
<header>
  <h1>gsap.matchMedia()</h1>
  <p class="lead">When the viewport is less than 800px, the "Mobile" &lt;div&gt; will animate. Otherwise, "Desktop" will.</p>
</header>
<section class="gray">
  <div class="mobile">Mobile</div>
  <div class="desktop">Desktop</div>
</section>

<section class="bottom lead">
  <p><strong>Pretty cool, right?</strong></p>
  <p>Resize your screen. 800px is the break point. It's all dynamic!</p>
  <p>Check out <a href="https://greensock.com">GSAP</a> today. </p>
</section>
```

``` cm-s-default
/* external styles https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css */

body {
  text-align: center;
  font-weight: 300;
}

header {
  padding: 0 1rem;
  margin: 0 auto;
}

h1 {
  margin: 0;
  padding: 35px 10px;
  font-weight: 400;
}

.gray {
  position: relative;
  width: 100%;
  height: 100vh;
}

.mobile, .desktop {
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background: var(--purple);
  position: absolute;
  z-index: 0;
  left: 30%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  line-height: 100px;
  color: white;
}

.desktop {
  left: 70%;
  background: var(--green);
}

.gray p {
  margin: 0;
  padding: 30px;
}

.bottom {
  width: 100%;
  text-align: center;
  padding: 150px 30px;
  font-size: 1.5em;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  font-weight: 400;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 799px) {
  .mobile, .desktop {
    width: 100px;
  }
}

```

``` cm-s-default
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia(),
    breakPoint = 800;

mm.add({
  // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
  isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
  isMobile: `(max-width: ${breakPoint - 1}px) and (prefers-reduced-motion: no-preference)`
}, (context) => {
  // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
  let { isDesktop, isMobile } = context.conditions,
      target = isDesktop ? ".desktop" : ".mobile",
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gray",
          scrub: 1,
          end: "200%",
          pin: true
        }
      });
  tl.to(target, {scale: 2, rotation: 360})
    .to(target, {scale: 1});

  // works for non-ScrollTrigger animations too:
  gsap.to(target, {backgroundColor: "#2c7ad2", duration: 0.8, ease: "none", repeat: -1, yoyo: true});

  return () => {
    // optionally return a cleanup function that will be called when the media query no longer matches
  }
});

```

gsap.matchMedia() Demo

# gsap.matchMedia()

When the viewport is less than 800px, the "Mobile" <div> will animate. Otherwise, "Desktop" will.

Mobile

Desktop

**Pretty cool, right?**

Resize your screen. 800px is the break point. It's all dynamic!

Check out [GSAP](https://greensock.com/) today.

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/dunkelweb/fullpage/ZEQyQpy?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)
2. [https://assets.codepen.io/16327/ScrollTrigger.min.js](https://assets.codepen.io/16327/ScrollTrigger.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

You can set a scope so that all selector text inside the function maps only to descendants of a particular element or React Ref or Angular ElementRef. This can greatly simplify your code. See the [full documentation](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) for all the details.

## gsap.context() [​](https://gsap.com/blog/3-11/\#gsapcontext "Direct link to gsap.context()")

Video Walkthrough

Easy cleanup with gsap.context() from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1498743304-7eb43699dedc1552c51a2063f3ebf09640376a33dd880679224e2c5b0ca12112-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Easy cleanup with gsap.context()

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Like

Add to Watch Later

Share

Play

Show controls

CC/SubtitlesTranscriptSettingsChaptersPicture-in-PictureFullscreen

[Watch on Vimeo](https://vimeo.com/745111156)

# CC/Subtitles

Off

English (auto-generated) CC

Customize

Preview

# Settings

QualityAuto

SpeedNormal

# Chapters

Intro

00:08

Copy link

.revert()

00:42

Copy link

gsap.context()

02:32

Copy link

context() and React

03:23

Copy link

Optional scope param

04:45

Copy link

Adding to a context

05:30

Copy link

A [gsap.context()](https://gsap.com/docs/v3/GSAP/gsap.context()) offers two key benefits:

- **Collects all GSAP animations and [ScrollTriggers](https://gsap.com/docs/v3/Plugins/ScrollTrigger)** that are created within the supplied function so that you can easily `revert()` or `kill()` **ALL** of them at once. No need to keep track of a bunch of variables, Arrays, etc. This is particularly useful in React modules or anywhere you need to be able to "clean up" by reverting elements to their original state.
- \[optionally\] **Scopes all selector text to a particular Element or Ref**. This can help simplify your code quite a bit and avoid needing to create lots of [Refs](https://reactjs.org/docs/refs-and-the-dom.html) in React/Angular. Any GSAP-related selector text inside the supplied function will only apply to descendants of the Element/Ref.

Let 's say you 've got a **big** block of GSAP code that 's creating a bunch of different animations and you need to be able to `revert()` them all...

```codeBlockLines_p187
let ctx = gsap.context(() => {
 gsap.to(...);
 gsap.from(...);
 gsap.timeline().to(...).to(...);
 ...
});

// then later...
ctx.revert(); // BOOM! Every GSAP animation created in that function gets reverted!

```

This is effectively a silver bullet for the React 18 ["double-call of useEffect() in Strict Mode"](https://gsap.com/community/topic/31712-simple-opacity-fade-doesnt-work-in-react) issue that normally breaks `from()` logic - just call `revert()` on the Context in your `useEffect()` cleanup function:

#### loading...

CodePen Embed - gsap.context() + React = 💚

- [HTML](https://codepen.io/GreenSock/embed/xxWRjyq?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/xxWRjyq?default-tab=result&theme-id=41164#css-box)
- [Babel](https://codepen.io/GreenSock/embed/xxWRjyq?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/xxWRjyq?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/xxWRjyq?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/xxWRjyq "Edit on CodePen")

``` cm-s-default
<div id="root"></div>
```

``` cm-s-default
body{display:flex;align-items:center;justify-content:center;min-height:100vh;}
```

``` cm-s-default
const { useEffect, useRef, StrictMode } = React;
const { createRoot } = ReactDOM;

console.clear();
const root = createRoot(document.getElementById("root"));
let callCount = 0;

function App() {
  const component = useRef(null); // we only need a ref for the root-level element of this component so we can use selector text for everything else.

  useEffect(() => {
    console.log("useEffect() call", ++callCount, "(React 18 strict mode calls twice!)");

    // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
    // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...))
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap.from("h1", { // <- selector text, scoped to this component!
        opacity: 0,
        y: 100,
        ease: "power3",
        duration: 2
      });
    }, component); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <div ref={component} className="App">
      <h1>gsap.context() + React = 💚</h1>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

[View Compiled](https://codepen.io/GreenSock/embed/xxWRjyq?default-tab=result&theme-id=41164#0)

gsap.context() + React = 💚

# gsap.context() + React = 💚

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/litjog/fullpage/PoQPmbq?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://unpkg.com/react@18.2.0/umd/react.development.js](https://unpkg.com/react@18.2.0/umd/react.development.js)
2. [https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js](https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js)
3. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

See the [full documentation](https://gsap.com/docs/v3/GSAP/gsap.context()) for all the details.

## revert() any animation [​](https://gsap.com/blog/3-11/\#revert-any-animation "Direct link to revert() any animation")

What if you want to revert an element back to its state **BEFORE** it was animated? You could just `animation.progress(0)`, right? _Sort of_. Consider this element:

```codeBlockLines_p187
<div class="box"></div>

```

**No inline styles at all**. The opacity is 1 (the default) and then you do this:

```codeBlockLines_p187
// fade out
let tween = gsap.to(".box", {opacity: 0});

```

Now let 's try getting back to the original state:

```codeBlockLines_p187
tween.progress(0).pause();

```

That does indeed set it back to the starting values that GSAP parsed from the computed style:

```codeBlockLines_p187
<!-- inline style is still present -->
<div class="box" style="opacity: 1"></div>

```

But that means **it** **still has inline styles**. Usually that doesn 't matter, but perhaps a media query CSS rule sets opacity to 0.5 on that element. Doh! The inline style will overrule the class rule. So we need a way to have a tween/timeline keep track of the original inline styles and **REMOVE** the ones that it added. That requires a new method because `progress(0)` _SHOULD_ set inline styles to ensure the state is what it 's supposed to be at that point in the animation.

### Solution: animation.revert() [​](https://gsap.com/blog/3-11/\#solution-animationrevert "Direct link to Solution: animation.revert()")

GSAP 3.11 adds a new `.revert()` method to all Tweens and Timelines, so it 's as simple as:

```codeBlockLines_p187
animation.revert(); // removes inline styles that were added by the animation

```

## Observer gets lockAxis feature [​](https://gsap.com/blog/3-11/\#observer-gets-lockaxis-feature "Direct link to Observer gets lockAxis feature")

Set `lockAxis: true` on an Observer and it 'll watch the direction of the very first drag move (with type: "pointer" and/or "touch") and lock into that direction until the user releases the pointer/touch. There 's even an `onLockAxis()` callback that you can tie into.

#### loading...

CodePen Embed - Observer lockAxis Demo

- [HTML](https://codepen.io/GreenSock/embed/BarGQgw?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/BarGQgw?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/BarGQgw?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/BarGQgw?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/BarGQgw?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/BarGQgw "Edit on CodePen")

``` cm-s-default
<div class="box">Drag Me!</div>
```

``` cm-s-default
.box {
  width: 160px;
  height: 90px;
  border-radius: 5px;
  background: var(--purple);
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  line-height: 100px;
  color: white;
  user-select: none;
  cursor: grab;
}
```

``` cm-s-default
gsap.registerPlugin(Observer);

let xSetter = gsap.quickSetter(".box", "x", "px");
let ySetter = gsap.quickSetter(".box", "y", "px");

Observer.create({
  target: ".box",
  type: "pointer,touch",
  lockAxis: true,
  dragMinimum: 3,
  onLockAxis(self) {
    console.log("locked to axis", self.axis);
  },
  onPress(self) {
    self.pressX = gsap.getProperty(self.target, "x");
    self.pressY = gsap.getProperty(self.target, "y");
  },
  onChangeX(self) {
    xSetter(self.pressX + self.x - self.startX);
  },
  onChangeY(self) {
    ySetter(self.pressY + self.y - self.startY);
  }
});
```

Observer lockAxis Demo

Drag Me!

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/gOWxmWG.css](https://codepen.io/GreenSock/pen/gOWxmWG.css)

### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://assets.codepen.io/16327/Observer.min.js?v=3.11.1](https://assets.codepen.io/16327/Observer.min.js?v=3.11.1)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

#### And more... [​](https://gsap.com/blog/3-11/\#and-more "Direct link to And more...")

tip

GSAP 3.11 also delivers various bug fixes, so we 'd highly recommend [installing the latest version today](https://gsap.com/docs/v3/Installation). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, Github, etc.).

## Resources [​](https://gsap.com/blog/3-11/\#resources "Direct link to Resources")

- [Full release notes on Github](https://github.com/greensock/GSAP/releases/tag/3.11.0)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources)
- [Community forums](https://gsap.com/community/)

#### Happy tweening! [​](https://gsap.com/blog/3-11/\#happy-tweening "Direct link to Happy tweening!")

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [matchMedia](https://gsap.com/blog/tags/match-media)
- [context](https://gsap.com/blog/tags/context)

[Newer Post\\
\\
3.12 release](https://gsap.com/blog/3-12) [Older Post\\
\\
3.10 release](https://gsap.com/blog/3-10)

## Contents

- [Responsive, accessibility-friendly animations with gsap.matchMedia()](https://gsap.com/blog/3-11/#responsive-accessibility-friendly-animations-with-gsapmatchmedia)
  - [Basic syntax](https://gsap.com/blog/3-11/#basic-syntax)
- [Conditions syntax - 💪 POWERFUL 💪](https://gsap.com/blog/3-11/#conditions-syntax-----powerful-)
- [gsap.context()](https://gsap.com/blog/3-11/#gsapcontext)
- [revert() any animation](https://gsap.com/blog/3-11/#revert-any-animation)
  - [Solution: animation.revert()](https://gsap.com/blog/3-11/#solution-animationrevert)
- [Observer gets lockAxis feature](https://gsap.com/blog/3-11/#observer-gets-lockaxis-feature)
- [Resources](https://gsap.com/blog/3-11/#resources)

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