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
- [Logout](https://gsap.com/community/logout/?csrfKey=63a220879d5afa1da07bc87ad0a6de6a)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=63a220879d5afa1da07bc87ad0a6de6a)
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

[Skip to main content](https://gsap.com/resources/getting-started/Easing/#__docusaurus_skipToContent_fallback)

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

- Easing

# Easing

**Easing is possibly the most important part of motion design**. A well-chosen ease will add personality and breathe life into your animation.

Take a look at the difference between no ease and a bounce ease in the demo below! The green box with no ease spins around at a consistent speed, whereas the purple box with the 'bounce' ease revs up, races along and then bounces to a stop.

```codeBlockLines_p187
gsap.to(".green", { rotation: 360, duration: 2, ease: "none" });

gsap.to(".purple", { rotation: 360, duration: 2, ease: "bounce.out" });

```

#### loading...

CodePen Embed - Easing

- [HTML](https://codepen.io/GreenSock/embed/gOvdzLK?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/gOvdzLK?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/gOvdzLK?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/gOvdzLK?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/gOvdzLK?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/gOvdzLK "Edit on CodePen")

``` cm-s-default
<div class="box green">linear</div>
<div class="box purple">bounce</div>

```

``` cm-s-default
/* Global styles come from external css https://codepen.io/GreenSock/pen/gOWxmWG */

body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

.box {
  display: block;
    display: flex;
  align-items: center;
  justify-content: center;
}

```

``` cm-s-default
gsap.to(".green", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
  ease: 'none'
});

gsap.to(".purple", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
  ease: 'bounce.out'
});

```

Easing

linear

bounce

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/gOWxmWG.css](https://codepen.io/GreenSock/pen/gOWxmWG.css)

### External JavaScript

1. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

Under the hood, the "ease" is a mathematical calculation that controls the rate of change during a tween. But don't worry, we do all the math for you! You just sit back and select the ease that best fits your animation.

To use the ease visualizer, simply click on the ease name that you'd like to use. You can also click on the underlined text to change the values and type of ease.

## Ease Visualizer

value: -500

progress: 1.00

power0

power1

power2

power3

power4

Preview

View: graphclockboxgraph

Show editing hints

- Add point: ALT-CLICK on line
- Toggle smooth/corner: ALT-CLICK anchor
- Get handle from corner anchor: ALT-DRAG
- Toggle select: SHIFT-CLICK anchor
- Delete anchor: press DELETE key
- Undo: CTRL-Z

#### [Core](https://gsap.com/core/)

none

power1

ininOutoutout

power2

power3

power4

back

bounce

circ

elastic

expo

sine

steps

#### Extra

rough

slow

expoScale

CustomEase

#### [Club GSAP](https://gsap.com/pricing/)

CustomBounce

CustomWiggle

Share Ease

// click to modify the underlined values

gsap.to(target, {

duration:0.512.55102.5,

ease: "backbouncecircelasticexpononequad/power1Cubic/power2quart/power3strong/Quint/power4sineroughslowstepsexpoScaleCustomCustomBounceCustomWigglepower1.ininOutoutout",none({
template:backbouncecircelasticexponone/linearquad/power1Cubic/power2quart/power3strong/Quint/power4sinenone.ininOutoutoutnone,

strength: 0.20.511.521,

points:10205010020020,

taper:noneinoutbothnone,

randomize:true,

clamp:false

})",
(0.10.30.50.70.90.7,0.10.40.7120.7,false)",(scale from 1 to 2scale from 0.5 to 7scale from 10 to 2>0.5,7,nonepower1.inpower1.outpower1.inOutpower2.inpower2.outpower2.inOut>none)",(2612204012)",(11.21.51.7521,0.10.20.30.40.50.7510.3)",(11.41.72341.7)",create("custom", "0.104,0.204,0.492,1"),create("myWiggle", {
wiggles:1510152010,

type:easeOuteaseInOutanticipateuniformrandomeaseInOut

}),
create("myBounce", {
strength:0.10.50.70.910.7,

endAtStart:truefalsefalse,

squash:12341,

squashID: "myBounce-squash"

}),

y: -500

rotation: 360

x: "400%"

});

none (linear)

nonenonenone

power1

outinOutin

power2

outinOutin

power3

outinOutin

power4

outinOutin

back

outinOutin

elastic

outinOutin

bounce

outinOutin

Other

roughslowsteps

circ

outinOutin

expo

outinOutin

sine

outinOutin

Video Walkthrough

GSAP Ease Visualizer - YouTube

snorklTV

11.3K subscribers

[GSAP Ease Visualizer](https://www.youtube.com/watch?v=jfKf7EtMbxI)

snorklTV

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=jfKf7EtMbxI&embeds_referring_euri=https%3A%2F%2Fgsap.com%2F)

0:00

0:00 / 14:03•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=jfKf7EtMbxI "Watch on YouTube")

Huge thanks to Carl for providing this video. We highly recommend their extensive GSAP training at [CreativeCodingClub.com](https://www.creativecodingclub.com/bundles/creative-coding-club?ref=44f484). Enroll today in their [Free GSAP course](https://www.creativecodingclub.com/courses/FreeGSAP3Express?ref=44f484) and discover the joy of animating with code.

## Ease types [​](https://gsap.com/resources/getting-started/Easing/\#ease-types "Direct link to Ease types")

For most eases you'll be able to specify a type. There are three types of ease: `in`, `out` and `inOut`. These control the momentum over the course of the ease.

tip

Ease **out** animations like `"power1.out"` are the best for UI transitions; they're fast to start which helps the UI feel responsive, and then they ease out towards the end giving a natural feeling of friction.

```codeBlockLines_p187
ease: "power1.in"
// start slow and end faster, like a heavy object falling

ease: "power1.out"
// start fast and end slower, like a rolling ball slowly coming to a stop

ease: "power1.inOut"
// start slow and end slow, like a car accelerating and decelerating

```

Can't get your ease working?

["SlowMo"](https://gsap.com/docs/v3/Eases/SlowMo) ease, ["RoughEase"](https://gsap.com/docs/v3/Eases/RoughEase), ["ExpoScaleEase"](https://gsap.com/docs/v3/Eases/ExpoScaleEase), and custom eases ( ["CustomEase"](https://gsap.com/docs/v3/Eases/CustomEase), ["CustomBounce"](https://gsap.com/docs/v3/Eases/CustomBounce), and ["CustomWiggle"](https://gsap.com/docs/v3/Eases/CustomWiggle)) are not in the core. **They must be loaded separately.** See the [installation page](https://gsap.com/docs/v3/Installation) for details.

[Previous\\
\\
Your first animation](https://gsap.com/resources/get-started) [Next\\
\\
Staggers](https://gsap.com/resources/getting-started/Staggers)

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