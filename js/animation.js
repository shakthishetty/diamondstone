window.addEventListener('DOMContentLoaded', function() {
  if (typeof gsap === 'undefined') {
    console.log('GSAP not loaded');
    return;
  }
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    console.log('Reduced motion preference detected - animations disabled');
    return;
  }
  setTimeout(function() {
    const sliderSection = document.querySelector('.slider');
    if (!sliderSection) {
      console.error('Slider section not found');
      return;
    }
    // Create a light bloom effect container
    const bloomEffect = document.createElement('div');
    bloomEffect.className = 'bloom-effect';
    sliderSection.appendChild(bloomEffect);
    // Set initial states with less extreme transforms
    gsap.set('.slider-title', {
      opacity: 0,
      y: 40,
      scale: 0.9,
      filter: 'blur(8px) brightness(1.2)'
    });
    gsap.set('.slider-subtitle', {
      opacity: 0,
      y: 30,
      filter: 'blur(6px)'
    });
    gsap.set('.slider-cta', {
      opacity: 0,
      y: 50,
      scale: 0.8,
      filter: 'blur(8px)'
    });
    // Only animate .slider-bg if it exists
    if (sliderSection.querySelector('.slider-bg')) {
      gsap.set('.slider-bg', {
        opacity: 0,
        scale: 1.05
      });
    }
    gsap.set('.bloom-effect', {
      opacity: 0,
      scale: 1.2
    });
    // Create master timeline with simpler animations
    const masterTL = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1.2
      }
    });
    // Background reveal if present
    if (sliderSection.querySelector('.slider-bg')) {
      masterTL.to('.slider-bg', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "expo.out"
      }, 0);
    }
    // Title reveal with simpler effect
    masterTL.to('.slider-title', {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      duration: 1.4,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to('.slider-title', {
          y: -2,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }, 0.3);
    // Subtitle reveal
    masterTL.to('.slider-subtitle', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: "power3.out"
    }, 0.6);
    // CTA button
    masterTL.to('.slider-cta', {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      // boxShadow: '0 0 20px rgba(224, 201, 127, 0.5)',
      duration: 1.3,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        gsap.to('.slider-cta', {
          // boxShadow: '0 0 15px rgba(224, 201, 127, 0.3)',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }, 0.9);
    // Bloom light effect
    masterTL.to('.bloom-effect', {
      opacity: 0.2,
      scale: 1,
      duration: 1.8,
      ease: "expo.out"
    }, 0.5);
    // Add CSS for our effects
    const style = document.createElement('style');
    style.textContent = `
      .bloom-effect {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(224,201,127,0.6) 0%, rgba(224,201,127,0) 70%);
        transform: translate(-50%, -50%);
        z-index: 1;
        pointer-events: none;
        will-change: transform, opacity;
      }
      .slider-title {
        will-change: transform, opacity, filter;
      }
      .slider-cta {
        will-change: transform, opacity, box-shadow;
      }
    `;
    document.head.appendChild(style);
    console.log('Slider animation initialized successfully');
  }, 300);
});