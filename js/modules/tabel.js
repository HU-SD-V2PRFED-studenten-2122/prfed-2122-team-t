import {LitElement, html, css} from "lit";
import * as storage from "../storage.js";

class InzichtTabel extends LitElement {

    render() {
        return html`

            <div class="container">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" @click="${this.fillTable}">Zoeken</button>
                    </div>
                    <input @keyup="${this.fillTable}" id="searchInput" type="text" class="form-control"
                           placeholder="opleiding/naam/code"
                           aria-label="zoekbalk voor tabel met tentamens">
                </div>
                <div style="height: 500px; overflow-y: auto; box-sizing: border-box;border: solid 1px rgb(217,217,217);background-color: rgba(0,0,0,.04);">
                    <table id="tableData" class="table table-bordered table-striped table-hover"
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
        const search = document.getElementById("searchInput").value.toLowerCase();
        const table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        table.innerHTML = ""

        const tentamens = storage.getTentamens();
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
                element.setAttribute("onclick", "location.href='details.html?id=" + tentamens[i].id + "'");
                element.setAttribute("style", "cursor: pointer");
                element.setAttribute("aria-label", "Link");
            }
        }
    }
}

customElements.define('inzien-element', InzichtTabel);
