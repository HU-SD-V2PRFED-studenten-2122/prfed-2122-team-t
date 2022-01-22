import {LitElement, html, css} from "lit";
import * as storage from "../storage.js";

class Zoekbalk extends LitElement {

    static get properties() {
        return {
            'tabelID': {attribute: true},
            'archief': {attribute: true}
        };
    }

    constructor() {
        super();

        this.archief = 'false';
    }

    render() {
        return html`
            <div class="container">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" @click="${this.search}">Zoeken</button>
                    </div>
                    <input @keyup="${this.search}" id="searchInput" type="text" class="form-control"
                           placeholder="opleiding/naam/code"
                           aria-label="zoekbalk voor tabel met tentamens">
                </div>
            </div>
        `;
    }


    createRenderRoot() {
        return this;
    }


    search() {
        const search = document.getElementById("searchInput").value.toLowerCase();
        const table = document.getElementById(this.tabelID).getElementsByTagName('tbody')[0];
        table.innerHTML = ""

        let tentamens;

        if (this.archief === 'false') {
            tentamens = storage.getTentamens();
        } else {
            tentamens = storage.getArchief();
        }

        for (let i = 0; i < tentamens.length; i++) {
            if (tentamens[i].opleiding.toLowerCase().includes(search) ||
                tentamens[i].code.toLowerCase().includes(search) ||
                tentamens[i].naam.toLowerCase().includes(search)) {

                table.insertRow().innerHTML =
                    "<tr>" +
                    "<th scope='row'>" + tentamens[i].code + "</th>" +
                    "<td>" + tentamens[i].opleiding + "</td>" +
                    "<td>" + tentamens[i].naam + "</td>" +
                    "<td>" + tentamens[i].toetsvorm + "</td>" +
                    "<td>" + tentamens[i].ec + "</td>" +
                    "</tr>";

                const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];

                if (this.archief === 'false') {
                    element.setAttribute("onclick", "location.href='tentamen.html?id=" + tentamens[i].id + "'");
                } else {
                    element.setAttribute("onclick", "location.href='tentamen-archief.html?id=" + tentamens[i].id + "'");
                }

                element.setAttribute("style", "cursor: pointer");
                element.setAttribute("aria-label", "Link");
            }
        }
    }
}

customElements.define('zoekbalk-element', Zoekbalk);