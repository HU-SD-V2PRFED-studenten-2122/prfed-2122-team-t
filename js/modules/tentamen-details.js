import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";
import {checkLoggedIn} from "../storage.js";

export class TentamenDetails extends LitElement {

    static get properties() {
        return {
            tentamen: {type: Tentamen}
        }
    }

    render() {
        return html`
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <p>Oud Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-oud" class="col-4 col-form-label" aria-label="Oude opleiding">Opleiding:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.opleiding}" id="opleiding-oud" name="opleiding-oud" placeholder="Opleiding" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-oud" class="col-4 col-form-label" aria-label="Oude code">Code:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.code}" id="code-oud" name="code-oud" placeholder="Code" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-oud" class="col-4 col-form-label" aria-label="Oude naam">Naam:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.naam}" id="naam-oud" name="naam-oud" placeholder="Naam" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-oud" class="col-4 col-form-label" aria-label="Oude toetsvorm">Toetsvorm:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.toetsvorm}" id="toetsvorm-oud" name="toetsvorm-oud" placeholder="Toetsvorm" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-oud" class="col-8 col-form-label" aria-label="Oude weging">Weging:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.weging}" id="weging-oud" name="weging-oud" class="form-control" type="test" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-oud" class="col-8 col-form-label" aria-label="Oude EC">EC:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.ec}" id="ec-oud" name="ec-oud" class="form-control" type="test" disabled>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p>Nieuw Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-nieuw" class="col-4 col-form-label" aria-label="Nieuwe opleiding">Opleiding:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.opleiding}" id="opleiding-nieuw" name="opleiding-nieuw" placeholder="Opleiding" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-nieuw" class="col-4 col-form-label" aria-label="Nieuwe code">Code:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.code}" id="code-nieuw" name="code-nieuw" placeholder="Code" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-nieuw" class="col-4 col-form-label" aria-label="Nieuwe naam">Naam:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.naam}" id="naam-nieuw" name="naam-nieuw" placeholder="Naam" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-nieuw" class="col-4 col-form-label" aria-label="Nieuwe toetsvorm">Toetsvorm:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.toetsvorm}" id="toetsvorm-nieuw" name="toetsvorm-nieuw" placeholder="Toetsvorm" type="text" class="form-control" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-nieuw" class="col-8 col-form-label" aria-label="Nieuwe weging">Weging:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.weging}" id="weging-nieuw" name="weging-nieuw" class="form-control" type="text" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-nieuw" class="col-8 col-form-label"aria-label="Nieuwe ec">EC:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.ec}" id="ec-nieuw" name="ec-nieuw" class="form-control" type="text" disabled>
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
                            <label for="periode" class="col-4 col-form-label">Periode:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.periode}" id="periode" name="periode" placeholder="Periode" type="text" class="form-control" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="leider" class="col-4 col-form-label">Leider:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.leider}" id="leider" name="leider" placeholder="Leider" type="text" class="form-control" disabled>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group row">
                            <label for="opmerking" class="col-4 col-form-label">Opmerking:</label>
                            <div class="col-8">
                                    <textarea id="opmerking" name="opmerking" placeholder="Opmerking" cols="40" rows="4"
                                              class="form-control" disabled>${this.tentamen.nieuwTentamen.opmerking}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.tentamen = storage.findTentamenById(getParam('id'));
    }
}

export class TentamenDetailsButtons extends LitElement {

    static get properties() {
        return {
            'id': {attribute:false}
        };
    }

    render() {
        if (!storage.checkLoggedIn())
            return;

        return html`
            <a href="../../pages/tentamen-aanpassen.html?id=${this.id}" class="btn btn-primary float-right">Wijzigen</a>
            <a href="#" @click="${this.archiveren}" class="btn btn-danger float-right">Archiveren</a>
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.id = getParam('id');
    }

    archiveren() {
        storage.archiveerTentamen(storage.findTentamenById(this.id));
        storage.deleteTentamen(this.id);

        window.location = '/pages/home.html'
    }
}

function getParam(name){
    const parts = window.location.href.split('?');

    if (parts.length > 1) {
        name = encodeURIComponent(name);
        const params = parts[1].split('&');
        const found = params.filter(el => (el.split('=')[0] === name) && el);
        if (found.length) return decodeURIComponent(found[0].split('=')[1]);
    }
}

customElements.define('tentamen-details-component', TentamenDetails);
customElements.define('tentamen-details-buttons-component', TentamenDetailsButtons);