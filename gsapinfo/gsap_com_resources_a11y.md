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
- [Logout](https://gsap.com/community/logout/?csrfKey=f490028df70e4c28e9e38354da9b94ea)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=f490028df70e4c28e9e38354da9b94ea)
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

[Skip to main content](https://gsap.com/resources/a11y/#__docusaurus_skipToContent_fallback)

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

- Accessibility

On this page

# Accessible Animation

Quick Start - `gsap.matchMedia()`

#### Example usage [​](https://gsap.com/resources/a11y/\#example-usage "Direct link to Example usage")

```codeBlockLines_p187
// create a matchMedia object
let mm = gsap.matchMedia()

// only add animations if the user is ok with motion!
mm.add("(prefers-reduced-motion: no-preference)", (context) => {
  // This animation will not run if the user has opted out of animation at the OS level
  gsap.to(".box", {
    rotation: 360,
    repeat: -1,
  });

});

```

Animation can really elevate a website, but it can also cause a real headache for some users. With great power comes great responsibility, and the fun "motion design" part of animation is only one part of our job.

Video Explainer

Responsive & Accessible Animation with gsap.matchMedia() - YouTube

GSAP Learning

32.2K subscribers

[Responsive & Accessible Animation with gsap.matchMedia()](https://www.youtube.com/watch?v=9gipsKpWozE)

GSAP Learning

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

[Watch on](https://www.youtube.com/watch?v=9gipsKpWozE&embeds_referring_euri=https%3A%2F%2Fgsap.com%2F)

0:00

0:00 / 12:52•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=9gipsKpWozE "Watch on YouTube")

## Prefers reduced motion [​](https://gsap.com/resources/a11y/\#prefers-reduced-motion "Direct link to Prefers reduced motion")

Did you know that some people have physical reactions to motion? People with vestibular (inner ear) disorders can experience dizziness, headaches, or even nausea from animated content. Sounds horrible right? With this in mind, it's important that our animations are safe for people with motion sensitivities.

Luckily, we can tap into operating system settings with the [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query. This media query detects whether the user has requested the operating system to minimize the amount of animation or motion it uses.

![](https://gsap.com/assets/images/prefersreducedmotion-2f07bcff9b983b185f203d55b487d7a0.png)

We can listen to this user preference and adjust our animations accordingly with [gsap.matchMedia().](https://gsap.com/docs/v3/GSAP/gsap.matchMedia())

In the following code snippet we are animating the box differently depending on the user's preference. We can animate more if the user has no preference set, but if someone has asked for 'reduced' animations, we should be more mindful - either by removing animations or by reducing them.

```codeBlockLines_p187

let mm = gsap.matchMedia()
// this user has no preference set, so it's safe to animate!
mm.add("(prefers-reduced-motion: no-preference)", (context) => {
  gsap.from(".box", {
    opacity: 0,
    rotation: 360,
    ease: "back.out"
  })
});

// this user has specified "reduced motion", so either remove the animations or simplify them down
mm.add("(prefers-reduced-motion: reduce)", (context) => {
  gsap.from(".box", { opacity: 0})
});

```

Try it out

It's easiest to understand in action! [adjust your reduced motion preference](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences) and watch how the animation changes.

#### loading...

CodePen Embed - gsap.matchMedia() Demo - reduced motion

- [HTML](https://codepen.io/GreenSock/embed/LYwmdmr?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/LYwmdmr?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/LYwmdmr?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/LYwmdmr?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/LYwmdmr?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/LYwmdmr "Edit on CodePen")

``` cm-s-default
<section class="panel">
  <div class="box green"></div>
</section>
```

``` cm-s-default
header {
  flex-direction: column;
}
.panel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gray p {
  color: #ccc;
  font-size: 1.4em;
  margin: 0;
  padding: 30px;
  line-height: 1.4em;
}

.bottom {
  width: 100%;
  text-align: center;
  padding: 150px 30px;
  font-size: 1.2em;
  box-sizing: border-box;
}

```

``` cm-s-default
let mm = gsap.matchMedia()

// this user has no preference set, so it's safe to animate!
mm.add("(prefers-reduced-motion: no-preference)", (context) => {
  gsap.from(".box", {
    rotation: 360,
    scale: 1.5,
    ease: "back.inOut",
    repeat: -1,
    yoyo: true,
    duration: 3,
  })
});

// this user has specified "reduced motion", so either remove the animations or simplify them down
mm.add("(prefers-reduced-motion: reduce)", (context) => {
  gsap.from(".box", { opacity: 0, repeat: -1, duration: 3, ease: "none"})
});
```

gsap.matchMedia() Demo - reduced motion

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/dunkelweb/fullpage/ZEQyQpy?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=3.11.2d](https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=3.11.2d)
2. [https://assets.codepen.io/16327/ScrollTrigger.min.js](https://assets.codepen.io/16327/ScrollTrigger.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

### Reduce or Remove? [​](https://gsap.com/resources/a11y/\#reduce-or-remove "Direct link to Reduce or Remove?")

Whether to reduce or remove depends on the animation and should be approached on a case-by-case basis. There are two good questions to ask when trying to assess how to handle an animation.

#### Is this animation particularly triggering? [​](https://gsap.com/resources/a11y/\#is-this-animation-particularly-triggering "Direct link to Is this animation particularly triggering?")

Flashing animations with fast, hard cuts between colors can trigger seizures in epileptic users, and animations with large swiping movements on the x or y axis can make users with vestibular disorders dizzy or nauseated. Small areas of change, like micro-interactions, or simple opacity changes are usually ok.

#### Is the animation decorative or functional? [​](https://gsap.com/resources/a11y/\#is-the-animation-decorative-or-functional "Direct link to Is the animation decorative or functional?")

Some animations are decorative whereas others provide important visual context or feedback on an action. If an animation provides important information, like a progress bar or a download indicator, consider keeping it, but simplifying the animation down. If it's just decorative, removing it entirely is the best option.

Apple's UI

Take a look at how Apple handles their screen transitions with and without reduced motion enabled. Big swiping motions on the x axis can be triggering, but the animation is important for spacial context, so rather than removing it entirely they chose to provide an alternate animation that gently crossfades the opacity.

### Providing an animation toggle [​](https://gsap.com/resources/a11y/\#providing-an-animation-toggle "Direct link to Providing an animation toggle")

Tapping into system preferences isn't bulletproof. After all, there's no guarantee that everyone affected by motion knows how to change their settings. To be extra safe, it's a good idea to add a reduced motion toggle in the UI and put the power back in the user's hands to decide.

Here's a more involved example, using the [conditions syntax](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/#conditions-syntax), showing how you could implement a toggle using [gsap.matchMedia().](https://gsap.com/docs/v3/GSAP/gsap.matchMedia())

#### loading...

CodePen Embed - gsap.matchMedia() Demo - reduced motion toggle

- [HTML](https://codepen.io/GreenSock/embed/RwMQwpR?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/RwMQwpR?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/RwMQwpR?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/RwMQwpR?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/RwMQwpR?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/RwMQwpR "Edit on CodePen")

``` cm-s-default
<header class="center pad-l">
  <h1>gsap.matchMedia()</h1>
  <p class="lead">Use matchMedia and the prefers-reduced-motion media feature for easy, accessibility-friendly animation.</p>
  <div class="checkbox">
  <input type="checkbox" id="motionToggle" class="vh" name="motionToggle" value="false">
  <label for="motionToggle">Reduced animation please</label>
</div>
</header>

<section class="gray">
  <div class="box gradient-green"></div>
</section>

<section class="bottom">
  <p><strong>Pretty cool, right?</strong></p>
  <p>You can read more about reduced motion and vestibular disorders in this <a href="https://css-tricks.com/introduction-reduced-motion-media-query/">blog post</a> on CSS tricks</p>
  <p>How do I <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences">adjust my reduced motion setting?</a></p>
  <p>Check out <a href="https://greensock.com">GSAP</a> today. </p>
</section>
```

``` cm-s-default
header {
  flex-direction: column;
}

.lead {
  padding: 0 20px;
  text-align: center;
}

.gray {
  width: 100%;
  height: 100vh;
}
.box {
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
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
  font-size: 1.2em;
  box-sizing: border-box;
}

```

``` cm-s-default
gsap.registerPlugin(ScrollTrigger);

let reduceMotionCB = document.querySelector("#motionToggle");
reduceMotionCB.checked = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
reduceMotionCB.addEventListener("change", gsap.matchMediaRefresh); // force all matchMedia() stuff to revert and re-run

let breakPoint = 800;
let mm = gsap.matchMedia();

mm.add({
  isDesktop: `(min-width: ${breakPoint}px)`, // <- when ANY of these are true, the function below gets invoked
  isMobile: `(max-width: ${breakPoint - 1}px)`
}, (context) => {

  let {isDesktop, isMobile} = context.conditions;
  let reduceMotion = reduceMotionCB.checked; // if we weren't using a checkbox, we could just add another condition above: "(prefers-reduced-motion: reduce)"
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".gray",
      scrub: 1,
      end: "200%",
      pin: true
    }
  });
  tl.to(".box", {
    scale: reduceMotion ? 1.1 : 2
  }).to(".box", {
    scale: 1
  });

  if (!reduceMotion) { // don't rotate the box if reduced motion was requested
    gsap.to(".box", {
      rotation: 360,
      ease: "none",
      duration: 5,
      repeat: -1
    });
  }

  gsap.set(".box", {
    innerText: isDesktop ? "Desktop" : "Mobile",

  });

  // optionally return a cleanup function
  return () => console.log("cleanup");
});

```

gsap.matchMedia() Demo - reduced motion toggle

# gsap.matchMedia()

Use matchMedia and the prefers-reduced-motion media feature for easy, accessibility-friendly animation.

Reduced animation please

Desktop

**Pretty cool, right?**

You can read more about reduced motion and vestibular disorders in this [blog post](https://css-tricks.com/introduction-reduced-motion-media-query/) on CSS tricks

How do I [adjust my reduced motion setting?](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences)

Check out [GSAP](https://greensock.com/) today.

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/dunkelweb/fullpage/ZEQyQpy?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=3.11.2d](https://assets.codepen.io/16327/gsap-latest-beta.min.js?r=3.11.2d)
2. [https://assets.codepen.io/16327/ScrollTrigger.min.js?cache=6548](https://assets.codepen.io/16327/ScrollTrigger.min.js?cache=6548)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

## SplitText [​](https://gsap.com/resources/a11y/\#splittext "Direct link to SplitText")

People who are blind or partially-sighted might use a screen reader to help them navigate a website. Screenreaders analyze the content of a site and convert it into speech. A screenreader would see the following heading tag and read it out loud to the user.

```codeBlockLines_p187
<h1>Heading</h1>

```

When we animate using [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/) the text is divided up into divs which some screenreaders struggle with. Some read the content out as intended, others read it out letter by letter and others ignore the spaces between words.

```codeBlockLines_p187
<h1>
  <div>H</div>
  <div>e</div>
  <div>a</div>
  <div>d</div>
  <div>i</div>
  <div>n</div>
  <div>g</div>
</h1>

```

This doesn't mean you have to choose between animation or accessibility though. Here are some ways to make your text accessible.

### Using aria labels [​](https://gsap.com/resources/a11y/\#using-aria-labels "Direct link to Using aria labels")

In this solution we use an aria label to provide an accessible text label for screen readers on the parent element and then hide the children from the screenreader with aria-hidden

```codeBlockLines_p187
<h1 aria-label="Heading">
  <div aria-hidden="true">H</div>
  <div aria-hidden="true">e</div>
  <div aria-hidden="true">a</div>
  <div aria-hidden="true">d</div>
  <div aria-hidden="true">i</div>
  <div aria-hidden="true">n</div>
  <div aria-hidden="true">g</div>
</h1>

```

We can do this with JS by adding an aria label on the parent and aria hidden on the lines. There's no need to add `aria-hidden` on all the children as it cascades down.

```codeBlockLines_p187

let text = document.querySelector("#text")
let split = SplitText.create(text, { type: "chars,words,lines" });

// select the lines
let lines = split.lines;
// add an area label on the text element
text.setAttribute('aria-label', text.innerText);

// hide the children from the screenreader
lines.forEach(line => {
  line.setAttribute('aria-hidden', 'true')
})

```

#### loading...

CodePen Embed - Accessible text with aria-labels

- [HTML](https://codepen.io/GreenSock/embed/mdZoVKb?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/mdZoVKb?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/mdZoVKb?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/mdZoVKb?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/mdZoVKb?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/mdZoVKb "Edit on CodePen")

``` cm-s-default
<div class="container">
  <div id="text">
    This text is accessible, the main element gets an aria label which contains the text content, and the child elements are hidden from screenreaders.
  </div>
</div>
```

``` cm-s-default
html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 90vh;
  max-height: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 9px;
}

#text {
  color: #dfdcff;
  font-size: 30px;
  box-sizing: border-box;
  padding: 5%;
  width: 100%;
  text-align: left;
  perspective: 500px;
}

```

``` cm-s-default
gsap.registerPlugin(SplitText);

let text = document.querySelector("#text")
let split = SplitText.create(text, { type: "chars,words,lines" });

let lines = split.lines;

text.setAttribute('aria-label', text.innerText);

lines.forEach(line => {
  line.setAttribute('aria-hidden', 'true')
})

gsap.from(split.words, {
  y: -100,
  opacity: 0,
  rotation: "random(-80, 80)",
  duration: 0.7,
  ease: "back",
  stagger: 0.1
});

```

Accessible text with aria-labels

T

h

i

s

t

e

x

t

i

s

a

c

c

e

s

s

i

b

l

e

,

t

h

e

m

a

i

n

e

l

e

m

e

n

t

g

e

t

s

a

n

a

r

i

a

l

a

b

e

l

w

h

i

c

h

c

o

n

t

a

i

n

s

t

h

e

t

e

x

t

c

o

n

t

e

n

t

,

a

n

d

t

h

e

c

h

i

l

d

e

l

e

m

e

n

t

s

a

r

e

h

i

d

d

e

n

f

r

o

m

s

c

r

e

e

n

r

e

a

d

e

r

s

.

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://assets.codepen.io/16327/SplitText3.min.js](https://assets.codepen.io/16327/SplitText3.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

### Using a visually hidden span [​](https://gsap.com/resources/a11y/\#using-a-visually-hidden-span "Direct link to Using a visually hidden span")

An alternative approach to `aria-label` is to use a [visually-hidden](https://www.a11yproject.com/posts/how-to-hide-content/) duplicate as the accessible text. This is quite a robust solution but be careful of DOM size

```codeBlockLines_p187
<p class="visually-hidden">This is my text</p>
<p class="split-me">
  <div class="word">This</div>
  <div class="word">is</div>
  <div class="word">my</div>
  <div class="word">text</div>
</p>

```

```codeBlockLines_p187
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

```

#### loading...

CodePen Embed - Accessible text with a visually hidden duplicate

- [HTML](https://codepen.io/GreenSock/embed/RwXBeXV?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/RwXBeXV?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/RwXBeXV?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/RwXBeXV?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/RwXBeXV?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/RwXBeXV "Edit on CodePen")

``` cm-s-default
<div class="container">
  <p class="visually-hidden">This text is accessible, the elements are duplicated, the visually hidden element is NOT split and will get read by the screenreader.</p>
  <p id="text" aria-hidden="true">
    This text is accessible, the elements are duplicated, the visually hidden element is NOT split and will get read by the screenreader.
  </p>
</div>
```

``` cm-s-default
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 90vh;
  max-height: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 9px;
}

#text {
  color: #dfdcff;
  font-size: 30px;
  box-sizing: border-box;
  padding: 5%;
  width: 100%;
  text-align: left;
  perspective: 500px;
}

```

``` cm-s-default
gsap.registerPlugin(SplitText);

let text = document.querySelector("#text")
let split = SplitText.create(text, { type: "chars,words,lines" });

let lines = split.lines;

text.setAttribute('aria-label', text.innerText);

lines.forEach(line => {
  line.setAttribute('aria-hidden', 'true')
})

gsap.from(split.words, {
  y: -100,
  opacity: 0,
  rotation: "random(-80, 80)",
  duration: 0.7,
  ease: "back",
  stagger: 0.1
});

```

Accessible text with a visually hidden duplicate

This text is accessible, the elements are duplicated, the visually hidden element is NOT split and will get read by the screenreader.

T

h

i

s

t

e

x

t

i

s

a

c

c

e

s

s

i

b

l

e

,

t

h

e

e

l

e

m

e

n

t

s

a

r

e

d

u

p

l

i

c

a

t

e

d

,

t

h

e

v

i

s

u

a

l

l

y

h

i

d

d

e

n

e

l

e

m

e

n

t

i

s

N

O

T

s

p

l

i

t

a

n

d

w

i

l

l

g

e

t

r

e

a

d

b

y

t

h

e

s

c

r

e

e

n

r

e

a

d

e

r

.

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css](https://codepen.io/GreenSock/pen/xxmzBrw/fcaef74061bb7a76e5263dfc076c363e.css)

### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://assets.codepen.io/16327/SplitText3.min.js](https://assets.codepen.io/16327/SplitText3.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

info

A11y expert? Got some advice or feedback? [Reach out](https://gsap.com/community/contact/), We'd love to hear from you

#### references [​](https://gsap.com/resources/a11y/\#references "Direct link to references")

[The a11y project](https://www.a11yproject.com/posts/how-to-hide-content/)

[Nielsen Norman Group](https://www.nngroup.com/articles/animation-duration/)

## Contents

- [Prefers reduced motion](https://gsap.com/resources/a11y/#prefers-reduced-motion)
  - [Reduce or Remove?](https://gsap.com/resources/a11y/#reduce-or-remove)
  - [Providing an animation toggle](https://gsap.com/resources/a11y/#providing-an-animation-toggle)
- [SplitText](https://gsap.com/resources/a11y/#splittext)
  - [Using aria labels](https://gsap.com/resources/a11y/#using-aria-labels)
  - [Using a visually hidden span](https://gsap.com/resources/a11y/#using-a-visually-hidden-span)

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