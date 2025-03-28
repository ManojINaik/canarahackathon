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
- [Logout](https://gsap.com/community/logout/?csrfKey=9325b5f2d6d871abf40abab4e3a0ef65)

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
- [Logout](https://gsap.com/community/logout/?csrfKey=9325b5f2d6d871abf40abab4e3a0ef65)
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

[Skip to main content](https://gsap.com/blog/3-1/#__docusaurus_skipToContent_fallback)

[Docs](https://gsap.com/docs/v3/) [Learning](https://gsap.com/resources)

[v3.12.7](https://gsap.com/docs/v3/)

- [v3.12.7](https://gsap.com/docs/v3/)
- [v2 - archived](https://www.gsap.com/archived-docs/)

Search`` `K`

# 3.1 release

January 24, 2020 · 2 min read

[![Jack Doyle](https://gsap.com/img/jack-about.jpg)](https://twitter.com/greensock)

[Jack Doyle](https://twitter.com/greensock)

Founder and Code Connoisseur

- Random staggers
- shuffle() any Array
- Timelines can now repeatRefresh
- repeatRefresh skips yoyo's
- Smooth handling of complex borderRadius, borderWidth, margin, and padding values

GSAP 3.1 has landed with some exciting new features and various bug fixes. We highly recommend updating at your earliest convenience. Here are a few highlights:

[iframe](https://player.vimeo.com/video/388099686?byline=0&title=0&portrait=0)

## Random staggers [​](https://gsap.com/blog/3-1/\#random-staggers "Direct link to Random staggers")

GSAP's staggers get even more powerful. Use the new `from: &#x201C;random&#x201D;` option to randomize how the staggers get applied.

#### loading...

[iframe](https://codepen.io/GreenSock/embed/xxbBqzo?default-tab=result&theme-id=41164)

Learn more about the advanced staggering options available in GSAP 3 below.

#### loading...

[iframe](https://codepen.io/GreenSock/embed/vYBRPbO?default-tab=result&theme-id=41164)

## shuffle() any Array [​](https://gsap.com/blog/3-1/\#shuffle-any-array "Direct link to shuffle() any Array")

The new `shuffle()` [utility method](https://gsap.com/docs/v3/GSAP/UtilityMethods) randomly shuffles the contents of any Array (in place).

```codeBlockLines_p187
var array = [1, 2, 3, 4, 5];

gsap.utils.shuffle(array); // returns the same array, but shuffled like [2, 5, 3, 1, 4]

```

## Timelines can now repeatRefresh [​](https://gsap.com/blog/3-1/\#timelines-can-now-repeatrefresh "Direct link to Timelines can now repeatRefresh")

Now _timelines_ support `repeatRefresh` which makes all child tweens `invalidate()` and get refreshed when the timeline repeats, meaning their start and end values get re-calculated. It's most useful for relative, random, or function-based values. For example, if a tween has a value like `x: &#x201C;random(-100, 100)&#x201D;`, each time the timeline repeats `x` would go to a new random value.

#### loading...

[iframe](https://codepen.io/GreenSock/embed/wvBOdex?default-tab=result&theme-id=41164)

## repeatRefresh skips yoyo's [​](https://gsap.com/blog/3-1/\#repeatrefresh-skips-yoyos "Direct link to repeatRefresh skips yoyo's")

It seemed a little odd to refresh the values when going in reverse, so now `repeatRefresh` won't get triggered for the yoyo phase of the animation.

#### loading...

[iframe](https://codepen.io/GreenSock/embed/yLywbXW?default-tab=result&theme-id=41164)

## Smooth handling of complex borderRadius, borderWidth, margin, and padding values [​](https://gsap.com/blog/3-1/\#smooth-handling-of-complex-borderradius-borderwidth-margin-and-padding-values "Direct link to Smooth handling of complex borderRadius, borderWidth, margin, and padding values")

GSAP 3.1 accommodates not only simple values like `borderRadius: &#x201C;50%&#x201D;` but also more complex ones like `borderRadius: &#x201C;20px 50% 40px 15px&#x201D;` or `borderRadius: &#x201C;50% 20%&#x201D;` and it animates between them smoothly. The same goes for borderWidth, margin, and padding which can have complex values (top, right, bottom, and left). It will also return complex values correctly via `gsap.getProperty()`. Plus GSAP works around a Firefox bug that mis-reports certain values like borderRadius.

## Download today! [​](https://gsap.com/blog/3-1/\#download-today "Direct link to Download today!")

There are many ways to get GSAP 3.1 - see the [Installation page](https://gsap.com/docs/v3/Installation) for all the options (download, NPM, zip, etc.)

## Resources [​](https://gsap.com/blog/3-1/\#resources "Direct link to Resources")

- [GSAP 3.1.0 full release notes on Github](https://github.com/greensock/GSAP/releases/tag/3.1.0)
- [Full documentation](https://gsap.com/docs/v3/)
- [Getting started with GSAP](https://gsap.com/resources/get-started)
- [Learning resources](https://gsap.com/resources/)
- [Community forums](https://gsap.com/community/)

Happy tweening!

**Tags:**

- [release](https://gsap.com/blog/tags/release)
- [staggers](https://gsap.com/blog/tags/staggers)
- [drawSVG](https://gsap.com/blog/tags/draw-svg)

[Newer Post\\
\\
3.2 release](https://gsap.com/blog/3-2) [Older Post\\
\\
3 Release Notes](https://gsap.com/blog/3-release-notes)

## Contents

- [Random staggers](https://gsap.com/blog/3-1/#random-staggers)
- [shuffle() any Array](https://gsap.com/blog/3-1/#shuffle-any-array)
- [Timelines can now repeatRefresh](https://gsap.com/blog/3-1/#timelines-can-now-repeatrefresh)
- [repeatRefresh skips yoyo's](https://gsap.com/blog/3-1/#repeatrefresh-skips-yoyos)
- [Smooth handling of complex borderRadius, borderWidth, margin, and padding values](https://gsap.com/blog/3-1/#smooth-handling-of-complex-borderradius-borderwidth-margin-and-padding-values)
- [Download today!](https://gsap.com/blog/3-1/#download-today)
- [Resources](https://gsap.com/blog/3-1/#resources)

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