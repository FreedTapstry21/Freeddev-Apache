/*
    Freeddev - Custom elements
    Version 0.1.1
    Copyright (c) 2022 FreedTapstry21
*/

class FreeddevElements extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div></div>`;
        this.style.height = "50%";
        this.style.width = "100%";
        this.style.padding = "1px";
    }
}

customElements.define('ln-br', FreeddevElements);