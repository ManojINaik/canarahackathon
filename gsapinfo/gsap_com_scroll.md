[Skip to main content](https://gsap.com/scroll/#skip)

We've joined the Webflow family! [Read the announcement](https://gsap.com/blog/webflow-GSAP)

[GSAPGSAP](https://gsap.com/)
Menu

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







Login[Forgot your password?](https://gsap.com/community/lostpassword)





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
- [Logout](https://gsap.com/community/logout/?csrfKey=1a3587dcf26aac2d57b40f51bbebe288)

- [Get GSAP](https://gsap.com/docs/v3/Installation)

- Tools  - [Core](https://gsap.com/core/)
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
- [Logout](https://gsap.com/community/logout/?csrfKey=1a3587dcf26aac2d57b40f51bbebe288)
- [Messages](https://gsap.com/community/messenger/)
- [Notifications](https://gsap.com/community/notifications/)

#### Sign In

Login[Forgot your password?](https://gsap.com/community/lostpassword/)

#### Not got an account?

[Create an Account](https://gsap.com/community/register)

- [CodePen](https://codepen.io/GreenSock)
- [GitHub](https://github.com/greensock/GreenSock-JS/)
- [Facebook](https://www.facebook.com/greensock/)
- [LinkedIn](https://www.linkedin.com/company/greensock)
- [x](https://www.twitter.com/greensock/)

![](https://gsap.com/img/header-shapes.png)

# Scroll

![](https://gsap.com/tf-assets/scroll-tube-cbe21ede.png)

![](https://gsap.com/tf-assets/scroll-tube-2-682ae4e4.png)

![](https://gsap.com/tf-assets/scroll-tube-cbe21ede.png)

### GSAP allows you to create jaw dropping scroll effects with minimal code for maximum impact.

## Scroll Plugins

Infinitely Flexible,

Highly Optimised

Debounced events, pre-calculated intersection points, synced updates and throttled resize recalculations. We tackle performance headaches so you can focus on the fun stuff.

![](https://gsap.com/tf-assets/full-5246906a.png)

Slide, zoom, morph, draw. Link any GSAP animation to scroll - it’s completely framework agnostic.

![](https://gsap.com/tf-assets/worm-d995fc59.png)

## ScrollTrigger

Ready, Set,

Scroll

Tell stunning and interactive stories. Give any tween or timeline a ScrollTrigger with just one line of code or customise as needed.

```js
gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    trigger: ".scroll-trigger-ready__worm-wrap",
    start: "top 90%",
    end: "bottom 30%",
  },
});
```

[Demos](https://codepen.io/collection/DkvGzg) [Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger)

Start

End

## Pin, Scrub,  Debug

Pin sections in place, scrub through animations with the scrollbar, and debug easily by enabling visual markers.

```js
const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    pin: true,
    trigger: "#pin-windmill",
    start: "50% 50%",
    endTrigger: "#pin-windmill-wrap",
    end: "bottom 50%",
  },
});

tl.to("#pin-windmill-svg", {
  rotateZ: 900,
});
```

Any

Size

Craft animations for any viewport size with gsap.matchMedia()

## ScrollSmoother

It’s like a gentle breeze

Effortlessly guiding your users from one section to another.

![](https://gsap.com/tf-assets/worm-2-afec0379.png)

## It’s smooth like butter

ScrollSmoother leverages the native scroll mechanics meaning you can deliver a fluid and immersive experience for everyone, no matter the device or user input.

[Demos](https://codepen.io/collection/BNMEYN) [Docs](https://gsap.com/docs/v3/Plugins/ScrollSmoother)

![](https://gsap.com/tf-assets/spiral-1-9bfa045a.png)

![](https://gsap.com/tf-assets/spiral-2-fb7f885f.png)

![](https://gsap.com/tf-assets/spiral-3-8cd34159.png)

![](https://gsap.com/tf-assets/spiral-4-9810c545.png)

![](https://gsap.com/tf-assets/spiral-5-f06ea89c.png)

![](https://gsap.com/tf-assets/spiral-6-e7bcdc8d.png)

![](https://gsap.com/tf-assets/spiral-7-323adaf0.png)

## Create   mesmerising effects

Add gorgeous parallax and trailing effects by simply adding a data attribute

```js
<div data-speed="0.8"></div>
<div data-speed="2.0"></div>
<div data-speed="1.2"></div>
```

0.8

2.0

1.2

## Seamlessly integrated

Get all the capabilities of GSAP and ScrollTrigger with the added benefits of smooth scrolling. With tight integration across the whole ecosystem, even the most complex animations look flawless.

## B    a    c    k        t    o        B    a    s    i    c    s        w    i    t    h        O    b    s    e    r    v    e    r

Need more low-level control? Easily detect scroll and other events without wrestling with implementation details.

[Demos](https://codepen.io/collection/KpNYOd) [Docs](https://gsap.com/docs/v3/Plugins/Observer)

## Buttery Smooth Scrolling With GSAP Scroll Plugins

- ### ScrollSmoother

[Club GSAP](https://gsap.com/pricing/)





### The easiest way to make buttery smooth work of scrolling.


[ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
- ### ScrollTrigger







### Jaw-dropping scroll-based animations with minimal code.


[ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- ### ScrollTo







### Take your users on a wild scroll ride to wherever they need to go.


[ScrollTo](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/)
- ### Observer







### Tell Observer which event types to watch and it will collect delta values.


[Observer](https://gsap.com/docs/v3/Plugins/Observer)

- [GetGSAP](https://gsap.com/docs/v3/Installation)


### Featured Community Demos

- ![](https://gsap.com/community/uploads/monthly_2025_02/infinite.jpeg.97f42725b8df3b59984bfd97bec2bcd0.jpeg)

[**Infinite Cover Flow**](https://codepen.io/jh3y/pen/WNRvqJP)

### Jhey

- ![](https://gsap.com/community/uploads/monthly_2025_02/goo.jpeg.3ba6c6c3633204a6f188a67489497639.jpeg)

[**On-Scroll Gooey Overlay**](https://codepen.io/ksenia-k/pen/NWmMxLg)

### Ksenia Kondrashova

- ![](https://gsap.com/community/uploads/monthly_2025_02/disintegration.jpeg.44ad2a217eaf184626e88f9bc9407c9f.jpeg)

[**Disintegration**](https://codepen.io/dev_loop/pen/mdVWRMv)

### Sikriti Dakua

- ![](https://gsap.com/community/uploads/monthly_2025_02/fishes.jpeg.0d27f0458f66c751981c02f3298542a6.jpeg)

[**Weird Fishes**](https://codepen.io/michellebarker/pen/dyMQYYz)

### Michelle Barker

- ![](https://gsap.com/community/uploads/monthly_2025_02/tube.jpeg.7b21809e4c0f450c3b0ee00b735226a3.jpeg)

[**Scroll Through WebGL Tunnel/Tube**](https://codepen.io/motionharvest/pen/WNQYJyM)

### Motion Harvest

- ![](https://gsap.com/community/uploads/monthly_2025_02/plane.jpeg.fb789a7b586c1169213ddfaa9b8cb0fe.jpeg)

[**Airplanes.**](https://codepen.io/ste-vg/pen/GRooLza)

### Steve Gardner

- ![](https://gsap.com/community/uploads/monthly_2025_02/blackbird.jpeg.f0eb542a1e330eb78869d9e8328766f1.jpeg)

[**GSAP ScrollSmoother + Three.js**](https://codepen.io/cmalven/pen/PoEJvjE)

### Malven


[Demos on Codepen](https://codepen.io/collection/bNPYOw)

### Showcase

[GSAP Showreel 2024](https://www.youtube.com/watch?v=ic-bHSoIUaA)

[Dylan Brouwer\\
/ Portfolio](https://dylanbrouwer.design/)

[Helmut Agency\\
/ INDEX Studio](https://helmutagency.com/)

[Warhol Arts\\
/ blacklead](https://warhol-arts.webflow.io/)

[Mat Voyce\\
/ Uncommon](https://matvoyce.tv/)

[Stas Bondar\\
/ Creative Developer](https://www.stabondar.com/)

[Watch Previous Showreels](https://youtube.com/playlist?list=PLLLrVKlAVicLCG0u8WkwLueVU40z0U456&si=FtIszRBdaARjuaAA)


Draggable, SplitText, Inertia




ScrollTrigger, SplitText




ScrollTrigger, Observer, SplitText




ScrollTrigger, Observer




ScrollTrigger, DrawSVG, Flip, SplitText



[Explore All Showcases](https://gsap.com/showcases)

## [GSAP](https://gsap.com/)

- [Core](https://gsap.com/core/)
- [Docs](https://gsap.com/docs/v3/)
- [All Plugins](https://gsap.com/docs/v3/Plugins)

## [Scroll](https://gsap.com/scroll/)

- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
- [ScrollTo](https://gsap.com/docs/v3/Plugins/ScrollToPlugin)
- [Observer](https://gsap.com/docs/v3/Plugins/Observer)

## [SVG](https://gsap.com/svg/)

- [MorphSVG](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin)
- [DrawSVG](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin)
- [MotionPath](https://gsap.com/docs/v3/Plugins/MotionPathPlugin)
- [MotionPathHelper](https://gsap.com/docs/v3/Plugins/MotionPathHelper/)

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
- [Contact Us](https://gsap.com/community/contact)

## GSAP

- [Pricing](https://gsap.com/pricing/)
- [Showcase](https://gsap.com/showcase/)
- [Learn GSAP](https://gsap.com/resources/)
- [Community](https://gsap.com/community/)

## Connect

- [Codepen](https://codepen.io/GreenSock)
- [GitHub](https://github.com/greensock/GreenSock-JS)
- [Facebook](https://www.facebook.com/greensock)
- [LinkedIn](https://www.linkedin.com/company/greensock)
- [X](https://www.twitter.com/greensock)

©2025 GSAP - A Webflow Product. All rights reserved.

- [Privacy Policy.](https://gsap.com/community/privacy-policy/)
- [Terms of Use.](https://gsap.com/community/terms-of-use/)