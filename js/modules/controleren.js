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
                    <div class="col-lg-6">
                        <p>Oud</p>

                        <hr>

                        <div class="form-group">
                            <label for="oudeOpleiding">Opleiding</label>
                            <input value="${this.tentamen.opleiding}" type="text" id="oudeOpleiding" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="oudeCode">Code</label>
                            <input value="${this.tentamen.code}" type="text" id="oudeCode" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="oudeNaam">Naam</label>
                            <input value="${this.tentamen.naam}" type="text" id="oudeNaam" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="oudeToets">Toets</label>
                            <input value="${this.tentamen.toetsvorm}" type="text" id="oudeToets" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="oudeWeging">Weging</label>
                            <input step="0.1" value="${this.tentamen.weging}" type="number" min="0" max="100" id="oudeWeging" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="oudeEC">EC</label>
                            <input step="0.1" value="${this.tentamen.ec}" type="number" min="0" max="60" id="oudeEC" class="form-control">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <p>Nieuw</p>

                        <hr>

                        <div class="form-group">
                            <label for="nieuweOpleiding">Opleiding</label>
                            <input value="${this.tentamen.nieuwTentamen.opleiding}" type="text" id="nieuweOpleiding" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nieuweCode">Code</label>
                            <input value="${this.tentamen.nieuwTentamen.code}" type="text" id="nieuweCode" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nieuweNaam">Naam</label>
                            <input value="${this.tentamen.nieuwTentamen.naam}" type="text" id="nieuweNaam" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nieuweToets">Toets</label>
                            <input value="${this.tentamen.nieuwTentamen.toetsvorm}" type="text" id="nieuweToets" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nieuweWeging">Weging</label>
                            <input step="0.1" value="${this.tentamen.nieuwTentamen.weging}" type="number" min="0" max="100" id="nieuweWeging" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nieuweEC">EC</label>
                            <input step="0.1" value="${this.tentamen.nieuwTentamen.ec}" type="number" min="0" max="60" id="nieuweEC" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="nieuwePeriode">Periode</label>
                            <input value="${this.tentamen.nieuwTentamen.periode}" type="text" id="nieuwePeriode" class="form-control">
                        </div>
                    </div>

                </div>

                <hr>

                <div class="form-group">
                    <label for="leider">Leider</label>
                    <input value="${this.tentamen.nieuwTentamen.leider}" type="text" id="leider" class="form-control">
                </div>

                <div class="form-group">
                    <label for="opmerkingen">Opmerkingen</label>
                    <textarea id="opmerking" cols="30" rows="3" class="form-control">${this.tentamen.nieuwTentamen.opmerking}</textarea>
                </div>

                <button class="btn btn-success" id="goedkeuren" @click="${this.goedkeuren}">Goedkeuren</button>
                <button class="btn btn-danger" id="afkeuren" @click="${this.afkeuren}">Afkeuren</button>

            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.tentamen = new Tentamen(null, null,null,null,null,null,null,null,null, new Tentamen(null, null,null,null,null,null,null,null,null,null));
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.showNext();
    }

    showNext() {
        if (storage.getDraftTentamens() == null)
        {
            if (this.tentamen == null)
                return;

            document.getElementById('goedkeuren').disabled = true;
            document.getElementById('afkeuren').disabled = true;
            return;
        }

        this.tentamen = storage.getDraftTentamens()[0];
    }

    goedkeuren(e) {
        const nieuweOpleiding = document.getElementById('nieuweOpleiding').value;
        const nieuweCode = document.getElementById('nieuweCode').value;
        const nieuweNaam = document.getElementById('nieuweNaam').value;
        const nieuweToets = document.getElementById('nieuweToets').value;
        const nieuweWeging = document.getElementById('nieuweWeging').value;
        const nieuweEC = document.getElementById('nieuweEC').value;
        const nieuwePeriode = document.getElementById('nieuwePeriode').value;
        const leider = document.getElementById('leider').value;
        const opmerking = document.getElementById('opmerking').value;
        const nieuw = new Tentamen(nieuweOpleiding, nieuweCode, nieuweNaam, nieuweToets, nieuweWeging, nieuweEC, nieuwePeriode, leider, opmerking, null);

        const oudeOpleiding = document.getElementById('oudeOpleiding').value;
        const oudeCode = document.getElementById('oudeCode').value;
        const oudeNaam = document.getElementById('oudeNaam').value;
        const oudeToets = document.getElementById('oudeToets').value;
        const oudeWeging = document.getElementById('oudeWeging').value;
        const oudeEC = document.getElementById('oudeEC').value;
        const oud = new Tentamen(oudeOpleiding, oudeCode, oudeNaam, oudeToets, oudeWeging, oudeEC, null, null, null, nieuw);

        storage.deleteDraftTentamen(this.tentamen.id);
        storage.saveTentamen(oud);
    }

    afkeuren(e) {
        storage.deleteDraftTentamen(this.tentamen.id);
    }
}

customElements.define('controleer-element', Controleren);