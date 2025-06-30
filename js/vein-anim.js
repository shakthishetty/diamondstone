function initVeinAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  
  gsap.registerPlugin(ScrollTrigger);

  // Animation for the main title
  gsap.from(".vein-container p", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".vein",
      start: "top 80%"
    }
  });

  // Animation for the cards with staggered effect
  gsap.from(".inner-vein", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".vein-container1",
      start: "top 75%"
    }
  });

  // Image hover effects
  document.querySelectorAll(".inner-vein-card-image img").forEach(img => {
    gsap.set(img, { scale: 1 });
    
    img.parentElement.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.05,
        duration: 0.6,
        ease: "power2.out"
      });
    });
    
    img.parentElement.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });

  // Number counting animation
  const numberCards = document.querySelectorAll(".vein-container2-card");
  
  numberCards.forEach(card => {
    const numberElement = card.querySelector(".vein-container2-card-content p");
    const originalNumber = parseFloat(numberElement.textContent.replace("%", ""));
    const isPercentage = numberElement.textContent.includes("%");
    
    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => animateNumber(numberElement, originalNumber, isPercentage)
    });
  });

  function animateNumber(element, targetNumber, isPercentage) {
    const duration = 2;
    const startNumber = 0;
    
    gsap.to({}, {
      duration: duration,
      onUpdate: function() {
        const progress = this.progress();
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * progress);
        element.textContent = isPercentage ? `${currentNumber}%` : currentNumber;
      },
      ease: "power2.out"
    });
  }

  // Stats cards animation
  gsap.from(".vein-container2-card", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.15,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".vein-container2",
      start: "top 75%"
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.vein')) {
    initVeinAnimations();
  }
});

// Expose for manual call after dynamic load
window.initVeinAnimations = initVeinAnimations;