// First load the navbar component

document.addEventListener("DOMContentLoaded", function() {
  // Check if we're loading navbar as a component
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    // If using component loading, wait for navbar to load before initializing
    fetch('./components/navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
        // Initialize AFTER navbar is loaded
        initNavbarDropdown();
        initHamburgerMenu();
        initFixedNavbar();
      })
      .catch(error => console.error("Error loading navbar:", error));
  } else {
    // If navbar is directly in page, initialize immediately
    initNavbarDropdown();
    initHamburgerMenu();
    initFixedNavbar();
  }
});

function initHamburgerMenu() {
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const mobileDropdown = document.getElementById("mobileDropdown");
  
  console.log("Hamburger icon:", hamburgerIcon);
  console.log("Mobile dropdown:", mobileDropdown);
  
  // Check if elements exist before adding event listeners
  if (hamburgerIcon && mobileDropdown) {
    // Save the original HTML with the image
    const originalHTML = hamburgerIcon.innerHTML;
    
    hamburgerIcon.addEventListener("click", (e) => {
      console.log("Hamburger clicked");
      e.stopPropagation(); // Prevent document click from immediately closing menu
      
      // Toggle between original image and X icon
      if (hamburgerIcon.querySelector('img')) {
        hamburgerIcon.innerHTML = '<i class="fa-solid fa-times" style="font-size: 24px;"></i>';
        console.log("Changed to X icon");
      } else {
        hamburgerIcon.innerHTML = originalHTML;
        console.log("Changed back to original image");
      }
      
      mobileDropdown.classList.toggle("open");
    });

    // Close when clicking outside the menu
    document.addEventListener("click", function(e) {
      if (!e.target.closest("#hamburgerIcon") && !e.target.closest("#mobileDropdown")) {
        mobileDropdown.classList.remove("open");
        hamburgerIcon.innerHTML = originalHTML;
      }
    });
  }
}

function initNavbarDropdown() {
    const selected = document.querySelector(".dropdown .selected");
    const menu = document.querySelector(".dropdown-menu");
    
    if (selected && menu) {
        selected.addEventListener("click", () => {
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function(e) {
            if (!e.target.closest(".dropdown")) {
                menu.style.display = "none";
            }
        });
    }
}

function initFixedNavbar() {
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;
  let isFixed = false;
  
  // Create a placeholder to prevent content jump when navbar becomes fixed
  const placeholder = document.createElement('div');
  placeholder.style.height = '0';
  placeholder.style.display = 'none';
  navbar.parentNode.insertBefore(placeholder, navbar);
  
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    if (scrollY > 0 && !isFixed) {
      // Switch to fixed positioning
      placeholder.style.height = navbarHeight + 'px';
      placeholder.style.display = 'block';
      navbar.style.position = 'fixed';
      navbar.style.top = '0';
      navbar.style.left = '0';
      navbar.style.right = '0';
      navbar.style.width = '100%';
      isFixed = true;
    } else if (scrollY === 0 && isFixed) {
      // Return to normal positioning
      placeholder.style.display = 'none';
      navbar.style.position = '';
      navbar.style.top = '';
      navbar.style.left = '';
      navbar.style.right = '';
      navbar.style.width = '';
      isFixed = false;
    }
  }
  
  // Initial check
  handleScroll();
  
  // Add scroll event
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
}

document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const navbar = document.querySelector('.navbar');
  const mobileDropdown = document.querySelector('.mobile-dropdown');
  const hamburgerButton = document.querySelector('.hamburger');  // Update with your actual button class
  
  // Function to update dropdown position
  function updateDropdownPosition() {
    if (mobileDropdown && navbar) {
      // Get current navbar height
      const navbarHeight = navbar.getBoundingClientRect().height;
      
      // Update dropdown positioning
      mobileDropdown.style.top = navbarHeight + 'px';
      mobileDropdown.style.height = `calc(100vh - ${navbarHeight}px)`;
    }
  }
  
  // Toggle dropdown
  if (hamburgerButton && mobileDropdown) {
    hamburgerButton.addEventListener('click', function() {
      // Update position before showing
      updateDropdownPosition();
      
      // Toggle dropdown
      mobileDropdown.classList.toggle('open');
      
      // Toggle hamburger active state if needed
      hamburgerButton.classList.toggle('active');
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileDropdown && 
        mobileDropdown.classList.contains('open') && 
        !mobileDropdown.contains(event.target) && 
        !hamburgerButton.contains(event.target)) {
      
      mobileDropdown.classList.remove('open');
      hamburgerButton.classList.remove('active');
    }
  });
  
  // Update on scroll and resize
  window.addEventListener('scroll', updateDropdownPosition);
  window.addEventListener('resize', updateDropdownPosition);
  
  // Initial setup
  updateDropdownPosition();
});