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
        storage.deArchifeerTentamen(storage.findArchiefTentamenById(storage.getParam('id')));
        window.location = '../../pages/home-archief.html';
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
        storage.verwijderVanArchief(storage.findArchiefTentamenById(storage.getParam('id')).id)
        window.location = '../../pages/home-archief.html';
    }
}

customElements.define('dearchiveer-knop', dearchiveerKnop);
customElements.define('verwijder-knop', verwijderKnop);