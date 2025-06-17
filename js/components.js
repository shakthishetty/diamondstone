document.addEventListener("DOMContentLoaded", function() {
  // Load header component
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    fetch('./components/header.html')
      .then(response => response.text())
      .then(data => {
        headerContainer.innerHTML = data;
      })
      .catch(error => console.error("Error loading header:", error));
  }
  
  // Load navbar component (if not already handled elsewhere)
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    fetch('./components/navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
        // Initialize navbar functionality
        if (typeof initNavbarDropdown === 'function') {
          initNavbarDropdown();
          initHamburgerMenu();
          initFixedNavbar();
        }
      })
      .catch(error => console.error("Error loading navbar:", error));
  }
});