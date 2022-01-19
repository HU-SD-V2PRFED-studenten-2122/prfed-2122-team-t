import {html, LitElement} from "lit";
import * as storage from '../storage.js';
import {Tentamen} from "../domein/tentamen";

class Controleren extends LitElement {

    static get properties() {
        return {
            tentamen: {type: Tentamen}
        };
    }

    render() {
        return html`
            <form>
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
                                       class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-oud" class="col-4 col-form-label" aria-label="Oude code">Code: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.code}" id="code-oud" name="code-oud" placeholder="Code"
                                       type="text" class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-oud" class="col-4 col-form-label" aria-label="Oude naam">Naam: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.naam}" id="naam-oud" name="naam-oud" placeholder="Naam"
                                       type="text" class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-oud" class="col-4 col-form-label" aria-label="Oude toetsvorm">Toetsvorm:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.toetsvorm}" id="toetsvorm-oud" name="toetsvorm-oud"
                                       placeholder="Toetsvorm" type="text"
                                       class="form-control" aria-required="true">
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
                                               type="number" step="0.1" aria-required="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-oud" class="col-8 col-form-label" aria-label="Oude ec">EC: *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.ec}" id="ec-oud" name="ec-oud"
                                               class="form-control" type="number" step="0.1" aria-required="true">
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
                                       class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-nieuw" class="col-4 col-form-label" aria-label="Nieuwe code">Code:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.code}" id="code-nieuw" name="code-nieuw"
                                       placeholder="Code" type="text"
                                       class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-nieuw" class="col-4 col-form-label" aria-label="Nieuwe naam">Naam:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.naam}" id="naam-nieuw" name="naam-nieuw"
                                       placeholder="Naam" type="text"
                                       class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-nieuw" class="col-4 col-form-label" aria-label="Nieuwe toetsvorm">Toetsvorm:
                                *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.toetsvorm}" id="toetsvorm-nieuw"
                                       name="toetsvorm-nieuw" placeholder="Toetsvorm" type="text"
                                       class="form-control" aria-required="true">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-nieuw" class="col-8 col-form-label" aria-label="Nieuwe weging">Weging:
                                        *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.weging}" id="weging-nieuw"
                                               name="weging-nieuw" class="form-control" type="number" step="0.1"
                                               aria-required="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-nieuw" class="col-8 col-form-label" aria-label="Nieuwe ec">EC:
                                        *</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.ec}" id="ec-nieuw" name="ec-nieuw"
                                               class="form-control" type="number" step="0.1" aria-required="true">
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
                                       class="form-control" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="leider" class="col-4 col-form-label">Leider: *</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.leider}" id="leider" name="leider"
                                       placeholder="Leider" type="text" class="form-control" aria-required="true">
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

                <button class="btn btn-success float-right" id="goedkeuren" @click="${this.goedkeuren}">Goedkeuren
                </button>
                <button class="btn btn-danger float-right" style="margin-right: 10px;" id="afkeuren"
                        @click="${this.afkeuren}">Afkeuren
                </button>
            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.tentamen = new Tentamen(null, null, null, null, null, null, null, null, null, new Tentamen(null, null, null, null, null, null, null, null, null, null));
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.showNext();
    }

    showNext() {
        if (storage.getDraftTentamens() == null) {
            if (this.tentamen == null)
                return;

            document.getElementById('goedkeuren').disabled = true;
            document.getElementById('afkeuren').disabled = true;
            return;
        }

        this.tentamen = storage.getDraftTentamens()[0];
    }

    goedkeuren(e) {
        const nieuweOpleiding = document.getElementById('opleiding-nieuw').value;
        const nieuweCode = document.getElementById('code-nieuw').value;
        const nieuweNaam = document.getElementById('naam-nieuw').value;
        const nieuweToets = document.getElementById('toetsvorm-nieuw').value;
        const nieuweWeging = document.getElementById('weging-nieuw').value;
        const nieuweEC = document.getElementById('ec-nieuw').value;
        const nieuwePeriode = document.getElementById('periode').value;
        const leider = document.getElementById('leider').value;
        const opmerking = document.getElementById('opmerking').value;
        const nieuw = new Tentamen(nieuweOpleiding, nieuweCode, nieuweNaam, nieuweToets, nieuweWeging, nieuweEC, nieuwePeriode, leider, opmerking, null);

        const oudeOpleiding = document.getElementById('opleiding-oud').value;
        const oudeCode = document.getElementById('code-oud').value;
        const oudeNaam = document.getElementById('naam-oud').value;
        const oudeToets = document.getElementById('toetsvorm-oud').value;
        const oudeWeging = document.getElementById('weging-oud').value;
        const oudeEC = document.getElementById('ec-oud').value;

        const oud = new Tentamen(oudeOpleiding, oudeCode, oudeNaam, oudeToets, oudeWeging, oudeEC, null, null, null, nieuw);

        if (!oud.opleiding || !oud.code || !oud.naam || !oud.toetsvorm || !oud.weging || !oud.ec || !oud.nieuwTentamen.opleiding || !oud.nieuwTentamen.code ||
            !oud.nieuwTentamen.naam || !oud.nieuwTentamen.toetsvorm || !oud.nieuwTentamen.weging || !oud.nieuwTentamen.ec || !oud.nieuwTentamen.periode) {

            e.preventDefault();

            alert('Vul alle velden in.');
            return;
        }

        storage.deleteDraftTentamen(this.tentamen.id);
        storage.saveTentamen(oud);
    }

    afkeuren(e) {
        storage.deleteDraftTentamen(this.tentamen.id);
    }
}

customElements.define('controleer-element', Controleren);