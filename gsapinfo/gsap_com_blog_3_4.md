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
- [Logout](https://gsap.com/community/logout/?csrfKey=4268292483d2014826c51f61acdc4c38)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=4268292483d2014826c51f61acdc4c38)
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

[Skip to main content](https://gsap.com/blog/3-4/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.4 release

June 13, 2020 · 3 min read

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- Accommodating different setups for various screen sizes, like a mobile version and desktop version - [ScrollTrigger.matchMedia()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia())
- Batching and staggering elements that enter the viewport, similar to what's often done with IntersectionObserver - [ScrollTrigger.batch()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch())
- Integrating with smooth scrolling libraries - [ScrollTrigger.scrollerProxy()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy())

## GSAP 3.4 has arrived with some significant improvements to [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): [​](https://gsap.com/blog/3-4/\#gsap-34-has-arrived-with-some-significant-improvements-to-scrolltrigger "Direct link to gsap-34-has-arrived-with-some-significant-improvements-to-scrolltrigger")

## ScrollTrigger.matchMedia() [ScrollTrigger.matchMedia()](https://gsap.com/blog/3-4/\#matchMedia) [​](https://gsap.com/blog/3-4/\#scrolltriggermatchmedia-scrolltriggermatchmedia "Direct link to scrolltriggermatchmedia-scrolltriggermatchmedia")

You can use standard [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to seamlessly transition between different ScrollTriggers. It's surprisingly simple to set up and let ScrollTrigger automatically handle all of the creating, undoing, and destroying for you.

Understanding ScrollTrigger.matchMedia() from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/922189982-918896bcb8b2597af19d21f670a1b592aae9749490569a2163b122310772c5c8-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Understanding ScrollTrigger.matchMedia()

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

matchMedia()

00:00

Copy link

saveStyles()

05:48

Copy link

### Basic setup [​](https://gsap.com/blog/3-4/\#basic-setup "Direct link to Basic setup")

```codeBlockLines_p187
ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 800px)": function() {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  },

  // mobile
  "(max-width: 799px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
  },

  // all
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }

});

```

#### loading...

CodePen Embed - ScrollTrigger.matchMedia() Demo

- [HTML](https://codepen.io/GreenSock/embed/GRoyWBd?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/GRoyWBd?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/GRoyWBd?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/GRoyWBd?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/GRoyWBd?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/GRoyWBd "Edit on CodePen")

``` cm-s-default

  <h1>ScrollTrigger.matchMedia() Demo</h1>
  <h2>DEPRECATED IN 3.11 IN FAVOUR OF <a href="https://greensock.com/docs/v3/GSAP/gsap.matchMedia()">GSAP.MATCHMEDIA</a></h2>

<section class="gray">
  <p>When the viewport is less than 800px, the "Mobile" div will animate. Otherwise, the "Desktop" one will.</p>
  <div class="mobile">Mobile</div>
  <div class="desktop">Desktop</div>
</section>

<section class="bottom">
  <p><strong>Pretty cool, right?</strong></p>
  <p>Resize your screen. 800px is the break point. It's all dynamic!</p>
  <p>Check out <a href="https://greensock.com/scrolltrigger">ScrollTrigger</a> today. </p>
</section>
```

``` cm-s-default
body {
  text-align: center;
}
h1 {
  margin: 0;
  padding: 35px 10px;
  font-size: 40px;
  font-weight: 400;
}

.gray {
  width: 100%;
  height: 100vh;
}
.mobile, .desktop {
  width: 200px;
  height: 100px;
  background: var(--color-lilac);
  position: absolute;
  z-index: 0;
  left: 30%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  line-height: 100px;
  color: var(--color-just-black);
}
.desktop {
  left: 70%;
  background-color: var(--color-shockingly-green);
}

.gray p {
  font-size: 1.4em;
  margin: 0;
  padding: 30px;
  line-height: 1.4em;
}

.bottom {
  width: 100%;
  text-align: center;
  padding: 150px 30px;
  font-size: 1.5em;
  box-sizing: border-box;
}

```

``` cm-s-default
gsap.registerPlugin(ScrollTrigger);

// if there are objects that may get inline styles added (like via tweens) that should get reverted, use ScrollTrigger.saveStyles() initially so that the current inline styles are saved for later reversion. It's not always necessary, but it goes well with ScrollTrigger.matchMedia() so we figured it'd make sense to show it here (it's not needed in this demo)
ScrollTrigger.saveStyles(".mobile, .desktop");

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 800px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    let tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".gray",
          scrub: 1,
          end: "200%",
          pin: true
        }
      });
    tl.to(".desktop", {scale: 2, rotation: 360})
      .to(".desktop", {scale: 1});
  },

  // mobile
  "(max-width: 799px)": function() {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
    let tl = gsap.timeline({
        scrollTrigger:{
          trigger: ".gray",
          scrub: 1,
          end: "200%",
          pin: true
        }
      });
    tl.to(".mobile", {scale: 2, rotation: 360})
      .to(".mobile", {scale: 1});
  },

  // all
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }

});

```

ScrollTrigger.matchMedia() Demo

# ScrollTrigger.matchMedia() Demo

## DEPRECATED IN 3.11 IN FAVOUR OF [GSAP.MATCHMEDIA](https://greensock.com/docs/v3/GSAP/gsap.matchMedia())

When the viewport is less than 800px, the "Mobile" div will animate. Otherwise, the "Desktop" one will.

Mobile

Desktop

**Pretty cool, right?**

Resize your screen. 800px is the break point. It's all dynamic!

Check out [ScrollTrigger](https://greensock.com/scrolltrigger) today.

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/dunkelweb/fullpage/ZEQyQpy?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/wvZQKQP.css](https://codepen.io/GreenSock/pen/wvZQKQP.css)

### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js)
2. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js)
3. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

There's a new [ScrollTrigger.saveStyles()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.saveStyles()) method that can be useful with matchMedia(). It saves the current inline styles for any element(s) so that they're reverted properly if animations added other inline styles. It's explained in the video above.

See the [ScrollTrigger.matchMedia() docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()) for details.

## ScrollTrigger.batch() [ScrollTrigger.batch()](https://gsap.com/blog/3-4/\#batch) [​](https://gsap.com/blog/3-4/\#scrolltriggerbatch-scrolltriggerbatch "Direct link to scrolltriggerbatch-scrolltriggerbatch")

Normally, each ScrollTrigger fires its callbacks (onEnter, onLeave, etc.) immediately when they occur but **what if you want to coordinate an animation (like with staggers) of ALL the elements that fired a similar callback around the same time?** [ScrollTrigger.batch()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()) creates a coordinated group of ScrollTriggers (one for each target element) that batch their callbacks within a certain interval, delivering a neat Array so that you can easily do something like create a staggered animation of all the elements that enter the viewport around the same time. It's a great alternative to [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) because it's more widely compatible and easier to work with. Plus you're not restricted to only entering or exiting the viewport - batch() can use ANY start and end values!

### Demo [​](https://gsap.com/blog/3-4/\#demo "Direct link to Demo")

#### loading...

CodePen Embed - ScrollTrigger.batch() Demo

- [HTML](https://codepen.io/GreenSock/embed/zYrxpmb?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/zYrxpmb?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/zYrxpmb?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/zYrxpmb?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/zYrxpmb?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/zYrxpmb "Edit on CodePen")

``` cm-s-default
<h1>ScrollTrigger.batch()</h1>

<div class="container">
  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

  <div class="box red"></div>
  <div class="box purple"></div>
  <div class="box orange"></div>
  <div class="box green"></div>
  <div class="box blue"></div>

</div>

```

``` cm-s-default
body {
  text-align: center;
}

h1 {
  font-weight: 400;
  font-size: 2.5em;
}

.container {
  max-width: 800px;
  margin: auto;
  width: 100%;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.box {
  width: 31%;
  height: 15vh;
  margin: 5px;
  opacity: 0;
  will-change: transform;
}

header {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 6px 10px 6px 10px;
  border-bottom-right-radius: 26px;
  z-index: 100;
  background-color: rgba(0,0,0,0.5);
}
```

``` cm-s-default
gsap.defaults({ease: "power3"});
gsap.set(".box", {y: 100});

ScrollTrigger.batch(".box", {
  //interval: 0.1, // time window (in seconds) for batching to occur.
  //batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
  // you can also define things like start, end, etc.
});

// when ScrollTrigger does a refresh(), it maps all the positioning data which
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", {y: 0}));
```

ScrollTrigger.batch() Demo

# ScrollTrigger.batch()

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/wvZQKQP.css](https://codepen.io/GreenSock/pen/wvZQKQP.css)

### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js)
2. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

ScrollTrigger's .batch() Method from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/923662485-59ccf903ef0e70c6545adb68e61d3e1ee2d2fb2f1d5d8aa1857e95746171df62-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

ScrollTrigger's .batch() Method

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

Using .batch()

00:38

Copy link

More complex demo

02:00

Copy link

See the [ScrollTrigger.batch() docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()) for details.

## ScrollTrigger.scrollerProxy() [ScrollTrigger.scrollerProxy()](https://gsap.com/blog/3-4/\#scrollerProxy) [​](https://gsap.com/blog/3-4/\#scrolltriggerscrollerproxy-scrolltriggerscrollerproxy "Direct link to scrolltriggerscrollerproxy-scrolltriggerscrollerproxy")

ScrollTrigger purposefully avoids "scrolljacking" (disabling the browser's native scrolling behavior in favor of a custom, non-standard scrolling solution). However, smooth scrolling was by far the most requested feature to pair with ScrollTrigger. There are plenty of smooth-scrolling libraries out there, so we created the `.scrollerProxy()` method to make it simple to integrate any of them with ScrollTrigger (or create your own effects).

Smooth scrolling with ScrollTrigger - .scrollerProxy() from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/922478635-dd443abd1fc4c5ef19ca503702d72ed41c9274b7b558c373deb9481f53528865-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Smooth scrolling with ScrollTrigger - .scrollerProxy()

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

Introduction

00:00

Copy link

Why smooth scrolling and .scrollerProxy

00:17

Copy link

How to use .scrollerProxy

01:13

Copy link

Here's a basic example using [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) but check out the [.scrollerProxy() docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()) for examples with other libraries.

#### loading...

CodePen Embed - Locomotive Scroll with ScrollTrigger scrubbing and pinning

- [HTML](https://codepen.io/GreenSock/embed/zYrELYe/1dc38ca14811bc76e25c4b8c686b653d?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/zYrELYe/1dc38ca14811bc76e25c4b8c686b653d?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/zYrELYe/1dc38ca14811bc76e25c4b8c686b653d?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/zYrELYe/1dc38ca14811bc76e25c4b8c686b653d?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/zYrELYe/1dc38ca14811bc76e25c4b8c686b653d?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/zYrELYe "Edit on CodePen")

``` cm-s-default
<div class="smooth-scroll">
  <section class="description panel blue">
    <div><h1>Locomotive Scroll + ScrollTrigger</h1>
      <p>Demonstrates how ScrollTrigger can be used with a smooth scrolling library like Locomotive Scroll, including scrubbing and pinning.</p>
      <div class="scroll-down">Scroll down<div class="arrow"></div></div>
    </div>
  </section>

  <section class="panel red">
    <p><span class="line line-1"></span>This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code></p>
  </section>

  <section class="panel orange">
    <p><span class="line line-2"></span>This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height (<code>end: "+=100%"</code>), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.</p>
  </section>

  <section class="panel purple">
    <p><span class="line line-3"></span>This panel gets pinned in a similar way, and has a more involved animation that's wrapped in a timeline, fading the background color and animating the transforms of the paragraph in addition to the line, all synced with the scroll position perfectly.</p>
  </section>

  <section class="panel gray">
    DONE!
  </section>


</div>

```

``` cm-s-default
.panel {
  height: 100vh;
}
.line {
  width: 100%;
  max-width: 800px;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: rgba(255,255,255,1);
}

/* by default, ScrollTrigger sets overflow to auto so that the scrollbar is factored in particularly when pinning so that the pinned elements' sizes are correct, but with LocomotiveScroll we want to force that to be hidden because it does its own [fake] scrollbar */
.smooth-scroll {
  overflow-y: hidden !important;
}

```

``` cm-s-default
gsap.registerPlugin(ScrollTrigger);

// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// --- SETUP END ---

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate() {
      console.log("Update")
    }
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
    onUpdate() {
      console.log("Update")
    }
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
      onUpdate() {
        console.log("Update")
      }
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

```

Locomotive Scroll with ScrollTrigger scrubbing and pinning

# Locomotive Scroll + ScrollTrigger

Demonstrates how ScrollTrigger can be used with a smooth scrolling library like Locomotive Scroll, including scrubbing and pinning.

Scroll down

This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has `scrub: true`

This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height ( `end: "+=100%"`), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set `pinSpacing: false` to prevent that if you prefer.

This panel gets pinned in a similar way, and has a more involved animation that's wrapped in a timeline, fading the background color and animating the transforms of the paragraph in addition to the line, all synced with the scroll position perfectly.

DONE!


[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/grayghostvisuals/fullpage/dyEWxg?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/7ba936b34824fefdccfe2c6d9f0b740b.css](https://codepen.io/GreenSock/pen/7ba936b34824fefdccfe2c6d9f0b740b.css)
2. [https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.css](https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.css)

### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js](https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js)
3. [https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js](https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

* * *

## And more... [And more...](https://gsap.com/blog/3-4/\#andMore) [​](https://gsap.com/blog/3-4/\#and-more-and-more "Direct link to and-more-and-more")

GSAP 3.4 also delivers various bug fixes, so we'd highly recommend [installing the latest version today](https://gsap.com/docs/v3/Installation). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, Github, etc.).

## Resources [Resources](https://gsap.com/blog/3-4/\#more-resources) [​](https://gsap.com/blog/3-4/\#resources-resources "Direct link to resources-resources")

- [Full release notes on Github](https://github.com/greensock/GSAP/releases/)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources/)
- [Community forums](https://gsap.com/community/)
- [ScrollTrigger Express](https://www.creativecodingclub.com/courses/scrolltrigger-express?ref=44f484) video course from Snorkl.tv

Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [scrolltrigger](https://gsap.com/blog/tags/scrolltrigger)
- [matchmedia](https://gsap.com/blog/tags/matchmedia)

[Newer Post\\
\\
3.6 release](https://gsap.com/blog/3-6) [Older Post\\
\\
3.2 release](https://gsap.com/blog/3-2)

## Contents

- [GSAP 3.4 has arrived with some significant improvements to ScrollTrigger:](https://gsap.com/blog/3-4/#gsap-34-has-arrived-with-some-significant-improvements-to-scrolltrigger)
- [ScrollTrigger.matchMedia() ScrollTrigger.matchMedia()](https://gsap.com/blog/3-4/#scrolltriggermatchmedia-scrolltriggermatchmedia)
  - [Basic setup](https://gsap.com/blog/3-4/#basic-setup)
- [ScrollTrigger.batch() ScrollTrigger.batch()](https://gsap.com/blog/3-4/#scrolltriggerbatch-scrolltriggerbatch)
  - [Demo](https://gsap.com/blog/3-4/#demo)
- [ScrollTrigger.scrollerProxy() ScrollTrigger.scrollerProxy()](https://gsap.com/blog/3-4/#scrolltriggerscrollerproxy-scrolltriggerscrollerproxy)
- [And more... And more...](https://gsap.com/blog/3-4/#and-more-and-more)
- [Resources Resources](https://gsap.com/blog/3-4/#resources-resources)

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