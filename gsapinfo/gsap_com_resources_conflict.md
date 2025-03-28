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
- [Logout](https://gsap.com/community/logout/?csrfKey=9378cafca4658649410449f3c0ab4da1)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=9378cafca4658649410449f3c0ab4da1)
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

[Skip to main content](https://gsap.com/resources/conflict/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

- [placeholder](https://gsap.com/resources/)
- Quick Start
- [Installation](https://gsap.com/docs/v3/Installation)
- [YouTube Channel](https://www.youtube.com/@GreenSockLearning)
- [Trial the Club Plugins](https://gsap.com/resources/trial)
- [Demos / Starter Templates](https://gsap.com/demos)
- [Cheatsheet](https://gsap.com/cheatsheet)
- Getting Started
- [Your first animation](https://gsap.com/resources/get-started)
- [Easing](https://gsap.com/resources/getting-started/Easing)
- [Staggers](https://gsap.com/resources/getting-started/Staggers)
- [Sequencing animations](https://gsap.com/resources/getting-started/timelines)
- [Control and Callbacks](https://gsap.com/resources/getting-started/control)
- Plugins
- [What's a plugin?](https://gsap.com/resources/Plugins/)
- [ScrollTrigger tips & mistakes](https://gsap.com/resources/st-mistakes)
- Diving deeper
- [Accessibility](https://gsap.com/resources/a11y)
- [Handling conflicting tweens](https://gsap.com/resources/conflict)
- [Avoiding FOUC](https://gsap.com/resources/fouc)
- [immediateRender](https://gsap.com/resources/immediaterender)
- [Common GSAP mistakes](https://gsap.com/resources/mistakes)
- [The Position Parameter](https://gsap.com/resources/position-parameter)
- [Keyframes](https://gsap.com/resources/keyframes)
- Using GSAP with...
- [JS Frameworks](https://gsap.com/resources/frameworks)
- [React](https://gsap.com/resources/React)

- [SVG](https://gsap.com/resources/svg)
- [Webflow](https://gsap.com/resources/Webflow)
- [Wordpress](https://gsap.com/resources/Wordpress)
- and more...
- [updating to GSAP 3](https://gsap.com/resources/3-migration)

- Handling conflicting tweens

On this page

# Handling conflicting tweens

tip

Have you ever been in a situation with GSAP where you needed a higher level of control over conflicting tweens? If you're just creating linear, self-playing animations, the default overwrite mode of false will work just fine for you. However, in cases where you are creating tweens dynamically based on user interaction or random events you may need finer control over how conflicts are resolved.

Overwriting refers to how GSAP handles conflicts between **multiple tweens** on the **same properties** of the **same targets** at the **same time**. The video below explains GSAP's overwrite modes and provides visual examples of how they work.

Video Walkthrough

Overwriting tweens in GSAP from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1064838574-2ef24bd74b59ee012ba0f1e8f844a04a7d1214d0489cae8fccf625da58395e5c-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Overwriting tweens in GSAP

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Share

Play

Show controls

SettingsPicture-in-PictureFullscreen

# Settings

QualityAuto

## GSAPs 3 Overwrite Modes [​](https://gsap.com/resources/conflict/\#gsaps-3-overwrite-modes "Direct link to GSAPs 3 Overwrite Modes")

- **`false`** (default): No overwriting occurs and multiple tweens can try to animate the same properties of the same target at the same time. One way to think of it is that the tweens remain "fighting each other" until one ends.
- **`true`**: Any existing tweens that are animating the same target (regardless of which properties are being animated) will be killed immediately.
- **`"auto"`**: Only the _conflicting_ parts of an existing tween will be killed. If tween1 animates the x and rotation properties of a target and then tween2 starts animating only the x property of the same targets and `overwrite: "auto"` is set on the second tween, then the rotation part of tween1 will remain but the x part of it will be killed.

## Setting Overwrite Modes [​](https://gsap.com/resources/conflict/\#setting-overwrite-modes "Direct link to Setting Overwrite Modes")

```codeBlockLines_p187
// Set overwrite on a tween
gsap.to(".line", { x: 200, overwrite: true });

// Set overwrite globally for all tweens
gsap.defaults({ overwrite: true });

// Set overwrite for all tweens in a timeline
const tl = gsap.timeline({ defaults: { overwrite: true } });

```

Below is the demo used in the video. [Open it in a new tab](https://codepen.io/snorkltv/pen/XWNRXqd) to experiment with the different overwrite modes

#### loading...

CodePen Embed - overwrite demo

- [HTML](https://codepen.io/GreenSock/embed/XWNRXqd?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/XWNRXqd?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/XWNRXqd?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/XWNRXqd?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/XWNRXqd?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/snorkltv/pen/XWNRXqd "Edit on CodePen")

``` cm-s-default
<img id="herman" width="120" height="125" src="https://assets.codepen.io/32887/herman.svg" />

<div class="nav">
<button id="moveBack">move back </button>
<button id="restart">restart </button>
  </div>

```

``` cm-s-default
* {
  position:relative;
}

html, body {
  padding:10px;
  width:100%;
  height:100%;
  overflow:hidden;


}

body {
  margin:0;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#87e0fd+0,53cbf1+40,0690d6+100 */
background: #87e0fd; /* Old browsers */
background: -moz-linear-gradient(top,  #87e0fd 0%, #53cbf1 40%, #0690d6 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #87e0fd 0%,#53cbf1 40%,#0690d6 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #87e0fd 0%,#53cbf1 40%,#0690d6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#0690d6',GradientType=0 ); /* IE6-9 */

}

.nav {
  z-index:10000;
  height:80px;
  background:rgba(0, 0, 0, 0.0);
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}

button {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color:#ffec64;
  border-radius:6px;
  border:1px solid #ffaa22;
  display:inline-block;
  cursor:pointer;
  color:#333333;
  font-family:Arial;
  font-size:21px;
  font-weight:bold;
  padding:12px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #ffee66;
  margin:10px;
}
button:hover {
  background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color:#ffab23;
}
button:active {
  position:relative;
  top:1px;
}

#logo {


}
```

``` cm-s-default
let tween = gsap.to("#herman", {rotation:720, x:window.innerWidth-150, duration:12, ease:"none", onUpdate:function(){
    console.log("tween update")
  }})

moveBack.addEventListener("click", function() {
  //experiment with different overwrite modes: true, false, "auto"
  gsap.to("#herman", {x:0, overwrite:"auto", duration:2, onUpdate:function(){
    console.log("moveBack update")
  }})
})

restart.addEventListener("click", function(){
  tween.restart()
})

```

overwrite demo![](https://assets.codepen.io/32887/herman.svg)

move back restart

[![](https://assets.codepen.io/32887/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1559694368&width=256)](https://codepen.io/snorkltv)

This Pen is owned by [Snorkl.tv](https://codepen.io/snorkltv) on [CodePen](https://codepen.io/).



[See more by @snorkltv on CodePen](https://codepen.io/snorkltv)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js)
2. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CustomEase3.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CustomEase3.min.js)
3. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CustomWiggle3.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CustomWiggle3.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

Hopefully this article helps you better understand how much control GSAP gives you. Overwrite modes are one of those features that you may not need that often, but when you do, they can save you hours of trouble writing your own solution.

tip

For more tips like this and loads of deep-dive videos designed to help you quickly master GSAP, check out this course bundle from our friends at [CreativeCodingClub.com](https://www.creativecodingclub.com/bundles/creative-coding-club?ref=44f484).

[Previous\\
\\
Accessibility](https://gsap.com/resources/a11y) [Next\\
\\
Avoiding FOUC](https://gsap.com/resources/fouc)

## Contents

- [GSAPs 3 Overwrite Modes](https://gsap.com/resources/conflict/#gsaps-3-overwrite-modes)
- [Setting Overwrite Modes](https://gsap.com/resources/conflict/#setting-overwrite-modes)

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