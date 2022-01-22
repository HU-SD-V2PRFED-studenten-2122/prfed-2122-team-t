import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";

export class TentamenAanpassen extends LitElement {

    static get properties() {
        return {
            archief:{type: String},
            editBaar:{type: String},
            tentamen: {type: Tentamen}
        }
    }

    render() {
        return html`
            <form @submit="${this.submitChanges}">
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
                <button class="btn btn-primary float-right" @click="${this.makeFieldsEditable}" id="aanpassenKnop">Aanpassen</button>
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

    submitChanges(event) {
        event.preventDefault();

        const tentamen = this.getTentamen();

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

        if (this.archief=='true'){
            storage.editArchiefTentamen(tentamen.id, tentamen);
            window.location = '/pages/tentamen-archief.html?id=' + tentamen.id;
        }else {
            storage.editTentamen(tentamen.id, tentamen);
            window.location = '/pages/tentamen.html?id=' + tentamen.id;
        }
    }

    setTentamen(){
        if (this.archief=='true'){
            this.tentamen = storage.findArchiefTentamenById(this.getParam('id'));
        }else {
            this.tentamen = storage.findTentamenById(this.getParam('id'));
        }
    }

    getTentamen(){
        return this.tentamen;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.setForm();
    }

    makeFieldsReadOnly(){
        document.getElementById('opleiding-oud').setAttribute("readonly", true);
        document.getElementById('naam-oud').setAttribute("readonly", true);
        document.getElementById('weging-oud').setAttribute("readonly", true);
        document.getElementById('ec-oud').setAttribute("readonly", true);
        document.getElementById('code-oud').setAttribute("readonly", true);
        document.getElementById('toetsvorm-oud').setAttribute("readonly", true);

        document.getElementById('opleiding-nieuw').setAttribute("readonly", true);
        document.getElementById('naam-nieuw').setAttribute("readonly", true);
        document.getElementById('weging-nieuw').setAttribute("readonly", true);
        document.getElementById('ec-nieuw').setAttribute("readonly", true);
        document.getElementById('code-nieuw').setAttribute("readonly", true);
        document.getElementById('toetsvorm-nieuw').setAttribute("readonly", true);

        document.getElementById('periode').setAttribute("readonly", true);
        document.getElementById('opmerking').setAttribute("readonly", true);
        document.getElementById('leider').setAttribute("readonly", true);

        document.getElementById('opslaanButton').setAttribute("disabled", true);
    }

    makeFieldsEditable(){
        document.getElementById('opleiding-oud').removeAttribute("readonly");
        document.getElementById('naam-oud').removeAttribute("readonly");
        document.getElementById('weging-oud').removeAttribute("readonly");
        document.getElementById('ec-oud').removeAttribute("readonly");
        document.getElementById('code-oud').removeAttribute("readonly");
        document.getElementById('toetsvorm-oud').removeAttribute("readonly");

        document.getElementById('opleiding-nieuw').removeAttribute("readonly");
        document.getElementById('naam-nieuw').removeAttribute("readonly");
        document.getElementById('weging-nieuw').removeAttribute("readonly");
        document.getElementById('ec-nieuw').removeAttribute("readonly");
        document.getElementById('code-nieuw').removeAttribute("readonly");
        document.getElementById('toetsvorm-nieuw').removeAttribute("readonly");

        document.getElementById('periode').removeAttribute("readonly");
        document.getElementById('opmerking').removeAttribute("readonly");
        document.getElementById('leider').removeAttribute("readonly");
        document.getElementById('opslaanButton').removeAttribute("disabled");

        document.getElementById('aanpassenKnop').setAttribute("disabled", true);
    }

    setForm(){
        if (this.archief!='true'){
            document.getElementById("aanpassenKnop").style.display="none";
        }else {
            this.makeFieldsReadOnly();
        }
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

customElements.define('tentamen-aanpassen-component', TentamenAanpassen);