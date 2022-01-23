import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";

export class TentamenKeurenAanpassen extends LitElement {

    static get properties() {
        return {
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

                <button class="btn btn-primary float-right">Opslaan</button>
            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        console.log(storage.getDraftTentamens())
        console.log(storage.findDraftTentamenById('15dae9f6-fea7-434f-b917-eeb51e67bfaa'))

        this.tentamen = storage.findDraftTentamenById(this.getParam('id'));
        console.log(this.tentamen)
    }

    submitChanges(event) {
        event.preventDefault();

        const tentamen = storage.findDraftTentamenById(this.getParam('id'));

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

        storage.editDraftTentamen(tentamen.id, tentamen);

        window.location = '/pages/tentamen-keuren-details.html?id=' + tentamen.id;

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

customElements.define('tentamen-keuren-aanpassen-component', TentamenKeurenAanpassen);