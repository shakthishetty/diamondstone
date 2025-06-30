// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are loaded
    setTimeout(() => {
        initializeResourceDownloads();
        runResourceAnimations();
    }, 100);
    console.log('Resource script loaded');
});

function initializeResourceDownloads() {
    console.log('Initializing resource downloads');
    // Use the new class for the download button
    const downloadElements = document.querySelectorAll('.resource-download-btn');
    downloadElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Resource download clicked');
            // Get the resource type or use default
            const resourceCard = element.closest('.resource-row');
            const resourceTitle = resourceCard ? 
                resourceCard.querySelector('.resource-info-title')?.textContent || 'Marble Product Catalog' : 
                'Marble Product Catalog';
            console.log('Resource title found:', resourceTitle);
            // Open Google Drive link based on resource type
            openGoogleDriveFile(resourceTitle);
        });
    });
}

function openGoogleDriveFile(resourceTitle) {
    console.log('Opening Google Drive file for:', resourceTitle);
    
    // Different Google Drive URLs for different resources
    const driveFiles = {
        'Marble Product Catalog': 'https://drive.google.com/file/d/1-fURpOP8hlvCv7PBk3HDkTMnfDhx02wB/view',
        'Installation Guide': 'https://docs.google.com/document/d/1ZpMC9eyZzmsjZMnA0xs3XrzbsgIqkKVSRQfXo1snJCg/edit?tab=t.0#heading=h.kgy2uzbi02wy',
        // Add more resources as needed
        'default': 'https://drive.google.com/file/d/1-fURpOP8hlvCv7PBk3HDkTMnfDhx02wB/view'
    };
    
    // Get the appropriate drive link
    const driveUrl = driveFiles[resourceTitle] || driveFiles['default'];
    
    console.log('Opening URL:', driveUrl);
    
    // Open Google Drive file in new tab
    const newWindow = window.open(driveUrl, '_blank');
    
    if (!newWindow) {
        // If popup blocked, try alternative method
        alert('Please allow popups to view the file, or it will open in the current tab.');
        window.location.href = driveUrl;
    }
    
    console.log('Opened Google Drive file:', driveUrl);
    
    // Optional: Show success message
    showOpenMessage(resourceTitle);
}

function showOpenMessage(filename) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #027D6A;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        font-family: Inter, sans-serif;
        font-size: 14px;
        max-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div>
                <strong>Opening ${filename}!</strong><br>
                <span style="font-size: 12px; opacity: 0.9;">
                    File is opening in ${filename.includes('Installation') ? 'Google Docs' : 'Google Drive'}.
                </span>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; padding: 0; margin-left: auto;">
                ×
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

function runResourceAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const section = document.querySelector('.re_source');
    if (!section) return;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true
        }
    });
    tl.from('.resource-title', {
        opacity: 0,
        y: -40,
        filter: 'blur(8px)',
        duration: 0.7,
        ease: 'power3.out'
    })
    .from('.resource-row', {
        opacity: 0,
        y: 60,
        scale: 0.96,
        filter: 'blur(10px)',
        duration: 0.7,
        stagger: 0.18,
        ease: 'back.out(1.5)'
    }, '-=0.4')
    .from('.resource-image', {
        opacity: 0,
        scale: 0.92,
        filter: 'blur(8px)',
        duration: 0.7,
        stagger: 0.18,
        ease: 'power2.out'
    }, '-=0.7');
}

// Export functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeResourceDownloads,
        openGoogleDriveFile
    };
}