[Skip to main content](https://gsap.com/core/#skip)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=50700e50a8bc2d2275a96ab1d7abe71f)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=50700e50a8bc2d2275a96ab1d7abe71f)
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

# Core

### One library, unlimited inspiration

## GSAP Core - everything you need to create blazingly fast, responsive animations for all browsers.

- [Docs](https://gsap.com/docs/v3)
- [Showcase](https://gsap.com/showcase/)

## Animate Anything

GSAP is framework agnostic and endlessly flexible - animate any property of any object with a simple Tween.

- CSS

- React

- SVG

- WebGL


- ```js
<div id="animate-anything-css"></div>

gsap.to("#animate-anything-css", {
    duration: 10,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
```

- ```js
const RotatingCube = () => {
    const boxRef = useRef()

    useGSAP(() => {
      gsap.to(boxRef.current, {
        duration: 10,
        repeat: -1,
        rotation: 360,
      })
    })

    return (
      <div ref={boxRef} />
    )
}
```

- ```js
<svg>
    <g id="animate-anything-svg">
      ...
    </g>
</svg>

gsap.to("#animate-anything-svg", {
    duration: 10,
    ease: "none",
    repeat: -1,
    rotation: 360,
})
```

- ```js
const cube = new Mesh(geometry, material)
scene.add(cube)

gsap.to(cube.rotation, {
    x: Math.PI * 2,
    y: Math.PI * 2,
    duration: 10,
    repeat: -1,
    ease: "none",
    onUpdate: () => {
      renderer.render(scene, camera)
    },
})
```


## GSAP Timeline, The Ultimate Sequencing Tool

Arrange Tweens in a Timeline to precisely choreograph animations. Control entire sequences as a whole using methods like play(), pause(), reverse(), timeScale() and seek()

```js
const tl = gsap.timeline({paused: true});

tl.to(".scrubber", { x: 500, duration: 2 })
	.to(".mask",{ scaleX: 0},"<")
	.to(".icon1",{scale: 1, duration: 0.3}, 0.5)
	.to(".text1",{ autoAlpha: 1, scale: 1}, "-=0.2")

	.add(sequence2,"+=0.1").timeScale(0.8)

	...

	tl.seek(1.2).play()
```

## Responsive & Accessibility-Friendly

Set up animations for different viewport sizes and make then a11y friendly with gsap.matchMedia.

Reduced Motion

```js
let mm = gsap.matchMedia();

mm.add({
 reduceMotion: "(prefers-reduced-motion: reduce)"
}, (context) => {

  let {reduceMotion} = context.conditions;

  gsap.to(".windmill", {
		rotation: 360,
    // adjust animation in tweens
		duration: reduceMotion ? 7.2 : 3.6,
	});

  // or set up easy conditionals
  if (!reduceMotion) {
   let tl = gsap.timeline()
   tl.to()...
  }
});
```

## Extend the Core with GSAP's Plugins

- ### Flip







### Seamlessly transition between two state. Flip does the heavy lifting.


[Flip](https://gsap.com/docs/v3/Plugins/Flip/)
- ### ScrollTrigger







### Jaw-dropping scroll-based animations with minimal code.


[ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- ### MotionPath







### Forge your own (motion) path with this powerful plugin.


[MotionPath](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/)
- ### Draggable







### Make virtually any DOM element draggable, spinnable, and more.


[Draggable](https://gsap.com/docs/v3/Plugins/Draggable/)
- ### Observer







### Tell Observer which event types to watch and it will collect delta values.


[Observer](https://gsap.com/docs/v3/Plugins/Observer/)

- [GetGSAP](https://gsap.com/docs/v3/Installation)


## Need answers?

### Connect the Dots

Head over to the GSAP Community Forum to ask questions, find answers and connect with other users.

[Visit Community](https://gsap.com/community)

### Featured Community Demos

- ![](https://gsap.com/community/uploads/monthly_2025_02/core-torus.jpeg.af243bc12dc16f5dbbe87e62863a318f.jpeg)

[**Torus Loader**](https://codepen.io/kdbkapsere/pen/LYZrxEp)

### Kasper De Bruyne

- ![](https://gsap.com/community/uploads/monthly_2025_02/core-particles.jpeg.8abd73626ad0f34c7bf3eb15820ac6ea.jpeg)

[**canvas particles**](https://codepen.io/GreenSock/pen/NWZRRNb)

### Tom Miller

- ![](https://gsap.com/community/uploads/monthly_2025_02/core-pixelated.jpeg.86e3e21f875e28f16394c531911d8d0b.jpeg)

[**Pixelated Image Reveal**](https://codepen.io/osmosupply/pen/OJKjWNz)

### Osmo

- ![](https://gsap.com/community/uploads/monthly_2025_02/core-cube.jpeg.0b05def30f0726dac4e49d7d6aa64504.jpeg)

[**Cube Walk**](https://codepen.io/petebarr/pen/WNeEoYg?editors=1000)

### Pete Barr

- ![](https://gsap.com/community/uploads/monthly_2025_02/core-rube.jpeg.7671ca3215e815f95e66c9686b7be6c0.jpeg)

[**Rube Goldberg HTML form**](https://codepen.io/ksenia-k/pen/xxoqXbJ)

### Ksenia Kondrashova

- ![](https://gsap.com/community/uploads/monthly_2025_02/core-sine.jpeg.712e72021ae7ffe3d98e4464441c5771.jpeg)

[**Sine Wave**](https://codepen.io/osublake/pen/ExPMgQq)

### Blake Bowen


[Demos on Codepen](https://codepen.io/collection/mreqar)

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