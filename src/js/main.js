// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

document.getElementById("myForm").reset();

// Botón to top
// Get the button
const myBtnScroll = document.getElementById("myBtnScroll");
myBtnScroll.addEventListener('click',()=>{
  window.scrollTo(0,0)
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtnScroll.style.display = "block";
  } else {
    myBtnScroll.style.display = "none";
  }
}
// fin Botón to top