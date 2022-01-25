import {LitElement, html, css} from 'lit';
import * as storage from '../../storage';
import {Tentamen} from '../../domein/tentamen';

class keurTabel extends LitElement {
    tentamensSelected = [];

    constructor() {
        super();

        sessionStorage.setItem('selected-tentamens-id', '[]')
    }

    render() {
        return html`

            <div class="container">

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
                            <th scope="col"><input type='checkbox' id="checkbox-select-all"
                                                   @change="${this.selectAllandDeSelectAll.bind(this)}"></th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
            <div role="alert" class="alert alert-danger" id="message"
                 style="display: none; margin-left: 12px; margin-right: 12px; margin-top: 12px;">
            </div>
        `;
    }


    createRenderRoot() {
        return this;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.fillTable();
        this.getSelectedCheckboxes();
        this.loadSelectedCheckboxes();

        document.querySelector('#goedkeuren-btn').addEventListener('click', this.goedkeuren.bind(this));
        document.querySelector('#afkeuren-btn').addEventListener('click', this.afkeuren.bind(this))
        document.querySelector('#autokeuren-btn').addEventListener('click', this.autokeuren.bind(this))
        this.querySelector('#checkbox-select-all').addEventListener('change', this.getSelectedCheckboxes.bind(this))
    }

    fillTable() {
        const table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
        table.innerHTML = ""

        const tentamens = storage.getDraftTentamens();
        for (let i = 0; i < tentamens.length; i++) {
            table.insertRow().innerHTML =
                "<tr>" +
                "<th scope='row'>" + tentamens[i].code + "</th>" +
                "<td>" + tentamens[i].opleiding + "</td>" +
                "<td>" + tentamens[i].naam + "</td>" +
                "<td>" + tentamens[i].toetsvorm + "</td>" +
                "<td>" + tentamens[i].ec + "</td>" +
                "<td>" + " " + `<input type='checkbox' name='chk' value= ${tentamens[i].id} id="checkbox-tentamen"}>` + " " + "</td>" +
                "</tr>";

            const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
            element.setAttribute("style", "cursor: pointer");
            element.setAttribute("aria-label", "Link");

            for (const td of element.querySelectorAll('td')) {
                if (td.getElementsByTagName('input').length === 0) {
                    td.setAttribute("onclick", "location.href='tentamen-keuren-details.html?id=" + tentamens[i].id + "'");
                }
            }
        }
    }

    getSelectedCheckboxes() {
        // ophalen id's van geselecteerde checkboxes
        var checkboxes = document.querySelectorAll("input[type=checkbox][id=checkbox-tentamen]");
        var checkbox_selectall = document.querySelectorAll("input[type=checkbox][id=checkbox-select-all]");

        checkbox_selectall.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                this.tentamensSelected =
                    Array.from(checkboxes)
                        .filter(i => i.checked)
                        .map(i => i.value)
                sessionStorage.setItem('selected-tentamens-id', JSON.stringify(this.tentamensSelected))
                sessionStorage.setItem('saved-tentamens-id', JSON.stringify(this.tentamensSelected))
            })
        });

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                this.tentamensSelected =
                    Array.from(checkboxes)
                        .filter(i => i.checked)
                        .map(i => i.value)
                sessionStorage.setItem('selected-tentamens-id', JSON.stringify(this.tentamensSelected))
                sessionStorage.setItem('saved-tentamens-id', JSON.stringify(this.tentamensSelected))
            })
        });
    }

    loadSelectedBoxesId() {
        var checkboxes = document.querySelectorAll("input[type=checkbox][id=checkbox-tentamen]");
        this.tentamensSelected = Array.from(checkboxes)
            .filter(i => i.checked)
            .map(i => i.value)
        sessionStorage.setItem('selected-tentamens-id', JSON.stringify(this.tentamensSelected))
    }

    getSelectedTentamens() {
        let draftTentamens = storage.getDraftTentamens();
        let selectedTentamens = storage.getAllSelectedTentamenId();
        let saveTentamens = [];

        for (var x = 0; x < draftTentamens.length; x++) {
            for (var i = 0; i < selectedTentamens.length; i++) {
                if (draftTentamens[x].id === selectedTentamens[i]) {
                    saveTentamens.push(draftTentamens[x])
                    sessionStorage.setItem('saved-selected-tentamens', JSON.stringify(saveTentamens))
                }
            }
        }
    }

    toggleMessage(bool, text) {
        const message = document.getElementById('message');
        if (bool == true) {
            message.style.display = 'block';
            message.textContent = text;
        } else {
            message.style.display = 'none';
        }
    }

    selectAllandDeSelectAll() {
        let checkboxes = document.getElementsByName('chk');
        let selectAllBox = this.querySelector('#checkbox-select-all');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                if (this.querySelector('#checkbox-select-all').checked === true) {
                    checkboxes[i].checked = true;
                }
                if (this.querySelector('#checkbox-select-all').checked === false) {
                    checkboxes[i].checked = false;
                }
            }
        }
    }


    goedkeuren(e) {
        e.preventDefault();
        document.getElementById('message').textContent = '';
        this.getSelectedTentamens();

        storage.getSavedTentamens().map(tentamen => {

            const nieuweOpleiding = tentamen.nieuwTentamen.opleiding;
            const nieuweCode = tentamen.nieuwTentamen.code;
            const nieuweNaam = tentamen.nieuwTentamen.naam;
            const nieuweToets = tentamen.nieuwTentamen.toetsvorm;
            const nieuweWeging = tentamen.nieuwTentamen.weging;
            const nieuweEC = tentamen.nieuwTentamen.ec;
            const nieuwePeriode = tentamen.nieuwTentamen.periode;
            const leider = tentamen.nieuwTentamen.leider;
            const opmerking = tentamen.nieuwTentamen.opmerking;

            const nieuw = new Tentamen(nieuweOpleiding, nieuweCode, nieuweNaam, nieuweToets, nieuweWeging, nieuweEC, nieuwePeriode, leider, opmerking, null);

            const oudeOpleiding = tentamen.opleiding;
            const oudeCode = tentamen.code;
            const oudeNaam = tentamen.naam;
            const oudeToets = tentamen.toetsvorm;
            const oudeWeging = tentamen.weging;
            const oudeEC = tentamen.ec;

            if (!nieuweOpleiding ||
                !nieuweCode ||
                !nieuweNaam ||
                !nieuweToets ||
                nieuweWeging == null ||
                nieuweEC == null ||
                !nieuwePeriode ||
                !leider ||
                !oudeOpleiding ||
                !oudeCode ||
                !oudeNaam ||
                !oudeToets ||
                oudeWeging == null ||
                oudeEC == null) {
                this.toggleMessage(true, 'Een of meerdere tentamens niet volledig ingevuld.');
                e.preventDefault();
                return;
            }

            const oud = new Tentamen(oudeOpleiding, oudeCode, oudeNaam, oudeToets, oudeWeging, oudeEC, null, null, null, nieuw);

            storage.deleteDraftTentamen(tentamen.id);
            storage.saveTentamen(oud);
            storage.deleteSavedTentamen(tentamen.id)

        })
        sessionStorage.setItem('saved-selected-tentamens', '[]');

        if (storage.getAllSelectedTentamenId().length === 0) {
            this.toggleMessage(true, 'U heeft niks geselecteerd.');
        }

        if (document.getElementById('message').textContent === '') {
            window.location.reload();
        }
    }

    afkeuren(e) {
        e.preventDefault();
        document.getElementById('message').textContent = '';

        storage.getAllSelectedTentamenId().map(id => {
            storage.deleteDraftTentamen(id);
        })

        if (storage.getAllSelectedTentamenId().length === 0) {
            this.toggleMessage(true, 'U heeft niks geselecteerd');
            return;
        }
        if (document.getElementById('message').textContent === '') {
            window.location.reload();
        }
    }

    autokeuren(e) {
        e.preventDefault();

        let draftTentamens = storage.getDraftTentamens();
        let checkboxes = document.querySelectorAll("input[type=checkbox][id=checkbox-tentamen]");
        let auto_tentamens = [];

        Array.from(checkboxes)
            .map(i => {
                for (var x = 0; x < draftTentamens.length; x++) {
                    if (draftTentamens[x].id === i.value) {
                        if (!(draftTentamens[x].nieuwTentamen.opleiding === undefined ||
                            draftTentamens[x].nieuwTentamen.code === undefined ||
                            draftTentamens[x].nieuwTentamen.naam === undefined ||
                            draftTentamens[x].nieuwTentamen.toetsvorm === undefined ||
                            draftTentamens[x].nieuwTentamen.weging === undefined ||
                            draftTentamens[x].nieuwTentamen.periode === undefined ||
                            draftTentamens[x].nieuwTentamen.leider === undefined ||
                            draftTentamens[x].nieuwTentamen.ec === undefined ||
                            draftTentamens[x].opleiding === undefined ||
                            draftTentamens[x].code === undefined ||
                            draftTentamens[x].naam === undefined ||
                            draftTentamens[x].toetsvorm === undefined ||
                            draftTentamens[x].weging === undefined ||
                            draftTentamens[x].ec === undefined)) {

                            auto_tentamens.push(draftTentamens[x])
                            i.checked = true;
                            this.tentamensSelected =
                                Array.from(checkboxes)
                                    .filter(i => i.checked)
                                    .map(i => i.value)
                            sessionStorage.setItem('selected-tentamens-id', JSON.stringify(this.tentamensSelected))
                            sessionStorage.setItem('saved-tentamens-id', JSON.stringify(this.tentamensSelected))
                        } else {
                            i.checked = false;
                        }
                        sessionStorage.setItem('auto-tentamens', JSON.stringify(auto_tentamens))
                    }
                }
            })

        if (storage.getAllSelectedTentamenId().length === 0) {
            this.toggleMessage(true, 'Een of meerdere tentamens niet volledig ingevuld.')
        }

        this.goedkeuren(e);
    }

    loadSelectedCheckboxes() {
        let checkboxes = document.querySelectorAll("input[type=checkbox][id=checkbox-tentamen]");
        let ids = storage.getSavedTentamenId();

        if (ids.length > 0) {
            Array.from(checkboxes)
                .map(i => {
                    for (var x = 0; x < ids.length; x++) {
                        if (i.value === ids[x]) {
                            i.checked = true;
                        }
                    }
                })
            this.loadSelectedBoxesId();
        }
    }

}

customElements.define('keur-tabel', keurTabel);