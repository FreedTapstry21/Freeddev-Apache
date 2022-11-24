/*
    Freeddev - Index script
    Version 1.3
    Copyright (c) 2022 FreedTapstry21
*/

/* 
    This script runs at every website.
*/

/* Hello world */
console.log("Hello world!");

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
} else if (window.innerHeight < 450) {
    document.getElementById("footer").remove();
}

/*
    Add animations
*/

setTimeout(function(){
    document.body.classList.remove("preload");
},500);
