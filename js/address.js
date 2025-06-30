function runAddressAnimation() {
  const addressSection = document.querySelector('.address');
  const addressContent = addressSection && addressSection.querySelector('.address-content');
  const addressMap = addressSection && addressSection.querySelector('.address-map');
  if (!addressSection || !addressContent || !addressMap) {
    console.warn('Address animation: Required elements not found.');
    return;
  }
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: addressSection,
        start: 'top 80%',
        once: true,
        id: 'address-section-trigger'
      }
    });
    tl.from(addressContent, {
      opacity: 0,
      x: -60,
      filter: 'blur(10px)',
      duration: 0.9,
      ease: 'power3.out'
    })
    .from(addressMap, {
      opacity: 0,
      y: 60,
      scale: 0.92,
      filter: 'blur(10px)',
      duration: 0.9,
      ease: 'power2.out'
    }, '-=0.5');
    console.log('Address animation: Animation triggered.');
  } else {
    console.warn('Address animation: GSAP or ScrollTrigger not loaded.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Replace the static image with an interactive Google Map iframe using the provided location
  const mapContainer = document.querySelector('.address-map');
  if (mapContainer) {
    mapContainer.innerHTML = `
      <iframe
        width="100%"
        height="100%"
        style="min-height:350px; border-radius:12px; border:none;"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.073964479836!2d58.4059!3d23.5859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e019b2e2e2e2b%3A0x7e1e1e1e1e1e1e1e!2sDiamond%20stone%20trading%20and%20services%20spc!5e0!3m2!1sen!2som!4v1687788888888!5m2!1sen!2som">
      </iframe>
    `;
    setTimeout(runAddressAnimation, 150);
  } else {
    // Watch for .address-map being added later
    const observer = new MutationObserver(() => {
      const map = document.querySelector('.address-map');
      if (map) {
        observer.disconnect();
        setTimeout(runAddressAnimation, 150);
      }
    });
    observer.observe(document.body, {childList: true, subtree: true});
  }
});