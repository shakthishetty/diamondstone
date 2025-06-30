// document.addEventListener('DOMContentLoaded', function() {
//     // Load all components first
//     Promise.all([
//         fetch('components/header.html').then(response => response.text()),
//         fetch('components/navbar.html').then(response => response.text()),
//         fetch('components/slider.html').then(response => response.text()),
//         fetch('components/collections.html').then(response => response.text()),
//         fetch('components/application.html').then(response => response.text()),
//         fetch('components/finishes.html').then(response => response.text()),
//         fetch('components/whyChooseUs.html').then(response => response.text()),
//         fetch('components/project.html').then(response => response.text()),
//         fetch('components/address.html').then(response => response.text()),
//         fetch('components/blogs.html').then(response => response.text()),
//         fetch('components/resources.html').then(response => response.text()),
//         fetch('components/footer.html').then(response => response.text())
//     ]).then(responses => {
//         // Insert all components
//         document.getElementById('header-container').innerHTML = responses[0];
//         document.getElementById('navbar-container').innerHTML = responses[1];
//         document.getElementById('slider-container').innerHTML = responses[2];
//         document.getElementById('collections-container').innerHTML = responses[3];
//         document.getElementById('application-container').innerHTML = responses[4];
//         document.getElementById('finishes-container').innerHTML = responses[5];
//         document.getElementById('whyChooseUs-container').innerHTML = responses[6];
//         document.getElementById('project-container').innerHTML = responses[7];
//         document.getElementById('address-container').innerHTML = responses[8];
//         document.getElementById('blogs-container').innerHTML = responses[9];
//         document.getElementById('resources-container').innerHTML = responses[10];
//         document.getElementById('footer-container').innerHTML = responses[11];
        
//         // Wait for DOM to be updated, then initialize slider functionality
//         setTimeout(() => {
//             initializeSliderDownload();
//         }, 100);
//     });
// });

// // Separate function for slider download functionality
// function initializeSliderDownload() {
//     console.log('Initializing slider download...');
    
//     // Try to find the download section
//     const downloadSection = document.querySelector('.download');
    
//     if (!downloadSection) {
//         console.error('Download section not found');
//         // Try again after a short delay
//         setTimeout(() => {
//             initializeSliderDownload();
//         }, 500);
//         return;
//     }
    
//     console.log('Download section found:', downloadSection);
    
//     // Add cursor pointer style
//     downloadSection.style.cursor = 'pointer';
    
//     // Add click event listener
//     downloadSection.addEventListener('click', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
        
//         console.log('Download section clicked');
        
//         // Open Google Drive file instead of downloading
//         openSliderGoogleDriveFile();
//     });
    
//     // Also add event listener using event delegation as backup
//     document.addEventListener('click', function(e) {
//         if (e.target.closest('.download')) {
//             e.preventDefault();
//             e.stopPropagation();
//             console.log('Download clicked via delegation');
//             openSliderGoogleDriveFile();
//         }
//     });
    
//     console.log('Slider download initialization complete');
// }

// function openSliderGoogleDriveFile() {
//     console.log('Opening Google Drive file from slider');
    
//     // Your Google Drive file URL
//     const driveUrl = 'https://drive.google.com/file/d/1-fURpOP8hlvCv7PBk3HDkTMnfDhx02wB/view';
    
//     // Open Google Drive file in new tab
//     const newWindow = window.open(driveUrl, '_blank');
    
//     if (!newWindow) {
//         // If popup blocked, try alternative method
//         alert('Please allow popups to view the file, or it will open in the current tab.');
//         window.location.href = driveUrl;
//     }
    
//     console.log('Opened Google Drive file from slider:', driveUrl);
    
//     // Show success message
//     showSliderOpenMessage();
// }

// function showSliderOpenMessage() {
//     // Create a temporary notification
//     const notification = document.createElement('div');
//     notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background: #027D6A;
//         color: white;
//         padding: 15px 20px;
//         border-radius: 8px;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//         z-index: 9999;
//         font-family: Inter, sans-serif;
//         font-size: 14px;
//         max-width: 300px;
//         opacity: 0;
//         transform: translateX(100%);
//         transition: all 0.3s ease;
//     `;
    
//     notification.innerHTML = `
//         <div style="display: flex; align-items: center; gap: 10px;">
//             <div>
//                 <strong>Opening Catalog!</strong><br>
//                 <span style="font-size: 12px; opacity: 0.9;">
//                     Opening in Google Drive...
//                 </span>
//             </div>
//             <button onclick="this.parentElement.parentElement.remove()" 
//                     style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; padding: 0; margin-left: auto;">
//                 ×
//             </button>
//         </div>
//     `;
    
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.opacity = '1';
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Auto remove after 3 seconds
//     setTimeout(() => {
//         if (notification.parentElement) {
//             notification.style.opacity = '0';
//             notification.style.transform = 'translateX(100%)';
//             setTimeout(() => {
//                 if (notification.parentElement) {
//                     notification.remove();
//                 }
//             }, 300);
//         }
//     }, 3000);
// }

// // Export functions if needed
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         initializeSliderDownload,
//         openSliderGoogleDriveFile
//     };
// }