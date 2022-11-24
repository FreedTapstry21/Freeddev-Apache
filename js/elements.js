/*
    Freeddev - Custom elements
    Version 1.4.1
    Copyright (c) 2022 FreedTapstry21
*/

/* Custom element class */
class FreeddevElements extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<div></div>";
        this.style.margin = "1px";
    }
}

/* Defines custom element */
customElements.define('ln-br', FreeddevElements);