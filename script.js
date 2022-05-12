
"use strict";

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain_behind = document.getElementById("mountain_behind");
let mountain_front = document.getElementById("mountain_front");
let nextbtn = document.getElementById("nextbtn");
let title = document.getElementById("maintitle");
let sec = document.getElementById("sec");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountain_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0 + 'px';
    title.style.marginRight = value * 4 + 'px';
    title.style.marginTop = value * 1.5 + 'px';
    nextbtn.style.marginTop = value * 1.5 + 'px';
})