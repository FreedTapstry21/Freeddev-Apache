/*
    Freeddev - Timeline
    Version 1.5.1
    Copyright (c) 2022 FreedTapstry21
*/

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