"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const href = link.getAttribute("href");
if (link.classList.contains("nav-links")) {
  headerEl.classList.toggle("nav-open");
}
