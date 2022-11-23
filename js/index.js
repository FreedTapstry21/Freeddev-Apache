/*
    Freeddev - Index script
    Version 1.2
    Copyright (c) 2022 FreedTapstry21
*/

/* 
    This script runs at every website.
*/

/* Hello world */
console.log("Hello world!");

/*
    Freeddev Dark/Light mode switcher
*/

if (window.localStorage.getItem("view-mode") == null) {window.localStorage.setItem("view-mode", "Light mode");}
if (window.localStorage.getItem("view-mode-class") == null) {window.localStorage.setItem("view-mode-class", "wallpaper dark");}

document.getElementById("body").className = window.localStorage.getItem("view-mode-class");
document.getElementById("view-switch").innerText = window.localStorage.getItem("view-mode");


document.getElementById("view-switch").onclick = function () {
    if (document.getElementById("view-switch").innerText == "Dark mode") {
        window.localStorage.setItem("view-mode", "Light mode");
        window.localStorage.setItem("view-mode-class", "wallpaper dark");
        window.location = window.location;
    }
    if (document.getElementById("view-switch").innerText == "Light mode") {
        window.localStorage.setItem("view-mode", "Dark mode");
        window.localStorage.setItem("view-mode-class", "wallpaper light");
        window.location = window.location;
    }
}

/*
    Responsive Elements
*/

/* Menu */
if (window.innerWidth < 414) {
    document.getElementById("menu-div").innerHTML = "<br><br>";
}

/* Footer */
if (window.innerWidth < 1000) {
    document.getElementById("footer").remove();
}