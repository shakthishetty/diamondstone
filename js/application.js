// // Simple and popular card animation
// function initApplicationAnimations() {
//     const checkApplicationElements = () => {
//         const applicationSection = document.querySelector('.application');
//         const appTitle = document.querySelector('.header1 h1.app');
//         const cards = document.querySelectorAll('.cards1');
        
//         console.log('Checking for application elements...');
//         console.log('Application section:', applicationSection);
//         console.log('App title:', appTitle);
//         console.log('Cards:', cards.length);
        
//         if (applicationSection && appTitle && cards.length > 0) {
//             // Register ScrollTrigger plugin
//             gsap.registerPlugin(ScrollTrigger);
            
//             // Set simple initial states
//             gsap.set(".header1 h1.app", { 
//                 opacity: 0,
//                 y: 30
//             });
            
//             gsap.set(".header1 p", { 
//                 opacity: 0,
//                 y: 20
//             });
            
//             gsap.set(".cards1", { 
//                 opacity: 0,
//                 y: 50
//             });
            
//             // Create simple timeline
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".application",
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     toggleActions: "play none none reverse"
//                 }
//             });
            
//             // Simple fade in animations
//             tl.to(".header1 h1.app", {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//                 ease: "power2.out"
//             })
//             .to(".header1 p", {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.6,
//                 ease: "power2.out"
//             }, "-=0.4")
//             .to(".cards1", {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//                 stagger: 0.2,
//                 ease: "power2.out"
//             }, "-=0.3");
            
//             // Add simple hover effect
//             addSimpleHoverEffects();
            
//             console.log('Simple card animations initialized!');
//         } else {
//             console.log('Application elements not found, retrying in 500ms...');
//             setTimeout(checkApplicationElements, 500);
//         }
//     };
    
//     checkApplicationElements();
// }

// // Simple and popular hover effects
// function addSimpleHoverEffects() {
//     const cards = document.querySelectorAll('.cards1');
    
//     cards.forEach((card) => {
//         card.addEventListener('mouseenter', () => {
//             gsap.to(card, {
//                 y: -10,
//                 boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
        
//         card.addEventListener('mouseleave', () => {
//             gsap.to(card, {
//                 y: 0,
//                 boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
//     });
// }

// // Initialize animations
// window.addEventListener('load', () => {
//     setTimeout(initApplicationAnimations, 1000);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(initApplicationAnimations, 1500);
// });