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










- [Dashboard](https://gsap.com/community/account-dashboard)
- [Orders & Billing](https://gsap.com/community/clients/orders)
- [Account Settings](https://gsap.com/community/settings)
- [Logout](https://gsap.com/resources/react-advanced/#)

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

- [Dashboard](https://gsap.com/community/account-dashboard)
- [Orders & Billing](https://gsap.com/community/clients/orders)
- [Account Settings](https://gsap.com/community/settings)
- [Logout](https://gsap.com/resources/react-advanced/#)
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

[Skip to main content](https://gsap.com/resources/react-advanced/#__docusaurus_skipToContent_fallback)

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

  - [Useful patterns](https://gsap.com/resources/react-basics)
  - [Advanced techniques](https://gsap.com/resources/react-advanced)
- [SVG](https://gsap.com/resources/svg)
- [Webflow](https://gsap.com/resources/Webflow)
- [Wordpress](https://gsap.com/resources/Wordpress)
- and more...
- [updating to GSAP 3](https://gsap.com/resources/3-migration)

- [React](https://gsap.com/resources/React)
- Advanced techniques

On this page

# Advanced techniques

Quick Start - useGSAP()

### useGSAP() hook

[view package on npm](https://www.npmjs.com/package/@gsap/react)

```codeBlockLines_p187
npm install @gsap/react

```

```codeBlockLines_p187
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const container = useRef();

useGSAP(() => {
  // gsap code here...
  gsap.to(".el", {rotation: 180}); // <-- automatically reverted

}, { scope: container }) // <-- scope for selector text (optional)

```

[Starter Templates](https://stackblitz.com/@GSAP-dev/collections/gsap-react-starters)

Before we begin

Are you working with React and looking to **_really_** advance your GSAP animation skills? You're in the right place. This guide contains **_advanced_** techniques and some handy tips from expert animators in our community.

This is **not a tutorial**, so feel free to dip in and out as you learn. Think of it as a collection of recommended techniques and best practices to use in your projects.

If you're starting out we highly recommend reading our [foundational article](https://gsap.com/resources/react-basics) first.

Why choose GSAP?

There are React-specific libraries that offer a simpler more declarative approach. So why choose GSAP?

Animating imperatively gives you **a lot** more power, control and flexibility. Your imagination is the limit. You can reach for GSAP to animate everything from simple DOM transitions to SVG, three.js, canvas or WebGL.

Since GSAP is framework-agnostic, your animation superpowers transfer to ANY project; Vanilla JS, React, Vue, Angular, Webflow, whatever. You don't need to learn a React-specific library and then a completely different one for other projects. GSAP can be your trusted toolset wherever you go.

Lastly, if you ever get stuck, our friendly forum community is there to help. 💚

**_Going forward we will assume a comfortable understanding of both GSAP and React_**.

## Component Communication [​](https://gsap.com/resources/react-advanced/\#component-communication "Direct link to Component Communication")

In the last article, we covered animating with the [useGSAP() hook](https://gsap.com/resources/React#usegsap-hook-), and how to [create and control timelines](https://gsap.com/resources/react-basics#creating-and-controlling-timelines) within a React component. But there are times where you may need to share a timeline across multiple components or construct animations from elements that exist in different components.

In order to achieve this, we need a way to communicate between our components.

**There are 2 basic approaches to this.**

1. a parent component can send down props, e.g. a timeline
2. a parent component can pass down a callback for the child to call, which could add animations to a timeline.

## Passing down a timeline prop [​](https://gsap.com/resources/react-advanced/\#passing-down-a-timeline-prop "Direct link to Passing down a timeline prop")

Note that we are using `useState ` instead of `useRef` with the timeline. This is to ensure the timeline will be available when the child renders for the first time.

```codeBlockLines_p187
function Box({ children, timeline, index }) {
  const el = useRef();

  useGSAP(() => {
    // add 'left 100px' animation to timeline
    timeline && timeline.to(el.current, {
      x: -100
    }, index * 0.1);

  }, [timeline, index]);

  return <div className="box" ref={el}>{children}</div>;
}

function Circle({ children, timeline, index, rotation }) {
  const el = useRef();

  useGSAP(() => {
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline && timeline.to(el.current, {
      rotation: rotation,
      x: 100
    }, index * 0.1);

  }, [timeline, rotation, index]);

  return <div className="circle" ref={el}>{children}</div>;
}

function App() {
  const [tl, setTl] = useState();

  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  });

  return (
      <div className="app">
        <Box timeline={tl} index={0}>Box</Box>
        <Circle timeline={tl} rotation={360} index={1}>Circle</Circle>
      </div>
  );
}

```

#### loading...

[iframe](https://codepen.io/GreenSock/embed/XWReqpO?default-tab=result&theme-id=41164)

## Passing down a callback to build a timeline [​](https://gsap.com/resources/react-advanced/\#passing-down-a-callback-to-build-a-timeline "Direct link to Passing down a callback to build a timeline")

```codeBlockLines_p187
function Box({ children, addAnimation, index }) {
  const el = useRef();

  useGSAP(() => {
    const animation = gsap.to(el.current, { x: -100 });
    addAnimation(animation, index);
  }, [addAnimation, index]);

  return (
    <div className="box" ref={el}>{children}</div>
  );
}

function Circle({ children, addAnimation, index, rotation }) {
  const el = useRef();

  useGSAP(() => {
    const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
    addAnimation(animation, index);
  }, [addAnimation, index, rotation]);

  return (
    <div className="circlee" ref={el}>{children}</div>
  );
}

function App() {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();

  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  const addAnimation = useCallback((animation, index) => {
    tl && tl.add(animation, index * 0.1);
  },[tl]);

  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed())
  });

  useGSAP(() => {
    // reverse the tim
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div className="app">
      <button onClick={() => setReversed(!reversed)}>Toggle</button>
      <Box addAnimation={addAnimation} index={0}>Box</Box>
      <Circle addAnimation={addAnimation} index={1} rotation="360">Circle</Circle>
    </div>
  );
}

```

#### loading...

[iframe](https://codepen.io/GreenSock/embed/poPWVpO?default-tab=result&theme-id=41164)

## React Context [​](https://gsap.com/resources/react-advanced/\#react-context "Direct link to React Context")

Passing down props or callbacks might not be ideal for every situation.

The component you're trying to communicate with may be deeply nested inside other components, or in a completely different tree. For situations like this, you can use [React's Context.](https://reactjs.org/docs/context.html)

Whatever value your Context Provider provides will be available to any child component that uses the useContext hook.

Context

[React's Context](https://reactjs.org/docs/context.html) is not the same as [GSAP's Context](https://gsap.com/docs/v3/GSAP/gsap.context()/)

#### loading...

[iframe](https://codepen.io/GreenSock/embed/wvdrERm?default-tab=result&theme-id=41164)

## Creating reusable animations [​](https://gsap.com/resources/react-advanced/\#creating-reusable-animations "Direct link to Creating reusable animations")

Creating reusable animations is a great way to keep your code clean and scalable while reducing your app's file size.

### Declarative animation component [​](https://gsap.com/resources/react-advanced/\#declarative-animation-component "Direct link to Declarative animation component")

In this demo we're creating a component to handle the animation and then passing an object in to set the x value.

```codeBlockLines_p187
function FadeIn({ children, vars }) {
  const el = useRef();

  useGSAP(() => {
    animation.current = gsap.from(el.current.children, {
      opacity: 0,
      stagger,
      x
    });
  });

  return <span ref={el}>{children}</span>;
}

function App() {
  return (
    <FadeIn vars={{ x: 100 }}>
      <div className="box">Box</div>
    </FadeIn>
  );
}

```

#### loading...

[iframe](https://codepen.io/GreenSock/embed/LYydbJV?default-tab=result&theme-id=41164)

caution

If you want to use a React Fragment or animate a function component, you should pass in a ref for the target(s).

### RegisterEffect() [​](https://gsap.com/resources/react-advanced/\#registereffect "Direct link to RegisterEffect()")

GSAP also provides a way to create reusable animations with [`registerEffect()`](https://gsap.com/docs/v3/GSAP/gsap.registerEffect())

#### loading...

[iframe](https://codepen.io/GreenSock/embed/VwbXyON?default-tab=result&theme-id=41164)

## Exit animations [​](https://gsap.com/resources/react-advanced/\#exit-animations "Direct link to Exit animations")

To animate elements that are exiting the DOM, we need to delay when React removes the element. We can do this by changing the component's state after the animation has completed.

```codeBlockLines_p187
function App() {
  const app = useRef();
  const [active, setActive] = useState(true);

  const { contextSafe } = useGSAP({ scope: container });

  const remove = contextSafe(() => {
    gsap.to(".box", {
      opacity: 0,
      onComplete: () => setActive(false)
    });
  });

  return (
    <div className="app" ref={container}>
      <button onClick={ctx.remove}>Remove</button>
      { active ? <div ref={boxRef}>Box</div> : null }
    </div>
  );
}

```

#### loading...

[iframe](https://codepen.io/GreenSock/embed/QWvVzgB?default-tab=result&theme-id=41164)

The same approach can be used when rendering elements from an array.

```codeBlockLines_p187
function App() {

  const [items, setItems] = useState(() => [\
    { id: 0, color: "blue" },\
    { id: 1, color: "red" },\
    { id: 2, color: "purple" }\
  ]);

  const { contextSafe } = useGSAP();

  const remove = contextSafe((item, target) => {
    gsap.to(target, {
      opacity: 0,
      onComplete: () => removeItem(item)
    });
  });

  const removeItem = (value) => {
    setItems((prev) => prev.filter((item) => item !== value));
  };

  return (
    <div className="app" ref={container}>
      {items.map((item) => (
        <div key={item.id} onClick={(e) => ctx.remove(item, e.currentTarget)}>
          Click Me
        </div>
      ))}
    </div>
  );
}

```

Oh no! Layout shift...

#### loading...

[iframe](https://codepen.io/GreenSock/embed/LYyJqLO?default-tab=result&theme-id=41164)

This works - but you may have noticed the layout shift - this is typical of exit animations. The [Flip plugin](https://gsap.com/docs/v3/Plugins/Flip) can be used to smooth this out.

## No more layout shifts with FLIP! [​](https://gsap.com/resources/react-advanced/\#no-more-layout-shifts-with-flip "Direct link to No more layout shifts with FLIP!")

In this demo, we're tapping into Flip's onEnter and onLeave to define our animations. To trigger onLeave, we have to set display: none on the elements we want to animate out.

#### loading...

[iframe](https://codepen.io/GreenSock/embed/MWmqzjE?default-tab=result&theme-id=41164)

## Custom Hooks [​](https://gsap.com/resources/react-advanced/\#custom-hooks "Direct link to Custom Hooks")

If you find yourself reusing the same logic over and over again, there's a good chance you can extract that logic into a [custom hook.](https://reactjs.org/docs/hooks-custom.html) Building your own Hooks lets you extract component logic into reusable functions. If you've made have any handy GSAP hooks - [let us know!](mailto:info@greensock.com?subject=React)

### useStateRef [​](https://gsap.com/resources/react-advanced/\#usestateref "Direct link to useStateRef")

This hook helps solve the problem of accessing stale values in your callbacks. It works exactly like useState, but returns a third value, a ref with the current state.

```codeBlockLines_p187
function useStateRef(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const ref = useRef(state);

  const dispatch = useCallback((value) => {
    ref.current = typeof value === "function" ? value(ref.current) : value;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}

```

Usage:

```codeBlockLines_p187
const [count, setCount, countRef] = useStateRef(5);
const [gsapCount, setGsapCount] = useState(0);

useGSAP(() => {
  gsap.to(".box", {
    x: 200,
    onRepeat: () => setGsapCount(countRef.current)
  });
}, {scope: app});

```

#### loading...

[iframe](https://codepen.io/GreenSock/embed/XWRqzbQ?default-tab=result&theme-id=41164)

### useGSAP() [​](https://gsap.com/resources/react-advanced/\#usegsap "Direct link to useGSAP()")

and of course our own [`useGSAP()` hook!](https://gsap.com/resources/React#usegsap-hook-)

Reach out!

If there is anything you'd like to see included in this article, or if you have any feedback or useful demos, please [let us know](mailto:info@greensock.com?subject=React) so that we can smooth out the learning curve for other animators.

Good luck with your React projects and happy tweening!

[Previous\\
\\
Useful patterns](https://gsap.com/resources/react-basics)

## Contents

- [Component Communication](https://gsap.com/resources/react-advanced/#component-communication)
- [Passing down a timeline prop](https://gsap.com/resources/react-advanced/#passing-down-a-timeline-prop)
- [Passing down a callback to build a timeline](https://gsap.com/resources/react-advanced/#passing-down-a-callback-to-build-a-timeline)
- [React Context](https://gsap.com/resources/react-advanced/#react-context)
- [Creating reusable animations](https://gsap.com/resources/react-advanced/#creating-reusable-animations)
  - [Declarative animation component](https://gsap.com/resources/react-advanced/#declarative-animation-component)
  - [RegisterEffect()](https://gsap.com/resources/react-advanced/#registereffect)
- [Exit animations](https://gsap.com/resources/react-advanced/#exit-animations)
- [No more layout shifts with FLIP!](https://gsap.com/resources/react-advanced/#no-more-layout-shifts-with-flip)
- [Custom Hooks](https://gsap.com/resources/react-advanced/#custom-hooks)
  - [useStateRef](https://gsap.com/resources/react-advanced/#usestateref)
  - [useGSAP()](https://gsap.com/resources/react-advanced/#usegsap)

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