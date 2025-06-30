document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const checkExist = setInterval(() => {
    const containers = document.querySelectorAll(".collection-container");
    if (containers.length > 0) {
      clearInterval(checkExist);
      animateCollections(containers);
    }
  }, 100);
});

function animateCollections(containers) {
  containers.forEach((container) => {
    const imageCards = container.querySelectorAll(".image-card img");
    const cardInfo = container.querySelector(".card-container1");
    const exploreBtn = container.querySelector(".explore");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animate the whole container softly
    tl.from(container, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      filter: "blur(12px)",
      duration: 0.6,
      ease: "power2.out"
    });

    // Animate each image with rotateY and pop-in
    tl.from(imageCards, {
      opacity: 0,
      rotateY: 90, // start from 90deg rotated
      scale: 0.85,
      transformOrigin: "center center",
      filter: "blur(8px)",
      duration: 0.8,
      stagger: 0.2,
      ease: "power4.out"
    }, "-=0.5");

    // Animate the text info block
    if (cardInfo) {
      tl.from(cardInfo, {
        opacity: 0,
        rotateX: 45, // rotate on X axis like flipping upward
        y: 50,
        filter: "blur(6px)",
        transformOrigin: "top center",
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.6");
    }

    // Animate explore button if present
    if (exploreBtn) {
      tl.from(exploreBtn, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.4,
        ease: "back.out(1.5)"
      }, "-=0.4");
    }
  });
}




