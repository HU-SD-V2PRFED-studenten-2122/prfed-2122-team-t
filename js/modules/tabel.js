import {LitElement, html, css} from "lit";
import * as storage from "../storage.js";

class InzichtTabel extends LitElement {

    render() {
        return html`

            <div class="container">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" @click="${this.search}">Zoeken</button>
                    </div>
                    <input @keyup="${this.search}" id="myInput" type="text" class="form-control"
                           placeholder="opleiding/naam/code"
                           aria-label="zoekbalk voor tabel met tentamens">
                </div>
                <div style="height: 500px; overflow-y: auto; box-sizing: border-box;border: solid 1px rgb(217,217,217);background-color: rgba(0,0,0,.04);">
                    <table id="tableData" class="table table-bordered table-striped table-hover"
                           style="position: relative">
                        <thead style="position: sticky;top: 0; background: #ffffff;box-shadow: inset 1px 1px rgb(217,217,217), 0 1px rgb(217,217,217)">
                            <tr>
                                <th scope="col">Opleiding</th>
                                <th scope="col">Code</th>
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
        const tentamens = storage.getTentamens();

        if (!tentamens)
            return;

        const table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        for (let index = 0; index < tentamens.length; index++) {
            //insert Row
            table.insertRow().innerHTML =
                "<tr>" +
                "<th scope='row'>" + tentamens[index].opleiding + "</th>" +
                "<td>" + tentamens[index].code + "</td>" +
                "<td>" + tentamens[index].naam + "</td>" +
                "<td>" + tentamens[index].toetsvorm + "</td>" +
                "<td>" + tentamens[index].ec + "</td>" +
                "</tr>";
            const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
            element.setAttribute("onclick","location.href='details.html?id=" + tentamens[index].id + "'");
            element.setAttribute("style","cursor: pointer");
        }
    }

    search() {
        const search = document.getElementById("myInput").value.toLowerCase();
        const tentamens = storage.getTentamens();
        const table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        table.innerHTML = ""
        for (let index = 0; index < tentamens.length; index++) {
            if (tentamens[index].opleiding.toLowerCase().includes(search)||tentamens[index].code.toLowerCase()
                .includes(search)||tentamens[index].naam.toLowerCase().includes(search)){
                table.insertRow().innerHTML =
                    "<tr>" +
                    "<th scope='row'>" + tentamens[index].opleiding + "</th>" +
                    "<td>" + tentamens[index].code + "</td>" +
                    "<td>" + tentamens[index].naam + "</td>" +
                    "<td>" + tentamens[index].toetsvorm + "</td>" +
                    "<td>" + tentamens[index].ec + "</td>" +
                    "</tr>";
                const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
                element.setAttribute("onclick","location.href='details.html?id=" + tentamens[index].id + "'")
                element.setAttribute("style","cursor: pointer")
            }
        }
    }
}

customElements.define('inzien-element', InzichtTabel);
