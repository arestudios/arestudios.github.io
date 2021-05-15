/*PAGE LOADING START*/
//paste this code under the head tag or in a separate js file.  https://smallenvelop.com/display-loading-icon-page-loads-completely/
	// Wait for window load
// edited to fit jquery 3.0+      https://stackoverflow.com/questions/37751179/jquery-3-0-window-loadfunction
	$(window).on("load", function (e) {
        
        // Animate loader off screen
		$(".website_loader").fadeOut("slow");;
    });
/*PAGE LOADING ENDS*/


//ABOUT DIV ELEMENT
function show() {
    	document.getElementById("about").style.display = 'inline';
	}
function hide() {
    	document.getElementById("about").style.display = 'none';
	}

//SLIDERS. Site Main Engine.  https://youtu.be/wWWNrANNO1k
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}