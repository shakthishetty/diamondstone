// First load the navbar component

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");
  
  // Check if we're loading navbar as a component
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    console.log("Found navbar container, loading component");
    // If using component loading, wait for navbar to load before initializing
    fetch('./components/navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
        // Initialize AFTER navbar is loaded
        console.log("Navbar component loaded, initializing functions");
        setTimeout(() => {
          initAllNavbarFunctions();
        }, 100); // Small delay to ensure DOM is updated
      })
      .catch(error => console.error("Error loading navbar:", error));
  } else {
    // If navbar is directly in page, initialize immediately
    console.log("No navbar container found, assuming navbar is already in page");
    setTimeout(() => {
      initAllNavbarFunctions();
    }, 100);
  }
});

function initAllNavbarFunctions() {
  console.log("Initializing all navbar functions");
  initNavbarDropdown();
  initHamburgerMenu();
  initFixedNavbar();
}

function initHamburgerMenu() {
  // Target multiple possible selectors to find the hamburger button
  const hamburgerIcon = document.querySelector(".hamburger-icon") || 
                        document.querySelector("[id^='hamburger']") ||
                        document.querySelector(".hamburger");
                        
  // Target multiple possible selectors to find the mobile dropdown
  const mobileDropdown = document.querySelector(".mobile-dropdown") || 
                         document.querySelector("[id^='mobileDropdown']");
  
  console.log("Finding hamburger elements:");
  console.log("- Hamburger icon found:", hamburgerIcon ? "YES" : "NO");
  console.log("- Mobile dropdown found:", mobileDropdown ? "YES" : "NO");
  
  // Check if elements exist before adding event listeners
  if (hamburgerIcon && mobileDropdown) {
    console.log("Setting up hamburger menu click handlers");
    
    // Save the original HTML with the image if it exists
    const originalHTML = hamburgerIcon.innerHTML;
    
    hamburgerIcon.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
    
      const isOpen = mobileDropdown.classList.contains("open");
    
      if (isOpen) {
        // Closing
        hamburgerIcon.innerHTML = originalHTML;
      } else {
        // Opening
        hamburgerIcon.innerHTML = '<i class="fa-solid fa-times" style="font-size: 24px;"></i>';
      }
    
      mobileDropdown.classList.toggle("open");
    });
    
    // Close menu when clicking on menu items
    const menuLinks = mobileDropdown.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        console.log("Menu link clicked - closing menu");
        mobileDropdown.classList.remove("open");
        hamburgerIcon.classList.remove("active");
        hamburgerIcon.innerHTML = originalHTML; // Reset to original hamburger icon
      });
    });
    
    // Close when clicking anywhere else
    document.addEventListener("click", function(e) {
      if (mobileDropdown.classList.contains("open") && 
          !hamburgerIcon.contains(e.target) && 
          !mobileDropdown.contains(e.target)) {
        
        console.log("Clicked outside menu, closing dropdown");
        mobileDropdown.classList.remove("open");
        hamburgerIcon.innerHTML = originalHTML;
      }
    });
    
  } else {
    console.error("Hamburger menu setup failed - missing required elements");
    console.log("DOM structure:", document.body.innerHTML);
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