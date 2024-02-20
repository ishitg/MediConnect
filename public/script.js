'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

const caps = document.querySelectorAll(".tom");
const caps2 = document.querySelector(".tom1");
const caps3 = document.querySelectorAll(".tick > span");
let capper = ["Our vision is to be the leading provider of consultancy services in the world. We are committed to providing our clients with the highest quality of service, and we are constantly innovating to find new ways to improve our offerings.","Our mission is to help our clients achieve their goals. We are committed to providing them with the resources and support they need to succeed. We believe that everyone has the potential to achieve great things, and we are passionate about helping our clients reach their full potential.","Our strategy is to focus on our core competencies and to provide our clients with the best possible service. We are committed to continuous improvement, and we are always looking for new ways to improve our processes and our offerings. We believe that by focusing on our core competencies and by providing our clients with the best possible service, we will be able to achieve our vision of being the leading provider of consultancy services in the world."];

let ticker = [["Innovative technology solutions.","Better future through technology.","Inspire and empower people.","Great place to work."],["Innovative technology solutions.","Best customer experience.","Positive impact on the world.","Responsible corporate citizen."],["Focus on core competencies.","Invest in research and development.","Strong partnerships.","Execute with excellence."]];


caps.forEach((cap, index) => {
    cap.addEventListener("click", () => {
        caps.forEach((c, i) => {
            if (i !== index) {
                c.classList.remove("active");
            }
        });
        cap.classList.toggle("active");
        caps2.innerHTML = capper[index];
        for(var t=0;t<4;t++)
        {
          caps3[t].innerHTML = ticker[index][t];
        }
    });
});
