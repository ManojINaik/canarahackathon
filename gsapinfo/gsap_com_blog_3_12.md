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
- [Logout](https://gsap.com/community/logout/?csrfKey=ea255afb4cf85c1e1a8330343c94c167)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=ea255afb4cf85c1e1a8330343c94c167)
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

[Skip to main content](https://gsap.com/blog/3-12/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.12 release

May 19, 2023 · 4 min read

[![Cassie Evans](https://gsap.com/img/cassie-about.jpg)](https://twitter.com/cassiecodes)

[Cassie Evans](https://twitter.com/cassiecodes)

Developer Education

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- [Clamp your triggers!](https://gsap.com/blog/3-12/#clamp) \- Ever had ScrollTriggered animations at the very top of your page start out partially-scrubbed? Now you can [clamp()](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()) them! This handy feature ensures that the start and end positions stay within the bounds of the page and ensures that all your "above the fold" elements start off in their native positions.
- [Clamp data-speed](https://gsap.com/blog/3-12/#clampdata) \- More clamping! This time for ScrollSmoother, you can now wrap your data-speed value in [clamp()](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()) to make the associated element start out in its natural position if it 's within the viewport at the top of the page.
- [ScrollSmoother speed](https://gsap.com/blog/3-12/#speed) \- Hold onto your hats (or scroll wheels?) We 've added a speed option to ScrollSmoother which you can use to make the page scroll faster or slower.

## Clamp Your Triggers [​](https://gsap.com/blog/3-12/\#clamp-your-triggers "Direct link to Clamp Your Triggers")

![clamp-img.svg](https://gsap.com/assets/images/clamp-img-80f39e02f19a51a86bcc618c931c9fff.svg)

It can be frustrating when your "above the fold" scrubbed animations start off part-way through. With [clamp()](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()) you can ensure that they always start out in their native positions, no matter where your triggers are placed.

```codeBlockLines_p187
ScrollTrigger.create({
  trigger: elem,
  start: "clamp(top bottom)", // clamped value - will always fall between 0 and the max scroll
  end: "bottom top" // the parsed pixel value could be negative or more than the max scroll,
})

```

### So what 's going on under the hood? [​](https://gsap.com/blog/3-12/\#so-what-s-going-on-under-the-hood "Direct link to So what 's going on under the hood?")

All scroll triggered animations have trigger points that determine where the animation [starts](https://gsap.com/docs/v3/Plugins/ScrollTrigger/start) and [ends](https://gsap.com/docs/v3/Plugins/ScrollTrigger/end). These values are nice and flexible, you can write them out as a number, as string shorthand or return one of those options from a function.

```codeBlockLines_p187
start: "bottom 50%+=100px" // flexible string shorthand
start: 200, // pixel value
start: () => window.innerHeight / 2 // function that returns a number or string

```

However you write it out, **ScrollTrigger converts these values into a numeric scroll positions.**

If you set up your start marker above the fold, the start position will be **_negative_** and the animation will start off partway through. Sometimes this is desired behaviour but it can also be a bit awkward and unexpected.

The new clamp feature allows us to prevent these trigger 'leaks '. We can tell ScrollTrigger to always keep the trigger value between 0 (the top of the page) and the maximum scroll position.

Check out this demo and pop open the console to see the differing values. 👀

#### loading...

CodePen Embed - Clamp your triggers!

- [HTML](https://codepen.io/GreenSock/embed/wvYQJBE?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/wvYQJBE?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/wvYQJBE?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/wvYQJBE?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/wvYQJBE?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/wvYQJBE "Edit on CodePen")

``` cm-s-default
<div class="boxes">
  <div class="box clamped">clamped</div>
  <div class="box unClamped">default</div>
</div>
```

``` cm-s-default
body {
  overflow: visible;
  width: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.07) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.boxes {
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.box {
  will-change: transform;
  padding: 0.4rem;
}

```

``` cm-s-default
gsap.registerPlugin(ScrollTrigger);

console.log(`min:0, max:${ScrollTrigger.maxScroll(window)}`)

let boxes = gsap.utils.toArray(".box");

gsap.to('.clamped', {
    rotation: 360,
    backgroundColor: "#2c7ad2",
    duration: 1,
    scrollTrigger: {
      trigger: '.clamped',
      start: "clamp(top bottom)",
      end: "clamp(bottom top)",
      scrub: true,
      // markers: true,
      onRefresh: (self) => {
        console.log("clamped", self.start, self.end);
      }
    }
  });

gsap.to('.unClamped', {
    rotation: 360,
    backgroundColor: "#2c7ad2",
    duration: 1,
    scrollTrigger: {
      trigger: '.clamped',
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
      onRefresh: (self) => {
        console.log("not clamped", self.start, self.end);
      }
    }
  });

gsap.config({trialWarn: false});
```

Clamp your triggers!

end

start

scroller-end

scroller-start

clamped

default

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/Hioudje/fullpage/ZEoogJb?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/gOWxmWG.css](https://codepen.io/GreenSock/pen/gOWxmWG.css)

### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://assets.codepen.io/16327/ScrollTrigger.min.js?v=3.11.6h](https://assets.codepen.io/16327/ScrollTrigger.min.js?v=3.11.6h)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

On load you can see that the un-clamped animation starts part-way through. If you scroll down to the bottom you 'll notice that it also doesn 't complete as the **end marker is further down than the maximum possible scroll distance.**

If you want to know what 's happening under the hood check out the docs on [clamp](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()). Wrapping the trigger in " [clamp()](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp())" is just like telling ScrollTrigger to run the parsed trigger position through the following util -

```codeBlockLines_p187
gsap.utils.clamp(0, maxScroll, triggerPosition)

```

## Clamp data-speed [​](https://gsap.com/blog/3-12/\#clamp-data-speed "Direct link to Clamp data-speed")

You can also use the new clamp feature over in ScrollSmoother-land. Now, when you apply data-speed to "above-the-fold" elements, they 'll start **_exactly_** where you placed them in your design, unaffected by their speed value. No more unexpected offsets! Check it out...

#### loading...

CodePen Embed - ScrollSmoother Parallax Offsets with clamp

- [HTML](https://codepen.io/GreenSock/embed/gOBedNX?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/gOBedNX?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/gOBedNX?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/gOBedNX?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/gOBedNX?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/gOBedNX "Edit on CodePen")

``` cm-s-default
<div id="smooth-wrapper">
  <div id="smooth-content">

    <div class="boxes">
      <div class="box" data-speed="1.5">unclamped</div>
      <div class="box">ref</div>
      <div class="box" data-speed="clamp(1.5)">clamped</div>
    </div>

  </div>
</div>

<div class="middle"></div>
```

``` cm-s-default
html,
body {
  margin: 0;
}

#smooth-content {
  overflow: visible;
  width: 100%;
  /* set a height because the contents are position: absolute, thus natively there's no height */
  height: 4000px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.07) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

button {
  position: relative;
}

.boxes {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: absolute;
  top: 80vh;
  transform: translateY(-50%);
  z-index: 1;
 background: linear-gradient(to right, #ffff, #fff);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: center center;
}

.boxes-2 {
  top: 210vh;
}

.box {
  width: 120px;
  height: 100px;
  z-index: 100;
  line-height: 100px;
  font-size: 20px;
  text-align: center;
  will-change: transform;
}
.box-ref {
  top: 80vh;
  left: 100px;
}

.middle {
  position: fixed;
  top: 50%;
  height: 2px;
  width: 100%;
  background: var(--red);
  transform: translateY(-50%);
  z-index: -2
}

.refline {
  position: absolute;
  top: 80vh;
  background: var(--blue);
  height: 2px;
  width: 100%;
  z-index: -1;
}

h2 {
  margin: 0;
  position: fixed;
  color: #eee;
  padding: 1em;
  font-weight: normal;
  background: rgb(0, 0, 0, 0.4);
}
.footer {
  min-height: 30vh;
  line-height: 30vh;
  color: white;
  background-color: black;
  text-align: center;
  position: absolute;
  font-size: 60px;
  width: 100%;
  top: calc(4000px - 30vh);
}

```

``` cm-s-default
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true
});

```

ScrollSmoother Parallax Offsets with clamp

unclamped

ref

clamped

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/Hioudje/fullpage/ZEoogJb?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/gOWxmWG.css](https://codepen.io/GreenSock/pen/gOWxmWG.css)

### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://assets.codepen.io/16327/ScrollTrigger.min.js?v=3.11.6h](https://assets.codepen.io/16327/ScrollTrigger.min.js?v=3.11.6h)
3. [https://assets.codepen.io/16327/ScrollSmoother.min.js?v=3.11.6h](https://assets.codepen.io/16327/ScrollSmoother.min.js?v=3.11.6h)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

Video Walkthrough

Still a bit confused about when and why this is useful? We 've got you - Cassie breaks it down in this new feature video

Clamp your triggers! from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1671688584-9eb84a9f619dceb1545fd4c8b3a74a740f1446b42a926e83afca8ec5f22257e4-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Clamp your triggers!

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Like

Add to Watch Later

Share

Play

Show controls

CC/SubtitlesTranscriptSettingsPicture-in-PictureFullscreen

[Watch on Vimeo](https://vimeo.com/828003354)

# CC/Subtitles

Off

English (auto-generated) CC

Customize

Preview

# Settings

QualityAuto

SpeedNormal

## New speed option for ScrollSmoother [​](https://gsap.com/blog/3-12/\#new-speed-option-for-scrollsmoother "Direct link to New speed option for ScrollSmoother")

```codeBlockLines_p187
ScrollSmoother.create({
  smooth: 2,
  effects: true,
  speed: 1.5, // 1.5x the normal speed
});

```

Now you have the power to control your scroll speed with a simple multiplier. Want things to move faster? Set it to 2 and watch your content zoom past twice as fast! Prefer a leisurely pace? Set it to 0.5 for a leisurely scroll at half the speed.

#### loading...

CodePen Embed - ScrollSmoother - speed demo

- [HTML](https://codepen.io/GreenSock/embed/BaqMgoy?default-tab=result&theme-id=41164#html-box)
- [SCSS](https://codepen.io/GreenSock/embed/BaqMgoy?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/BaqMgoy?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/BaqMgoy?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/BaqMgoy?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/BaqMgoy "Edit on CodePen")

``` cm-s-default
<div id="smooth-wrapper">
  <div id="smooth-content">
    <div class="logo-section">
      <svg version="1.1" id="scroll-smoother-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 827 238">
        <g id="logo-scroll-smoother">
          <g id="logo-scroll">
            <path class="scroll-letter" d="M13.2,138.9c0.2-2.2,0.9-4.3,2-6.5c1.2-2.1,2.5-3.9,4.1-5.2c7.4,4.5,14.3,6.7,20.6,6.7c2.9,0,5.2-0.7,6.7-2.1
            c1.5-1.4,2.3-3.1,2.3-5c0-3.4-2.3-6.1-6.8-8.2l-12-5.1c-9.7-4.2-14.5-10.4-14.5-18.7c0-6.2,2.3-11.3,7-15.2
            c4.7-3.9,10.9-5.9,18.5-5.9s15.2,1.9,22.7,5.8c-0.3,4.7-2.1,8.6-5.3,11.7c-6.9-3.3-13.1-5-18.4-5c-2.8,0-4.9,0.7-6.4,2
            c-1.5,1.3-2.2,2.8-2.2,4.5c0,2.7,2.1,5,6.3,6.8l12.2,5.1c4.9,2.1,8.7,4.9,11.4,8.3c2.7,3.4,4,7.3,4,11.7c0,6.5-2.3,11.7-6.9,15.7
            c-4.6,4-11.2,6-19.7,6c-4.2,0-8.6-0.7-13.2-2C21,143.1,16.9,141.2,13.2,138.9z" />
            <path class="scroll-letter" d="M100.2,116.3c0-0.3,0-0.6,0-0.9c0-3.8-0.4-6.7-1.2-8.6c-0.8-1.9-2.4-2.9-5-2.9c-2.5,0-4.4,1.2-5.4,3.7
            c-1.1,2.5-1.6,6.4-1.6,11.9c0,5.4,0.8,9.3,2.3,11.6c1.5,2.3,3.9,3.4,7.1,3.4c3.2,0,6.9-1.5,11.2-4.4c1.2,0.7,2.4,1.9,3.6,3.6
            c1.2,1.7,1.9,3.3,2.2,4.8c-2.3,2.4-5.2,4.3-8.8,5.7c-3.5,1.4-7.2,2.1-10.9,2.1c-7.1,0-12.6-2.4-16.5-7.2
            c-3.8-4.8-5.8-11.6-5.8-20.2s2.2-15.2,6.6-19.7c4.4-4.5,9.6-6.7,15.7-6.7c6,0,10.9,1.6,14.5,4.7c3.7,3.1,5.5,7.1,5.5,12
            c0,2.4-0.7,4.3-2,5.6c-1.3,1.3-3.2,1.9-5.6,1.9C103.9,116.8,101.9,116.7,100.2,116.3z" />
            <path class="scroll-letter" d="M120,101.2c0.3-1.4,0.9-2.8,1.8-4.4c1-1.6,1.9-2.7,2.9-3.5c6.1,0.6,10.2,3.7,12.4,9.2
            c2.6-6.1,6.9-9.1,12.9-9.1c2.2,0,4.5,0.3,6.6,0.8c0,2-0.3,4.3-1,7.1c-0.7,2.8-1.6,5.1-2.8,7.1c-1.4-0.5-3.1-0.8-5.1-0.9
            c-3.6,0-6.5,1.8-8.8,5.5V145c-2,0.4-4.5,0.6-7.4,0.6c-2.9,0-5.5-0.2-7.8-0.6v-33.3C123.8,106.6,122.5,103.1,120,101.2z" />
            <path class="scroll-letter" d="M199.4,98.6c4.9,4.9,7.3,11.9,7.3,21c0,9.1-2.4,16.1-7.3,21c-4,4-9.4,6-16,6c-6.7,0-12-2-16-6
            c-4.9-4.9-7.3-11.9-7.3-21c0-9.1,2.4-16.1,7.3-21c4-3.9,9.3-5.9,16-5.9C190,92.7,195.4,94.6,199.4,98.6z M177.2,108.1
            c-1.1,2.7-1.6,6.6-1.6,11.5c0,5,0.5,8.8,1.6,11.5c1.1,2.7,3.1,4,6.2,4s5.1-1.3,6.2-4c1.1-2.7,1.6-6.5,1.6-11.5
            c0-5-0.5-8.8-1.6-11.5c-1.1-2.7-3.1-4.1-6.2-4.1S178.2,105.3,177.2,108.1z" />
            <path class="scroll-letter" d="M235.4,133.9h3c0.8,2.2,1.2,4.3,1.2,6.3c0,2-0.1,3.5-0.3,4.3c-4.1,0.7-8,1-11.7,1c-3.7,0-6.6-1.1-8.5-3.3
            c-1.9-2.2-2.9-5.6-2.9-10.4V70.6l0.7-0.7h5.9c3,0,5.1,0.7,6.4,2.1c1.3,1.4,1.9,3.8,1.9,7.1v50
            C231.1,132.3,232.5,133.9,235.4,133.9z" />
            <path class="scroll-letter" d="M266.1,133.9h3c0.8,2.2,1.2,4.3,1.2,6.3c0,2-0.1,3.5-0.3,4.3c-4.1,0.7-8,1-11.7,1c-3.7,0-6.6-1.1-8.5-3.3
            c-1.9-2.2-2.9-5.6-2.9-10.4V70.6l0.7-0.7h5.9c3,0,5.1,0.7,6.4,2.1c1.3,1.4,1.9,3.8,1.9,7.1v50
            C261.8,132.3,263.2,133.9,266.1,133.9z" />
          </g>
        </g>
        <g id="by-greensock">
          <path class="by-greensock-letter" d="M291.3,187.6c2.6,0,4.7,1.1,6.1,3.3c1.4,2.2,2.2,5.3,2.2,9.2s-1,6.9-3,9.1c-2,2.1-4.4,3.2-7.2,3.2
        c-2.8,0-5.6-0.5-8.5-1.6v-34.5l0.3-0.3h1.2c0.7,0,1.2,0.2,1.4,0.5c0.2,0.4,0.3,0.9,0.3,1.8v12.4
        C286.3,188.6,288.6,187.6,291.3,187.6z M296.2,199.8c0-3.2-0.5-5.5-1.5-7c-1-1.5-2.2-2.3-3.6-2.3c-1.4,0-2.7,0.3-3.8,1
        c-1.2,0.7-2.2,1.5-3,2.6v14.7c1.5,0.6,3.3,0.9,5.2,0.9c1.9,0,3.5-0.9,4.9-2.6C295.5,205.4,296.2,203,296.2,199.8z" />
          <path class="by-greensock-letter" d="M323.3,188.2l-6.8,23c-1.2,4.2-2.6,7.2-4,8.9c-1.4,1.7-3.5,2.6-6.2,2.6c-1.3,0-2.6-0.2-3.8-0.6
        c0-0.1,0-0.2,0-0.2c0-0.8,0.3-1.5,0.8-2.2c0.8,0.3,1.9,0.5,3.1,0.5c1.8,0,3.2-0.6,4.1-1.8c0.9-1.2,1.8-3.1,2.5-5.7l0.1-0.5
        c-0.8-0.1-1.4-0.3-1.8-0.6c-0.4-0.3-0.8-0.9-1.1-1.8l-7-21.6c0.9-0.4,1.5-0.6,2-0.6c0.9,0,1.5,0.5,1.8,1.6l4,12.5
        c0.9,3,1.7,5.6,2.4,7.7c0.1,0.2,0.2,0.3,0.5,0.3l6.1-21.9c0.5-0.1,1-0.1,1.6-0.1s1.1,0.1,1.6,0.2L323.3,188.2z" />
          <path class="by-greensock-letter" d="M352.3,195.3h7.4c1,0,1.7,0.2,2.1,0.5c0.4,0.4,0.6,1,0.6,1.9v12.7c-3.5,1.4-7.3,2.2-11.5,2.2
        c-2.5,0-4.6-0.5-6.3-1.5c-1.8-1-3.2-2.3-4.1-4c-1.9-3.2-2.8-7.1-2.8-11.6c0-3.1,0.4-5.8,1.2-8.1c0.8-2.3,1.9-4.2,3.2-5.5
        c2.6-2.6,5.8-4,9.5-4c2,0,4,0.3,6,1c2,0.7,3.6,1.6,4.9,2.7c-0.3,1.1-0.9,2-1.9,2.7c-2.7-2.2-5.8-3.2-9.3-3.2
        c-2.9,0-5.2,1.1-7.1,3.4c-1.9,2.3-2.8,6-2.8,11c0,9.3,3.4,14,10.2,14c2.8,0,5.3-0.4,7.5-1.2v-6.9c0-1.4,0-2.4,0-2.9h-5.5
        c-1.1,0-1.6-0.6-1.6-1.7C352,196.4,352.1,195.9,352.3,195.3z" />
          <path class="by-greensock-letter" d="M369.1,189.5c0.3-0.8,0.8-1.5,1.5-1.9c1.8,0.7,2.9,2.1,3.3,4.4c1.4-2.9,3.6-4.4,6.6-4.4c0.7,0,1.4,0.1,2.2,0.2
        c0,1.3-0.3,2.4-0.8,3.2c-0.3,0-0.9,0-1.6,0c-2.8,0-4.8,1.6-6.1,4.7V212c-0.4,0.1-1,0.1-1.7,0.1c-0.7,0-1.2,0-1.6-0.1v-17.5
        C370.9,192.4,370.3,190.7,369.1,189.5z" />
          <path class="by-greensock-letter" d="M404.7,201h-15.4c0.2,5.7,2.3,8.6,6.5,8.6c2.3,0,4.7-0.7,7.2-2.1c0.7,0.6,1.1,1.4,1.3,2.4
        c-2.6,1.8-5.6,2.7-8.9,2.7c-2.3,0-4.2-0.6-5.7-1.8c-1.5-1.2-2.5-2.7-3.1-4.5c-0.6-1.8-0.9-3.9-0.9-6.3c0-3.7,0.9-6.7,2.6-9
        c1.7-2.3,4.1-3.5,7.1-3.5c3,0,5.3,1,7,3c1.6,2,2.4,4.5,2.4,7.5C404.9,198.9,404.8,200,404.7,201z M400,192.1
        c-1-1.4-2.4-2.2-4.4-2.2c-1.9,0-3.5,0.8-4.5,2.3c-1.1,1.5-1.7,3.6-1.8,6.1h12.2v-0.7C401.4,195.4,400.9,193.6,400,192.1z" />
          <path class="by-greensock-letter" d="M429.3,201h-15.4c0.2,5.7,2.3,8.6,6.5,8.6c2.3,0,4.7-0.7,7.2-2.1c0.7,0.6,1.1,1.4,1.3,2.4
        c-2.6,1.8-5.6,2.7-8.9,2.7c-2.3,0-4.2-0.6-5.7-1.8c-1.5-1.2-2.5-2.7-3.1-4.5c-0.6-1.8-0.9-3.9-0.9-6.3c0-3.7,0.9-6.7,2.6-9
        c1.7-2.3,4.1-3.5,7.1-3.5c3,0,5.3,1,7,3c1.6,2,2.4,4.5,2.4,7.5C429.5,198.9,429.4,200,429.3,201z M424.6,192.1
        c-1-1.4-2.4-2.2-4.4-2.2c-1.9,0-3.5,0.8-4.5,2.3c-1.1,1.5-1.7,3.6-1.8,6.1h12.2v-0.7C426.1,195.4,425.6,193.6,424.6,192.1z" />
          <path class="by-greensock-letter" d="M455,195.1v12.3c0,1.9,0.2,3.3,0.5,4.1c-0.5,0.5-1.2,0.7-2.1,0.7c-1.1,0-1.7-0.7-1.7-2.2v-13.8
        c0-2.1-0.3-3.5-0.8-4.4s-1.5-1.3-2.8-1.3s-2.8,0.4-4.3,1.1c-1.5,0.7-2.7,1.7-3.6,2.8V212c-0.5,0.1-1,0.1-1.7,0.1
        c-0.7,0-1.2,0-1.7-0.1v-23.9l0.3-0.3h1.3c0.7,0,1.2,0.2,1.4,0.5s0.3,0.9,0.3,1.8v1c1.1-1.1,2.4-1.9,3.9-2.6c1.6-0.7,3.1-1,4.6-1
        c2.2,0,3.8,0.7,4.8,2.1C454.5,191,455,192.9,455,195.1z" />
          <path class="by-greensock-letter" d="M461.1,208.9c0.1-1.1,0.7-2,1.7-2.8c3.2,2.3,6.5,3.4,9.8,3.4c2.4,0,4.2-0.5,5.6-1.5c1.4-1,2.1-2.4,2.1-4.1
        c0-2.6-1.8-4.8-5.4-6.3l-5.7-2.5c-4.3-1.9-6.5-4.6-6.5-8.1c0-2.5,1-4.6,2.9-6.4c1.9-1.7,4.4-2.6,7.6-2.6s6.4,0.8,9.6,2.4
        c0.1,1.1-0.4,2.1-1.4,2.9c-2.9-1.5-5.5-2.3-7.8-2.3s-4.1,0.5-5.4,1.6c-1.3,1.1-2,2.4-2,4.1c0,2.2,1.6,3.9,4.9,5.3l5.5,2.4
        c4.9,2.1,7.3,5,7.3,8.8c0,2.8-1,5.1-2.9,6.8c-1.9,1.7-4.9,2.6-8.9,2.6S464.4,211.3,461.1,208.9z" />
          <path class="by-greensock-letter" d="M509.1,200c0,4.3-1.1,7.7-3.4,10c-1.7,1.7-4,2.6-6.7,2.6s-5-0.9-6.7-2.6c-2.3-2.3-3.4-5.7-3.4-10
        s1.1-7.7,3.4-10c1.7-1.7,4-2.6,6.7-2.6s5,0.9,6.7,2.6C508,192.3,509.1,195.6,509.1,200z M499,190c-2.3,0-4,1-5,2.9
        c-1.1,1.9-1.6,4.3-1.6,7.1s0.5,5.1,1.6,7.1s2.8,2.9,5.1,2.9c1.6,0,2.9-0.5,3.9-1.5c1.8-1.8,2.7-4.6,2.7-8.4c0-2.8-0.5-5.1-1.6-7.1
        C503,191,501.3,190,499,190z" />
          <path class="by-greensock-letter" d="M529.3,196.3c0-0.2,0-0.5,0-1c0-0.5-0.1-1.1-0.4-1.9c-0.2-0.8-0.8-1.5-1.6-2.2c-0.9-0.7-1.9-1-3.3-1
        c-1.9,0-3.4,0.9-4.5,2.6c-1.1,1.8-1.7,4.2-1.7,7.4c0,3.2,0.6,5.5,1.7,7.1c1.1,1.6,2.6,2.4,4.6,2.4c1.9,0,4.1-0.9,6.5-2.7
        c0.9,0.6,1.5,1.3,1.7,2.2c-2.5,2.4-5.4,3.5-8.5,3.5c-3.2,0-5.5-1.2-7.1-3.6c-1.6-2.4-2.3-5.5-2.3-9.3c0-3.8,0.9-6.8,2.8-9
        c1.9-2.2,4.2-3.3,7-3.3c1.5,0,2.8,0.2,3.9,0.7s2,1.1,2.7,1.8c1.2,1.5,1.8,3,1.8,4.4s-0.6,2.1-1.8,2.1
        C530.3,196.5,529.9,196.4,529.3,196.3z" />
          <path class="by-greensock-letter" d="M553.1,203.3l2,4.4c0.8,1.9,1.6,3.1,2.4,3.6c-0.5,0.7-1.2,1-2,1c-0.9,0-1.4-0.2-1.8-0.6
        c-0.3-0.4-0.7-1-1.1-1.9l-2.4-5.1c-0.7-1.5-1.3-2.4-2-2.9c-0.7-0.5-1.5-0.7-2.5-0.7c-1,0-2.1,0-3.3,0.1V212c-0.4,0.1-1,0.1-1.6,0.1
        s-1.2,0-1.7-0.1v-35.7l0.3-0.3h1.2c0.7,0,1.2,0.2,1.4,0.5c0.2,0.4,0.3,0.9,0.3,1.8v20l2.3-0.1c0.4,0,0.8-0.2,1-0.6l5.4-8
        c0.4-0.6,0.8-1.1,1.2-1.3c0.3-0.3,0.8-0.4,1.5-0.4c0.7,0,1.2,0,1.6,0l0.3,0.4l-6.4,9.3c-0.4,0.6-0.8,1-1.1,1.2
        c1.1,0.2,2.1,0.7,2.8,1.4C551.8,200.8,552.5,201.9,553.1,203.3z" />
        </g>
        <g id="logo-smoother">
          <path class="smoother-letter" d="M276,138.3c0.3-3.2,1.8-5.8,4.3-7.7c6.9,4.5,13.6,6.8,20.1,6.8c4.1,0,7.3-0.9,9.7-2.8c2.4-1.8,3.6-4.2,3.6-7.1
        c0-4.6-3.2-8.3-9.5-11.1l-11.7-5c-9.1-4-13.7-9.8-13.7-17.3c0-5.5,2.1-10,6.2-13.7c4.2-3.7,9.7-5.5,16.5-5.5
        c6.9,0,13.7,1.7,20.5,5.1c-0.1,3.2-1.4,5.8-3.7,7.9c-6.3-3.1-11.6-4.7-16-4.7s-7.7,0.9-10,2.8c-2.3,1.8-3.4,4-3.4,6.5
        s0.7,4.5,2.2,5.9c1.5,1.5,3.6,2.8,6.4,4l11.6,4.9c9.9,4.4,14.9,10.6,14.9,18.6c0,5.9-2.1,10.7-6.2,14.4c-4.1,3.7-10.4,5.5-18.6,5.5
        C291,145.8,283.2,143.3,276,138.3z" />
          <path class="smoother-letter" d="M359.6,113c0-3.5-0.5-6.1-1.5-7.6c-1-1.5-2.6-2.3-4.7-2.3c-3.8,0-7.6,2.1-11.3,6.4v35
        c-1.1,0.3-2.7,0.4-4.8,0.4c-2,0-3.7-0.1-5-0.4v-49l0.7-0.7h3.6c3.4,0,5.2,2.1,5.4,6.3c4.4-4.5,9.2-6.8,14.5-6.8
        c5.3,0,9,2.5,11.1,7.4c5.3-4.9,10.6-7.4,16-7.4c4.1,0,7.3,1.5,9.4,4.4c2.2,2.9,3.2,6.7,3.2,11.2v24.3c0,3.9,0.5,6.8,1.6,8.9
        c-1.6,1.4-3.6,2.1-6.1,2.1c-3.4,0-5.1-2.1-5.1-6.2v-26.1c0-3.5-0.5-6-1.5-7.5s-2.6-2.2-4.7-2.2c-3.9,0-7.7,2.2-11.4,6.5v34.9
        c-1.1,0.3-2.7,0.4-4.8,0.4s-3.7-0.1-4.8-0.4V113z" />
          <path class="smoother-letter" d="M440.4,99.4c4.7,4.7,7,11.6,7,20.5s-2.3,15.7-7,20.4c-3.7,3.7-8.5,5.5-14.4,5.5c-5.9,0-10.7-1.8-14.4-5.5
        c-4.7-4.7-7-11.5-7-20.4s2.3-15.7,7-20.5c3.7-3.7,8.5-5.5,14.4-5.5C432,93.9,436.8,95.7,440.4,99.4z M414.6,119.9
        c0,12.3,3.8,18.4,11.4,18.4s11.4-6.1,11.4-18.4c0-3.5-0.3-6.5-1-9.1c-0.6-2.6-1.8-4.8-3.6-6.7c-1.8-1.9-4-2.8-6.8-2.8
        s-5.1,0.9-6.8,2.8c-1.8,1.9-3,4.1-3.6,6.7C414.9,113.4,414.6,116.4,414.6,119.9z" />
          <path class="smoother-letter" d="M490.4,99.4c4.7,4.7,7,11.6,7,20.5s-2.3,15.7-7,20.4c-3.7,3.7-8.5,5.5-14.4,5.5c-5.9,0-10.7-1.8-14.4-5.5
        c-4.7-4.7-7-11.5-7-20.4s2.3-15.7,7-20.5c3.7-3.7,8.5-5.5,14.4-5.5C482,93.9,486.8,95.7,490.4,99.4z M464.6,119.9
        c0,12.3,3.8,18.4,11.4,18.4s11.4-6.1,11.4-18.4c0-3.5-0.3-6.5-1-9.1c-0.6-2.6-1.8-4.8-3.6-6.7c-1.8-1.9-4-2.8-6.8-2.8
        s-5.1,0.9-6.8,2.8c-1.8,1.9-3,4.1-3.6,6.7C464.9,113.4,464.6,116.4,464.6,119.9z" />
          <path class="smoother-letter" d="M530.8,95.1c0.3,1.1,0.4,2.4,0.4,3.6s-0.1,2.5-0.4,3.5l-12.5-0.1v30.7c0,2.9,1.4,4.3,4.1,4.3h7
        c0.5,1.3,0.8,2.6,0.8,4.1s0,2.5-0.1,2.9c-3.9,0.5-7.5,0.7-11,0.7c-6.8,0-10.2-3.3-10.2-9.8v-32.9l-7.3,0.1
        c-0.3-1.1-0.4-2.2-0.4-3.5s0.1-2.5,0.4-3.6l7.3,0.1v-9.1c0-2.3,0.4-3.9,1.1-4.8c0.7-0.9,2.1-1.4,4.1-1.4h3.6l0.6,0.6v14.8
        L530.8,95.1z" />
          <path class="smoother-letter" d="M578.6,110.6v23.6c0,3.9,0.5,6.8,1.6,8.9c-1.7,1.4-3.8,2.1-6.1,2.1c-3.4,0-5.1-2.1-5.1-6.2v-25.9
        c0-3.6-0.5-6.2-1.4-7.7c-0.9-1.5-2.5-2.3-4.8-2.3s-4.7,0.6-7.1,1.8c-2.4,1.2-4.5,2.8-6.3,4.7v34.9c-1.1,0.3-2.7,0.4-4.7,0.4
        c-2,0-3.6-0.1-4.8-0.4V71.6l0.7-0.6h3.6c2,0,3.4,0.5,4.1,1.5c0.7,1,1.1,2.5,1.1,4.8v23.9c4.9-4.5,10.3-6.7,16.1-6.7
        c4.5,0,7.8,1.5,10,4.5C577.5,101.9,578.6,105.8,578.6,110.6z" />
          <path class="smoother-letter" d="M626.5,122.9h-29.7c0.2,4.7,1.2,8.4,3,11c1.8,2.6,4.8,3.9,9,3.9c4.2,0,8.8-1.3,13.9-3.9
        c1.7,1.6,2.7,3.7,3.1,6.3c-5.3,3.7-11.6,5.6-18.8,5.6c-7.2,0-12.3-2.4-15.5-7.2c-3.2-4.8-4.8-11-4.8-18.7c0-7.7,1.8-14,5.4-18.8
        c3.6-4.8,8.6-7.2,15-7.2c6.4,0,11.4,2,14.8,6.1c3.5,4,5.2,9.1,5.2,15.3C627.2,117.8,627,120.3,626.5,122.9z M615.3,104.8
        c-1.7-2.5-4.2-3.8-7.6-3.8c-3.4,0-6,1.3-7.8,3.9c-1.8,2.6-2.8,6.2-3,10.8h21v-1.3C617.8,110.5,617,107.3,615.3,104.8z" />
          <path class="smoother-letter" d="M633.6,99.7c0.5-2.3,1.7-4,3.6-5.2c4.4,1.1,7.3,4,8.7,8.9c2.7-5.9,7.1-8.9,13.1-8.9c1.6,0,3.3,0.2,5.2,0.6
        c0,3.6-0.8,6.6-2.3,9.1c-0.4-0.1-1.7-0.2-4-0.4c-4.7,0-8.3,2.6-11,7.8v32.9c-1.1,0.3-2.8,0.4-4.8,0.4s-3.7-0.1-4.8-0.4v-34.6
        C637.2,105.3,636,101.9,633.6,99.7z" />
        </g>
        <g id="logo-mouse">
          <rect id="mouse-outline" x="687.23" y="22.73" width="115.94" height="191.75" rx="57.97" />
          <rect id="mouse-wheel" x="738.65" y="57.48" width="15" height="39.31" rx="7.5" />
        </g>
      </svg>

      <div class="speed-range">
        <h3>crank that speed or slow things down...</h3>
        <input type="range" id="speed" name="speed" min="0.5" max="2" value="1" step="0.1">
        <label class="vh" for="speed">speed</label>
        <output name="speedOutput" for="speed">1</output>

      </div>

    </div>

    <div class="grid-section">
      <div class="grid-layout">
        <div class="column column-1" data-speed="1.1">
          <div class="column-content">
            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1516319915504-015b432d407c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3OTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
       <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1534748626724-c6256f106a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3NTB8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1609671443271-ea10aa353ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3NTB8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
          </div>
        </div>
        <div class="column column-2" data-speed="1.01">
          <div class="column-content">
                     <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzcwMjl8&ixlib=rb-4.0.3&q=85" alt="">
            </div>

            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1509099652299-30938b0aeb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3OTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>

            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3OTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
          </div>
        </div>
        <div class="column column-3" data-speed="1.1">
          <div class="column-content">
            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1508606348330-62c2be01d84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY4NTF8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1564668836804-05a2de350bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY4NTF8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
            <div class="grid-image">
              <img src="https://images.unsplash.com/photo-1578991131964-68f1757f6dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY4Nzl8&ixlib=rb-4.0.3&q=80&w=400" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    <section class="parallax-section">
      <img class="parallax-image" src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzcwMjl8&ixlib=rb-4.0.3&q=80&w=1000" data-speed="auto">
    </section>

    <div class="spacer"></div>

    <div class="pin-section">
      <div class="pin-content pin-content-1">
        <div class="pin-box">
          <img class="pin-image" src="https://images.unsplash.com/photo-1476631840528-13bdc7f18072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5MjN8&ixlib=rb-4.0.3&q=80&w=800">
        </div>
        <div class="pin-box">
          <img class="pin-image" src="https://images.unsplash.com/photo-1447622919665-d95b0d80b251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3NTB8&ixlib=rb-4.0.3&q=80&w=800">
        </div>
        <div class="pin-box">
          <img class="pin-image" src="https://images.unsplash.com/photo-1626102307114-88b57c3814a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5MjN8&ixlib=rb-4.0.3&q=80&w=800">
        </div>
      </div>

      <div class="pin-content pin-content-2">
        <div class="pin-box">
          <img class="pin-image" src="https://images.unsplash.com/photo-1506719040632-7d586470c936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5MjN8&ixlib=rb-4.0.3&q=80&w=800">
        </div>
        <div class="pin-box">
          <img class="pin-image" src="https://images.unsplash.com/photo-1532463788086-56a492a0b34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5NzF8&ixlib=rb-4.0.3&q=80&w=800">
        </div>
        <div class="pin-box">
          <img class="pin-image" src="https://images.unsplash.com/photo-1500408698778-2afa347782f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5ODZ8&ixlib=rb-4.0.3&q=80&w=800">
        </div>
      </div>
    </div>
  </div>
</div>
```

``` cm-s-default
* {
  position: relative;
  box-sizing: border-box;
}

body {
  background: #222;
  color: #fff;
}

.speed-range {
  margin-top: 2rem;
  text-align: center;
}

output {
  width: 2rem;
  display: inline-block;
  text-align:center;
}

svg {
  overflow: visible !important;
}

.parallax-section {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  top: 0;
  padding: 0 1rem;
  transform-origin: center top;
}

.parallax-image {
  height: 200vh;
  width: 100%;
  object-fit: cover;
  will-change: transform;
}

.logo-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo-section svg {
  width: 60%;
}

.grid-section {
  width: 100%;
  overflow: visible;
  z-index: 2;
}

.grid-layout {
  display: flex;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  transform-origin: center top;
}

.column {
  height: 100%;
}

.panel {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column-content {
  display: grid;
  grid-template-rows: 45vh 45vh 45vh;
  grid-gap: 1rem;
  height: 100%;
}

.grid-image {
  width: 100%;
}

.grid-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pin-section {
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: 1fr 1fr;
}

.pin-content {
  width: 300%;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  will-change: transform;
}

.pin-box {
  height: 100%;
  width: 100%;
}

.pin-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.spacer {
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-letter {
  fill: #fff;
}

.smoother-letter,
#mouse-wheel {
  fill: #88ce02;
}

.by-greensock-letter {
  fill: #fff;
  opacity: 0.6;
}

#mouse-outline {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 13px;
}

```

[View Compiled](https://codepen.io/GreenSock/embed/BaqMgoy?default-tab=result&theme-id=41164#0)

``` cm-s-default
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother;

smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  speed: 1,
  smoothTouch: 0.1
});

let paths = gsap.utils.toArray(
  "#logo-scroll path, #logo-smoother path, #logo-mouse"
);
let byGreensock = document.querySelector("#by-greensock");

let distPaths = gsap.utils.distribute({
  base: -300,
  amount: 600
});

let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".logo-section",
    scrub: 1,
    start: "bottom 95%",
    end: "bottom center"
  }
});

logoTl
  .to(paths, { x: distPaths })
  .to([...paths, byGreensock], { opacity: 0 }, 0);

let gridTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".grid-section",
    scrub: 1,
    start: "top center",
    end: "bottom+=10% bottom"
  },
  defaults: {
    ease: "power1.inOut"
  }
});

gridTl
  .add("start")
  .from(
    ".grid-layout",
    {
      ease: "power1",
      scale: 3
    },
    "start"
  )
  .from(
    ".column-1 .grid-image",
    {
      duration: 0.6,
      xPercent: (i) => -((i + 1) * 40 + i * 100),
      yPercent: (i) => (i + 1) * 40 + i * 100
    },
    "start"
  )
  .from(
    ".column-3 .grid-image",
    {
      duration: 0.6,
      xPercent: (i) => (i + 1) * 40 + i * 100,
      yPercent: (i) => (i + 1) * 40 + i * 100
    },
    "start"
  );

gsap.from(".parallax-section", {
  scale: 1 / 3,
  scrollTrigger: {
    trigger: ".parallax-section",
    scrub: 1
  }
});

let pinSection = document.querySelector(".pin-section");
let pinContent1 = document.querySelector(".pin-content-1");
let pinContent2 = document.querySelector(".pin-content-2");

let pinTl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    trigger: pinSection,
    scrub: true,
    start: "top top",
    end: () => `$+=${pinContent1.offsetWidth}`,
    invalidateOnRefresh: true
  }
});

pinTl.fromTo(
  ".pin-content-1",
  {
    x: () => document.body.clientWidth * 0.9
  },
  {
    x: () => -pinContent1.offsetWidth,
    ease: "none"
  },
  0
);

pinTl.fromTo(
  ".pin-content-2",
  {
    x: () => -pinContent2.offsetWidth + document.body.clientWidth * 0.1
  },
  {
    x: () => document.body.clientWidth,
    ease: "none"
  },
  0
);

const speedInput = document.getElementById("speed");
const speedOutput = document.querySelector('output[name="speedOutput"]');

speedInput.addEventListener("input", () => {
  const speedValue = speedInput.value;
  speedOutput.textContent = speedValue;
});

speedInput.addEventListener("change", () => {
  smoother.speed = parseFloat(speedInput.value);

  smoother.kill();

  smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    speed: parseFloat(speedInput.value),
    smoothTouch: 0.1
  });

  ScrollTrigger.refresh();
});

```

ScrollSmoother - speed demo

### crank that speed or slow things down...

speed1

![](https://images.unsplash.com/photo-1516319915504-015b432d407c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3OTJ8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1534748626724-c6256f106a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3NTB8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1609671443271-ea10aa353ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3NTB8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzcwMjl8&ixlib=rb-4.0.3&q=85)

![](https://images.unsplash.com/photo-1509099652299-30938b0aeb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3OTJ8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1498084393753-b411b2d26b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3OTJ8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1508606348330-62c2be01d84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY4NTF8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1564668836804-05a2de350bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY4NTF8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1578991131964-68f1757f6dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY4Nzl8&ixlib=rb-4.0.3&q=80&w=400)

![](https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzcwMjl8&ixlib=rb-4.0.3&q=80&w=1000)

![](https://images.unsplash.com/photo-1476631840528-13bdc7f18072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5MjN8&ixlib=rb-4.0.3&q=80&w=800)

![](https://images.unsplash.com/photo-1447622919665-d95b0d80b251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY3NTB8&ixlib=rb-4.0.3&q=80&w=800)

![](https://images.unsplash.com/photo-1626102307114-88b57c3814a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5MjN8&ixlib=rb-4.0.3&q=80&w=800)

![](https://images.unsplash.com/photo-1506719040632-7d586470c936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5MjN8&ixlib=rb-4.0.3&q=80&w=800)

![](https://images.unsplash.com/photo-1532463788086-56a492a0b34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5NzF8&ixlib=rb-4.0.3&q=80&w=800)

![](https://images.unsplash.com/photo-1500408698778-2afa347782f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgwMzY5ODZ8&ixlib=rb-4.0.3&q=80&w=800)

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/gOWxmWG.css](https://codepen.io/GreenSock/pen/gOWxmWG.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=v3.12](https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=v3.12)
2. [https://assets.codepen.io/16327/ScrollSmoother.min.js](https://assets.codepen.io/16327/ScrollSmoother.min.js)
3. [https://assets.codepen.io/16327/ScrollTrigger.min.js](https://assets.codepen.io/16327/ScrollTrigger.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

tip

GSAP 3.12 delivers various bug fixes, so we 'd highly recommend [installing the latest version today](https://gsap.com/docs/v3/Installation). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, Github, etc.).

## Resources [​](https://gsap.com/blog/3-12/\#resources "Direct link to Resources")

- [Full release notes on Github](https://github.com/greensock/GSAP/releases/tag/3.12.0)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources)
- [Community forums](https://gsap.com/community/)

#### Happy tweening! [​](https://gsap.com/blog/3-12/\#happy-tweening "Direct link to Happy tweening!")

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [ScrollTrigger](https://gsap.com/blog/tags/scroll-trigger)
- [ScrollSmoother](https://gsap.com/blog/tags/scroll-smoother)

[Newer Post\\
\\
GSAP is Joining Webflow](https://gsap.com/blog/webflow-GSAP) [Older Post\\
\\
3.11 release](https://gsap.com/blog/3-11)

## Contents

- [Clamp Your Triggers](https://gsap.com/blog/3-12/#clamp-your-triggers)
  - [So what 's going on under the hood?](https://gsap.com/blog/3-12/#so-what-s-going-on-under-the-hood)
- [Clamp data-speed](https://gsap.com/blog/3-12/#clamp-data-speed)
- [New speed option for ScrollSmoother](https://gsap.com/blog/3-12/#new-speed-option-for-scrollsmoother)
- [Resources](https://gsap.com/blog/3-12/#resources)

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