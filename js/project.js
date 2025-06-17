document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment to ensure DOM is fully processed
    setTimeout(function() {
        // Get elements
        const cardProject = document.querySelector('.card_project');
        const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
        
        console.log("Elements found:", {
            cardProject: cardProject,
            leftArrow: leftArrow,
            rightArrow: rightArrow
        });
        
        // Proceed only if elements are found
        if (!cardProject || !leftArrow || !rightArrow) {
            console.error("Required elements not found");
            return;
        }
        
        // Card width calculation
        const cardWidth = 568;
        
        let currentPosition = 0;
        const cards = document.querySelectorAll('.card_project1');
        const maxCards = cards.length;
        const visibleCards = Math.floor(cardProject.offsetWidth / cardWidth);
        const maxScroll = (maxCards - visibleCards) * cardWidth;
        
        // Arrow event listeners
        leftArrow.addEventListener('click', function() {
            currentPosition += cardWidth;
            if (currentPosition > 0) currentPosition = 0;
            cardProject.style.transform = `translateX(${currentPosition}px)`;
        });
        
        rightArrow.addEventListener('click', function() {
            currentPosition -= cardWidth;
            if (currentPosition < -maxScroll) currentPosition = -maxScroll;
            cardProject.style.transform = `translateX(${currentPosition}px)`;
        });
    }, 100);
});