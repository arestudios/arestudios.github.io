//JQUERY SCROLL TO ELEMENT START
$(document).ready(function () {
    //jQuery for scroll to element by Id
    $('#down_to_profile_button').on('click', function (e) {
        $('html, body').animate({
        scrollTop: $(".about_site").offset().top
        }, 1000); //last number is scroll duration in miliseconds
    });
    
    //jQuery for scroll to top
    $('#back_to_top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600); //last number is scroll duration in miliseconds
        return false;
    });
});
//JQUERY SCROLL TO ELEMENT ENDS

//HIDES SCROLL TO TOP BUTTON START
var mybutton = document.getElementById("back_to_top");
  window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
//unhides element after scrolled 20px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "grid"; //It was "block". but I want to use "place-items" css property so I have to change it to grid
  } else {
    mybutton.style.display = "none";
  }
}
//HIDES SCROLL TO TOP BUTTON ENDS

//MARQUEE IMAGE TEXT STARTS
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
//MARQUEE IMAGE TEXT ENDS