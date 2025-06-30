const observeProjectContainer = () => {
  const container = document.querySelector('#project-container');

  const observer = new MutationObserver(() => {
    const rightArrowBtn = container.querySelector('.right-arrow-btn');
    if (rightArrowBtn) {
      attachCarouselHandler();
      observer.disconnect();
    }
  });

  observer.observe(container, { childList: true, subtree: true });
};

const updateDots = (activeIndex) => {
  const dots = document.querySelectorAll('.cursor-dot > div');
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
};

let autoSlideInterval;
let currentActiveIndex = 1; // Start with center card active

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    slideToRight();
  }, 5000); // Slide every 5 seconds
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

const slideToRight = () => {
  const container = document.querySelector('.project-container-inner');
  const cards = Array.from(container.children).filter(child =>
    child.classList.contains('project-container-card') ||
    child.classList.contains('project-container-card1') ||
    child.classList.contains('project-container-card2')
  );
  
  if (cards.length < 3) return;
  
  // Move last card to the front (rightward slide)
  container.insertBefore(cards[2], cards[0]);
  
  // Update dots (move to next index)
  currentActiveIndex = (currentActiveIndex + 1) % 3;
  updateDots(currentActiveIndex);

  // Re-select updated cards
  const updatedCards = Array.from(container.children).filter(child =>
    child.classList.contains('project-container-card') ||
    child.classList.contains('project-container-card1') ||
    child.classList.contains('project-container-card2')
  );
  
  // Assign classes
  updatedCards[0].className = '';
  updatedCards[1].className = '';
  updatedCards[2].className = '';
  updatedCards[0].classList.add('project-container-card1'); // CENTER (clean)
  updatedCards[1].classList.add('project-container-card');  // LEFT (blur)
  updatedCards[2].classList.add('project-container-card2'); // RIGHT (blur + arrow)
  
  // Remove overlays/arrows and all gradient overlays from all cards
  [0,1,2].forEach(i => {
    updatedCards[i].querySelectorAll('.blur-overlay').forEach(el => el.remove());
    updatedCards[i].querySelectorAll('.right-arrow-btn').forEach(el => el.remove());
    updatedCards[i].querySelectorAll('.left-arrow-btn').forEach(el => el.remove());
    const imgWrap = updatedCards[i].querySelector('.blogs-card-img-wrap1');
    if (imgWrap) {
      imgWrap.querySelectorAll('.blogs-card-img-gradient1').forEach(el => el.remove());
    }
  });
  
  // Add overlays/arrows
  addBlurOverlay(updatedCards[1]); // LEFT (blur + left arrow)
  addLeftArrowButton(updatedCards[1]);
  addBlurOverlay(updatedCards[2]); // RIGHT (blur + right arrow)
  addRightArrowButton(updatedCards[2]);
  
  // Ensure center card has gradient overlay
  const centerCard = updatedCards[0];
  let centerImgWrap = centerCard.querySelector('.blogs-card-img-wrap1');
  if (!centerImgWrap) {
    const img = centerCard.querySelector('img');
    if (img) {
      centerImgWrap = document.createElement('div');
      centerImgWrap.className = 'blogs-card-img-wrap1';
      img.parentNode.insertBefore(centerImgWrap, img);
      centerImgWrap.appendChild(img);
    }
  }
  if (centerImgWrap && !centerImgWrap.querySelector('.blogs-card-img-gradient1')) {
    const grad = document.createElement('div');
    grad.className = 'blogs-card-img-gradient1';
    centerImgWrap.appendChild(grad);
  }
};

const slideToLeft = () => {
  const container = document.querySelector('.project-container-inner');
  const cards = Array.from(container.children).filter(child =>
    child.classList.contains('project-container-card') ||
    child.classList.contains('project-container-card1') ||
    child.classList.contains('project-container-card2')
  );
  
  if (cards.length < 3) return;
  
  // Move first card to the end (leftward slide)
  container.appendChild(cards[0]);
  
  // Update dots (move to previous index)
  currentActiveIndex = (currentActiveIndex - 1 + 3) % 3;
  updateDots(currentActiveIndex);

  // Re-select updated cards
  const updatedCards = Array.from(container.children).filter(child =>
    child.classList.contains('project-container-card') ||
    child.classList.contains('project-container-card1') ||
    child.classList.contains('project-container-card2')
  );
  
  // Assign classes
  updatedCards[0].className = '';
  updatedCards[1].className = '';
  updatedCards[2].className = '';
  updatedCards[0].classList.add('project-container-card2'); // RIGHT (blur + right arrow)
  updatedCards[1].classList.add('project-container-card1'); // CENTER (clean)
  updatedCards[2].classList.add('project-container-card');  // LEFT (blur + left arrow)
  
  // Remove overlays/arrows and all gradient overlays from all cards
  [0,1,2].forEach(i => {
    updatedCards[i].querySelectorAll('.blur-overlay').forEach(el => el.remove());
    updatedCards[i].querySelectorAll('.right-arrow-btn').forEach(el => el.remove());
    updatedCards[i].querySelectorAll('.left-arrow-btn').forEach(el => el.remove());
    const imgWrap = updatedCards[i].querySelector('.blogs-card-img-wrap1');
    if (imgWrap) {
      imgWrap.querySelectorAll('.blogs-card-img-gradient1').forEach(el => el.remove());
    }
  });
  
  // Add overlays/arrows
  addBlurOverlay(updatedCards[0]);
  addRightArrowButton(updatedCards[0]);
  addBlurOverlay(updatedCards[2]);
  addLeftArrowButton(updatedCards[2]);
};

const attachCarouselHandler = () => {
  const container = document.querySelector('.project-container-inner');

  // Initialize dots
  updateDots(currentActiveIndex);
  
  // Start auto-slide
  startAutoSlide();

  // Pause auto-slide on hover
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);

  container.addEventListener('click', (e) => {
    const currentRightBtn = container.querySelector('.project-container-card2 .right-arrow-btn');
    const currentLeftBtn = container.querySelector('.project-container-card .left-arrow-btn');

    // Right arrow logic
    if (currentRightBtn && currentRightBtn.contains(e.target)) {
      slideToRight();
      // Reset auto-slide timer
      stopAutoSlide();
      startAutoSlide();
      return;
    }
    // Left arrow logic
    else if (currentLeftBtn && currentLeftBtn.contains(e.target)) {
      slideToLeft();
      // Reset auto-slide timer
      stopAutoSlide();
      startAutoSlide();
      return;
    }
  });
};

function addBlurOverlay(card) {
  const overlay = document.createElement('div');
  overlay.className = 'blur-overlay';
  card.appendChild(overlay);
}

function addRightArrowButton(card) {
  const btn = document.createElement('button');
  btn.className = 'right-arrow-btn';
  const img = document.createElement('img');
  img.src = './assets/images/Arrow - Right 2.jpg';
  img.alt = 'Right Arrow';
  btn.appendChild(img);
  card.appendChild(btn);
}

function addLeftArrowButton(card) {
  const btn = document.createElement('button');
  btn.className = 'left-arrow-btn';
  const img = document.createElement('img');
  img.src = './assets/images/arrow left.png';
  img.alt = 'Left Arrow';
  btn.appendChild(img);
  card.appendChild(btn);
}

// Add click event to project images to open project-details.html
function initializeProjectImageClicks() {
  const container = document.querySelector('.project-container-inner');
  if (!container) return;
  // Map images to project IDs in order (1, 2, 3)
  const projectIds = ['1', '2', '3'];
  const images = Array.from(container.querySelectorAll('img')).filter(img => !img.closest('button'));
  images.forEach((img, idx) => {
    img.style.cursor = 'pointer';
    img.setAttribute('data-project-id', projectIds[idx % projectIds.length]);
    img.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = img.getAttribute('data-project-id') || '1';
      window.location.href = 'project-details.html?id=' + projectId;
    });
  });
}

// Call after DOM is ready and carousel is set up
const checkProjectImagesReady = setInterval(() => {
  const container = document.querySelector('.project-container-inner');
  if (container && container.querySelectorAll('img').length > 0) {
    clearInterval(checkProjectImagesReady);
    initializeProjectImageClicks();
  }
}, 200);

document.addEventListener('DOMContentLoaded', () => {
  observeProjectContainer();
  // Wait for carousel to be ready before starting auto-slide
  const checkReady = setInterval(() => {
    const container = document.querySelector('.project-container-inner');
    if (container && container.children.length >= 3) {
      clearInterval(checkReady);
      updateDots(currentActiveIndex);
      startAutoSlide();
      // Pause auto-slide on hover
      container.addEventListener('mouseenter', stopAutoSlide);
      container.addEventListener('mouseleave', startAutoSlide);
    }
  }, 100);
});

// CSS styles
const style = document.createElement('style');
style.textContent = `
.project-container-card2 .right-arrow-btn {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  position: absolute;
  bottom: 40%;
  right: 11%;
  transform: translate(50%, -50%);
  background-color: #008060;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.project-container-card2:hover .right-arrow-btn {
  opacity: 1;
  pointer-events: auto;
}
.project-container-card2 .right-arrow-btn img {
  width: 16px;
  height: 16px;
}
.project-container-card .left-arrow-btn {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  position: absolute;
  bottom: 40%;
  left: 11%;
  transform: translate(-50%, -50%) scaleX(-1);
  background-color: #008060;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.project-container-card:hover .left-arrow-btn {
  opacity: 1;
  pointer-events: auto;
}
.project-container-card .left-arrow-btn img {
  width: 16px;
  height: 16px;
}

/* Dot indicators styles */
.cursor-dot > div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  position: relative;
  right: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.cursor-dot > div.active-dot {
  background-color: #003366;
  transform: scale(1.2);
}
.cursor-dot {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
`;
document.head.appendChild(style);