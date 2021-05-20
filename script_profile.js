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