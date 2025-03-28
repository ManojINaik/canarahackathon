Duration:
0.5 seconds0.75 seconds1 second5 seconds
Engine:
jQuery 3GSAP (GreenSock) animePopmotionJust AnimateWeb Animations (WAAPI)CSS Transitionsmo.jsZeptojquery.gsap.js plugin\-\-\--------GSAP (translate/scale)anime (translate/scale)Popmotion (translate/scale)Just Animate (translate/scale)Web Animations (translate/scale)CSS Transitions (translate/scale)mo.js (translate/scale)Zepto (translate/scale)
Dots:
2550100200300400500750100012501500200025003000
START

\-\- fps

# JavaScript Animation Speed Test

Compare the performance of various JavaScript libraries with [GSAP](http://greensock.com/gsap/).
This test simply animates the left, top, width, and height
css properties of standard image elements. There are also versions of several of the tests that
use transforms ("translate/scale") instead so that you can compare performance.

The goal was to be extremely fair and use the same code for everything except the actual animation. No tricks.
Look at the source for yourself or run your own tests to confirm.

## Instructions

At the bottom of the screen, choose the number of dots you'd like to animate and the
engine/library and click the "START" button. Keep increasing the quantity of dots to see where (and how) things break down.
Watch for banding (rings of clumped-together dots) which can indicate there are problems with the way the engine calculates timing/delays. Things should be nicely randomized and dispersed.

## Overdue animations

If any animation completes **more than 150ms** later than it was supposed to, it will be logged and shown in orange
text next to the START/STOP button along with the average amount of time they blew past their schedued end time.
This is important because some engines may have an illusion of being smoother but in reality their internal timing mechanisms are drifting and everything is slowing down, thus there's less movement between each frame. For example, a tween that's supposed to take 750ms may actually end up taking 10,000ms to complete.

## Notes

CSS transitions (which Zepto uses) won't work in some browsers like IE9. Also beware that some browsers incorrectly fire requestAnimationFrame events even when the browser clearly isn't updating the screen and/or they handle JS in a different thread, thus 10fps transitions may inaccurately report in JS as running at 50fps. So focus on the actual animation of the starfield and how smooth it is (or isn't).