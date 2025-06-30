// GSAP animation for header section
window.addEventListener('DOMContentLoaded', function() {
  if (typeof gsap === 'undefined') return;
  setTimeout(function() {
    // Top country row: fade, slide down, blur
    gsap.set('.top-wrapper', {opacity: 0, y: -40, filter: 'blur(8px)'});
    // Info bar: fade, slide up, color flicker
    gsap.set('.info-bar', {opacity: 0, y: 30, filter: 'blur(8px)'});
    // Nav/logo/hamburger: fade, pop, shadow
    gsap.set('.nav-wrapper .logo', {opacity: 0, scale: 0.8, filter: 'blur(8px)', boxShadow: '0 0 0px #fff'});
    gsap.set('.nav-wrapper .hamburger', {opacity: 0, scale: 0.8, filter: 'blur(8px)', boxShadow: '0 0 0px #fff'});
    gsap.set('.nav-wrapper .nav-links', {opacity: 0, y: 20, filter: 'blur(8px)'});

    const tl = gsap.timeline();
    tl.to('.top-wrapper', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      ease: 'power3.out'
    })
    .to('.info-bar', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: function() {
        // Flicker effect for info bar
        const prog = tl.progress();
        if (prog > 0.18 && prog < 0.32) {
          gsap.set('.info-bar', {boxShadow: '0 0 16px #e0c97f'});
        } else {
          gsap.set('.info-bar', {boxShadow: 'none'});
        }
      }
    }, '-=0.5')
    .to('.nav-wrapper .logo', {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      boxShadow: '0 4px 24px 0 #e0c97f60',
      duration: 0.7,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .to('.nav-wrapper .hamburger', {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      boxShadow: '0 4px 24px 0 #e0c97f60',
      duration: 0.7,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    .to('.nav-wrapper .nav-links', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.5');
  }, 120);

  // Initialize sticky nav after DOM is loaded
  initStickyNav();
});







// Hamburger menu toggle for mobile nav (right-to-left slide, full height, 90vw)
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (window.innerWidth <= 900) {
    if (!navLinks.classList.contains('active')) {
      navLinks.classList.add('active');
      hamburger.classList.add('open');
      gsap.set(navLinks, {x: '100%', opacity: 0, display: 'flex'});
      gsap.to(navLinks, {x: '0%', opacity: 1, duration: 0.35, ease: 'power3.out'});
    } else {
      gsap.to(navLinks, {x: '100%', opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        gsap.set(navLinks, {clearProps: 'all'});
      }});
    }
  }
}

// Hamburger click event
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });
}

// Outside click handler
document.addEventListener('click', function (e) {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    gsap.to(navLinks, {x: '100%', opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: function() {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      gsap.set(navLinks, {clearProps: 'all'});
    }});
  }
});




