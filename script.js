// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. Navbar Effect ---
    // Change background when scrolling
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // --- 2. Hero Animation (On Load) ---
    const tl = gsap.timeline();

    tl.to(".subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    })
    .to("h1", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5") // Start 0.5s before previous ends
    .to(".cta-button", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5");

    // --- 3. Scroll Animations (Fade Up) ---
    // Select all sections (About, Gallery, Blog, Contact)
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        gsap.fromTo(section, 
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Animation starts when top of section hits 80% of viewport
                    toggleActions: "play none none reverse" // Replays if you scroll back up
                }
            }
        );
    });

    // --- 4. Staggered Gallery Items ---
    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: "#gallery",
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2 // Delay between each item
    });
});
