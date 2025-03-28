// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize ScrollSmoother for a smoother scrolling experience
// Make sure your content is wrapped in #smooth-wrapper and #smooth-content
let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5, // Adjust smoothness (higher = smoother)
    effects: true // Enable parallax effects if needed later
});

// --- Hero Section Animation ---
// Create a timeline for coordinated animations
const heroTl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

// Animate the hero content container in
heroTl.to(".hero-content", { opacity: 1, y: 0, delay: 0.2 });

// Animate the seedling shape (pulse and sprout)
heroTl.fromTo(".seedling circle",
    { scale: 0.95 },
    { scale: 1.05, repeat: 3, yoyo: true, duration: 0.6, ease: "sine.inOut" },
    "<" // Start slightly before the container finishes fading in
);
heroTl.to(".seedling .sprout", { scaleY: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, "-=0.4"); // Sprout grows

// Stagger animation for the main headline characters
heroTl.to(".main-headline span", {
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.04, // Time between each character animation
    ease: "back.out(1.7)"
}, "-=1.0"); // Overlap with previous animations


// --- Concept Explainer Section Animation ---
// Use ScrollTrigger to animate cards when they enter the viewport
gsap.from(".concept-card", {
    scrollTrigger: {
        trigger: ".concept-explainer", // Element that triggers the animation
        start: "top 80%", // Animation starts when top of trigger hits 80% down viewport
        end: "bottom 60%", // Optional: define an end point
        toggleActions: "play none none none", // Play animation once on enter
        // markers: true, // Uncomment to debug ScrollTrigger positions
    },
    opacity: 0,
    y: 50, // Start 50px down
    duration: 0.6,
    stagger: 0.2, // Stagger the animation for each card
    ease: "power2.out"
});

// --- Simple Parallax Example (Optional) ---
// Make the hero sub-headline move slower on scroll
gsap.to(".sub-headline", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1 // Smoothly ties animation progress to scroll progress
    },
    y: 100, // Move down 100px as the hero section scrolls out
    opacity: 0,
    ease: "none"
});

console.log("Algorithmic Garden GSAP Initialized!"); 