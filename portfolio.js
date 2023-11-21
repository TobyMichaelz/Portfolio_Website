"use strict";
// Variables containing elements(classes and IDs)
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let tobz = document.getElementsByClassName("tobz");
let dot = document.getElementById("dot");
let navIcons = document.getElementsByClassName("baku");
let hod = document.getElementById("hod");
let toggleDark = document.getElementById("toggledark");
let toggleSun = document.getElementById("togglesun");
let topline = document.getElementById("topline");
let topline2 = document.getElementById("topline2");
let multitext = document.getElementById("multitext");
let lorm = document.getElementById("lorm");
let join = document.getElementById("join");
let az = document.getElementsByClassName("az");
let aboutpage = document.getElementById("aboutpage");
let gunna = document.getElementById("gunna");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

//

//DARKMODE BUTTON
function toggleDarkMode() {
  // header
  header.style.backgroundColor = "#000e01";
  header.style.transition = "2s";
  // navigation
  nav.style.transition = "2s";
  nav.style.backgroundColor = "#000e01";
  //Logo
  for (let i = 0; i < tobz.length; i++) {
    tobz[i].style.color = "#bfbebe";
    tobz[i].style.transition = "2s";
  }
  dot.style.color = "#ea6e07";
  dot.style.transition = "2s";
  //navIcons
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.color = "#bfbebe";
    navIcons[i].style.transition = "0s";
  }
  //mode button switch
  hod.style.backgroundColor = "#ceb6b6";
  toggleDark.style.color = "white";
  toggleDark.style.visibility = "hidden";
  toggleSun.style.color = "white";
  toggleSun.style.visibility = "visible";
  //first page elements
  topline.style.color = "#bfbebe";
  topline.style.transition = "2s";
  topline2.style.color = "#bfbebe";
  topline2.style.transition = "2s";
  multitext.style.color = "#bfbebe";
  multitext.style.transition = "2s";
  lorm.style.color = "#bfbebe";
  lorm.style.transition = "2s";
  for (let i = 0; i < az.length; i++) {
    az[i].style.color = "#ebe9e9";
    az[i].style.backgroundColor = "#1c271e";
    az[i].style.transition = "2s";
  }
  // aboutpage
  aboutpage.style.backgroundColor = "#000e01";
  gunna.style.backgroundColor = "#01330f";
  p1.style.color = "#bfbebe";
  p2.style.color = "#bfbebe";
  p3.style.color = "#bfbebe";
  p1.style.transition = "2s";
  p2.style.transition = "2s";
  p3.style.transition = "2s";
  aboutpage.style.transition = "2s";
  gunna.style.transition = "2s";
}
//

//LIGHTMODE BUTTON
function toggleSunMode() {
  //header
  header.style.backgroundColor = "white";
  //navigation
  nav.style.backgroundColor = "#fafffa";
  //Logo
  for (let i = 0; i < tobz.length; i++) {
    tobz[i].style.color = "#672d00";
    tobz[i].style.transition = "2s";
  }
  dot.style.color = "#008d00";
  dot.style.transition = "2s";
  //navIcons
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.color = "#4b2100";
    navIcons[i].style.transition = "0s";
  }
  //mode button switch
  hod.style.backgroundColor = "#32d460";
  toggleSun.style.color = "white";
  toggleDark.style.color = "#01330f";
  toggleDark.style.visibility = "visible";
  toggleSun.style.visibility = "hidden";
  //first page elements
  topline.style.color = "#00650a";
  topline.style.transition = "2s";
  topline2.style.color = "#00650a";
  topline2.style.transition = "2s";
  multitext.style.color = "#00650a";
  multitext.style.transition = "2s";
  lorm.style.color = "#00650a";
  lorm.style.transition = "2s";
  for (let i = 0; i < az.length; i++) {
    az[i].style.color = "#1c271e";
    az[i].style.backgroundColor = "#f5f3f3";
    az[i].style.transition = "2s";
  }
  // aboutpage
  aboutpage.style.backgroundColor = "white";
  gunna.style.backgroundColor = "#c5e9cb";
  p1.style.color = "#00650a";
  p2.style.color = "#00650a";
  p3.style.color = "#00650a";
  p1.style.transition = "2s";
  p2.style.transition = "2s";
  p3.style.transition = "2s";
  aboutpage.style.transition = "2s";
  gunna.style.transition = "2s";
}

// Scroll Animations
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
    //for repeating animation on scroll, use this
    else {
      sec.classList.remove("show-animate");
    }
  });
};

//
