document.addEventListener('DOMContentLoaded', function() {
    // Wait for all components to load
    setTimeout(() => {
        initializeFooterNavigation();
        initializeUpArrow();
    }, 1000);
});

function initializeFooterNavigation() {
    console.log('Initializing footer navigation');
    
    // Get all quick links in footer
    const quickLinks = document.querySelectorAll('.foot p, .foot1 p');
    
    // Define mapping between link text and actions
    const linkMapping = {
        'Home': {
            action: 'scrollToTop',
            selector: null
        },
        'Our Marble Collection': {
            action: 'scroll',
            selector: '.collectionSection'
        },
        'Applications': {
            action: 'scroll',
            selector: '.application'
        },
        'Finishes': {
            action: 'scroll',
            selector: '.Finishes'
        },
        'About us': {
            action: 'navigate',
            url: './aboutUs.html'
        },
        'Certifications': {
            action: 'scroll',
            selector: '.certificateContainer'
        },
        'Projects': {
            action: 'scroll',
            selector: '.project'
        },
        'Blogs': {
            action: 'scroll',
            selector: '.blogsSection'
        }
    };
    
    quickLinks.forEach(link => {
        const linkText = link.textContent.trim();
        console.log('Processing link:', linkText);
        
        if (linkMapping[linkText]) {
            link.style.cursor = 'pointer';
            link.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                const config = linkMapping[linkText];
                console.log('Clicked:', linkText, 'Action:', config.action);
                
                handleFooterNavigation(config);
            });
        }
    });
}

function handleFooterNavigation(config) {
    switch (config.action) {
        case 'scrollToTop':
            // Scroll to top of current page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            break;
            
        case 'scroll':
            // Check if we're on the home page
            const currentPage = window.location.pathname;
            const isHomePage = currentPage === '/' || 
                              currentPage === '/index.html' || 
                              currentPage.endsWith('/index.html') ||
                              currentPage === '' ||
                              currentPage.split('/').pop() === 'index.html';
            
            if (isHomePage) {
                // We're on home page, scroll to section
                const targetElement = document.querySelector(config.selector);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    console.warn(`Section not found: ${config.selector}`);
                }
            } else {
                // We're on a different page, navigate to home with hash
                const sectionId = config.selector.replace('.', '');
                const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
                window.location.href = baseUrl + 'index.html#' + sectionId;
            }
            break;
            
        case 'navigate':
            // Navigate to different page
            window.location.href = config.url;
            break;
            
        default:
            console.warn('Unknown action:', config.action);
    }
}

function initializeUpArrow() {
    console.log('Initializing up arrow');
    
    // Get up arrow elements from both footer versions
    const upArrows = document.querySelectorAll('.upArrow, .upArrow1, .upArrow2');
    
    upArrows.forEach(arrow => {
        if (arrow) {
            arrow.style.cursor = 'pointer';
            arrow.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                console.log('Up arrow clicked - scrolling to top');
                
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
}

// Handle hash navigation when arriving from footer links
window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        const sectionId = hash.substring(1);
        const targetElement = document.querySelector('.' + sectionId);
        
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 500);
        }
    }
});

// Export functions for global use
window.footerNavigation = {
    scrollToTop: function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },
    
    navigateToSection: function(selector) {
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },
    
    navigateToPage: function(url) {
        window.location.href = url;
    }
};

console.log('Footer navigation script loaded');