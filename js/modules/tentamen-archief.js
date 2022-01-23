import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";


export class dearchiveerKnop extends LitElement {

    render() {
        return html`
            <button @click="${this.dearchiveren}" class="btn btn-success float-right">Dearchiveren</button>
        `;
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    dearchiveren() {
        storage.deArchifeerTentamen(storage.findArchiefTentamenById(this.getParam('id')));
        window.location = '../../pages/home-archief.html';
    }

    getParam(name) {
        const parts = window.location.href.split('?');

        if (parts.length > 1) {
            name = encodeURIComponent(name);
            const params = parts[1].split('&');
            const found = params.filter(el => (el.split('=')[0] === name) && el);
            if (found.length) return decodeURIComponent(found[0].split('=')[1]);
        }
    }


}


export class verwijderKnop extends LitElement {

    render() {
        return html`
            <button @click="${this.verwijder}" class="btn btn-danger float-right">Verwijderen</button>
        `;
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    verwijder() {
        storage.verwijderVanArchief(storage.findArchiefTentamenById(this.getParam('id')).id)
        window.location = '../../pages/home-archief.html';
    }

    getParam(name) {
        const parts = window.location.href.split('?');

        if (parts.length > 1) {
            name = encodeURIComponent(name);
            const params = parts[1].split('&');
            const found = params.filter(el => (el.split('=')[0] === name) && el);
            if (found.length) return decodeURIComponent(found[0].split('=')[1]);
        }
    }


}

customElements.define('dearchiveer-knop', dearchiveerKnop);
customElements.define('verwijder-knop', verwijderKnop);