document.addEventListener('DOMContentLoaded', function() {
    // Load components
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      });
      
    fetch('components/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      });

    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
        // Initialize up arrow after footer is loaded
        initializeUpArrow();
      });
      
    // Get the project ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Load project details based on ID
    loadProjectDetails(projectId || '1');
    
    // Initialize up arrow functionality
    initializeUpArrow();
});

function initializeUpArrow() {
    console.log('Initializing up arrow functionality');
    
    // Wait a bit to ensure elements are loaded
    setTimeout(() => {
        // Get up arrow elements
        const upArrows = document.querySelectorAll('.upArrow1, .upArrow2');
        
        upArrows.forEach(arrow => {
            if (arrow) {
                arrow.style.cursor = 'pointer';
                arrow.addEventListener('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log('Up arrow clicked - scrolling to project details');
                    
                    // Scroll to project details section
                    const projectDetailsSection = document.querySelector('.project-details-section') || 
                                                document.querySelector('.project-details') ||
                                                document.querySelector('#project-details-container');
                    
                    if (projectDetailsSection) {
                        projectDetailsSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // Fallback: scroll to top
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    }, 500);
}

// Also add click event listener for up arrows using event delegation
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    // Check if clicked element is the up arrow or inside it
    const upArrow = clickedElement.closest('.upArrow1, .upArrow2');
    if (upArrow) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Up arrow clicked via delegation - scrolling to project details');
        
        // Scroll to project details section
        const projectDetailsSection = document.querySelector('.project-details-section') || 
                                    document.querySelector('.project-details') ||
                                    document.querySelector('#project-details-container');
        
        if (projectDetailsSection) {
            projectDetailsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Fallback: scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        return;
    }
});

function loadProjectDetails(projectId) {
    // Project data with layout types
    const projectData = {
        '1': {
            layout: 'layout1',
            title: 'Nyumba ya familia',
            location: 'Tanzania',
            description: 'Elegant private residence featuring marble flooring and grand staircase.',
            mainImage: './assets/images/1.png',
            material: 'Sahara Beige',
            applicationArea: 'Interior walls, flooring, countertops, facade',
            finish: 'Polished, Honed',
            additionalImages: [
                './assets/images/Frame1.png',
                './assets/images/Frame2.png',
                './assets/images/Frame3.png',
                './assets/images/Frame4.png'
            ],
            completionYear: '2023',
            architectFirm: 'Modern Design Studio',
            projectSize: '850 sq meters',
            marbleVolume: '120 cubic meters',
            locationImg: './assets/images/Group.png',
            locationAddress: 'Tanzania'
        },
        '2': {
            layout: 'layout2',
            title: 'Qasr Al Hosn',
            location: 'Abu Dhabi',
            description: 'Within Qasr Al Hosn\'s timeless walls, touches of our Omani marble quietly echo heritage and refined beauty.',
            mainImage: './assets/images/building.jpg',
            material: 'Desert Rose',
            applicationArea: 'Wall Cladding and Flooring, Large Marble Blocks',
            finish: 'Honed, Polished',
            additionalImages: [
                './assets/images/Frame5.png',
                './assets/images/Frame6.png',
                './assets/images/Frame7.png',
                './assets/images/Frame8.png'
            ],
            completionYear: '2022',
            architectFirm: 'Heritage Restoration Architects',
            projectSize: '2,500 sq meters',
            marbleVolume: '350 cubic meters',
             locationImg: './assets/images/Group.png',
              locationAddress: 'Abu Dhabi'
        },
        '3': {
            layout: 'layout3',
            title: 'Founders Memorial',
            location: 'Abu Dhabi',
            description: 'A solemn tribute in stone, the Founders Memorial stands as a timeless symbol of legacy, leadership, and national pride.',
            mainImage: './assets/images/1 (2).png',
            material: 'Desert Rose',
            applicationArea: 'Interior walls, flooring, countertops, facade',
            finish: 'Polished, Honed',
            additionalImages: [
                './assets/images/Frame9.png',
                './assets/images/Frame10.png',
                './assets/images/Frame11.png',
                './assets/images/Frame12.png'
            ],
            completionYear: '2021',
            architectFirm: 'Public Space Design Associates',
            projectSize: '4,200 sq meters',
            marbleVolume: '580 cubic meters',
             locationImg: './assets/images/Group.png',
              locationAddress: 'Abu Dhabi'
        },
        '4': {
            layout: 'layout4',
            title: 'Saadiyat Island',
            location: 'Abu Dhabi',
            description: 'A solemn tribute in stone, the Founders Memorial stands as a timeless symbol of legacy, leadership, and national pride.',
            mainImage: './assets/images/sadiyat.jpg',
            material: 'Desert Rose',
            applicationArea: 'Interior walls, flooring, countertops, facade',
            finish: 'Polished, Honed',
            additionalImages: [
             
                './assets/images/Frame13.png',
                './assets/images/Frame14.png'
            ],
            completionYear: '2021',
            architectFirm: 'Public Space Design Associates',
            projectSize: '4,200 sq meters',
            marbleVolume: '580 cubic meters',
             locationImg: './assets/images/Group.png',
               locationAddress: 'Abu Dhabi'
        }
    };

    // Default to first project if ID not found
    const project = projectData[projectId] || projectData['1'];
    
    // Update URL without refreshing page
    history.pushState({projectId: projectId}, '', `project-details.html?id=${projectId}`);
    
    // Get the project-details container
    const contentContainer = document.getElementById('project-details-container');
    
    // Clear existing content
    contentContainer.innerHTML = '';
    
    // Add the appropriate layout HTML structure based on project layout type
    if (project.layout === 'layout1') {
        contentContainer.innerHTML = `
            <div class="project-details-section">
                <div class="project-details">
                    <div class="project-details1">
                        <p>${project.title}</p>
                    </div>
                    <div class="project-details2"> 
                        <div class="project-details2-card-location">
                         <div class="loc">
                                      <img src=${project.locationImg}>
                                    </div>

                                    <div class="loc2">
                                      <p>${project.locationAddress}</p>
                                    </div>
                        </div>
                    </div>

                    <div class="project-details3">
                        <p>${project.description}</p>
                    </div> 
                </div>
                
                <div class="project-image-details">
                    <img src="${project.mainImage}" 
                         alt="${project.title}"
                         loading="eager"
                         decoding="async"
                         fetchpriority="high"
                         style="image-rendering: auto; image-rendering: high-quality;">
                </div>

                <div class="project-content-details">
                    <div class="project-content-details1">
                        <div class="project-content-details2">
                            <div class="project-content-details2-card">
                                <p>Material used :</p>
                            </div>
                            <div class="project-content-details2-card1">
                                <p>${project.material}</p>
                            </div>
                        </div>
                        <div class="project-content-details3">
                            <div class="project-content-details3-card">
                                <p>Application area :</p>
                            </div>

                            <div class="project-content-details3-card1">
                                <p>${project.applicationArea}</p>
                            </div>
                        </div>

                        <div class="project-content-details4">
                            <div class="project-content-details4-card">
                                <p>Finish :</p>
                            </div>  

                            <div class="project-content-details4-card1">
                                <p>${project.finish}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project-moreImage">
                    <div class="project-moreImage-heading">
                        <p>More images</p>
                    </div>
                    <div class="project-moreImage-card">
                        ${project.additionalImages.map(img => `
                            <div class="project-moreImage-card1">
                                <img src="${img}" 
                                     alt="${project.title} detail"
                                     loading="lazy"
                                     style="opacity: 0; transition: opacity 0.3s ease;"
                                     onload="this.style.opacity = 1;"
                                     onerror="this.style.display = 'none';">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="latest-project-image">
                    <div class="latest-project-image1">
                        <p>More projects</p>
                    </div>

                    <div class="latest-project-image2">
                        <!-- More projects will be populated here -->
                    </div>
                </div>
            </div>
        `;
    } 
    else if (project.layout === 'layout2') {
        contentContainer.innerHTML = `
            <div class="project-details-section project-details-qasr-section">
                <div class="project-details-qasr">
                    <div class="project-details1">
                        <p>${project.title}</p>
                    </div>
                    <div class="project-details2"> 
                        <div class="project-details2-card-location">
                          <div class="loc">
                                      <img src=${project.locationImg}>
                                    </div>

                                    <div class="loc2">
                                      <p>${project.locationAddress}</p>
                                    </div>
                        </div>
                    </div>

                    <div class="project-details3-qasr">
                        <p>${project.description}</p>
                    </div> 
                </div>
                
                <div class="project-image-details">
                    <img src="${project.mainImage}" 
                         alt="${project.title}"
                         loading="eager"
                         decoding="async"
                         fetchpriority="high"
                         style="image-rendering: auto; image-rendering: high-quality;">
                </div>

                <div class="project-content-details">
                    <div class="project-content-details1-qasr">
                        <div class="project-content-details2">
                            <div class="project-content-details2-card">
                                <p>Material used :</p>
                            </div>
                            <div class="project-content-details2-card1">
                                <p>${project.material}</p>
                            </div>
                        </div>
                        <div class="project-content-details3-qasr">
                            <div class="project-content-details3-card">
                                <p>Application area :</p>
                            </div>

                            <div class="project-content-details3-card1">
                                <p>${project.applicationArea}</p>
                            </div>
                        </div>

                        <div class="project-content-details4">
                            <div class="project-content-details4-card">
                                <p>Finish :</p>
                            </div>  

                            <div class="project-content-details4-card1">
                                <p>${project.finish}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project-moreImage">
                    <div class="project-moreImage-heading">
                        <p>More images</p>
                    </div>
                    <div class="project-moreImage-card">
                        ${project.additionalImages.map(img => `
                            <div class="project-moreImage-card1">
                                <img src="${img}" 
                                     alt="${project.title} detail"
                                     loading="lazy"
                                     style="opacity: 0; transition: opacity 0.3s ease;"
                                     onload="this.style.opacity = 1;"
                                     onerror="this.style.display = 'none';">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="latest-project-image">
                    <div class="latest-project-image1">
                        <p>More projects</p>
                    </div>

                    <div class="latest-project-image2">
                        <!-- More projects will be populated here -->
                    </div>
                </div>
            </div>
        `;
    }
    else if (project.layout === 'layout3') {
        contentContainer.innerHTML = `
             <div class="project-details-section project-details-qasr-section">
                <div class="project-details-qasr">
                    <div class="project-details1">
                        <p>${project.title}</p>
                    </div>
                    <div class="project-details2"> 
                        <div class="project-details2-card-location">
                           <div class="loc">
                                      <img src=${project.locationImg}>
                                    </div>

                                    <div class="loc2">
                                      <p>${project.locationAddress}</p>
                                    </div>
                        </div>
                    </div>

                    <div class="project-details3-qasr">
                        <p>${project.description}</p>
                    </div> 
                </div>
                
                <div class="project-image-details">
                    <img src="${project.mainImage}" 
                         alt="${project.title}"
                         loading="eager"
                         decoding="async"
                         fetchpriority="high"
                         style="image-rendering: auto; image-rendering: high-quality;">
                </div>

                <div class="project-content-details">
                    <div class="project-content-details1-qasr">
                        <div class="project-content-details2">
                            <div class="project-content-details2-card">
                                <p>Material used :</p>
                            </div>
                            <div class="project-content-details2-card1">
                                <p>${project.material}</p>
                            </div>
                        </div>
                        <div class="project-content-details3-qasr">
                            <div class="project-content-details3-card">
                                <p>Application area :</p>
                            </div>

                            <div class="project-content-details3-card1">
                                <p>${project.applicationArea}</p>
                            </div>
                        </div>

                        <div class="project-content-details4">
                            <div class="project-content-details4-card">
                                <p>Finish :</p>
                            </div>  

                            <div class="project-content-details4-card1">
                                <p>${project.finish}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project-moreImage">
                    <div class="project-moreImage-heading">
                        <p>More images</p>
                    </div>
                    <div class="project-moreImage-card">
                        ${project.additionalImages.map(img => `
                            <div class="project-moreImage-card1">
                                <img src="${img}" 
                                     alt="${project.title} detail"
                                     loading="lazy"
                                     style="opacity: 0; transition: opacity 0.3s ease;"
                                     onload="this.style.opacity = 1;"
                                     onerror="this.style.display = 'none';">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="latest-project-image">
                    <div class="latest-project-image1">
                        <p>More projects</p>
                    </div>

                    <div class="latest-project-image2">
                        <!-- More projects will be populated here -->
                    </div>
                </div>
            </div>
        `;
    }

    else if (project.layout === 'layout4') {
        contentContainer.innerHTML = `
             <div class="project-details-section project-details-qasr-section">
                <div class="project-details-qasr">
                    <div class="project-details1">
                        <p>${project.title}</p>
                    </div>
                    <div class="project-details2"> 
                        <div class="project-details2-card-location">
                          <div class="loc">
                                      <img src=${project.locationImg}>
                                    </div>

                                    <div class="loc2">
                                      <p>${project.locationAddress}</p>
                                    </div>
                        </div>
                    </div>

                    <div class="project-details3-qasr">
                        <p>${project.description}</p>
                    </div> 
                </div>
                
                <div class="project-image-details">
                    <img src="${project.mainImage}" 
                         alt="${project.title}"
                         loading="eager"
                         decoding="async"
                         fetchpriority="high"
                         style="image-rendering: auto; image-rendering: high-quality;">
                </div>

                <div class="project-content-details">
                    <div class="project-content-details1-qasr">
                        <div class="project-content-details2">
                            <div class="project-content-details2-card">
                                <p>Material used :</p>
                            </div>
                            <div class="project-content-details2-card1">
                                <p>${project.material}</p>
                            </div>
                        </div>
                        <div class="project-content-details3-qasr">
                            <div class="project-content-details3-card">
                                <p>Application area :</p>
                            </div>

                            <div class="project-content-details3-card1">
                                <p>${project.applicationArea}</p>
                            </div>
                        </div>

                        <div class="project-content-details4">
                            <div class="project-content-details4-card">
                                <p>Finish :</p>
                            </div>  

                            <div class="project-content-details4-card1">
                                <p>${project.finish}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project-moreImage">
                    <div class="project-moreImage-heading">
                        <p>More images</p>
                    </div>
                    <div class="project-moreImage-card">
                        ${project.additionalImages.map(img => `
                            <div class="project-moreImage-card1">
                                <img src="${img}" 
                                     alt="${project.title} detail"
                                     loading="lazy"
                                     style="opacity: 0; transition: opacity 0.3s ease;"
                                     onload="this.style.opacity = 1;"
                                     onerror="this.style.display = 'none';">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="latest-project-image">
                    <div class="latest-project-image1">
                        <p>More projects</p>
                    </div>

                    <div class="latest-project-image2">
                        <!-- More projects will be populated here -->
                    </div>
                </div>
            </div>
        `;
    }
    
    // Update the "More projects" section
    updateMoreProjects(projectId, projectData);

    // Just add the up arrow initialization at the end
    setTimeout(() => {
        initializeUpArrow();
    }, 100);
}

function updateMoreProjects(currentProjectId, projectData) {
    // Find all "More projects" sections
    const moreProjectsContainers = document.querySelectorAll('.latest-project-image2');
    if (moreProjectsContainers.length === 0) return;
    
    // Get IDs of projects other than current
    const otherProjectIds = Object.keys(projectData).filter(id => id !== currentProjectId);
    
    // Add projects to each container
    moreProjectsContainers.forEach(container => {
        // Clear existing content
        container.innerHTML = '';
        
        // Create and add up to 3 project cards
        for (let i = 0; i < Math.min(3, otherProjectIds.length); i++) {
            const projectId = otherProjectIds[i];
            const project = projectData[projectId];
            
            container.innerHTML += `
                <div class="latest-project-image2-card">
                    <div class="latest-project-image2-card1">
                        <a href="project-details.html?id=${projectId}">
                            <img src="${project.mainImage}" alt="${project.title}">
                        </a>
                    </div>
                    <div class="latest-project-image2-card2">
                        <div class="latest-project-inner-card">
                            <div class="latest-project-inner-content">
                                <h4>${project.title}</h4>
                            </div>   
                            
                            <div class="latest-project-inner-content1">
                                <p>Omani Pearl, Polished</p>
                            </div>
                        </div>
                        <div class="latest-project-inner-card1">
                            <div class="latest-project-location">
                                    <div class="loc">
                                      <img src=${project.locationImg}>
                                    </div>
                                    <div class="loc1">
                                      <p>${project.locationAddress}</p>
                                    </div>
                            </div>
                            <div class="latest-project-location1">
                                <p>Completed: 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            `;
        }
    });
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.projectId) {
        loadProjectDetails(event.state.projectId);
    } else {
        loadProjectDetails('1'); // Default to first project
    }
});