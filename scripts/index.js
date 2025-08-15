// Show videos up constaninouse
const videos = document.querySelectorAll('.videos video');

let currentIndex = 0;
videos[currentIndex].play();
videos.forEach( (video, index) => {
  video.addEventListener('ended', () => {
    videos[currentIndex].classList.remove('show');
    currentIndex++;
    currentIndex = currentIndex >= videos.length ? 0 : currentIndex;

    videos[currentIndex].currentTime = 0;

    videos[currentIndex].classList.add('show');
    videos[currentIndex].play();
  });

  video.addEventListener('loadeddata', () => {
    if(index !== 0) {
      video.currentTime = 0;
    }
  })
})

// Generate Gallery HTML and make them scroll right and left

const gallery = [
  {
    image: 'https://res.cloudinary.com/dmh0uhnaq/image/upload/w_1024,f_webp,q_65/v1722725196/1_am6fio.jpg',
    title: 'b/d <sup><small>&#9415;</sup></small>jams &copy;2022',
    subTitle: "it's a vibe",
    moreDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore odit totam tenetur expedita nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab.',
    link: 'link to..!',
  },
  {
    image: 'https://res.cloudinary.com/dmh0uhnaq/image/upload/w_1024,f_webp,q_65/v1722725183/2_ljvicz.jpg',
    title: 'applied <sup><small>&#9415;</sup></small> &copy;2020',
    subTitle: "thoughts&perspectives",
    moreDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore odit totam tenetur expedita nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab.',
    link: 'link to..!',
  },
  {
    image: 'https://res.cloudinary.com/dmh0uhnaq/image/upload/w_1024,f_webp,q_65/v1722725194/3_xmnqmr.jpg',
    title: 'moves <sup><small>&#9415;</sup></small> &copy;2019',
    subTitle: "our new hq",
    moreDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore odit totam tenetur expedita nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab.',
    link: 'link to..!',
  },
  {
    image: 'https://res.cloudinary.com/dmh0uhnaq/image/upload/w_1024,f_webp,q_65/v1722725200/4_cpw0zr.jpg',
    title: 'crafted <sup><small>&#9415;</sup></small> &copy;2019',
    subTitle: "creative community",
    moreDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore odit totam tenetur expedita nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab.',
    link: 'link to..!',
  },
  {
    image: 'https://res.cloudinary.com/dmh0uhnaq/image/upload/w_1024,f_webp,q_65/v1722725192/5_sgmzdp.jpg',
    title: 'brandbeats <sup><small>&#9415;</sup></small> &copy;2017',
    subTitle: "podcast series",
    moreDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore odit totam tenetur expedita nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab.',
    link: 'link to..!',
  },
];


let cardHTML = '';
gallery.forEach( (card, index) => {
  index++;
  cardHTML += `
    <div class="card" data-no="${index.toString().padStart(2, '0')}">
      <div class="image-container">
        <img src="${card.image}" alt="">
      </div>

      <div class="details">
        <div class="title">
          <h3>${card.title}</h3>
          <span>${card.subTitle}</span>
        </div>
      </div>
      <div class="specific-details">
        <p>${card.moreDetails}</p>
        <a href="#">${card.link}</a>
      </div>
    </div>
  
  `;
});


//Scoll Gallery Right and Left
const galleryElem = document.querySelector('.gallery');
galleryElem.innerHTML = cardHTML;

galleryElem.addEventListener('wheel', e => {
  e.preventDefault();
  let scrollLeft = e.deltaX;

  galleryElem.scrollBy({
    left: scrollLeft,
  });
});

// Show Menu Page Of Gallery
const menuPage = document.querySelector('.menu-page');

document.querySelector('.menu-icon').addEventListener('click', () => {
  menuPage.classList.add('active')
});

// Exit Menu Page Of Gallery
document.querySelector('.exit-icon').addEventListener('click', () => {
  menuPage.classList.remove('active')
});



// Scroll engagement section 

//Generating Engagement HTML
const engagementContainer = document.querySelector('.engagement-container');
const engagementData = [
  {
    logo: "google",
    name: "google",
    summary: "Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership.",
    link: "https://www.google.com",
  },
  {
    logo: "zara",
    name: "zara",
    summary: "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership.",
    link: "https://www.zara.com",
  },
  {
    logo: "wilson",
    name: "wilson",
    summary: "A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study.",
    link: "https://www.wilson.com",
  },
  {
    logo: "at&t",
    name: "at&t",
    summary: "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.",
    link: "https://www.att.com",
  },
  {
    logo: "patagonia",
    name: "patagonia",
    summary: "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study.",
    link: "https://www.patagonia.com",
  },
];
let engageHTML = "";
engagementData.forEach( engage => {

  engageHTML += `
    <div class="engagement">
      <h4 class="engagement-logo">${engage.logo}</h4>
      <h5 class="engagement-name">${engage.name}</h5>
      <p class="engagement-summary">${engage.summary} <a href="${engage.link}" target="_blank">here.</a></p>
    </div>
  `;
});

document.querySelector('.engagements').innerHTML = engageHTML;

//Scroll Engagement Horizontally 
engagementContainer.addEventListener('wheel', e => {
  // e.preventDefault();
  const scroll = e.deltaX;
  engagementContainer.scrollBy({
    left: scroll
  });
});

let isDown = false;
let startX;
let scrollLeft;

engagementContainer.addEventListener('mousedown', e => {
  isDown = true;
  ePageX = e.pageX
  scrollLeft = engagementContainer.scrollLeft;
});
engagementContainer.addEventListener('mouseup', e => {
  isDown = false;
});
engagementContainer.addEventListener('mouseleave', e => {
  isDown = false;
});
engagementContainer.addEventListener('mousemove', e => {
  if(!isDown) return ;

  engagementContainer.scrollLeft = scrollLeft -  (e.pageX - ePageX) * 2;

});






//Progress bar for Scroll Horizontally
const progBar = document.querySelector('.progress-bar');

engagementContainer.addEventListener('scroll', () => {
  const maxWidth = engagementContainer.scrollWidth;
  const visibleWidth = engagementContainer.clientWidth;
  const progMove = engagementContainer.scrollLeft;
  const width = (progMove / (maxWidth - visibleWidth)) * 100;
  progBar.style.width = `${width}%`;
});

//scrollWidth => Gives maxWidth of element including not visible area
//clientWidth => Gives visible area of element
//scrollLeft => Gives movement of element in px


//Culture playing videos

const cultureVideos = document.querySelectorAll('.culture-videos video');

let currentvideo = 0;
cultureVideos[currentvideo].classList.add('show-video');
cultureVideos[currentIndex].play();

cultureVideos.forEach(video => {
  video.addEventListener('ended', () => {
    cultureVideos[currentvideo].classList.remove('show-video');
    currentvideo++;
    currentvideo = currentvideo >= cultureVideos.length ? 0 : currentvideo;

    cultureVideos[currentvideo].classList.add('show-video');
    cultureVideos[currentvideo].currentTime = 0;
    cultureVideos[currentvideo].play();
  });
});

const cultureSection = document.querySelector('.culture');


const observer = new IntersectionObserver( sections => {
  sections.forEach(section => {
    if(section.isIntersecting) {
      cultureSection.classList.add('active-section');
    }else {
      cultureSection.classList.remove('active-section');
    };
  });
},{
  root: null,
  threshold: 0.5
});

observer.observe(cultureSection);


// animate arrow for thinking
const thinkLinks = document.querySelectorAll('.think-link');

thinkLinks.forEach ( link => {
  const arrowContainer = link.querySelector('.arrow-container');
  link.addEventListener('mouseover', () => {
    if(!arrowContainer.classList.contains('animate-arrow')) {
      arrowContainer.classList.add('animate-arrow');
    };
  });

  link.addEventListener('mouseleave', () => {
    arrowContainer.classList.remove('animate-arrow');
  });
});
