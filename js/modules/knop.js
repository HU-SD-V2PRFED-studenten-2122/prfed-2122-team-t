import {html, LitElement} from "lit";
import * as storage from "../storage.js";

class Knop extends LitElement {

    static get properties() {
        return {
            'link': {attribute: true},
            'text': {attribute: true},
            'class': {attribute: true},
            'ingelogd': {attribute: true}
        };
    }

    constructor() {
        super();

        this.ingelogd = 'false';
    }

    render() {
        if (this.ingelogd == 'true')
            if (!storage.checkLoggedIn())
                return;

        return html`
            <a href="${this.link}" class="btn btn-${this.class} float-right">${this.text}</a>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('knop-component', Knop);