'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    if(this.window.innerWidth > 480) {
      backTopBtn.classList.add("active");
    }
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.getElementById("sendMessage").href = window.innerWidth < 480 ? "mailto:yogeshsatkari2@gmail.com?subject=Hi Yogesh, Message From Portfolio" : "https://mail.google.com/mail/?view=cm&fs=1&to=yogeshsatkari2@gmail.com&su=Hi Yogesh! Message From Portfolio&body=";
console.log(document.getElementById("sendMessage").href);

