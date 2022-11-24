/*
    Freeddev - Custom elements
    Version 1.3
    Copyright (c) 2022 FreedTapstry21
*/

class FreeddevElements extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<div></div>";
        this.style.margin = "1px";
    }
}

customElements.define('ln-br', FreeddevElements);

