import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";

export class TentamenAanpassen extends LitElement {

    static get properties() {
        return {
            mode: {type: String},
            editBaar: {type: String},
            tentamen: {type: Tentamen}
        }
    }

    render() {
        return html`
            <form id="aanpassen-form" @submit="${this.submitChanges}">
                <div class="row">
                    <div class="col-md-6">
                        <p style="font-weight: bold">Oud Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-oud" class="col-4 col-form-label" aria-label="Oude opleiding">Opleiding:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.opleiding}" id="opleiding-oud" name="opleiding-oud"
                                       placeholder="Opleiding" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-oud" class="col-4 col-form-label" aria-label="Oude code">Code: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.code}" id="code-oud" name="code-oud" placeholder="Code"
                                       type="text" class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-oud" class="col-4 col-form-label" aria-label="Oude naam">Naam: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.naam}" id="naam-oud" name="naam-oud" placeholder="Naam"
                                       type="text" class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-oud" class="col-4 col-form-label" aria-label="Oude toetsvorm">Toetsvorm:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.toetsvorm}" id="toetsvorm-oud" name="toetsvorm-oud"
                                       placeholder="Toetsvorm" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-oud" class="col-8 col-form-label" aria-label="Oude weging">Weging:
                                        *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.weging}" id="weging-oud" name="weging-oud"
                                               class="form-control"
                                               required="required" type="number" step="0.1" aria-required="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-oud" class="col-8 col-form-label" aria-label="Oude EC">EC: *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.ec}" id="ec-oud" name="ec-oud"
                                               class="form-control" required="required"
                                               type="number" step="0.1" aria-required="true">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p style="font-weight: bold">Nieuw Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-nieuw" class="col-4 col-form-label" aria-label="Nieuwe opleiding">Opleiding:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.opleiding}" id="opleiding-nieuw"
                                       name="opleiding-nieuw" placeholder="Opleiding" type="text"
                                       class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-nieuw" class="col-4 col-form-label" aria-label="Nieuwe code">Code:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.code}" id="code-nieuw" name="code-nieuw"
                                       placeholder="Code" type="text"
                                       class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-nieuw" class="col-4 col-form-label" aria-label="Nieuwe naam">Naam:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.naam}" id="naam-nieuw" name="naam-nieuw"
                                       placeholder="Naam" type="text"
                                       class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-nieuw" class="col-4 col-form-label" aria-label="Nieuwe toetsvorm">Toetsvorm:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.toetsvorm}" id="toetsvorm-nieuw"
                                       name="toetsvorm-nieuw" placeholder="Toetsvorm" type="text"
                                       class="form-control aria-required=" true"">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-nieuw" class="col-8 col-form-label" aria-label="Nieuwe weging">Weging:
                                        *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.weging}" id="weging-nieuw"
                                               name="weging-nieuw" class="form-control"
                                               required="required" type="number" step="0.1" aria-required="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-nieuw" class="col-8 col-form-label"
                                           aria-label="Nieuwe ec">EC: *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.ec}" id="ec-nieuw" name="ec-nieuw"
                                               class="form-control" required="required"
                                               type="number" step="0.1" aria-required="true">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="width: 100%; padding: 0 15px 0 15px;">
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                    </div>

                    <div class="col-md-6">
                        <div class="form-group row">
                            <label for="periode" class="col-4 col-form-label">Periode: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.periode}" id="periode" name="periode"
                                       placeholder="Periode" type="text"
                                       class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="leider" class="col-4 col-form-label">Leider: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.leider}" id="leider" name="leider"
                                       placeholder="Leider" type="text" class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group row">
                            <label for="opmerking" class="col-4 col-form-label">Opmerking:</label>
                            <div class="col-8">
                                    <textarea id="opmerking" name="opmerking" placeholder="Opmerking" cols="40" rows="4"
                                              class="form-control">${this.tentamen.nieuwTentamen.opmerking}</textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="btn btn-primary float-right" id="opslaanButton">Opslaan</button>
                <button class="btn btn-primary float-right" @click="${this.formSwitch}" id="aanpassenKnop">
                    Aanpassen
                </button>
            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this.setTentamen();
    }

    setTentamen() {
        if (this.mode === 'archief') {
            this.tentamen = storage.findArchiefTentamenById(storage.getParam('id'));
        } else if (this.mode === 'keuren') {
            this.tentamen = storage.findDraftTentamenById(storage.getParam('id'));
        } else {
            this.tentamen = storage.findTentamenById(storage.getParam('id'));
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.setForm();
    }

    setForm() {
        if (this.mode === 'archief') {
            this.formSwitch();
        } else if (this.mode === 'keuren') {
            this.formSwitch();
        } else {
            document.getElementById("aanpassenKnop").style.display = "none";
        }
    }

    formSwitch() {
        const inputFields = document.getElementById('aanpassen-form').querySelectorAll('input, textarea');

        const opslaanButton = document.getElementById('opslaanButton');
        const aanpassenButton = document.getElementById('aanpassenKnop');

        if (opslaanButton.getAttribute('disabled')) {

            for (const fields of inputFields) {
                fields.removeAttribute("readonly");
            }
            opslaanButton.removeAttribute("disabled");
            aanpassenButton.setAttribute("disabled", 'true');

        } else {

            for (const fields of inputFields) {
                fields.setAttribute("readonly", 'true');
            }
            aanpassenButton.removeAttribute("disabled");
            opslaanButton.setAttribute("disabled", 'true');

        }
    }

    submitChanges(event) {
        event.preventDefault();

        const tentamen = this.tentamen;

        tentamen.opleiding = document.getElementById('opleiding-oud').value;
        tentamen.naam = document.getElementById('naam-oud').value;
        tentamen.weging = document.getElementById('weging-oud').value;
        tentamen.ec = document.getElementById('ec-oud').value;
        tentamen.code = document.getElementById('code-oud').value;
        tentamen.toetsvorm = document.getElementById('toetsvorm-oud').value;

        tentamen.nieuwTentamen.opleiding = document.getElementById('opleiding-nieuw').value;
        tentamen.nieuwTentamen.naam = document.getElementById('naam-nieuw').value;
        tentamen.nieuwTentamen.weging = document.getElementById('weging-nieuw').value;
        tentamen.nieuwTentamen.ec = document.getElementById('ec-nieuw').value;
        tentamen.nieuwTentamen.code = document.getElementById('code-nieuw').value;
        tentamen.nieuwTentamen.toetsvorm = document.getElementById('toetsvorm-nieuw').value;

        tentamen.nieuwTentamen.periode = document.getElementById('periode').value;
        tentamen.nieuwTentamen.opmerking = document.getElementById('opmerking').value;
        tentamen.nieuwTentamen.leider = document.getElementById('leider').value;

        if (this.mode === 'archief') {
            storage.editArchiefTentamen(tentamen.id, tentamen);
            this.formSwitch();
        } else if (this.mode === 'keuren') {
            storage.editDraftTentamen(tentamen.id, tentamen);
            this.formSwitch();
        } else {
            storage.editTentamen(tentamen.id, tentamen);
            window.location = '/pages/tentamen.html?id=' + tentamen.id;
        }
    }
}

customElements.define('tentamen-aanpassen-component', TentamenAanpassen);