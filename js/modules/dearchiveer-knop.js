import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";


export class dearchiveerKnop extends LitElement{

    render() {
        return html`
            <button @click="${this.dearchiveren}" class="btn btn-primary float-right">Dearchiveer</button>
        `;
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    dearchiveren(){
        storage.deArchifeerTentamen(storage.findArchiefTentamenById(this.getParam('id')));
        window.location = '/pages/archief.html';
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
customElements.define('dearchiveer-knop',dearchiveerKnop);