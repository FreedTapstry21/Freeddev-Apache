/*
    Freeddev Dark/Light mode switcher
    Version 1.3
    Copyright (c) 2022 FreedTapstry21
*/

if (window.localStorage.getItem("view-mode") == null) {window.localStorage.setItem("view-mode", "Light mode");}
if (window.localStorage.getItem("view-mode-class") == null) {window.localStorage.setItem("view-mode-class", "dark");}

if (window.localStorage.getItem("view-mode-class") == "wallpaper dark") {window.localStorage.setItem("view-mode-class", "dark");}
if (window.localStorage.getItem("view-mode-class") == "wallpaper light") {window.localStorage.setItem("view-mode-class", "light");}

document.body.classList.add("wallpaper");
document.body.classList.add(window.localStorage.getItem("view-mode-class"));
document.getElementById("view-switch").innerText = window.localStorage.getItem("view-mode");


document.getElementById("view-switch").onclick = function () {
    if (document.getElementById("view-switch").innerText == "Dark mode") {
        window.localStorage.setItem("view-mode", "Light mode");
        window.localStorage.setItem("view-mode-class", "dark");
        window.location = window.location;
    }
    if (document.getElementById("view-switch").innerText == "Light mode") {
        window.localStorage.setItem("view-mode", "Dark mode");
        window.localStorage.setItem("view-mode-class", "light");
        window.location = window.location;
    }
}