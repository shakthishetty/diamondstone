document.addEventListener('DOMContentLoaded', function() {
    // Load components
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      });
      
   

    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
      
    // Get the blog ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    
    // Load blog content based on ID
    loadBlogContent(blogId || '1');
});

function loadBlogContent(blogId) {
    // Blog content database
    const blogData = {
        '1': {
            layout: 'layout1',
            headerText1: "How to Choose the Right Marble for Your Project",
            image: "./assets/images/image (11).png",
            headerText3: 'Where Craftsmanship Meets Natural Nobility',
            headerText4: 'The Grace of Origin',
            headerText5: 'The Language of Texture',
            headerText6: 'A Palette Measured in Light',
            headerText7: 'Integrity Beneath the Surface',
            headerText8: 'Letting the Stone Find You',
            headerText9: 'The Quiet Confidence of Omani Marble',

            content: 'Marble is never just a material. Its a philosophy, a gesture, a presence. It has graced temples, villas, sanctuaries, and salons — standing not only as a marker of elegance but as a symbol of permanence. To choose marble is not merely a design decision. Its an act of intent. For those who build with vision and soul, selecting the right stone becomes a journey — one that leads through landscapes shaped by silence, time, and ancient geology.',
            content1: `Every marble carries the character of its birthplace. The sharp veining of Italian stone, the crystalline clarity of Grecian white — each tells a different story. But today, more and more designers are discovering a quieter nobility in the desert-born stones of Oman.
                       These marbles are the product of solitude and pressure, formed deep within mountains carved by wind and sun. The colors are subtle — sand, blush, golden beige — elegant without extravagance. Their density speaks of strength; their beauty, of restraint. This is not marble that tries to impress. It simply is.`,
             content2: `Luxury is not just seen. It is felt. The finish of marble transforms how a space lives and breathes. A polished lobby glows with light and clarity; a honed surface invites stillness and touch. Some stones resist refinement. Others, like those quarried in Oman, accept it effortlessly — their tight grain allowing for a silky smoothness or a natural matte softness that holds the eye and calms the hand. Whether underfoot in a grand hallway or wrapping the curves of a sculptural bath, the finish becomes a form of expression — sensual, enduring, unforgettable.`  , 
             content3: `In the most refined spaces, color whispers. Creams warmed by sunlight, taupes kissed with coral, rose-tinted neutrals that shift subtly throughout the day — this is the new language of understated opulence. Omani marble offers this palette in perfect harmony. It doesn’t dominate; it completes. It brings a quiet energy to wellness spaces, contemporary retreats, and homes that are curated rather than simply furnished. It does not follow design — it enhances it.`     ,
             content4: `Today, luxury is inseparable from intention. The modern connoisseur seeks more than surface beauty — they seek ethics, origin, and thoughtful creation. Oman’s marble industry has risen to meet this expectation, merging generational craftsmanship with sustainable extraction and cutting-edge technology. This marriage of ancient stone and conscious process means that each slab tells two stories: one of the earth, and one of the future. To choose such material is to reflect values — authenticity.`  ,
             content5: `Marble is rarely chosen in haste. The right one finds you. You feel it before you explain it — a silent alignment between stone and space.
Whether your heart leans toward the dramatic flair of Europe or the emerging sophistication of Oman, the ideal marble is not only about style or trend. It is about emotion. Atmosphere. Memory. You don’t just match it to your project. You let it raise the project to its full potential.`,
              content6: `In the world of elevated design, the loudest statement is often the softest one. With its mineral elegance, structural purity, and desert-born dignity, Omani marble is becoming the preferred choice for those who understand that luxury does not shout. It resonates. Not everyone will recognize it. But the ones who do — matter.`
        },
        '2': {
            layout: 'layout2',
            headerText1: "What Marble Architecture Says About You",
            headerText2: 'Some statements don’t need to be spoken. They are built.',
            headerText3: 'A Presence That Commands Without Words',
            headerText4: 'Interiors That Reside in Stillness',
            headerText5: 'The Language of Legacy',
            headerText6: 'The Material of the Few',
            headerText7: 'What Your Home Says',
            image: "./assets/images/image (12).png",
            content: `In the world of luxury, every detail carries meaning. The materials you choose, the spaces you create, and the textures you live among - they don’t just reflect your taste. They express your values, your identity, your permanence.

                      And perhaps no material captures that essence more effortlessly than marble. It doesn’t seek attention. It doesn’t ask to be admired. It simply exists — noble, enduring, and undeniable.

                      Across centuries, cultures, and continents, marble has been the medium of power, legacy, and elevated living. From ancient empires to modern estates, it has always marked a distinction between what is passing and what is permanent.`,
           content1: `The exterior of a marble residence does more than impress — it sets a tone. The quiet gravitas of stone makes a clear and immediate statement: that what stands here was not built for the moment, but for memory.

It holds light differently. It casts longer shadows. And whether honed, brushed, or raw, it carries with it a strength that requires no explanation. In a world obsessed with trends and timelines, marble suggests something rarer — that the owner has no interest in rushing time.`,
           content2: `To walk into a marble-clad interior is to feel the world slow down.
There’s a composure in the material — a tactile calm. Its surfaces don’t sparkle, they glow. Its veins don’t decorate, they guide. It wraps a space in elegance, not excess, and invites everything within it to rise to the same standard — art, furniture, conversation, and thought. This isn’t surface-level luxury. It’s foundational. Marble doesn’t perform. It grounds.`,

           content3: `Marble is not simply beautiful — it is storied. Every slab is a geological memoir, shaped by pressure and time, revealing the history of the earth beneath our feet. To live among it is to acknowledge something greater — that your home is not just about ownership, but origin. There is poetry in that kind of permanence. And in places like Oman, where ancient stone meets modern craftsmanship, marble carries not just quality but character. Soft beiges, mineral blushes, warm sands — the tones speak not of opulence, but of refinement. This is marble for those who understand that silence often speaks loudest.`,
           content4: `True distinction is never loud. It doesn’t demand. It simply is. When marble is chosen, it’s not to impress — it’s to express. It reveals a mindset that values design over display, restraint over indulgence, and the legacy of craftsmanship over the speed of consumption. Not everyone chooses marble. And marble does not belong to everyone. It is the material of those who understand what is rare, and what is real.`,
           content5: `When the walls breathe stone, when the staircase is sculpted in light and grain, when the entry echoes with the depth of natural permanence — it changes everything. Not just how people see your space, but how they feel in it. A marble residence tells the world that you didn’t build for now. You built for always. Because the truest form of luxury is not to be seen — it’s to be remembered.`
        },
        '3': {
            layout: 'layout3',
            headerText: "Omani Marble: The Ultimate Luxury for Exclusive Spaces",
            headerText1: "Omani Marble: The Ultimate Luxury for Exclusive Spaces",
            headerText2: 'The Essence of Timeless Elegance',
            headerText3: 'Tradition and Innovation Harmonized',
            headerText4: 'A Statement of Exclusivity',
            headerText5: 'Luxury Meets Sustainability',
            headerText6: 'Discover the Rare Luxury',
            image: "./assets/images/image (13).png",
            content: `Nestled within the timeless beauty of the Arabian Peninsula, Oman harbors one of the world's most exquisite natural treasures—Omani marble. While marble from Italy and Greece often captures headlines, true connoisseurs of luxury recognize Omani marble as the rarest gem, hidden from the mainstream yet celebrated by those who appreciate exclusivity and superior elegance.`,
            content1: `Each slab of Omani marble narrates a story millions of years in the making. Its distinctive patterns, intricate veining, and mesmerizing blend of hues—from pristine whites to warm creams and sophisticated earth tones—ensure that each piece is an unmatched, exclusive work of art. Omani marble offers a uniqueness that resonates deeply with those who demand authenticity and unparalleled beauty in their surroundings.`,
            content2: `Renowned not only for its captivating aesthetics, Omani marble is exceptionally durable, preserving its flawless elegance across generations. It stands resilient against time, weather, and heavy usage, making it a prized choice for luxury residences, opulent hotels, corporate headquarters, and other prestigious developments. This resilience enhances its appeal, combining longevity with unmatched sophistication.`,
            content3: `Omani marble embodies a perfect harmony of historical craftsmanship and contemporary innovation. Expert artisans employ age-old quarrying techniques paired with advanced precision technology, resulting in marble that exudes both heritage charm and modern refinement. This harmonious blend makes Omani marble the choice of discerning architects and interior designers aiming to create iconic spaces.`,
            content4: `Choosing Omani marble is not merely selecting a material—it is an unequivocal statement of superior taste and refined sensibility. It conveys a powerful message of exclusivity, wealth, and distinction, instantly elevating spaces to unparalleled levels of sophistication. For those seeking to define their environments with true opulence, Omani marble is the ultimate choice.`,
            content5: `For today's elite, true luxury also respects the environment. Responsibly sourced and sustainably processed, Omani marble aligns perfectly with the values of ecological responsibility, making it the ideal selection for socially conscious yet discerning clientele.`,
            content6: `Omani marble remains a well-kept secret among the elite. For the affluent few who discover and embrace it, this stone becomes not only a material but a signature—transforming ordinary spaces into extraordinary experiences, radiating elegance and exclusivity. Discover the unmatched luxury of Omani marble. Elevate your next project into an iconic masterpiece, a timeless testament to impeccable taste and grandeur.`
        },
    };

    // Default to first blog if ID not found
    const blog = blogData[blogId] || blogData['1'];
    
    // Update URL without refreshing page
    history.pushState({blogId: blogId}, '', `blog-post.html?id=${blogId}`);
    
    // Apply the correct layout based on blog type
    const contentContainer = document.getElementById('blog-content-container');
    
    // Clear existing content
    contentContainer.innerHTML = '';
    
    // Add the appropriate layout HTML structure based on blog layout type
    if (blog.layout === 'layout1') {
        contentContainer.innerHTML = `
             <div class="blog-post-containers">
              <div class="blog-post-header">
                     <p>${blog.headerText1}</p>
              </div>

              <div class="blog-post-image">

              </div>

              <div class="blog-post-paras">
                  <div class="blog-post-para1">
                      <div class="blog-post-para1-content">
                             <p>${blog.headerText3}</p>
                      </div>

                      <div class="blog-post-para1-content2">
                          
                           <p>${blog.content}</p>
                      </div>
                  </div>

                  <div class="blog-post-para2">
                    <div class="blog-post-para1-content">
                             <p>${blog.headerText4}</p>
                    </div>

                    <div class="blog-post-para2-content2">
                             <p>${blog.content1}</p>
                    </div>
                  </div>

                  <div class="blog-post-para2">
                    <div class="blog-post-para1-content">
                                 <p>${blog.headerText5}</p>
                    </div>

                    <div class="blog-post-para2-content2">
                           <p>${blog.content2}</p>
                    </div>
                  </div>

                  <div class="blog-post-para1">
                    <div class="blog-post-para1-content">
                             <p>${blog.headerText6}</p>
                    </div>

                    <div class="blog-post-para1-content2">
                                     <p>${blog.content3}</p>
                    </div>
                  </div>

                  <div class="blog-post-para1">
                    <div class="blog-post-para1-content">
                                    <p>${blog.headerText7}</p>
                    </div>

                    <div class="blog-post-para1-content2">
                                 <p>${blog.content4}</p>
                    </div>
                  </div>

                  <div class="blog-post-para1">
                    <div class="blog-post-para1-content">
                           <p>${blog.headerText8}</p>
                    </div>

                    <div class="blog-post-para1-content2">
                                     <p>${blog.content5}</p>
                    </div>
                  </div>

                  <div class="blog-post-para3">
                    <div class="blog-post-para1-content">
                                 <p>${blog.headerText9}</p>
                    </div>

                    <div class="blog-post-para3-content2">
                                   <p>${blog.content6}</p>
                    </div>

                    


                  </div>

                  <div class="social-media-container">
                        <div class="social-media-para">
                            <p>Share</p>
                        </div>
                        <div class="social-media-icon">
                             <div class="whatsapp-icon">
                             </div>
                              <div class="linkedin-icon">
                             </div>
                              <div class="twitter-icon">
                             </div>
                              <div class="copy-icon">
                             </div>
                        </div>
                  </div>
              </div>
      </div>
        `;
    } 
    else if (blog.layout === 'layout2') {
        contentContainer.innerHTML = `
            <div class="blog-post-containers">
              <div class="blog-post-header">
                           <p>${blog.headerText1}</p>
              </div>

              <div class="blog-post-image">

              </div>

              <div class="blog-post-paras">
                  
                     <div class="blog-post-marble-paras1">
                         <div class="blog-post-para1-content">
                                      <p>${blog.headerText1}</p>
                         </div>

                         <div class="blog-post-marble-paras1-content1">
                                           <p>${blog.content}</p>
                         </div>
                     </div>

                       
                     <div class="blog-post-marble-paras2">
                      <div class="blog-post-para1-content">
                                          <p>${blog.headerText3}</p>
                      </div>

                      <div class="blog-post-marble-paras1-content2">
                                         <p>${blog.content1}</p>
                      </div>
                     </div>

                     <div class="blog-post-para1">
                      <div class="blog-post-para1-content">
                                       <p>${blog.headerText4}</p>
                      </div>

                      <div class="blog-post-para1-content2">
                                               <p>${blog.content2}</p>
                      </div>
                     </div>

                     <div class="blog-post-para2">
                      <div class="blog-post-para1-content">
                                           <p>${blog.headerText5}</p>
                      </div>

                      <div class="blog-post-marble-paras1-content2">
                                                 <p>${blog.content3}</p>
                      </div>
                     </div>


                     <div class="blog-post-para1">
                      <div class="blog-post-para1-content">
                                     <p>${blog.headerText6}</p>
                      </div>

                      <div class="blog-post-para1-content2">
                                           <p>${blog.content4}</p>
                      </div>
                     </div>
                     

                     <div class="blog-post-para3">
                      <div class="blog-post-para1-content">
                                       <p>${blog.headerText6}</p>
                      </div>
                      <div class="blog-post-para3-content2">
                                       <p>${blog.content5}</p>
                      </div>
                     </div>
                    
                     <div class="social-media-container">
                           <div class="social-media-para">
                            <p>Share</p>
                        </div>
                        <div class="social-media-icon">
                             <div class="whatsapp-icon">
                             </div>
                              <div class="linkedin-icon">
                             </div>
                              <div class="twitter-icon">
                             </div>
                              <div class="copy-icon">
                             </div>
                        </div>
                     </div>

                  </div>

                 
              </div>
        `;
    }
    else if (blog.layout === 'layout3') {
        contentContainer.innerHTML = `
             <div class="blog-post-containerss">
              <div class="blog-post-header1">
                        <p>${blog.headerText}</p>
              </div>

              <div class="blog-post-image">
                       
              </div>

              <div class="blog-post-parass">
                   <div class="blog-post-para3-content2">
                            <p>${blog.content}</p>
                   </div> 

                   <div class="blog-post-marble2">
                             <div class="blog-post-para1-content">
                                          <p>${blog.headerText1}</p>
                             </div>

                             <div class="blog-post-para1-content2">
                                       <p>${blog.content1}</p>
                             </div>
                   </div>

                   
                   <div class="blog-post-marble2">
                                 <div class="blog-post-para1-content">
                                  <p>${blog.headerText2}</p>

                             </div>

                             <div class="blog-post-para1-content2"> <p>${blog.content2}</p></div>
                   </div>

                   
                   <div class="blog-post-marble2">
                                 <div class="blog-post-para1-content">
                                      <p>${blog.headerText3}</p>
                             </div>

                             <div class="blog-post-para1-content2">
                                            <p>${blog.content3}</p>
                             </div>
                   </div>

                   <div class="blog-post-para3">
                   
                                 <div class="blog-post-para1-content">
                                    <p>${blog.headerText4}</p>
                             </div>

                             <div class="blog-post-para3-content2">
                                     <p>${blog.content4}</p>
                             </div>
                   
                   </div>

                   <div class="blog-post-para4">
                                      <div class="blog-post-para1-content">
                                       <p>${blog.headerText5}</p>
                             </div>

                             <div class="blog-post-para1-content4">
                              <p>${blog.content5}</p>
                             </div>
                   </div>

                      
                   <div class="blog-post-marble2">
                           <div class="blog-post-para1-content">
                                    <p>${blog.headerText6}</p>
                             </div>

                             <div class="blog-post-para1-content2">
                                        <p>${blog.content6}</p>
                             </div>
                   </div>

                   <div class="social-media-container">
                               <div class="social-media-para">
                            <p>Share</p>
                        </div>
                        <div class="social-media-icon">
                             <div class="whatsapp-icon">
                             </div>
                              <div class="linkedin-icon">
                             </div>
                              <div class="twitter-icon">
                             </div>
                              <div class="copy-icon">
                             </div>
                        </div>
                   </div>
                     
      </div>
       
       

      
       </div>
        `;
    }

    // Add the blog image
    const blogImage = document.createElement('img');
    blogImage.src = blog.image;
    blogImage.alt = blog.headerText1;
    blogImage.style.width = "100%";
    blogImage.style.height = "100%";
    blogImage.style.objectFit = "cover";
    
    const imageContainer = contentContainer.querySelector('.blog-post-image');
    if (imageContainer) {
        imageContainer.appendChild(blogImage);
    }
    
    // Handle latest blogs section if needed
    if (document.querySelector('.blog-latest')) {
        updateLatestBlogs(blogData, blogId);
    }
}

function updateLatestBlogs(blogData, currentBlogId) {
    const latestBlogsContainer = document.querySelector('.blog-latest-content-image');
    if (!latestBlogsContainer) return;
    
    // Store the original HTML structure before clearing
    const originalCardHTML = document.querySelector('.blog-card-latest');
    if (!originalCardHTML) return;
    
    // Clear existing content
    latestBlogsContainer.innerHTML = ''; 
    
    // Get IDs of blogs other than current
    const otherBlogIds = Object.keys(blogData).filter(id => id !== currentBlogId);
    
    // Create and add up to 3 blog cards
    for (let i = 0; i < 3 && i < otherBlogIds.length; i++) {
        const blogId = otherBlogIds[i];
        const blog = blogData[blogId];
        
        // Clone the original HTML structure
        const blogCard = originalCardHTML.cloneNode(true);
        
        // Update only the parts that need to change
        blogCard.querySelector('.blog-card-image-latest a').setAttribute('data-blog-id', blogId);
        blogCard.querySelector('.blog-card-image-latest img').src = blog.image;
        blogCard.querySelector('.blog-card-image-latest img').alt = blog.headerText1;
        blogCard.querySelector('.blog-card-content-latest2 p').textContent = blog.headerText1;
        
        // Add to container
        latestBlogsContainer.appendChild(blogCard);
    }
    
    // Add click handlers to the blog links
    document.querySelectorAll('.blog-card-image-latest a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const blogId = this.getAttribute('data-blog-id');
            loadBlogContent(blogId);
            window.scrollTo(0, 0); // Scroll to top
        });
    });
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.blogId) {
        loadBlogContent(event.state.blogId);
    } else {
        loadBlogContent('1'); // Default to first blog
    }
});