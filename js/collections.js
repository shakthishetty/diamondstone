document.addEventListener("DOMContentLoaded", function () {
  console.log("Collections script running");

  const checkForComponents = setInterval(function () {
    const cardContainer = document.querySelector(".card");
    console.log("Checking for components...");

    if (cardContainer) {
      console.log("Components found, initializing cards");
      clearInterval(checkForComponents);
      initializeCards();
      // Move popup setup after cards are initialized
      setupPopup();
    }
  }, 200);

  function initializeCards() {
    const data = [
      { name: "Sahara Beige", image: "./assets/images/marble1.png" },
      { name: "Sahara Beige", image: "./assets/images/marble2.png" },
      { name: "Ibri", image: "./assets/images/marble3.png" },
      { name: "Narcissus", image: "./assets/images/marble4.png" },
      { name: "Elegant Gray", image: "./assets/images/marble5.png" },
      { name: "Imperial Beige", image: "./assets/images/marble6.png" },
      { name: "White Pearl", image: "./assets/images/marble7.png" },
      { name: "Desert Rose", image: "./assets/images/marble8.png" },
      { name: "Nizwa Beige", image: "./assets/images/marble9.png" },
      { name: "Desert Oasis", image: "./assets/images/marble10.png" },
      { name: "Omani Black", image: "./assets/images/marble11.png" }
    ];

    const cardContainers = [
      document.querySelector(".card"),
      document.querySelector(".card1"),
      document.querySelector(".card2")
    ];

    let cardsPerRow = [4, 4, 3];
    let dataIndex = 0;

    cardsPerRow.forEach((count, i) => {
      const container = cardContainers[i];
      if (container) {
        for (let j = 0; j < count; j++) {
          if (data[dataIndex]) {
            const card = document.createElement("div");
            card.className = "innerCard";

            const imgDiv = document.createElement("div");
            imgDiv.className = "imageCard";

            const img = document.createElement("img");
            img.src = data[dataIndex].image;
            img.alt = data[dataIndex].name;
            img.className = "marble-image";
            imgDiv.appendChild(img);

            const overlay = document.createElement("div");
            overlay.className = "slant-overlay";
            imgDiv.appendChild(overlay);

            const titleDiv = document.createElement("div");
            titleDiv.className = "titleCard";
            const title = document.createElement("h4");
            title.className = "marble-title";
            title.textContent = data[dataIndex].name;
            titleDiv.appendChild(title);

            card.appendChild(imgDiv);
            card.appendChild(titleDiv);
            container.appendChild(card);

            dataIndex++;
          }
        }
      } else {
        console.error("Card container " + i + " not found");
      }
    });

    console.log("Cards initialized:", document.querySelectorAll('.innerCard').length);
  }

  function updateCardContainerVisibility() {
    const card2Container = document.querySelector('.collectionContainer2');
    const viewAllButton = document.getElementById('viewAllButton');
    const isMobile = window.innerWidth <= 768;

    if (card2Container) {
      card2Container.style.display = 'none';
    }

    if (isMobile) {
      const allCards = document.querySelectorAll('.innerCard');
      if (allCards.length > 6) {
        for (let i = 6; i < allCards.length; i++) {
          allCards[i].style.display = 'none';
        }
      }
    }

    if (viewAllButton) {
      viewAllButton.textContent = 'View All Marble Collection';
    }
  }

  function setupViewAllButton() {
    const viewAllButton = document.getElementById('viewAllButton');
    const card2Container = document.querySelector('.collectionContainer2');

    if (viewAllButton && card2Container) {
      updateCardContainerVisibility();

      viewAllButton.addEventListener('click', function () {
        const isMobile = window.innerWidth <= 768;

        if (card2Container.style.display === 'none' || getComputedStyle(card2Container).display === 'none') {
          card2Container.style.display = 'flex';
          viewAllButton.textContent = 'Show Less';
          viewAllButton.style.marginTop = '40px';

          if (isMobile) {
            const allCards = document.querySelectorAll('.innerCard');
            for (let i = 0; i < allCards.length; i++) {
              allCards[i].style.display = '';
            }
          }

          setTimeout(() => {
            card2Container.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          card2Container.style.display = 'none';
          viewAllButton.textContent = 'View All Marble Collection';
          viewAllButton.style.marginTop = '0';

          if (isMobile) {
            const allCards = document.querySelectorAll('.innerCard');
            if (allCards.length > 6) {
              for (let i = 6; i < allCards.length; i++) {
                allCards[i].style.display = 'none';
              }
            }
          }
        }
      });
    }
  }

  // Updated function to set up popup functionality
  function setupPopup() {
    console.log("Setting up popup functionality");
    const cards = document.querySelectorAll('.innerCard');
    const popup = document.getElementById('marblePopup');
    const closeButton = document.querySelector('.popup-close');
    
    // Get the specific elements you want to populate
    const popupImageCard1 = document.querySelector('.popupImageCard1');
    const fechedPartP = document.querySelector('.fechedPart p');
    const plainParaP = document.querySelector('.plainPara p');
    
    // Marble descriptions for each type
    const marbleDescriptions = {
      "Sahara Beige": "Sahara Beige radiates warmth and balance through its soft, sandy tones and subtle movement. Its understated elegance brings a natural calm to interiors, making it a versatile choice for both expansive surfaces and quiet focal points. Ideal for serene, timeless spaces that invite comfort.",
      "Ibri": "Ibri showcases a warm, creamy beige base with subtle movement and fine mineral textures. Its natural charm and understated elegance make it perfect for classic flooring, accent walls, and cozy yet sophisticated interior palettes.",
      "Narcissus": "Narcissus captures attention with its striking white base streaked by expressive charcoal veins. Its dramatic contrast evokes a sculptural, gallery-like atmosphere — ideal for bold, modern interiors that demand both clarity and confidence. Whether used as a statement island or an immersive wall, it leaves a lasting impression.",
      "Elegant Gray": "Elegant Gray strikes a perfect balance between subtle sophistication and modern edge. With its cool gray tones and fine veining, it lends a sleek, contemporary charm to spaces, making it an ideal choice for minimalist interiors and refined architectural backdrops.",
      "Imperial Beige": "Imperial Beige is known for its tranquil palette and adaptable style. With minimal veining and a creamy texture, it creates cohesive spatial experiences in both residential and commercial interiors.",
      "White Pearl": "White Pearl radiates purity and elegance with its soft white base and delicate pearl-like sheen. Its refined simplicity enhances light and space, making it a go-to choice for luxurious bathrooms, serene living spaces, and minimalist environments.",
      "Desert Rose": "Desert Rose exudes a soft romantic charm with its warm beige tones kissed by gentle pink undertones. Its quiet elegance and smooth texture make it a graceful addition to spaces that embrace warmth, subtle luxury, and organic calm. Perfect for tranquil retreats and sophisticated living areas.",
      "Nizwa Beige": "Nizwa Beige embodies quiet sophistication with its warm beige undertones and soft, natural grain. Its timeless appeal adds depth and serenity to interiors, making it ideal for elegant flooring, wall cladding, and seamless countertop applications.",
      "Desert Oasis": "Desert Oasis offers a refined, earthy canvas with its muted beige base and delicate linear patterns. Its grounded elegance brings harmony and warmth to both modern and traditional spaces, making it ideal for cohesive floor-to-wall transitions and expansive surfaces.",
      "Omani Black": "Omani Black is a statement stone defined by its deep black base and occasional mineral flecks. Its bold, monolithic presence adds depth and drama, making it an excellent choice for luxury counters, accent walls, and contemporary floor designs."
    };

    // Marble details for each type
    const marbleDetails = {
      "Sahara Beige": {
        finish: "Polished, Honed, Brushed, Sandblasted, Bush Hammered",
        colors: "Beige, Gray",
        type: "Omani Heritage",
        applications: "Flooring & Staircases, Wall Cladding & Facades, Countertops & Vanities, Decorative & Architectural Elements, Commercial & Landscape Use"
      },
      "Ibri": {
        finish: "Polished, Honed, Brushed",
        colors: "Beige, Cream",
        type: "Omani Signature",
        applications: "Interior Walls, Flooring, Decorative Elements"
      },
      "Narcissus": {
        finish: "Polished, Honed",
        colors: "White, Gray",
        type: "Omani Premium",
        applications: "Luxury Interiors, Feature Walls, Statement Pieces"
      },
      "Elegant Gray": {
        finish: "Polished, Honed, Leathered",
        colors: "Gray, Silver",
        type: "Omani Signature",
        applications: "Modern Interiors, Countertops, Bathroom Surfaces"
      },
      "Imperial Beige": {
        finish: "Polished, Honed, Brushed",
        colors: "Beige, Light Brown",
        type: "Omani Classic",
        applications: "Commercial Spaces, Residential Flooring, Wall Cladding"
      },
      "White Pearl": {
        finish: "Polished, Honed",
        colors: "White, Off-white",
        type: "Omani Premium",
        applications: "Luxury Bathrooms, Kitchen Counters, Decorative Elements"
      },
      "Desert Rose": {
        finish: "Polished, Honed, Brushed",
        colors: "Beige, Pink",
        type: "Omani Signature",
        applications: "Accent Walls, Flooring, Decorative Applications"
      },
      "Nizwa Beige": {
        finish: "Polished, Honed, Brushed",
        colors: "Beige, Cream",
        type: "Omani Heritage",
        applications: "Flooring, Wall Cladding, Countertops"
      },
      "Desert Oasis": {
        finish: "Polished, Honed",
        colors: "Beige, Earth Tones",
        type: "Omani Signature",
        applications: "Floors, Walls, Transition Spaces"
      },
      "Omani Black": {
        finish: "Polished, Honed, Leathered",
        colors: "Black, Dark Gray",
        type: "Omani Premium",
        applications: "Luxury Countertops, Feature Walls, Statement Floors"
      }
    };

    console.log("Found cards:", cards.length);
    console.log("Popup element:", popup);

    // Add click event to cards
    cards.forEach(card => {
      card.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Card clicked");
        
        // Get marble details from the card
        const marbleTitle = card.querySelector('.marble-title').textContent;
        const marbleImage = card.querySelector('.marble-image').src;
        
        console.log("Marble details:", marbleTitle, marbleImage);
        
        // Populate the image
        if (popupImageCard1) {
          popupImageCard1.innerHTML = '';
          const img = document.createElement('img');
          img.src = marbleImage;
          img.alt = marbleTitle;
          img.className = "popup-full-image"; // Add a class for your CSS to target
          popupImageCard1.appendChild(img);
        }
        
        // Populate the marble name in the p tag
        if (fechedPartP) {
          fechedPartP.textContent = marbleTitle;
        } else {
          // If p tag isn't found directly, try to find the div first and then add p if needed
          const fechedPartDiv = document.querySelector('.fechedPart');
          if (fechedPartDiv) {
            let pElement = fechedPartDiv.querySelector('p');
            if (!pElement) {
              pElement = document.createElement('p');
              fechedPartDiv.appendChild(pElement);
            }
            pElement.textContent = marbleTitle;
          }
        }
        
        // Populate the description
        if (plainParaP) {
          plainParaP.textContent = marbleDescriptions[marbleTitle] || 
            "This exquisite marble showcases the natural beauty and superior quality that Omani marbles are renowned for worldwide.";
        } else {
          // If p tag isn't found directly, try to find the div first and then add p if needed
          const plainParaDiv = document.querySelector('.plainPara');
          if (plainParaDiv) {
            let pElement = plainParaDiv.querySelector('p');
            if (!pElement) {
              pElement = document.createElement('p');
              plainParaDiv.appendChild(pElement);
            }
            pElement.textContent = marbleDescriptions[marbleTitle] || 
              "This exquisite marble showcases the natural beauty and superior quality that Omani marbles are renowned for worldwide.";
          }
        }
        
        // Get the details for this marble
        const details = marbleDetails[marbleTitle] || {
          finish: "Polished, Honed",
          colors: "Various",
          type: "Omani Marble",
          applications: "Interior & Exterior Applications"
        };

        // Get all result paragraphs
        const resultParagraphs = document.querySelectorAll('.innerDesText1 .result p');

        // Check if we found the paragraphs and populate them
        if (resultParagraphs.length >= 4) {
          // Finish (first result paragraph)
          resultParagraphs[0].textContent = details.finish;
          
          // Colors (second result paragraph)
          resultParagraphs[1].textContent = details.colors;
          
          // Type (third result paragraph)
          resultParagraphs[2].textContent = details.type;
          
          // Applications (fourth result paragraph)
          resultParagraphs[3].textContent = details.applications;
        } else {
          console.error("Could not find all result paragraphs");
        }
        
        // Show popup
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Now call our mobile layout function
        if (window.innerWidth <= 768) {
          createMobilePropertyLayout();
        }
      });
    });

    // Close popup when clicking X button
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        console.log("Close button clicked");
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    }

    // Close popup when clicking outside
    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        console.log("Clicked outside popup");
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  function setupMobilePopup() {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
      const innerDescription = document.querySelector('.innerDescription');
      if (!innerDescription) return;
      
      // Clear any previous mobile formatting
      const existingPairs = innerDescription.querySelectorAll('.property-value-pair');
      existingPairs.forEach(pair => pair.remove());
      
      // Get all property labels
      const properties = Array.from(document.querySelectorAll('.innerDesText .margin p'));
      
      // Get all values
      const values = Array.from(document.querySelectorAll('.innerDesText1 .result p'));
      
      // Remove existing content
      innerDescription.innerHTML = '';
      
      // Create one-by-one list
      for (let i = 0; i < properties.length && i < values.length; i++) {
        // Create property element
        const propertyElement = document.createElement('div');
        propertyElement.className = 'mobile-property';
        propertyElement.style.fontWeight = '600';
        propertyElement.style.marginBottom = '8px';
        propertyElement.textContent = properties[i].textContent;
        innerDescription.appendChild(propertyElement);
        
        // Create value element
        const valueElement = document.createElement('div');
        valueElement.className = 'mobile-value';
        valueElement.style.marginBottom = '16px';
        valueElement.style.color = 'rgba(58, 58, 58, 0.8)';
        valueElement.textContent = values[i].textContent;
        innerDescription.appendChild(valueElement);
        
        // Add divider except after the last item
        if (i < properties.length - 1) {
          const divider = document.createElement('hr');
          divider.style.margin = '0 0 16px 0';
          divider.style.border = 'none';
          divider.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
          innerDescription.appendChild(divider);
        }
      }
    }
  }

  // New function to create mobile property layout
  function createMobilePropertyLayout() {
    console.log("Creating mobile property layout");
    
    // Get the innerDescription element
    const innerDescription = document.querySelector('.innerDescription');
    if (!innerDescription) {
      console.error("innerDescription not found");
      return;
    }
    
    // Get property labels and values
    const properties = document.querySelectorAll('.innerDesText .finish p');
    const values = document.querySelectorAll('.innerDesText1 .result p');
    
    if (properties.length !== values.length || properties.length === 0) {
      console.error("Property and value counts don't match or are empty");
      return;
    }
    
    // Create container for mobile property pairs
    const mobileContainer = document.createElement('div');
    mobileContainer.className = 'mobile-property-pairs';
    mobileContainer.style.width = '100%';
    mobileContainer.style.marginTop = '20px';
    
    // Create each property row with pairs side by side
    for (let i = 0; i < properties.length; i++) {
      const row = document.createElement('div');
      row.setAttribute('style', 'display: flex !important; justify-content: space-between !important; margin-bottom: 16px !important; padding-bottom: 8px !important; border-bottom: 1px solid rgba(0,0,0,0.1) !important;');
      
      const propName = document.createElement('div');
      propName.setAttribute('style', 'font-weight: bold !important;');
      propName.textContent = properties[i].textContent;
      
      const propValue = document.createElement('div');
      propValue.setAttribute('style', 'text-align: right !important;');
      propValue.textContent = values[i].textContent;
      
      row.appendChild(propName);
      row.appendChild(propValue);
      mobileContainer.appendChild(row);
    }
    
    // Add this to our CSS to hide the original content on mobile
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
      @media (max-width: 768px) {
        .innerDesText, .innerDesText1 {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(mobileStyle);
    
    // Remove any existing mobile container
    const existingContainer = document.querySelector('.mobile-property-pairs');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Add the new mobile layout
    innerDescription.appendChild(mobileContainer);
  }

  const checkForButton = setInterval(function () {
    if (document.getElementById('viewAllButton')) {
      clearInterval(checkForButton);
      setupViewAllButton();
    }
  }, 200);

  window.addEventListener('resize', updateCardContainerVisibility);

  // Handle resize for mobile property layout
  window.addEventListener('resize', function() {
    const popup = document.getElementById('marblePopup');
    if (popup && popup.classList.contains('active') && window.innerWidth <= 768) {
      createMobilePropertyLayout();
    }
  });
});
