// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Animation: Text fades in and moves up
gsap.from(".reveal-text", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out"
});

// 2. Parallax Effect for Images
// Finds all images with class .parallax-img and moves them slightly on scroll
gsap.utils.toArray(".parallax-img").forEach((img) => {
    gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom", // when top of section hits bottom of viewport
            end: "bottom top",
            scrub: true
        }
    });
});

// 3. Section Reveal Animation
// Animates the "Vision" text and Gallery items as they come into view
const sections = document.querySelectorAll(".vision, .gallery-item");

sections.forEach(section => {
    gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 85%", // starts when top of element is at 85% of viewport height
            toggleActions: "play none none reverse"
        }
    });
});

console.log("Sandalography Architecture Loaded: Systems Nominal.");
