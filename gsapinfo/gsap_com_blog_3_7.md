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
- [Logout](https://gsap.com/community/logout/?csrfKey=b9fcecd1789c20b993779a975ddaeddd)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=b9fcecd1789c20b993779a975ddaeddd)
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

[Skip to main content](https://gsap.com/blog/3-7/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.7 release

June 9, 2021 · 5 min read

[![Cassie Evans](https://gsap.com/img/cassie-about.jpg)](https://twitter.com/cassiecodes)

[Cassie Evans](https://twitter.com/cassiecodes)

Developer Education

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- Percentage based [position parameter](https://gsap.com/resources/position-parameter) options for timelines
- Better support for SVG elements with [Flip plugin](https://gsap.com/docs/v3/Plugins/Flip/).
- Easily scope animations to your components!
  - New scoped selector - [gsap.utils.selector()](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector())
  - Optional scope parameter added to [gsap.utils.toArray()](https://gsap.com/docs/v3/GSAP/UtilityMethods/toArray())

## Percentage based [position parameter](https://gsap.com/resources/position-parameter). [​](https://gsap.com/blog/3-7/\#percentage-based-position-parameter "Direct link to percentage-based-position-parameter")

The [position parameter](https://gsap.com/resources/position-parameter/) is small but **_mighty_**. It's the key to building sequenced animations with precise control over timings, and now it's even more powerful!

This update gives us the ability to position animations using **percentage** values - either relative to the previous tween or animation, or relative to the duration of the animation being inserted. The percent is based on the [totalDuration()](https://gsap.com/docs/v3/GSAP/Tween/totalDuration()), so repeats, yoyos and staggers will be factored in.

This is _such_ an exciting one because it allows us to tweak durations without affecting positioning!

Say we wanted to overlap a tween by half of it's own duration. Until now we would do a little mental math, divide the duration in half and add it to the [position parameter](https://gsap.com/resources/position-parameter) as a relative position.

```codeBlockLines_p187
tl.to(..., {duration: 2}, "-=1");

```

But if we were to change the duration, we would also have to update the [position parameter](https://gsap.com/resources/position-parameter)

Now, with the addition of percentages, we can do this instead:

```codeBlockLines_p187
// overlap by half of the inserted tweens duration, -1s:
tl.to(..., {duration: 2}, "-=50%");

```

Alternately, we can position a tween or timeline in relation to the most **recently-added animation.**

```codeBlockLines_p187
tl.to(".other", {x: 100, duration: 2});
// insert 25% of the way through the most recently added animation.
// In this case - 0.5s into the 2s duration.
tl.to(".class", {x: 100}, "<25%");

```

Or at a percentage from the **end** of the most **recently-added animation**, like `">-25%"`.

`>-25%` is equivalent to `<75%`

```codeBlockLines_p187
tl.to(".other", {x: 100, duration: 2});
// insert 25% of the way from the end of the most recently added animation.
// In this case - 0.5s from the end of the 2s duration.
tl.to(".class", {x: 100}, ">-25%");

```

As '+=' and '-=' are always based on the **inserting animations total duration**, we can even use a pointer to reference the starting point of the previous tween, whilst using the inserting tweens duration as the percentage offset.

```codeBlockLines_p187
tl.to(".other", {x: 100, duration: 2});
// insert 50% of the inserting tweens duration from the beginning of the most recently added animation.
// In this case - 0.5s from the start of the previous tween.
tl.to(".class", {x: 100, duration: 1},"<+=50%");

```

Powerful stuff! If you want to dig in a bit more, here's a video explainer and some demos to play around with. You'll be a positioning pro in no time!

Video Walkthrough

Percentage based position parameter from GreenSock on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/1165590533-899ef50528d064b868545944c7760b477d00aa1b726894215c8222ba70ff6aa0-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/34768143_60x60?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1)](https://vimeo.com/greensock)

Percentage based position parameter

[GreenSock](https://vimeo.com/greensock)

More options

# More options

Like

Add to Watch Later

Share

Play

Show controls

CC/SubtitlesTranscriptSettingsChaptersPicture-in-PictureFullscreen

[Watch on Vimeo](https://vimeo.com/563826099)

# CC/Subtitles

Off

English

Customize

Preview

# Settings

QualityAuto

SpeedNormal

# Chapters

% based on duration of the inserted tween

01:51

Copy link

Use the previous animation as the reference point

02:43

Copy link

% based on duration of the previous tween

03:20

Copy link

## Check it out in action in these demos. [​](https://gsap.com/blog/3-7/\#check-it-out-in-action-in-these-demos "Direct link to Check it out in action in these demos.")

#### loading...

CodePen Embed - Emoji % position

- [HTML](https://codepen.io/GreenSock/embed/RwpBOvR?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/RwpBOvR?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/RwpBOvR?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/RwpBOvR?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/RwpBOvR?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/RwpBOvR "Edit on CodePen")

``` cm-s-default
<h1>Easily timed changes with random durations.</h1>
<section>
  <div class="emoji">😊</div>
<div class="emoji">😊</div>
<div class="emoji">😊</div>
<div class="emoji">😊</div>
<div class="emoji">😊</div>

</section>
```

``` cm-s-default
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Signika+Negative:wght@400;600&display=swap');

body {
  background-color: #fff;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Signika Negative", sans-serif, Arial;
  margin: 1rem;
  min-height: 100vh;
  overflow: hidden;
  z-index: -1;
}

h1 {
  font-weight: 400;
  font-size: 1.8rem;
}

section {
  position: relative;
  flex: 0 0 auto;
  width: 600px;
  border: solid 3px white;
  padding: 1rem;
}

section:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  background-color: #313639;
  height: 100%;
  z-index: -1;
}

section:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  border-left: 3px solid white;
}

.emoji {
  margin: 6px 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  will-change: transform;
  z-index: 2;
}

```

``` cm-s-default

gsap.registerPlugin(TextPlugin);

gsap.utils.toArray(".emoji").forEach(element => {

  gsap.timeline({ repeat: -1, yoyo: true })
    .to(element, {
      x: 500,
      xPercent: 100,
      transformOrigin: 'center',
      ease: "none",
      duration: "random(2, 5)"
    })
    .set(element, {
      text: "🥳",
    }, "<50%");
});
```

Emoji % position

# Easily timed changes with random durations.

🥳

🥳

🥳

🥳

🥳

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://unpkg.com/gsap@3/dist/TextPlugin.min.js](https://unpkg.com/gsap@3/dist/TextPlugin.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

#### loading...

CodePen Embed - % based with staggers, yoyo and repeat.

- [HTML](https://codepen.io/GreenSock/embed/OJpwYXO?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/OJpwYXO?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/OJpwYXO?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/OJpwYXO?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/OJpwYXO?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/OJpwYXO "Edit on CodePen")

``` cm-s-default
<p>Stagger duration - <span id="stagger"></span></p>
<p>Text start time - <span id="text"></span></p>
<div id="circles">
</div>
<h1 id="heading">Halfway Through.</h1>
<p id="fixed">Click anywhere to refresh</p>
```

``` cm-s-default
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Signika+Negative:wght@400;600&display=swap');

body {
  background-color: #fff;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Nunito", sans-serif, Arial;
  margin: 1rem;
  min-height: 100vh;
  overflow: hidden;
  z-index: -1;
}

p {
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0.5rem 0;
}

h1 {
 font-weight: 400;
 font-size: 1.8rem;
 font-family: "Signika Negative", sans-serif, Arial;
}

#circles {
  margin: 3rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.circle {
  margin: 6px 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  will-change: transform;
  z-index: 2;
}

#heading {
  visibility: hidden;
  opacity: 0;
}

#fixed {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
```

``` cm-s-default
console.clear();

let stagger = document.querySelector("#stagger");
let text = document.querySelector("#text");
let circles = document.getElementById("circles");

let tl = gsap.timeline();

function restart() {
  circles.innerHTML = "";
  tl.clear()

  let circleCount = gsap.utils.random(2, 16, 1);

  for (i = 0; i < circleCount; i++) {
    var circle = document.createElement("div");
    circle.classList.add("circle");

    circles.appendChild(circle);
  }
  gsap.set(".circle", {
    text: "💚"
  });
  gsap.set("#heading", {
    autoAlpha: 0,
  });


  tl.to(".circle", {
    y: -50,
    ease: "sine.inOut",
    stagger: {
      each: 0.2,
      yoyo: true,
      repeat: 1
    }
  }).to(
    "#heading",
    {
      duration: 0.2,
      autoAlpha: 1
    },
    "<50%"
  );

  tl.getChildren().forEach((tween, i) => {
    if (i === 0) {
      stagger.innerHTML = tween.endTime();
    } else {
      text.innerHTML = tween.startTime();
    }
  });
}
restart()
// click anywhere to restart
document.addEventListener("click", restart);

```

% based with staggers, yoyo and repeat.

Stagger duration - 3.2

Text start time - 1.6

💚

💚

💚

💚

💚

💚

💚

💚

💚

💚

💚

💚

# Halfway Through.

Click anywhere to refresh

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://unpkg.co/gsap@3/dist/gsap.min.js](https://unpkg.co/gsap@3/dist/gsap.min.js)
2. [https://unpkg.com/gsap@3/dist/TextPlugin.min.js](https://unpkg.com/gsap@3/dist/TextPlugin.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

## Interactive [Position Parameter](https://gsap.com/resources/position-parameter) Demo [​](https://gsap.com/blog/3-7/\#interactive-position-parameter-demo "Direct link to interactive-position-parameter-demo")

#### loading...

CodePen Embed - Position Parameter explainer - constructor

- [HTML](https://codepen.io/GreenSock/embed/PopXddg/46cc11b9e4319e0562c580669b14c330?default-tab=result&theme-id=41164#html-box)
- [SCSS](https://codepen.io/GreenSock/embed/PopXddg/46cc11b9e4319e0562c580669b14c330?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/PopXddg/46cc11b9e4319e0562c580669b14c330?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/PopXddg/46cc11b9e4319e0562c580669b14c330?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/PopXddg/46cc11b9e4319e0562c580669b14c330?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/PopXddg "Edit on CodePen")

``` cm-s-default
<div id="app">
  <section class="boxes">
    <div ref="purple" class="item purple" data-color="#9d95ff" data-class="purple"></div>
     <div ref="green" class="item green" data-color="#0ae448" data-class="green"></div>
  </section>

  <div class="interface">
      <button class="button" :class="{ playing : paused }" @click="togglePlayback">
        <svg aria-hidden="true" class="button__svg" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
          <g class="pause">
            <path d="M10,17a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v8A1,1,0,0,1,10,17Z" />
            <path d="M14,17a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v8A1,1,0,0,1,14,17Z" />
          </g>
          <path class="play" d="M16.57,11.32,10.31,7.15a.8.8,0,0,0-1.25.68v8.34a.81.81,0,0,0,1.25.68l6.26-4.17A.81.81,0,0,0,16.57,11.32Z" />
        </svg>
        <span class="button__text">pause</span>
      </button>

    <div class="timeline" ref="timeline">
      <div class="timeline__item" v-for="(item,index) in timelineItems" :style="item.style" :class="item.class" :key="item.class">
        <span></span>
      </div>
    </div>
    <div class="times">
      <div v-for="(ms,index) in roundedMilliseconds" :class="{ label: index === labelPosition * 10 }" :key="index">
        <span>{{ index / 10 }}</span>
      </div>
    </div>
    <div class="scrubber" ref="scrubber"></div>
  </div>

  <div class="code-container">
    <span class="code">tl.to(".green-box", { x: {{ endX }}, duration: 1 }<span :class="{ 'hide-comma' : hidePosition }">,&nbsp;</span></span>
    <span class="code position-text" :class="hidePosition ? 'hide-position' : ''">{{ formattedPosition }}</span>
    <span class="code">);</span>
  </div>

  <div class="code-container mobile">
    <div>tl.to(".green-box", {</div>
    <div>&nbsp;&nbsp;x: {{ endX }},</div>
    <div>&nbsp;&nbsp;duration: 1</div>
    <div>}<span :class="hidePosition ? 'hide-comma' : ''">,&nbsp;</span><span class="position-text" :class="{ 'hide-position' : hidePosition }">{{ formattedPosition }}</span>);</div>
  </div>

  <div class="options">

    <div class="options__container flow reference">
      <h3>Reference Point</h3>

        <label class="radio radio--simple">
          <input :class="{ 'checked': 'timelineStart' === referencePoint }" type="radio" value="timelineStart" v-model="referencePoint"><span class="box"></span><span class="info">Start of timeline</span>
        </label>



        <label class="radio radio--simple">
          <input :class="{ 'checked': 'timelineEnd' === referencePoint }" type="radio" value="timelineEnd" v-model="referencePoint"><span class="box"></span><span class="info">End of timeline</span>
        </label>

        <label class="radio">
          <input :class="{ 'checked': 'previousStart' === referencePoint }" type="radio" value="previousStart" v-model="referencePoint"><span class="box">&lt;</span><span class="info">Start of <span class="purpleTxt">previous animation</span></span>
        </label>



        <label class="radio">
          <input :class="{ 'checked': 'previousEnd' === referencePoint }" type="radio" value="previousEnd" v-model="referencePoint"> <span class="box">&gt;</span><span class="info">End of <span class="purpleTxt">previous animation</span></span>
        </label>



        <label class="radio">
          <input v-bind:class="{ 'checked': 'label' === referencePoint }" type="radio" value="label" v-model="referencePoint"> <span class="box box--label">myLabel</span><span class="info">Label</span>
        </label>

    </div>

    <div class="options__container offsets">
      <h3>Offset</h3>

      <div class="offset" :class="{ 'offset--previous': useRecent && usePrevious }">
      <input class="number" @wheel="" v-model="offsetNumber" type="number" :min="-range" :max="range" :step="offsetType === 'percent' ? 5 : 0.5">
      <label class="offset__type" :class="{ 'checked': 'seconds' === offsetType }">
        <input type="radio" value="seconds" v-model="offsetType"> Seconds
      </label>
      <label v-if="referencePoint !== 'timelineStart'" class="offset__type" :class="{ 'checked': 'percent' === offsetType }">
        <input type="radio" value="percent" v-model="offsetType" :disabled="referencePoint === 'timelineStart'"> Percent
      </label>
      </div>
      <div v-if="usePrevious">
        <label class="radio radio--simple">
          <input type="checkbox" :class="{ 'checked': useRecent }"  v-model="useRecent"><span class="box"></span><span class="info">Use percentage of <span class="purpleTxt"> previous animation</span></span>
        </label>
      </div>
    </div>

  </div>
</div>

```

``` cm-s-default

$mobile: 800px;

:root {
  --number-size: 1.2rem;
}

.item {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-top: 0.5rem
}

.green {
  background-color: #0ae448;
}

.purple {
  background-color: #9d95ff;
}

body {
  padding: 0.5rem;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0;
}

h3 {
  font-size: 21px;
  margin-bottom: 0.5rem;
  color: #fffce1;
  font-weight: 400;
}

#app {
  opacity: 0;
}

.flow > * + * {
  margin-top: 0.5rem;
}

.interface {
  // opacity:0;
  position: relative;
  padding: 2.2rem 2rem 2.2rem;
  background-color: #262626;
  border-radius: 10px;
  width: clamp(300px, 80vw, 900px);
  box-shadow: 0 19px 28px rgba(0, 0, 0, 0.05), 0 15px 8px rgba(0, 0, 0, 0.04);

  &__title {
    position: relative;
    color: #fffce1;
    display: block;
    width: 100%;
    padding-bottom: 1rem;
    padding-left: 3px;
    display: flex;
    flex-direction: row;
    h1 {
      font-size: 1.2rem;
    }
  }
}

.timeline > * + * {
  margin-top: 0.5rem;
}

.timeline__item {
  width: 2px;
  margin: 0.5rem;
  border-radius: 999px;
  box-sizing: border-box;
  text-align: center;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline__item.purple span {
  display: none;
  font-size: 0.85rem
}

.scrubber {
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  background-color:#fffce1;
  z-index: 1;
}

.button__svg {
  width: 2rem;
  height: 2rem;
  margin-top: 0px;
  pointer-events: none;
}

.button {
  position: absolute;
  font-size: 0;
  border: none;
  outline: none;
  background-color: transparent;
  top: 10px;
  left: 1rem;
  cursor: pointer;
  display: block;
  padding: 0;
}

.button.playing {
  .pause {
    opacity: 1;
  }
  .play {
    opacity: 0;
  }
}

.button:not(.playing) {
  .pause {
    opacity: 0;
  }
  .play {
    opacity: 1;
  }
}

.times {
  width: calc(100% - 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 999;
  margin-left: 10px;
}

.times > * {
  position: relative;
}

.times div {
  margin-top: 1rem;
  width: 0.5px;
  height: 5px;
  background-color: #fffce1;
  opacity: 0.7;
  position: relative;
}

.times span {
  display: none;
  font-size: var(--number-size);
}

.times div:nth-child(5n + 1) {
  height: 10px;
  background-color: #fffce1;
  opacity: 1;
}

.times div:nth-child(5n + 1) span {
  display: block;
  color: #fffce1;
  text-align: center;
  position: absolute;
  width: auto;
  height: 1rem;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index:2;
}

.times .label {
  height: 10px;
  background-color: dodgerBlue;
}

.times .label span {
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 1rem;
  left: 0%;
  transform: translateX(-0.5rem);
  z-index:2;
}

.times .label:after {
  content: '';
  font-size: 0.85rem;
  text-align: center;
  position: absolute;
  background-size: 70%;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 60px;
  height: 30px;
  left: -30px;
  top: 400%;
  z-index: 9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='Capa_1' x='0' y='0' version='1.1' viewBox='0 0 344.406 344.406' xml:space='preserve'%3E%3Cpath fill='%232191FB' d='M243.243 0h-142.08c-13.767.044-24.916 11.193-24.96 24.96v298.8c0 21 21.04 31.2 37.48 5l58.52-93.28 58.52 93.28c16.44 26.2 37.48 15.96 37.48-5V24.96C268.159 11.193 257.01.044 243.243 0z'/%3E%3C/svg%3E");
}

.boxes {
  display: flex;
  margin-bottom: 0.5rem;
  z-index: -1;
  pointer-events: none;
  flex-direction: column;
}

.emoji {
  margin: 1rem;
  width: 2rem;
  height: 2rem;
}

.heart {
  width: 3rem;
  height: 2.5rem;
  object-position: 85%;
}

#options {
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .input {
    margin-top: 2rem;
    font-size: 1.3rem;
    border: none;
    outline: none;
    padding: 1rem 0.5rem;
    border-bottom: solid 4px #51da85;
  }
}

.radios {
  display: flex;
}

.radio {
  display: flex;
  align-items: center;
}

.radio .box {
  width: 50px;
  background-color: #464646;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.radio .info {
  display: inline-block;
  margin-left:1rem;
}

.radio:nth-of-type(5) .checked ~ .box {
  border-color: #2191FB;
  background-color: #2191FB;
  color: #fff;
}

.checked ~ .box {
  border-color: #9d95ff;
  background-color: #9d95ff;
  color: #fffce1;
}

.radio input {
  position: absolute;
  opacity: 0;
}

.radio--simple .box {
  position: relative;
  width: 15px;
  height: 15px;
  padding: 0;
  border-radius: 99%;
  border-color: #ddd;
}

.radio--simple .box:after {
  position: absolute;
  content: '';
  width: 75%;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 99%;
  opacity: 0;
  background-color: #464646;
}

.radio--simple .checked ~ .box {
  border-color: #51da85;
  background-color: #51da85;
}
.radio--simple .checked ~ .box:after {
  opacity: 1;
}

.offset {
  background-color: #464646;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  display: inline-flex;
  overflow: hidden;

  input:not(.number) {
    opacity: 0;
    position: absolute;
  }

  .offset__type {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    font-size: 0.8rem;
  }

  .offset__type.checked {
    background-color: #0ae448;
    color: #1b1b1b;
  }
}

.offsets .radio--simple {
  margin-top: 1rem;
}

.offsets .radio--simple .checked ~ .box {
  background-color: #9d95ff;
}

.offset--previous {
  .offset__type.checked {
    background-color: #9d95ff;
  }
}

.offset--previous {
  border-color: #9d95ff;
}

.text {
  width: 100%;
}
.label {
  display: block;
  margin-top: 1rem;
}

.number {
  border: none;
  padding: 0.5rem 1rem;
  padding-right: 0.2rem;
  font-size: 1rem;
  border-radius: 20px;
  outline: none;
  background-color: #464646;
  color: #fff
}

.helperText {
  opacity: 0;
  min-height: 135px;
  text-align: center;
}

.greenTxt {
  color: #25b961;
  font-weight: bold;
}
.purpleTxt {
  color: #9d95ff;
  font-weight: bold;
}
.blueTxt {
  color: #2191FB;
  font-weight: bold;
}

.invalid {
  height: 2rem;
  font-size: 0.85rem;
}

footer {
  display: flex;
}

.code {
  opacity: 0.6;
}

.position-text {
  font-size: 1.4rem;
  opacity: 1;
  margin: 0.1em;
  margin-bottom: 0.2em;
  padding: 5px 2px;
  padding-bottom: 0;
  font-weight: 600;
}

.code-container {
  font-family: "Fira Code", monospace;
  margin-top: 2rem;
  font-size: 0.9rem;
  padding:0.51rem;
  align-items: center;
  line-height: 2em;
  color: #fff;
}

.code-container:not(.mobile) {
  display: flex;
  justify-content: center;
  white-space: pre;
}

.code-container.mobile {
  display: none;
}

.code-container.mobile .position-text {
  display: inline-block;
}

.code {
  white-space: pre;
}

.options {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}

.options__container {
  flex: 0 0 50%;
  max-width: 50%;
}

.hide-comma {
  display: none;
}

.code-container .position-text.hide-position {
  margin-left: 0;
  display: none;
}

@media (max-width: $mobile) {

  .options__container {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .code-container:not(.mobile) {
    display: none;
  }

  .code-container.mobile {
    display: block;
  }

  .position-text {
    font-size: 1.3rem;
  }
}

```

[View Compiled](https://codepen.io/GreenSock/embed/PopXddg/46cc11b9e4319e0562c580669b14c330?default-tab=result&theme-id=41164#0)

``` cm-s-default
console.clear();

// "<25%" (use recent), "<+=25%" (use inserting)

gsap.registerPlugin(Draggable, CustomEase, CustomWiggle);

CustomWiggle.create("wiggle", {wiggles:5, type:"easeInOut"});

new Vue({
  el: "#app",
  data() {
    return {
      labelPosition: 1,
      paused: false,
      roundedMilliseconds: 0,
      percentRange: 200,
      secondsRange: 5,
      useRecent: false,
      referencePoint: "timelineStart",
      offsetType: "seconds",
      offsetNumber: 1,
      position: 0,
      hidePosition: false,
      lastSecond: 1,
      lastPercent: 50,
      endX: 500,
      timelineItems: [],
      timelineData: [\
        { class: "purple" },\
        { class: "green" }\
      ]
    }
  },
  mounted() {

    this.setScrubber = gsap.quickSetter(this.$refs.scrubber, "x", "px");
    this.clampSeconds = gsap.utils.clamp(-this.secondsRange, this.secondsRange);
    this.clampPercent = gsap.utils.clamp(-this.percentRange, this.percentRange);
    this.mapSize = gsap.utils.mapRange(30, 90, 1.1, 0.65);

    this.timeline = gsap.timeline();

    this.createScrubber();
    this.renderTimeline();

    window.addEventListener("resize", this.onResize);

    this.$nextTick(() => {
      this.onResize();
      this.timeline.eventCallback("onUpdate", this.updateScrubber);

      // get browser to repaint scaling
      gsap.set(".position-text", { rotation: 0.001, force3D: false });
      gsap.to("#app", { opacity: 1 });
    });
  },
  computed: {
    formattedPosition() {
      if (this.hidePosition) {
        return "";
      }
      if (this.referencePoint !== "timelineStart") {
        return `"${this.position}"`;
      }
      return this.position;
    },
    range() {
      return this.offsetType === "percent" ? this.percentRange : this.secondsRange;
    },
    usePrevious() {
      return this.referencePoint.includes("previous") && this.offsetType === "percent";
    }
  },
  watch: {
    formattedPosition: "animatePosition",
    useRecent: "renderTimeline",
    referencePoint(value) {
      if (value === "timelineStart") {
        this.offsetType = "seconds";
      }

      this.renderTimeline();
    },
    offsetNumber(value) {
      value = parseFloat(value);
      if (isNaN(value)) return;

      if (this.offsetType === "percent") {
        this.offsetNumber = this.clampPercent(value);
      } else {
        this.offsetNumber = this.clampSeconds(value);
      }

      this.renderTimeline();
    },
    offsetType(value) {

      if (value === "percent") {
        this.lastSecond = this.offsetNumber;
        this.offsetNumber = this.lastPercent;
      } else {
        this.lastPercent = this.offsetNumber;
        this.offsetNumber = this.lastSecond;
      }

      this.renderTimeline();
    }
  },
  methods: {
    renderTimeline() {

      this.position = this.getPosition();
      this.endX = this.scrubber.maxX - 56;

      let tl = this.timeline;

      tl.progress(0)
        .clear(true)
        .addLabel("myLabel", this.labelPosition)
        .to(this.$refs.purple, {
          ease: "none",
          duration: 2,
          x: this.endX,
          data: this.timelineData[0]
        }, 0)
        .to(this.$refs.green, {
          ease: "none",
          duration: 1,
          x: this.endX,
          data: this.timelineData[1]
        }, this.position);

      let timelineItems = [];
      let time = tl.duration();
      let children = tl.getChildren();
      let milliseconds = time * 10;
      this.roundedMilliseconds = Math.floor(milliseconds) + 1;

      let fontSize = this.mapSize(this.roundedMilliseconds);
      document.documentElement.style.setProperty('--number-size', fontSize + "rem");

      children.forEach((child, index) => {
        let duration = child.totalDuration();
        let startTime = child.startTime();
        let width = (duration / time) * 100;
        let startPosition = (startTime / time) * 100;

        timelineItems[index] = {
          ...child.data,
          style: {
            width: `${width}%`,
            marginLeft: `${startPosition}%`
          }
        };
      });

      // trigger render
      this.timelineItems = timelineItems;
    },
    getPosition() {

      this.hidePosition = false;
      let value = parseFloat(this.offsetNumber);

      let isNegative = value < 0;
      let isPercent = this.offsetType === "percent";

      if (this.referencePoint !== "timelineStart") {
        value = Math.abs(value);
      }

      let isZero = value === 0;
      let offset = isPercent ? `${value}%` : value;

      switch(this.referencePoint) {
        case "timelineStart": return value;

        case "timelineEnd":
          if (isZero) {
            this.hidePosition = true;
            return "";
          }
          return (isNegative ? "-=" : "+=") + offset;

        case "previousStart":
          if (isZero) {
            return "<";
          }
          if (isPercent && !this.useRecent) {
            return (isNegative ? "<-=" : "<+=") + offset;
          }
          return (isNegative ? "<-" : "<") + offset;

        case "previousEnd":
          if (isZero) {
            return ">";
          }
          if (isPercent && !this.useRecent) {
            return (isNegative ? ">-=" : ">+=") + offset;
          }
          return (isNegative ? ">-" : ">") + offset;

        case "label":
          if (isZero) return "myLabel";
          return "myLabel" + (isNegative ? "-=" : "+=") + offset;

        default: return 0;
      }
    },
    createScrubber() {

      this.scrubber = new Draggable(this.$refs.scrubber, {
        type: "x",
        cursor: "pointer",
        bounds: this.$refs.timeline,
        zIndexBoost: false,
        onPress: () => {
          this.timeline.pause();
          this.paused = true;
        },
        onDrag: () => {
          let progress = this.normalize(this.scrubber.x);
          this.timeline.progress(progress);
        }
      });
    },
    togglePlayback() {
      if (this.timeline.progress() > 0.98) {
        this.paused = false;
        return this.timeline.restart();
      }
      this.paused = !this.paused;
      this.timeline.paused(this.paused);
    },
    onResize() {
      this.scrubber.update(true);
      this.normalize = gsap.utils.normalize(this.scrubber.minX, this.scrubber.maxX);
      this.interpolate = gsap.utils.interpolate(this.scrubber.minX, this.scrubber.maxX);
      this.updateScrubber();
      this.renderTimeline();
    },
    updateScrubber() {
      let x = this.interpolate(this.timeline.progress());
      this.setScrubber(x);
    },
    animatePosition() {

      gsap.fromTo(".position-text", {
        scale: 1,
        yPercent: -5,
      }, {
        overwrite: true,
        duration: 0.6,
        scale: 1.05,
        yPercent: -10,
        ease: 'wiggle',
      });
    }
  }
});

```

Position Parameter explainer - constructor

pause

0

0.1

0.2

0.3

0.4

0.5

0.6

0.7

0.8

0.9

1

1.1

1.2

1.3

1.4

1.5

1.6

1.7

1.8

1.9

2

tl.to(".green-box", { x: 856, duration: 1 }, 1);

tl.to(".green-box", {

x: 856,

duration: 1

}, );1

### Reference Point

Start of timelineEnd of timeline<Start of previous animation>End of previous animationmyLabelLabel

### Offset

Seconds


[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).

It is a fork of [this Pen.](https://codepen.io/team/Vue/fullpage/KKpRVpx?default-tab=result&theme-id=41164&view=)

[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

1. [https://codepen.io/GreenSock/pen/wvZQKQP.css](https://codepen.io/GreenSock/pen/wvZQKQP.css)

### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)
2. [https://unpkg.com/gsap@3/dist/Draggable.min.js](https://unpkg.com/gsap@3/dist/Draggable.min.js)
3. [https://unpkg.com/vue@2.6.14/dist/vue.js](https://unpkg.com/vue@2.6.14/dist/vue.js)
4. [https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js](https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js)
5. [https://assets.codepen.io/16327/CustomWiggle3.min.js](https://assets.codepen.io/16327/CustomWiggle3.min.js)
6. [https://assets.codepen.io/16327/CustomEase3.min.js](https://assets.codepen.io/16327/CustomEase3.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

## Better support for SVG elements with Flip plugin. [​](https://gsap.com/blog/3-7/\#better-support-for-svg-elements-with-flip-plugin "Direct link to Better support for SVG elements with Flip plugin.")

[Flip plugin](https://gsap.com/docs/v3/Plugins/Flip/) has been extended with better support for SVG elements. SVG already has a great coordinate system to work within - but we think this could assist transitions in live data-vis or when animating between states in generative SVG.

We'd love to see what you do with this so don't forget to share your demos with us!

In the meantime, here's a simple example

#### loading...

CodePen Embed - FLIP - Simple SVG element swop

- [HTML](https://codepen.io/GreenSock/embed/yLMqZVZ?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/yLMqZVZ?default-tab=result&theme-id=41164#css-box)
- [JS](https://codepen.io/GreenSock/embed/yLMqZVZ?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/yLMqZVZ?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/yLMqZVZ?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/yLMqZVZ "Edit on CodePen")

``` cm-s-default
<h1>FLIP SVG elements.</h1>
<svg viewBox="0 0 100 20">
  <rect class="square" id="sq1" x="0" y="0" width="20" height="20" fill="#9d95ff"/>
  <rect class="square" id="sq2" x="80" y="0" width="20" height="20" fill="#0ae448"/>
</svg>
<p>Click anywhere to animate between states</p>
```

``` cm-s-default

body {
  background-color: #1d1d1d;;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  min-height: 100vh;
  overflow: hidden;
}

svg {
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;
}

h1 {
 font-weight: 400;
 font-family: "Signika Negative", sans-serif, Arial;
}

p {
  font-size: 1.3rem;
}
```

``` cm-s-default
gsap.registerPlugin(Flip);

const squares = gsap.utils.toArray(".square");

function doFlip() {
  // Get the initial state
  const state = Flip.getState(squares);

  // Make DOM or styling changes (swap the squares in our case)
  swap();

  // Animate from the initial state to the end state
  Flip.from(state, {duration: 2, ease: "power1.inOut"});
};

// change the x attributes
function swap() {
  squares.forEach(sq => {
    let x = sq.getAttribute('x');
    x == "80" ? x = "0" : x = "80";
    sq.setAttribute('x', x);
  })
}

// click anywhere to flip
document.addEventListener("click", doFlip);

```

FLIP - Simple SVG element swop

# FLIP SVG elements.

Click anywhere to animate between states

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js)
2. [https://assets.codepen.io/16327/Flip.min.js?v=3.6.0.beta20](https://assets.codepen.io/16327/Flip.min.js?v=3.6.0.beta20)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

## Easily scope your animations [​](https://gsap.com/blog/3-7/\#easily-scope-your-animations "Direct link to Easily scope your animations")

Modern front end dev is _all about_ encapsulated components, but scoping animations to each individual component can be tricky. React devs, for example, often find themselves in _"ref Hell"_ creating a ref for each and every element they want to animate. Wouldn't it be nice to just use classes and selector text that's limited to your component instance?

## gsap.utils.selector() [​](https://gsap.com/blog/3-7/\#gsaputilsselector "Direct link to gsap.utils.selector()")

With [gsap.utils.selector()](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector()) you can grab descendant elements from **the selected element**.

This is great for components because you can create a scoped selector for that component's main container element and then use that to select descendants. It's similar to calling `.querySelectorAll()` on that element – rather than on the document – except with a few added benefits:

- It returns an **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** rather than a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), so you get access to convenient array methods like `.filter()` and `.map()`.
- You can pass a React ref or Angular ElementRef to [gsap.utils.selector()](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector()). Then when you use the resulting function, it will automatically check for the `.current`/ `.nativeElement` in case it was re-rendered since creation.

```codeBlockLines_p187
// Vanilla
let q = gsap.utils.selector(myElement); // or use selector text like ".class"
let boxes = q(".box"); // finds only elements with the class "box" that are INSIDE myElement
// or plug directly into animations
gsap.to(q(".circle"), {x: 100});

```

```codeBlockLines_p187
// React
let el = useRef();
let q = gsap.utils.selector(el);

useEffect(() => {
  // uses el.current.querySelectorAll() internally
  gsap.to(q(".box"), {x: 100});
}, []);

```

```codeBlockLines_p187
// Angular
@Component({ ... })
class MyComponent implements OnInit {

  constructor(public el: ElementRef) {
    this.q = gsap.utils.selector(el);
  }

  ngOnInit() {
    // uses this.el.nativeElement.querySelectorAll() internally
    gsap.to(this.q(".box"), { x: 100 });
  }
}

```

A common pattern in React is to declare a ref for every element you want to animate, but that can make your code very verbose and hard to read.

#### loading...

CodePen Embed - React forwarding refs

- [HTML](https://codepen.io/GreenSock/embed/JjWaJNy?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/JjWaJNy?default-tab=result&theme-id=41164#css-box)
- [Babel](https://codepen.io/GreenSock/embed/JjWaJNy?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/JjWaJNy?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/JjWaJNy?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/JjWaJNy "Edit on CodePen")

``` cm-s-default
<div id="app"></div>
```

``` cm-s-default
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;600&display=swap');

body {
  font-family: "Signika Negative", sans-serif, Arial;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
    background-color: #28292b;
  color: #fffce1;
}

h1 {
  text-align: center;
  font-weight: 400;
}

#app {
  display: flex;
  justify-content: center;
}

.box {
  width: 80px;
  height: 80px;
  background: dodgerblue;
  margin: 10px;
  float: left;
  opacity: 0;
  border-radius: 6px;
  transform: scale(0.3);
}
```

``` cm-s-default
let { useRef, useEffect, forwardRef } = React;

let data = [\
  { id: 0 },\
  { id: 1 },\
  { id: 2 },\
  { id: 3 },\
  { id: 4 }\
];

// To get a ref from a child component, we must forward
// the ref up to the parent
let Box = forwardRef((props, ref) => {
  return <div className="box" ref={ref}></div>
});

let App = () => {
  let boxRefs = useRef([]);

  useEffect(() => {
    gsap.to(boxRefs.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);

  return (
    <div>
      <h1>React forwarding refs</h1>
      {data.map((item, i) => <Box key={item.id} ref={e => boxRefs.current[i] = e} />)}
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

[View Compiled](https://codepen.io/GreenSock/embed/JjWaJNy?default-tab=result&theme-id=41164#0)

React forwarding refs

# React forwarding refs

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)
2. [https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js](https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js)
3. [https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js](https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

By using a scoped selector, we only need to use a single ref. Then we can simply select the descendants.

#### loading...

CodePen Embed - React scoped selector

- [HTML](https://codepen.io/GreenSock/embed/BaWOZpM?default-tab=result&theme-id=41164#html-box)
- [CSS](https://codepen.io/GreenSock/embed/BaWOZpM?default-tab=result&theme-id=41164#css-box)
- [Babel](https://codepen.io/GreenSock/embed/BaWOZpM?default-tab=result&theme-id=41164#js-box)

- [Result](https://codepen.io/GreenSock/embed/BaWOZpM?default-tab=result&theme-id=41164#result-box)
- [Skip Results Iframe](https://codepen.io/GreenSock/embed/BaWOZpM?default-tab=result&theme-id=41164#resources-link)

[EDIT ON](https://codepen.io/GreenSock/pen/BaWOZpM "Edit on CodePen")

``` cm-s-default
<div id="app"></div>
```

``` cm-s-default
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;600&display=swap');

body {
  font-family: "Signika Negative", sans-serif, Arial;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background-color: #28292b;
  color: #fffce1;
}

h1 {
  text-align: center;
  font-weight: 400;
}

#app {
  display: flex;
  justify-content: center;
}

.box {
  width: 80px;
  height: 80px;
  background: dodgerblue;
  margin: 10px;
  float: left;
  opacity: 0;
  border-radius: 6px;
  transform: scale(0.3);
}
```

``` cm-s-default
let { useRef, useEffect } = React;

let data = [\
  { id: 0 },\
  { id: 1 },\
  { id: 2 },\
  { id: 3 },\
  { id: 4 }\
];

let Box = () => {
  return <div className="box"></div>
};

let App = () => {
  let el = useRef();
  let q = gsap.utils.selector(el);

  useEffect(() => {

    // The component has been rendered, so we can now select
    // descendants of the component, including descendants
    // nested inside of other components
    gsap.to(q(".box"), {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);

  return (
    <div ref={el}>
      <h1>React scoped selector</h1>
      {data.map((item) => <Box key={item.id} />)}
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

[View Compiled](https://codepen.io/GreenSock/embed/BaWOZpM?default-tab=result&theme-id=41164#0)

React scoped selector

# React scoped selector

[![](https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256)](https://codepen.io/GreenSock)

This Pen is owned by [GSAP](https://codepen.io/GreenSock) on [CodePen](https://codepen.io/).



[See more by @GreenSock on CodePen](https://codepen.io/GreenSock)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://assets.codepen.io/16327/gsap-latest-beta.min.js](https://assets.codepen.io/16327/gsap-latest-beta.min.js)
2. [https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js](https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js)
3. [https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js](https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js)

Resources


- 1×
- 0.5×
- 0.25×

Rerun

## gsap.utils.toArray() [​](https://gsap.com/blog/3-7/\#gsaputilstoarray "Direct link to gsap.utils.toArray()")

We've also added an optional, second scope parameter to [gsap.utils.toArray()](https://gsap.com/docs/v3/GSAP/UtilityMethods/toArray())

This will find all the descendant elements of myElement with the class of "box":

```codeBlockLines_p187
gsap.utils.toArray(".box", myElement)

```

* * *

## And more... [​](https://gsap.com/blog/3-7/\#and-more "Direct link to And more...")

tip

GSAP 3.7 also delivers various bug fixes, so we'd highly recommend [installing the latest version today](https://gsap.com/docs/v3/Installation). There are many ways to get GSAP - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, Github, etc.).

## Resources [​](https://gsap.com/blog/3-7/\#resources "Direct link to Resources")

- [Full release notes on Github](https://github.com/greensock/GSAP/releases/tag/3.7.0)
- [Position parameter article](https://gsap.com/resources/position-parameter/)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources)
- [Community forums](https://gsap.com/community/)

Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [position parameter](https://gsap.com/blog/tags/position-parameter)

[Newer Post\\
\\
3.8 release](https://gsap.com/blog/3-8) [Older Post\\
\\
3.6 release](https://gsap.com/blog/3-6)

## Contents

- [Percentage based position parameter.](https://gsap.com/blog/3-7/#percentage-based-position-parameter)
- [Check it out in action in these demos.](https://gsap.com/blog/3-7/#check-it-out-in-action-in-these-demos)
- [Interactive Position Parameter Demo](https://gsap.com/blog/3-7/#interactive-position-parameter-demo)
- [Better support for SVG elements with Flip plugin.](https://gsap.com/blog/3-7/#better-support-for-svg-elements-with-flip-plugin)
- [Easily scope your animations](https://gsap.com/blog/3-7/#easily-scope-your-animations)
- [gsap.utils.selector()](https://gsap.com/blog/3-7/#gsaputilsselector)
- [gsap.utils.toArray()](https://gsap.com/blog/3-7/#gsaputilstoarray)
- [And more...](https://gsap.com/blog/3-7/#and-more)
- [Resources](https://gsap.com/blog/3-7/#resources)

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