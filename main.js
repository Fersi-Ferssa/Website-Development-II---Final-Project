// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

// Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});

// Blur animation
function blurAnimation(element, startBlur, endBlur, duration) {
    var blurValue = startBlur;
    var increment = (endBlur - startBlur) / (duration / 20); //Adjust duration/20 for smoother animation
    var animation = setInterval(function() {
        blurValue += increment;
        if (increment > 0 && blurValue >= endBlur) {
            clearInterval(animation);
        } else if (increment < 0 && blurValue <= endBlur) {
            clearInterval(animation);
        }
        element.style.filter = `blur(${blurValue}px)`;
    }, 20); //Adjust interval for smoother animation
}

var imageElement = document.getElementById('animatedImage');
blurAnimation(imageElement, 0, 10, 500); // Start blur: 0px, End blur: 10px, Duration: 500ms

// Confetti animation 1.0
document.querySelectorAll('.confetti-trigger').forEach(item => {
    item.addEventListener('mouseenter', event => {
        const confetti = item.nextElementSibling;
        confetti.style.left = event.offsetX + 'px';
        confetti.style.top = event.offsetY + 'px';
        confetti.style.opacity = 2;
    });

    item.addEventListener('mouseleave', event => {
        const confetti = item.nextElementSibling;
        confetti.style.opacity = 2;
    });
});

/* (Not used) Confetti animation 2.0 */
/*const confettiContainer = document.querySelector('.confetti-container');
const confettiElement = document.getElementById('confetti');

confettiContainer.addEventListener('mouseover', () => {
  confettiElement.style.display = 'block';
  for (let i = 0; i < 100; i++) {
    createConfettiPiece();
  }
});

confettiContainer.addEventListener('mouseleave', () => {
  confettiElement.style.display = 'none';
  confettiElement.innerHTML = '';
});

function createConfettiPiece() {
  const confettiPiece = document.createElement('div');
  confettiPiece.classList.add('confetti-piece');
  confettiElement.appendChild(confettiPiece);

  const size = Math.random() * 10 + 5;
  confettiPiece.style.width = `${size}px`;
  confettiPiece.style.height = `${size}px`;
  confettiPiece.style.backgroundColor = getRandomColor();

  const position = Math.random() * confettiContainer.offsetWidth;
  confettiPiece.style.left = `${position}px`;

  const animation = confettiPiece.animate([
    { transform: 'translateY(0)', opacity: 1 },
    { transform: `translateY(${confettiContainer.offsetHeight}px)`, opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear',
    iterations: 1
  });

  animation.onfinish = () => confettiPiece.remove();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}*/

// On click function for the image to redirect to the video.
//This code will run when the image is clicked
document.querySelector('img').addEventListener('click', function() {
  });
  
// Get the audio player and play button elements
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');

// Add click event listener to the play button
playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    // If audio is paused, play it
    audioPlayer.play();
    playButton.textContent = 'Pause Music';
  } else {
    // If audio is playing, pause it
    audioPlayer.pause();
    playButton.textContent = 'Play Music';
  }
});
