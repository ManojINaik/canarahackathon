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
- [Logout](https://gsap.com/community/logout/?csrfKey=706f078408f2d3f0c987284f8bf01943)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=706f078408f2d3f0c987284f8bf01943)
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

[Skip to main content](https://gsap.com/resources/keyframes/#__docusaurus_skipToContent_fallback)

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

- Keyframes

On this page

# Keyframes

info

keyframes are only to be used in `to()` tweens.

If you find yourself writing multiple tweens to animate one target, it **_may_** be time to reach for keyframes. Keyframes are a great way to move a target through a series of steps while keeping your code concise.

Take a repetitive timeline like the one below - It can be simplified down nicely to fit into one tween:

```codeBlockLines_p187
// timeline
let tl = gsap.timeline();
tl.to(".box", {
    x: 100
  })
  .to(".box", {
    y: 100
  })
  .to(".box", {
    x: 0
  })
  .to(".box", {
    y: 0
  });

// Array-based keyframes
gsap.to(".box", {
  keyframes: {
    x: [0, 100, 100, 0, 0],
    y: [0, 0, 100, 100, 0],
    ease: "power1.inOut"
  },
  duration: 2
});

```

**We like to think of keyframes as a sub-timeline nested _inside_ a tween.** There are a few different ways to write keyframes. If you're a visual learner, check out this video.

Video Walkthrough

keyframes.mp4 from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1314700391-30ce84ff159fc32d1d7e421a1d73a5ac0ad7e39c657a0f0dc32ad0e68149f4ea-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

keyframes.mp4

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Like

Share

Play

Show controls

SettingsPicture-in-PictureFullscreen

[Watch on Vimeo](https://vimeo.com/)

# Settings

QualityAuto

SpeedNormal

## Keyframe Options [​](https://gsap.com/resources/keyframes/\#keyframe-options "Direct link to Keyframe Options")

### Object keyframes - v3.0 [​](https://gsap.com/resources/keyframes/\#object-keyframes---v30 "Direct link to Object keyframes - v3.0")

This keyframes syntax lets you pass in an Array of vars parameters to use for the given target(s). Think of them like a sequence of .to() tween vars. You can use a `delay` value to create gaps or overlaps.

The default per-keyframe ease is `linear` which you can override in individual keyframes. You can also apply an ease to the _entire_ keyframe sequence.

```codeBlockLines_p187
gsap.to(".elem", {
 keyframes: [\
  {x: 100, duration: 1, ease: 'sine.out'}, // finetune with individual eases\
  {y: 200, duration: 1, delay: 0.5}, // create a 0.5 second gap\
  {rotation: 360, duration: 2, delay: -0.25} // overlap by 0.25 seconds\
 ],
 ease: 'expo.inOut' // ease the entire keyframe block
});

```

### Percentage keyframes - v3.9 [​](https://gsap.com/resources/keyframes/\#percentage-keyframes---v39 "Direct link to Percentage keyframes - v3.9")

This familiar syntax makes porting animations over from CSS a breeze! Instead of using delays and duration in the keyframe object, you specify an overall duration on the tween itself, then define the position of each keyframe using percentages.

To be consistent with CSS behaviour, the default per-keyframe ease is `power1.inOut` which generally looks quite nice but you can override this in individual keyframes or on all keyframes using `easeEach`.

```codeBlockLines_p187
gsap.to(".elem", {
 keyframes: {
  "0%":   { x: 100, y: 100},
  "75%":  { x: 0, y: 0, ease: 'sine.out'}, // finetune with individual eases
  "100%": { x: 50, y: 50 },
   easeEach: 'expo.inOut' // ease between keyframes
 },
 ease: 'none' // ease the entire keyframe block
 duration: 2,
})

```

### Simple Array-based keyframes - v3.9 [​](https://gsap.com/resources/keyframes/\#simple-array-based-keyframes---v39 "Direct link to Simple Array-based keyframes - v3.9")

Just define an Array of values and they'll get equally distributed over the time specified in the tween.

The default per-keyframe ease is `power1.inOut`, but you can override this by using `easeEach`. The Arrays do not need to have the same number of elements.

```codeBlockLines_p187
gsap.to(".elem", {
 keyframes: {
  x: [100, 0, 50],
  y: [100, 0, 50]
  easeEach: 'sine.inOut' // ease between keyframes
  ease: 'expo.out' // ease the entire keyframe block
 },
 duration: 2,
})

```

## Easing keyframes [​](https://gsap.com/resources/keyframes/\#easing-keyframes "Direct link to Easing keyframes")

Easing is integral to animation and keyframes give you a huge amount of flexibility.

**Percentage keyframes** and **Simple keyframes** allow you to control the ease between each of the keyframes with `easeEach`.

#### loading...

CodePen Embed - Ease vs EaseEach

- [HTML](https://codepen.io/GreenSock/embed/GRvLaQe/941b82d684b7fbf5303304d671e15ce2?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/GRvLaQe/941b82d684b7fbf5303304d671e15ce2?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/GRvLaQe/941b82d684b7fbf5303304d671e15ce2?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/GRvLaQe/941b82d684b7fbf5303304d671e15ce2?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/GRvLaQe/941b82d684b7fbf5303304d671e15ce2?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/GRvLaQe "Edit on CodePen")

``` cm-s-default
<p class="text">Fine-tune your easing with ease and easeEach</p>
<section>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
    <rect opacity="0.5" stroke-width="0.3" x="25" y="25" width="100" height="100" fill="none" stroke="#fff" stroke-miterlimit="5" stroke-dasharray="5" />
    <circle cx="25" cy="25" r="2" fill="#d5d5d5"/>
    <circle cx="125" cy="25" r="2" fill="#d5d5d5"/>
    <circle cx="125" cy="125" r="2" fill="#d5d5d5"/>
    <circle cx="25" cy="125" r="2" fill="#d5d5d5"/>
    <rect class="elem" x="10" y="10" width="30" height="30" rx="4" fill="#0ae448" />

  </svg>

  <form>
    <div class="pretty p-default p-curve">
      <input type="radio" name="eases" id="ease" value="ease" checked>
      <div class="state">
        <label for="ease">ease</label>
      </div>
    </div>

    <div class="pretty p-default p-curve">
      <input type="radio" name="eases" id="each" value="each">
      <div class="state">
        <label for="each">easeEach</label>
      </div>
    </div>
  </form>

</section>
```

``` cm-s-default
.pretty.p-default input:checked~.state label:after {
    background-color: #0ae448!important;
}

body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  padding: 0 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

form > * + * {
  margin-top: 1rem;
}

section {
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

svg {
  min-width: 200px;
  width: 70%;
}
```

``` cm-s-default
let eachTween = gsap.to(".elem", {
  keyframes: {
    x: [0, 100, 100, 0, 0],
    y: [0, 0, 100, 100, 0],
    easeEach: "power4.inOut" // <- customise the ease between each keyframe
  },
  duration: 5,
  paused: true,
});

let easeTween = gsap.to(".elem", {
  keyframes: {
    x: [0, 100, 100, 0, 0],
    y: [0, 0, 100, 100, 0],
    easeEach: 'none' // <- override the default keyframe ease
  },
  ease: "power4.inOut", // <- apply an ease to all the keyframes
  duration: 5,
  paused: true,
});

easeTween.play()

let form = document.querySelector("form");
let text = document.querySelector(".text");

form.addEventListener("change", (e) => {
  let value = document.querySelector("input:checked").value;

  if (value === "ease") {
    eachTween.kill()
    easeTween.play(0)
    text.textContent = "ease the whole keyframe"
  } else {
    easeTween.kill()
    eachTween.play(0)
    text.textContent = "ease between keyframes"
  }
});

```

Ease vs EaseEach

Fine-tune your easing with ease and easeEach

ease

easeEach

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)
2. [https://cdnjs.cloudflare.com/ajax/libs/pretty-checkbox/3.0.3/pretty-checkbox.min.css](https://cdnjs.cloudflare.com/ajax/libs/pretty-checkbox/3.0.3/pretty-checkbox.min.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

With **Object keyframes** and **Percentage keyframes** you can drill down and add different eases into individual keyframes.

#### loading...

CodePen Embed - Bounce Party with GSAP keyframes,

- [HTML](https://codepen.io/GreenSock/embed/OJjdLqm/1c38f65c7536803a59f19a899ac0fbb9?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/OJjdLqm/1c38f65c7536803a59f19a899ac0fbb9?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/OJjdLqm/1c38f65c7536803a59f19a899ac0fbb9?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/OJjdLqm/1c38f65c7536803a59f19a899ac0fbb9?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/OJjdLqm/1c38f65c7536803a59f19a899ac0fbb9?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/OJjdLqm "Edit on CodePen")

``` cm-s-default
<svg viewBox="0 0 100 200">
  <defs>
    <linearGradient id="grad-1" x1="30" y1="0" x2="70" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0.2" stop-color="#0ae448" />
      <stop offset="0.5" stop-color="#abff84" />
    </linearGradient>
  </defs>
  <ellipse class="shadow" cx="50" cy="188" rx="15" ry="5" />

  <circle fill="url(#grad-1)" class="ball" cx="50" cy="22" r="15" />
</svg>
```

``` cm-s-default
body {
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e100f;
}

svg {
  width: 70vw;
  max-height: 80vh;
  max-width: 500px;
  opacity: 0;
}

.shadow {
  opacity: 0.2;
}

```

``` cm-s-default
gsap.set("svg", { opacity: 1 });

gsap.to(".ball", {
  keyframes: {
    "0%": { yPercent: 0, scaleX: 1, scaleY: 1 },
    "7%": { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: "sine.in" },
    "25%": { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: "sine.in" },
    "50%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "none" },
    "60%": { scaleX: 1.6, scaleY: 0.4, ease: "none" },
    "65%": { yPercent: 500, scaleX: 1, scaleY: 1 },
    "100%": { yPercent: 0, scaleX: 1, scaleY: 1 },
    easeEach: "sine.out"
  },
  duration: 1,
  repeat: -1,
  transformOrigin: "center bottom"
});

gsap.to(".shadow", {
  scale: 0.7,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  transformOrigin: "center"
});

```

Bounce Party with GSAP keyframes,

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/cassie-codes/fullpage/LYjebyK/30dc7859e4f28c15fb2abdcd61d899c3?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

You can even combine multiple easing properties, keyframes and normal tween values. 🤯

```codeBlockLines_p187
gsap.to(".box", {
  keyframes: {
    y: [0, 80, -10, 30, 0],
    ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
    easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
  },
  rotate: 180,
  ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
  duration: 5,
  stagger: 0.2
});

```

#### loading...

CodePen Embed - keyframe easing

- [HTML](https://codepen.io/GreenSock/embed/mdMYrBM/92533379938b4afb117727d84b47651b?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/mdMYrBM/92533379938b4afb117727d84b47651b?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/mdMYrBM/92533379938b4afb117727d84b47651b?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/mdMYrBM/92533379938b4afb117727d84b47651b?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/mdMYrBM/92533379938b4afb117727d84b47651b?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/mdMYrBM "Edit on CodePen")

``` cm-s-default
<div class="box gradient-green"></div>
<div class="box gradient-green"></div>
<div class="box gradient-green"></div>
<div class="box gradient-green"></div>
```

``` cm-s-default
body {
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.box {
  margin: 1rem;
}
```

``` cm-s-default
gsap.to(".box", {
  keyframes: {
    y: [0, 80, -10, 30, 0],
    ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
    easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
  },
  rotate: 180,
  ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
  duration: 5,
  stagger: 0.2
});

```

keyframe easing

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

### Keyframe tips [​](https://gsap.com/resources/keyframes/\#keyframe-tips "Direct link to Keyframe tips")

Both the **Object keyframes** and the **Percentage keyframes** behave similarly to tweens, so you can leverage callbacks like `onStart` and `onComplete`.

```codeBlockLines_p187
gsap.to(".elem", {
 keyframes: [\
  {x: 100, duration: 1},\
  {y: 200, duration: 1, onComplete: () => { console.log('complete')}},\
  {rotation: 360, duration: 2, delay: -0.25, ease: 'sine.out'}\
 ]
});

gsap.to(".elem", {
 keyframes: {
  "0%":   { x: 100, y: 100},
  "75%":  { x: 0, y: 0, ease: 'power3.inOut'},
  "100%": { x: 50, y: 50, ease: 'none', onStart: () => { console.log('start')} }
 },
 duration: 2,
})

```

We hope this has helped you get your head around keyframes - if you have any questions pop over to [our forums](https://gsap.com/community/).

Happy tweening!

[Previous\\
\\
The Position Parameter](https://gsap.com/resources/position-parameter) [Next\\
\\
JS Frameworks](https://gsap.com/resources/frameworks)

## Contents

- [Keyframe Options](https://gsap.com/resources/keyframes/#keyframe-options)
  - [Object keyframes - v3.0](https://gsap.com/resources/keyframes/#object-keyframes---v30)
  - [Percentage keyframes - v3.9](https://gsap.com/resources/keyframes/#percentage-keyframes---v39)
  - [Simple Array-based keyframes - v3.9](https://gsap.com/resources/keyframes/#simple-array-based-keyframes---v39)
- [Easing keyframes](https://gsap.com/resources/keyframes/#easing-keyframes)
  - [Keyframe tips](https://gsap.com/resources/keyframes/#keyframe-tips)

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