document.addEventListener('DOMContentLoaded', function() {
    // Load components
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });

    // Get the project ID from URL parameter
    // const urlParams = new URLSearchParams(window.location.search);
    // const projectId = urlParams.get('id');
    // Load project details based on ID
    // loadProjectDetails(projectId || '1');

    // Initialize up arrow functionality
    // initializeUpArrow();
  });
  
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('explore')) {
      const cardContainer1 = e.target.closest('.card-container1');
      // Get the collection name from .inner-card-container1 p in the same cardContainer1
      const marbleName = cardContainer1
        ? cardContainer1.querySelector('.inner-card-container1 p')?.textContent.trim()
        : '';
      const description = cardContainer1
        ? cardContainer1.querySelector('.inner-card-container2 p')?.textContent.trim()
        : '';
      const url = `collection-details.html?name=${encodeURIComponent(marbleName)}&desc=${encodeURIComponent(description)}`;
      window.location.href = url;
    }
  });
  
  // Display marble name and description on collection-details.html
  if (window.location.pathname.endsWith('collection-details.html')) {
    document.addEventListener('DOMContentLoaded', function() {
      const params = new URLSearchParams(window.location.search);
      const name = params.get('name') || '';
      const desc = params.get('desc') || '';
      const titleElem = document.getElementById('marble-title');
      const descElem = document.getElementById('marble-desc');
      if (titleElem) titleElem.textContent = name;
      if (descElem) descElem.textContent = desc;
    });
  }
  
  const collectionsData = {
    Sidrah: [
      {
        name: "Imperial Beige",
        img: "./assets/images/imperial beige (2).png",
        desc: "Imperial Beige is known for its tranquil palette and adaptable style. With minimal veining and a creamy texture, it creates cohesive spatial experiences in both residential and commercial interiors.",
        finishes: [
          { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "Teak", img: "./assets/images/teak.png" },
          { name: "Oak", img: "./assets/images/oak.png" },
          { name: "Dark Walnut", img: "../assets/images/Dard Walnut.png" },
          { name: "Brass", img: "./assets/images/Brass.png" },
          { name: "Bronze", img: "./assets/images/Branze.png" },
          { name: "Matte Black", img: "./assets/images/matte black.png" },
          { name: "Gold", img: "./assets/images/Gold.png" }
        ]
      },
      {
        name: "Narcissus",
        img: "./assets/images/Narcissus (2).png",
        desc: "Narcissus captures attention with its striking white base streaked by expressive charcoal veins. Its dramatic contrast evokes a sculptural, gallery-like atmosphere — ideal for bold, modern interiors that demand both clarity and confidence. Whether used as a statement island or an immersive wall, it leaves a lasting impression.",
        finishes: [
          { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" }
        ],
        pairings: [
         { name: "Ashwood ", img: "./assets/images/ashwood.png" },
          { name: "Ebony,", img: "./assets/images/Ebony.png" },
          { name: "Grey -washed Oak", img: "./assets/images/Grey.png" },
          { name: "Brushed Nicklel", img: "./assets/images/Brusheds.png" },
        
        ]
      },
      {
        name: "Sahara Beige",
        img: "./assets/images/sahari baige.png",
        desc: "Sahara Beige radiates warmth and balance through its soft, sandy tones and subtle movement. Its understated elegance brings a natural calm to interiors, making it a versatile choice for both expansive surfaces and quiet focal points. Ideal for serene, timeless spaces that invite comfort.",
        finishes: [
          { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
         { name: "Walnut", img: "./assets/images/Walnut.png" },
          { name: "natural oak", img: "./assets/images/natural.png" },
          { name: "brushed brass", img: "./assets/images/brushed brass.png" },
          { name: "antique bronze", img: "./assets/images/antique.png" },
        ]
      },
      
    ],
    Nusoor: [
      {
        name: "Desert Rose",
        img: "./assets/images/Desert Rose.png",
        desc: `Desert Rose exudes a soft romantic charm with its warm beige tones kissed by gentle pink
undertones. Its quiet elegance and smooth texture make it a graceful addition to spaces that embrace
warmth, subtle luxury, and organic calm. Perfect for tranquil retreats and sophisticated living areas.`,
        finishes: [
          { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" }
        ],
        pairings: [
          { name: "Mapple", img: "./assets/images/Mapple.png" },
          { name: "Oak", img: "" },
          { name: "Satin Copper", img: "../assets/images/Satin Copper.png" },
          { name: "Brushed Rose Gold", img: "../assets/images/Brushed Rose Gold.png" },
        
        ]
      },
      {
        name: "Desert Oasis",
        img: "./assets/images/Desert-Osis.png",
        desc: `Desert Oasis offers a refined, earthy canvas with its muted beige base and delicate linear patterns.
Its grounded elegance brings harmony and warmth to both modern and traditional spaces, making it
ideal for cohesive floor-to-wall transitions and expansive surfaces.`,
        finishes: [
          { name: "Honed", img: "../assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "White Oak", img: "./assets/images/White oik.png" },
          { name: "Smoked Ash", img: "./assets/images/Smoked ash.png" },
          { name: "Antique Brass", img: "./assets/images/Antique Brass.png" },
          { name: "Matte Black", img: "./assets/images/matte black.png" },
        ]
      },
      {
        name: "Elegant Gray",
        img: "./assets/images/Elegand-gray.png",
        desc: `Elegant Grey strikes a perfect balance between subtle sophistication and modern edge. With its cool
grey tones and fine veining, it lends a sleek, contemporary charm to spaces, making it an ideal choice
for minimalist interiors and refined architectural backdrops.`,
        finishes: [
           { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
         { name: "White Oak", img: "./assets/images/White oik.png" },
          { name: "Blackened Steel", img: "./assets/images/Blackened Steel.png" },
          { name: "Brushed Silver", img: "./assets/images/Brushed Silver.png" },
          { name: "Warm Taupe", img: "./assets/images/Warm Taupe.png" },
        ]
      }
    ],
    Rimal: [
      {
        name: "Nizwa Beige",
        img: "./assets/images/nizwa.png",
        desc: "Nizwa Beige embodies quiet sophistication with its warm beige undertones and soft, natural grain. Its timeless appeal adds depth and serenity to interiors, making it ideal for elegant flooring, wall cladding, and seamless countertop applications.",
        finishes: [
           { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
         { name: "Mapple", img: "./assets/images/Mapple.png" },
          { name: "Champagne Gold", img: "./assets/images/Champagne Gold.png" },
          { name: "Ivory Linen", img: "./assets/images/Ivary Linen.png" },
           { name: "Brushed Bronze", img: "./assets/images/Brushed Bronze.png" },
        ]
      },
      {
        name: "White Pearl",
        img: "./assets/images/WhitePearl.png",
        desc: "White Pearl radiates purity and elegance with its soft white base and delicate pearl-like sheen. Its refined simplicity enhances light and space, making it a go-to choice for luxurious bathrooms, serene living spaces, and minimalist environments.",
        finishes: [
       { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "Ash Wood", img: "./assets/images/ashwood.png" },
            { name: "Brushed Nickel", img: "./assets/images/Brushed Nickel.png" },
            { name: "Pale Beige", img: "./assets/images/Pole Beige.png" },
            { name: "Frosted Glass", img: "./assets/images/Frosted Grass.png" }
        ]
      },
      {
        name: "Ibri",
        img: "./assets/images/ibris.png",
        desc: "Ibri showcases a warm, creamy beige base with subtle movement and fine mineral textures. Its natural charm and understated elegance make it perfect for classic flooring, accent walls, and cozy yet sophisticated interior palettes.",
        finishes: [
        { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "Walnut Wood", img: "./assets/images/Walnut Wood.png" },
            { name: "Soft Gold", img: "./assets/images/Soft Gold.png" },
              { name: "Linen White", img: "./assets/images/Linen White.png" },
                { name: "Matte Charcoal", img: "./assets/images/Matte Charcoal.png" }
        ]
      }
    ],
    Layali: [
      {
        name: "Dyno",
        img: "./assets/images/Dyno (2).png",
        desc: "Dyno captivates with its bold grey base and striking white veining, creating a dramatic yet balanced aesthetic. Its high-contrast elegance makes it ideal for feature walls, kitchen islands, and modern, high-impact interior designs.",
        finishes: [
         { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "Black Oak", img: "./assets/images/Black ook.png" },
           { name: "Brushed Steel", img: "./assets/images/Brushed steel.png" },
            { name: "Graphite Grey", img: "./assets/images/Graphite Grey.png" },
             { name: "Matte Brass", img: "./assets/images/Matte Brass.png" }
        ]
      },
      {
        name: "Omani Black",
        img: "./assets/images/OmaniBlack.png",
        desc: "Omani Black is a statement stone defined by its deep black base and occasional mineral flecks. Its bold, monolithic presence adds depth and drama, making it an excellent choice for luxury counters, accent walls, and contemporary floor designs.",
        finishes: [
         { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "Walnut Veneer", img: "./assets/images/Walnut Veneer.png" },
           { name: "Antique Brass", img: "./assets/images/Antique Brass.png" },
            { name: "Crisp White", img: "./assets/images/Crisp White.png" },
              { name: "Smoked Glass", img: "./assets/images/Smoked Glass.png" },
        ]
      },
      {
        name: "Desert Lace",
        img: "./assets/images/Desert Lace (2).png",
        desc: "Desert Lace is a refined beige marble adorned with delicate, lace-like veining that evokes the timeless beauty of desert landscapes. Its subtle elegance and warm tones make it ideal for luxurious interiors, from serene bathrooms to sophisticated living spaces.",
        finishes: [
          { name: "Honed", img: "./assets/images/honed (1).png" },
          { name: "Polished", img: "./assets/images/honed (2).png" },
          { name: "Sandblasted", img: "./assets/images/honed (3).png" }
        ],
        pairings: [
          { name: "White Oak", img: "./assets/images/White oik.png" },
          { name: "Smoked Ash", img: "./assets/images/Smoked ash.png" },
          { name: "Antique Brass", img: "./assets/images/Antique Brass.png" },
          { name: "Matte Black", img: "./assets/images/matte black.png" }
        ]
      }
    ]
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const collection = params.get('name'); // 'name' param is the collection name
    const marbles = collectionsData[collection];
    const listElem = document.getElementById('collection-marble-list');
    if (marbles && listElem) {
      listElem.innerHTML = marbles.map((marble, marbleIdx) => `
        <div class="marble-row">
          <img class="main-marble-img" data-marble-idx="${marbleIdx}" src="${marble.img}" />
          <div class="marble-info">
            <div class="marble-title">${marble.name}</div>
            <div class="marble-desc">${marble.desc}</div>
            <div class="marble-details">
              <div class="finishes-title">Finishes</div>
              <div class="finishes-list">
                ${marble.finishes.map(finish => `
                  <div class="finish-item">
                    <div class="finish-img-wrap">
                      <img class="finish-img" src="${finish.img}" />
                    </div>
                    <div class="finish-name">${finish.name}</div>
                  </div>
                `).join('')}
              </div>
              <div class="pairings-block">
                <div class="pairings-title">Pairings</div>
                <div class="pairings-list">
                  ${marble.pairings.map((pairing, pairingIdx) => {
                    let nameLines;
                    if (pairing.name.includes(' with ')) {
                      nameLines = pairing.name.split(' with ').map((line, i) => i === 1 ? 'with ' + line : line);
                    } else if (pairing.name.includes(' or ')) {
                      nameLines = pairing.name.split(' or ').map((line, i) => i === 1 ? 'or ' + line : line);
                    } else {
                      nameLines = [pairing.name];
                    }
                    return `
                      <div class="pairing-item">
                        <div class="pairing-img-wrap">
                          <img class="pairing-img" data-marble-idx="${marbleIdx}" data-pairing-img="${pairing.img}" src="${pairing.img}" />
                        </div>
                        <div class="pairing-name">${nameLines.map(line => line.trim()).join('<br>')}</div>
                      
                      </div>
                      
                    `;
                  }).join('')}
                    <div class="slam">
                       <div class="slam-measure">
                           <p>Slams</p>
                           <div class="slam-measure-con">
                             <p>1.5M – 1.6M x 2.4M – 2.6M</p>
                           </div>
                       </div>


                       <div class=tiles>
                            <p>Tiles</p>
                            <div class="slam-measure-con1">
                               <img  src="./assets/images/measure.png">
                           </div>
                       </div>


                       <div class="standard">
                          <p>Standard Thickness</p>
                          <div class="standard-mesasure">
                              <div class="standard-image">
                              
                              </div>
                              <div class="standard-content">
                                <p>20MM | 30MM | Step & Riser</p>
                              </div>
                          </div>
                       </div>
                    </div>
                </div>
<div style="color: #003366; font-size: 16px; font-family: Rajdhani; font-weight: 500; word-wrap: break-word; background:#E6F3FF">Dimensions, Cut-to-size and special thickness available for custom projects.</div>


                




              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  });











