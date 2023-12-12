"use strict";
// Variables containing elements(classes and IDs)
//////////

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showAnimate");
    } else {
      entry.target.classList.remove("showAnimate");
    }
  });
});

const Hiddensections = document.querySelectorAll(".hideAnimate");
Hiddensections.forEach((el) => observer.observe(el));
//
