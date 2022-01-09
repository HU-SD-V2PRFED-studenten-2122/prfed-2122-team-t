import {LitElement, html, css} from "lit";
import {Tentamen} from "../domein/tentamen";
import * as storage from "../storage.js";

class InzichtTabel extends LitElement {

    render() {
        return html`

            <div class="container">
                <div class="input-group mb-3">
                    <input id="myInput" type="text" class="form-control" placeholder="opleiding/naam/code"
                           aria-label="zoekbalk voor tabel met tentamens">
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" @click="${this.search}">Zoeken</button>
                    </div>
                </div>
                <div style="height: 500px; overflow-y: auto">
                <table id="tableData" class="table table-bordered table-striped table-hover" style="position: relative">
                    <thead style="position: sticky; top: -1px; background: #ffffff;">
                    <tr>
                        <th>Opleiding</th>
                        <th>Code</th>
                        <th>Naam</th>
                        <th>Toets</th>
                        <th>EC</th>
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
        // storage.saveTentamen(new Tentamen("jaap", "zh213", "janjaap", "test", "test", 5, "test", "test", "test", null))
        // storage.saveTentamen(new Tentamen("jan", "u23h4", "pietklaas", "test", "test", 5, "test", "test", "test", null))
        // storage.saveTentamen(new Tentamen("piet", "123h", "janpiet", "test", "test", 5, "test", "test", "test", null))
        // storage.saveTentamen(new Tentamen("klaas", "uih23", "pieterjan", "test", "test", 5, "test", "test", "test", null))
        const tentamens = storage.getTentamens();
        console.log(storage.getTentamens())
        const table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        for (let index = 0; index < tentamens.length; index++) {
            //insert Row
            table.insertRow().innerHTML =
                "<tr>" +
                "<td>" + tentamens[index].opleiding + "</td>" +
                "<td>" + tentamens[index].code + "</td>" +
                "<td>" + tentamens[index].naam + "</td>" +
                "<td>" + tentamens[index].toetsvorm + "</td>" +
                "<td>" + tentamens[index].ec + "</td>" +
                "</tr>";
            const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
            element.setAttribute("onclick","location.href='" + tentamens[index].id + "'")
            element.setAttribute("style","cursor: pointer")
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
                    "<td>" + tentamens[index].opleiding + "</td>" +
                    "<td>" + tentamens[index].code + "</td>" +
                    "<td>" + tentamens[index].naam + "</td>" +
                    "<td>" + tentamens[index].toetsvorm + "</td>" +
                    "<td>" + tentamens[index].ec + "</td>" +
                    "</tr>";
                const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
                element.setAttribute("onclick","location.href='" + tentamens[index].id + "'")
                element.setAttribute("style","cursor: pointer")
            }
        }

    }

}

customElements.define('inzien-element', InzichtTabel);
