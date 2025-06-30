document.addEventListener('DOMContentLoaded', function() {
    console.log('Scroll navigation initialized');

    // Function to smooth scroll to a section
    function smoothScrollTo(targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.warn(`Target section not found: ${targetSelector}`);
        }
    }

    // Function to scroll to top of page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function to navigate to different pages
    function navigateToPage(config) {
        // Check what page we're currently on
        const currentPage = window.location.pathname;
        const isHomePage = currentPage === '/' || 
                          currentPage === '/index.html' || 
                          currentPage.endsWith('/index.html') ||
                          currentPage === '' ||
                          currentPage.split('/').pop() === 'index.html';
        
        const isAboutPage = currentPage.includes('aboutUs.html');
        const isProjectDetailsPage = currentPage.includes('project-details.html');
        const isBlogPostPage = currentPage.includes('blog-post.html');

        console.log('Current page:', currentPage, 'Config:', config);

        switch (config.action) {
            case 'scrollToTop':
                scrollToTop();
                break;
                
            case 'navigateHome':
                if (isHomePage) {
                    scrollToTop();
                } else {
                    window.location.href = './index.html';
                }
                break;
                
            case 'navigateAbout':
                if (isAboutPage) {
                    scrollToTop();
                } else {
                    window.location.href = './aboutUs.html';
                }
                break;
                
            case 'scrollOrNavigate':
                if (isHomePage) {
                    // We're on home page, scroll to section
                    smoothScrollTo(config.selector);
                } else {
                    // We're on a different page, navigate to home with hash
                    const sectionId = config.selector.replace('.', '');
                    window.location.href = './index.html#' + sectionId;
                }
                break;
                
            case 'navigate':
                window.location.href = config.url;
                break;
                
            default:
                console.warn('Unknown action:', config.action);
        }
    }

    // Navigation link handlers
    const navigationLinks = {
        // Home navigation
        'home': { action: 'navigateHome' },
        
        // About navigation
        'about': { action: 'navigateAbout' },
        'about us': { action: 'navigateAbout' },
        'aboutus': { action: 'navigateAbout' },
        
        // Collections navigation
        'collections': { action: 'scrollOrNavigate', selector: '.collectionSection' },
        'marble-collection': { action: 'scrollOrNavigate', selector: '.collectionSection' },
        'our-marble-collection': { action: 'scrollOrNavigate', selector: '.collectionSection' },
        'our marble collection': { action: 'scrollOrNavigate', selector: '.collectionSection' },
        
        // Projects navigation
        'projects': { action: 'scrollOrNavigate', selector: '.project' },
        'our-projects': { action: 'scrollOrNavigate', selector: '.project' },
        'our projects': { action: 'scrollOrNavigate', selector: '.project' },
        
        // Blogs navigation
        'blogs': { action: 'scrollOrNavigate', selector: '.blogsSection' },
        'blog': { action: 'scrollOrNavigate', selector: '.blogsSection' },
        
        // Resources navigation
        'resources': { action: 'scrollOrNavigate', selector: '.re_source' },
        'resource': { action: 'scrollOrNavigate', selector: '.re_source' },
        
        // Contact/Address navigation
        'contact': { action: 'scrollOrNavigate', selector: '.address' },
        'address': { action: 'scrollOrNavigate', selector: '.address' },
        'contact-us': { action: 'scrollOrNavigate', selector: '.address' },
        'contact us': { action: 'scrollOrNavigate', selector: '.address' },
        
        // Certifications navigation
        'certifications': { action: 'scrollOrNavigate', selector: '.certificateContainer' },
        'certification': { action: 'scrollOrNavigate', selector: '.certificateContainer' }
    };

    // Handle up arrow click - scroll to top
    document.addEventListener('click', function(event) {
        const clickedElement = event.target;
        
        // Check if clicked element is the up arrow or inside it
        const upArrow = clickedElement.closest('.upArrow, .upArrow1, .upArrow2');
        if (upArrow) {
            event.preventDefault();
            event.stopPropagation();
            console.log('Up arrow clicked - scrolling to top');
            scrollToTop();
            return;
        }
    });

    // Main click handler for all navigation
    document.addEventListener('click', function(event) {
        const clickedElement = event.target;
        const link = clickedElement.closest('a');
        const paragraph = clickedElement.closest('p'); // Handle footer p tags
        const button = clickedElement.closest('button');
        const footerLink = clickedElement.closest('.footer-link'); // Handle footer quick links
        const navLink = clickedElement.closest('.nav-link'); // Handle header nav links
        
        let text = '';
        let href = '';
        
        // Get text and href from different element types
        if (link) {
            text = link.textContent.toLowerCase().trim();
            href = link.getAttribute('href');
        } else if (paragraph && (paragraph.closest('.foot1') || paragraph.closest('.foot2') || paragraph.closest('.foot'))) {
            // Handle p tags in all footer sections including blog-post footer
            text = paragraph.textContent.toLowerCase().trim();
        } else if (button) {
            text = button.textContent.toLowerCase().trim();
        } else if (footerLink) {
            text = footerLink.textContent.toLowerCase().trim();
        } else if (navLink) {
            text = navLink.textContent.toLowerCase().trim();
        }
        
        if (text) {
            console.log('Element clicked:', text, 'Type:', link ? 'link' : paragraph ? 'paragraph' : 'button');
            console.log('Current page check - blog-post:', window.location.pathname.includes('blog-post.html'));
            
            // Handle navigation based on text content
            let config = null;
            
            // Direct text matches
            if (navigationLinks[text]) {
                config = navigationLinks[text];
            }
            // Footer quick links explicit matches
            else if (text === 'home') {
                config = { action: 'navigateHome' };
            }
            // Only match 'Marble & Collections' exactly (case-insensitive)
            else if (text === 'marble & collections') {
                config = { action: 'scrollOrNavigate', selector: '.collection' };
            } else if (text === 'house of diamond stone') {
                config = { action: 'scrollOrNavigate', selector: '.whyChooseUsSection' };
            } else if (text === 'projects & showcase') {
                config = { action: 'scrollOrNavigate', selector: '.project' };
            }
            // Pattern matches
            else if (text.includes('home')) {
                config = { action: 'navigateHome' };
            }
            else if (text.includes('about')) {
                config = { action: 'navigateAbout' };
            }
            else if (text.includes('projects') || text.includes('project')) {
                config = { action: 'scrollOrNavigate', selector: '.project' };
            }
            else if (text.includes('blogs') || text.includes('blog')) {
                config = { action: 'scrollOrNavigate', selector: '.blogsSection' };
            }
            else if (text.includes('resources') || text.includes('resource')) {
                config = { action: 'scrollOrNavigate', selector: '.re_source' };
            }
            else if (text.includes('contact') || text.includes('address')) {
                config = { action: 'scrollOrNavigate', selector: '.address' };
            }
            else if (text.includes('certifications') || text.includes('certification')) {
                config = { action: 'scrollOrNavigate', selector: '.certificateContainer' };
            }
            else if (text.includes('explore') && text.includes('collection')) {
                config = { action: 'scrollOrNavigate', selector: '.collectionSection' };
            }
            
            // Handle special href cases for links
            if (link) {
                if (href === './index.html' || href === 'index.html') {
                    config = { action: 'navigateHome' };
                }
                else if (href === './aboutUs.html' || href === 'aboutUs.html') {
                    config = { action: 'navigateAbout' };
                }
                else if (href && href.startsWith('#')) {
                    const sectionId = href.substring(1);
                    if (navigationLinks[sectionId]) {
                        config = navigationLinks[sectionId];
                    }
                }
            }
            
            // Execute navigation if config found
            if (config) {
                event.preventDefault();
                event.stopPropagation();
                console.log('Navigating with config:', config);
                navigateToPage(config);
            }
        }
    });

    // Handle hash navigation when page loads
    function handleHashNavigation() {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.substring(1);
            let targetSelector;
            
            // Map hash to actual selectors
            switch (sectionId) {
                case 'collectionSection':
                case 'collections':
                    targetSelector = '.collectionSection';
                    break;
                case 'project':
                case 'projects':
                    targetSelector = '.project';
                    break;
                case 'blogsSection':
                case 'blogs':
                    targetSelector = '.blogsSection';
                    break;
                case 're_source':
                case 'resources':
                    targetSelector = '.re_source';
                    break;
                case 'address':
                case 'contact':
                    targetSelector = '.address';
                    break;
                case 'certificateContainer':
                case 'certifications':
                    targetSelector = '.certificateContainer';
                    break;
                default:
                    targetSelector = '.' + sectionId;
            }
            
            setTimeout(() => {
                smoothScrollTo(targetSelector);
            }, 500);
        }
    }

    // Handle hash navigation on page load
    handleHashNavigation();

    // Handle hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashNavigation);

    // Expose functions globally
    window.scrollToSection = function(sectionSelector) {
        smoothScrollTo(sectionSelector);
    };

    window.scrollToTop = function() {
        scrollToTop();
    };

    window.navigateToPage = function(config) {
        navigateToPage(config);
    };

    console.log('Navigation scroll handlers initialized');

    document.addEventListener('click', function(event) {
        const clickedElement = event.target;
        const navLink = clickedElement.closest('.nav-link');
        if (navLink && navLink.dataset) {
            // Only for House of Diamond Stone, navigate to aboutUs.html
            if (
                navLink.textContent.trim().toLowerCase() === 'house of diamond stone' ||
                navLink.dataset.href === 'aboutUs.html'
            ) {
                window.location.href = 'aboutUs.html';
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            // ...existing code for data-scroll remains unchanged...
        }
        // ...existing code...
    });

    // Use event delegation for Explore Project button (works for dynamically loaded content)
    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target.id === 'explore-project-btn' || target.closest('#explore-project-btn')) {
            event.preventDefault();
            event.stopPropagation();
            navigateToPage({ action: 'scrollOrNavigate', selector: '.project' });
        }
    });

    // Use event delegation for Origins CTA button
    // This will work for dynamically loaded content as well

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList && (target.classList.contains('origins-cta') || target.classList.contains('origins-cta-text') || target.closest('.origins-cta'))) {
            event.preventDefault();
            event.stopPropagation();
            navigateToPage({ action: 'navigateAbout' });
        }
    });
});