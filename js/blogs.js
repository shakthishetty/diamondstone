function initializeBlogsSlider() {
  const track = document.querySelector(".blogs-track");
  const cards = document.querySelectorAll(".blogs-card");
  const totalCards = cards.length;
  const dots = document.querySelectorAll('.cursor-dot1 > div');

  if (!track || totalCards === 0) {
    console.error("Blog slider elements not found!");
    return;
  }

  let slideWidth = cards[0].offsetWidth;
  let visibleCount = 3;
  let index = 0;
  let isSliding = false;

  // Only slide if more than 3 cards
  if (totalCards <= visibleCount) {
    track.style.transform = "translateX(0px)";
    return;
  }

  // Clone first 3 and last 3 for infinite loop
  for (let i = 0; i < visibleCount; i++) {
    track.appendChild(cards[i].cloneNode(true));
    track.insertBefore(cards[totalCards - 1 - i].cloneNode(true), track.firstChild);
  }

  const allSlides = track.querySelectorAll(".blogs-card");
  const totalSlides = allSlides.length;
  index = visibleCount; // Start at first real set

  function updatePosition(animate = true) {
    track.style.transition = animate ? "transform 0.5s cubic-bezier(.4,0,.2,1)" : "none";
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    updateDots();
  }

  function updateDots() {
    if (!dots.length) return;

    let current = index - visibleCount; // Adjust index because of cloned slides
    if (current < 0) current += totalCards;
    if (current >= totalCards) current -= totalCards;

    // Since you want dots only for first 3 real slides:
    // Clamp current to a 0-2 range always (since only 3 main blogs)
    current = current % visibleCount;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  updatePosition(false);
  track.style.display = "flex";

  function moveSlide() {
    if (isSliding) return;
    isSliding = true;
    index++;
    updatePosition(true);
    track.addEventListener('transitionend', handleTransitionEnd);
  }

  function handleTransitionEnd() {
    track.removeEventListener('transitionend', handleTransitionEnd);
    if (index === totalSlides - visibleCount) {
      index = visibleCount;
      updatePosition(false);
      setTimeout(updateDots, 20); // Ensure dot updates after transform reset
    } else {
      updateDots();
    }
    isSliding = false;
  }

  setInterval(moveSlide, 3000);

  window.addEventListener("resize", function() {
    slideWidth = cards[0].offsetWidth;
    updatePosition(false);
  });

  // Initial dot state
  updateDots();
}

function initializeBlogCardClicks() {
  const blogCards = document.querySelectorAll('.blogs-card');
  if (!blogCards.length) {
    console.error('No .blogs-card elements found!');
  }
  blogCards.forEach(function(card) {
    const blogId = card.getAttribute('data-blog-id');
    // Blog image
    const img = card.querySelector('.blog-img');
    if (img) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'blog-post.html?id=' + blogId;
      });
    }
    // Read blog link
    const readMore = card.querySelector('.read-more');
    if (readMore) {
      readMore.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'blog-post.html?id=' + blogId;
      });
    }
  });
}

window.initializeBlogsSlider = initializeBlogsSlider;
window.initializeBlogCardClicks = initializeBlogCardClicks;


