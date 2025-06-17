document.addEventListener('DOMContentLoaded', function() {
  // Check if device is mobile or iPad
  function isMobileOrIPad() {
    // Check if screen width matches mobile or iPad dimensions
    return window.matchMedia('(max-width: 820px)').matches;
  }
  
  function initAnimations() {
    // Skip animations for mobile and iPad
    if (isMobileOrIPad()) {
      console.log('Mobile or iPad detected. Animations disabled.');
      
      // Instead of animating, just show the elements normally
      const timelessBoxes = document.querySelectorAll('.innerChoose1 .timeLess');
      if (timelessBoxes.length > 0) {
        timelessBoxes.forEach(box => {
          box.style.opacity = 1;
          box.style.transform = 'none';
          box.style.scale = 1;
          box.style.y = 0;
        });
      }
      return;
    }
    
    // Check if GSAP is loaded (only for desktop)
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.error('GSAP or ScrollTrigger not loaded');
      setTimeout(initAnimations, 500);
      return;
    }
    
    // Get elements
    const whyChooseUsSection = document.querySelector('.whyChooseUs');
    const leftSide = document.querySelector('.innerChoose');
    const timelessBoxes = document.querySelectorAll('.innerChoose1 .timeLess');
    
    if (!whyChooseUsSection || !leftSide || timelessBoxes.length === 0) {
      console.error('Required elements not found');
      setTimeout(initAnimations, 500);
      return;
    }
    
    console.log('Elements found, setting up scroll animations');
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial state for timelessBoxes
    gsap.set(timelessBoxes, { 
      y: 100,
      opacity: 0,
      scale: 0.95
    });
    
    // Create animation for left side to move DOWN as user scrolls
    gsap.to(leftSide, {
      y: 200, // Move down by 200px - adjust as needed
      ease: "none",
      scrollTrigger: {
        trigger: whyChooseUsSection,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true, // Smooth scrubbing tied to scroll position
        markers: false
      }
    });
    
    // Create timeline for right side boxes to move UP
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseUsSection,
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
        markers: false
      }
    });
    
    // Add each box to the timeline with staggered positions
    timelessBoxes.forEach((box, index) => {
      const yOffset = index * -50; // Each box will sit 50px above the previous one
      
      masterTimeline.to(box, {
        y: yOffset, 
        opacity: 1,
        scale: 1,
        duration: 4,
        ease: "power2.out",
      }, index * 2);
    });
    
    console.log('ScrollTrigger animation set up');
  }
  
  // Start initialization
  initAnimations();
});