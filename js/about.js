// Wait for DOM to be fully loaded before running any code
window.addEventListener('DOMContentLoaded', function() {
   (function() {
        document.addEventListener('click', function(e) {
          var link = e.target.closest('.nav-link');
          if (link && link.dataset && link.dataset.href) {
            // Always open in a new tab
            window.open(link.dataset.href, '_blank');
          }
        });
      })();
});





document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.querySelector('.mobile-hamburger');
  const drawer = document.getElementById('mobileNavDrawer');
  const hamburgerImg = hamburgerBtn.querySelector('img');

  if (hamburgerBtn && drawer && hamburgerImg) {
    const openIcon = './assets/icons/radix-icons_hamburger-menu.png';
    const closeIcon = './assets/icons/close.png';

    function toggleDrawer() {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      hamburgerImg.src = isOpen ? closeIcon : openIcon;
    }

    hamburgerBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleDrawer();
    });

    document.addEventListener('click', function (e) {
      if (!drawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        drawer.classList.remove('open');
        hamburgerImg.src = openIcon;
      }
    });

    drawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        hamburgerImg.src = openIcon;
      });
    });
  }

  const header = document.querySelector('.collection-details');
let lastScrollY = window.scrollY;
let idleTimeout = null;

function showHeader() {
  header.classList.remove('hide-header');
}

function hideHeader() {
  header.classList.add('hide-header');
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  // Always show header when near top
  if (currentScrollY <= 100) {
    showHeader();

    // ❗ Do not hide header if user is at top
    clearTimeout(idleTimeout);
    return;
  }

  // Scroll direction logic
  if (currentScrollY > lastScrollY) {
    // Scrolling down → show header
    showHeader();
  } else if (currentScrollY < lastScrollY) {
    // Scrolling up → hide header
    hideHeader();
  }

  lastScrollY = currentScrollY;

  // Idle timeout (only if not at top)
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(() => {
    // Only hide if not near top
    if (window.scrollY > 100) {
      hideHeader();
    }
  }, 3000);
}

window.addEventListener('scroll', handleScroll);

});

