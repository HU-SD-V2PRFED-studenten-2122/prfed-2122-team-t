import {LitElement, html, css} from "lit";
import * as storage from "../storage.js";

class TentamensTabel extends LitElement {

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
                <div style="height: 500px; overflow-y: auto; box-sizing: border-box;border: solid 1px rgb(217,217,217);background-color: rgba(0,0,0,.04);">
                    <table id="${this.tabelID}" class="table table-bordered table-striped table-hover"
                           style="position: relative">
                        <thead style="position: sticky;top: 0; background: #ffffff;box-shadow: inset 1px 1px rgb(217,217,217), 0 1px rgb(217,217,217)">
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Opleiding</th>
                            <th scope="col">Naam</th>
                            <th scope="col">Toets</th>
                            <th scope="col">EC</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }


    createRenderRoot() {
        return this;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.fillTable();
    }

    fillTable() {
        const table = document.getElementById(this.tabelID).getElementsByTagName('tbody')[0];
        table.innerHTML = ""

        let tentamens;

        if (this.archief === 'false') {
            tentamens = storage.getTentamens();
        } else {
            tentamens = storage.getArchief();
        }

        for (let i = 0; i < tentamens.length; i++) {
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

customElements.define('tentamens-tabel-element', TentamensTabel);
