/*
    Freeddev Dark/Light mode switcher
    Version 1.5
    Copyright (c) 2022 FreedTapstry21
*/

/* Checks if localStorage is set or unset */
if (window.localStorage.getItem("view-mode") == null) {window.localStorage.setItem("view-mode", "Light mode");}
if (window.localStorage.getItem("view-mode-class") == null) {window.localStorage.setItem("view-mode-class", "dark");}

/* Compatibility layer */
if (window.localStorage.getItem("view-mode-class") == "wallpaper dark") {window.localStorage.setItem("view-mode-class", "dark");}
if (window.localStorage.getItem("view-mode-class") == "wallpaper light") {window.localStorage.setItem("view-mode-class", "light");}

/* Removes fallback theme */
document.body.classList.remove("dark");

/* Loads dark/light theme */
document.body.classList.add(window.localStorage.getItem("view-mode-class"));
document.getElementById("view-switch").innerText = window.localStorage.getItem("view-mode");

/* Switches modes when button with an id of "view-switch" is pressed */
document.getElementById("view-switch").onclick = function () {
    if (window.localStorage.getItem("view-mode") == "Dark mode") {
        window.localStorage.setItem("view-mode", "Light mode");
        window.localStorage.setItem("view-mode-class", "dark");
        window.location = window.location;
    }
    else if (window.localStorage.getItem("view-mode") == "Light mode") {
        window.localStorage.setItem("view-mode", "Dark mode");
        window.localStorage.setItem("view-mode-class", "light");
        window.location = window.location;
    }
}