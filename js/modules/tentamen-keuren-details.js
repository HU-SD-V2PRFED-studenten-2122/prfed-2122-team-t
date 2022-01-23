import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";
import {checkLoggedIn} from "../storage.js";

export class TentamenKeurenDetails extends LitElement {

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
                        <p style="font-weight: bold">Oud Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-oud" class="col-4 col-form-label" aria-label="Oude opleiding" style="font-family: 'Segoe UI Semibold'">Opleiding:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.opleiding}" id="opleiding-oud" name="opleiding-oud"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-oud" class="col-4 col-form-label" aria-label="Oude code" style="font-family: 'Segoe UI Semibold'">Code:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.code}" id="code-oud" name="code-oud"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-oud" class="col-4 col-form-label" aria-label="Oude naam" style="font-family: 'Segoe UI Semibold'">Naam:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.naam}" id="naam-oud" name="naam-oud"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-oud" class="col-4 col-form-label" aria-label="Oude toetsvorm" style="font-family: 'Segoe UI Semibold'">Toetsvorm:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.toetsvorm}" id="toetsvorm-oud" name="toetsvorm-oud"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-oud" class="col-8 col-form-label" aria-label="Oude weging" style="font-family: 'Segoe UI Semibold'">Weging:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.weging}" id="weging-oud" name="weging-oud"
                                               type="test" class="form-control-plaintext" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-oud" class="col-8 col-form-label" aria-label="Oude EC" style="font-family: 'Segoe UI Semibold'">EC:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.ec}" id="ec-oud" name="ec-oud"
                                               type="test" class="form-control-plaintext" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p style="font-weight: bold">Nieuw Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-nieuw" class="col-4 col-form-label" aria-label="Nieuwe opleiding" style="font-family: 'Segoe UI Semibold'">Opleiding:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.opleiding}" id="opleiding-nieuw"
                                       name="opleiding-nieuw" type="text"
                                       class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-nieuw" class="col-4 col-form-label" aria-label="Nieuwe code" style="font-family: 'Segoe UI Semibold'">Code:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.code}" id="code-nieuw" name="code-nieuw"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-nieuw" class="col-4 col-form-label" aria-label="Nieuwe naam" style="font-family: 'Segoe UI Semibold'">Naam:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.naam}" id="naam-nieuw" name="naam-nieuw"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-nieuw" class="col-4 col-form-label" aria-label="Nieuwe toetsvorm" style="font-family: 'Segoe UI Semibold'">Toetsvorm:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.toetsvorm}" id="toetsvorm-nieuw"
                                       name="toetsvorm-nieuw" type="text"
                                       class="form-control-plaintext" readonly>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-nieuw" class="col-8 col-form-label" aria-label="Nieuwe weging" style="font-family: 'Segoe UI Semibold'">Weging:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.weging}" id="weging-nieuw"
                                               name="weging-nieuw" type="text" class="form-control-plaintext" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-nieuw" class="col-8 col-form-label"
                                           aria-label="Nieuwe ec" style="font-family: 'Segoe UI Semibold'">EC:</label>
                                    <div class="col-4">
                                        <input value="${this.tentamen.nieuwTentamen.ec}" id="ec-nieuw" name="ec-nieuw"
                                               type="text" class="form-control-plaintext" readonly>
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
                            <label for="periode" class="col-4 col-form-label" style="font-family: 'Segoe UI Semibold'">Periode:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.periode}" id="periode" name="periode"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="leider" class="col-4 col-form-label" style="font-family: 'Segoe UI Semibold'">Leider:</label>
                            <div class="col-8">
                                <input value="${this.tentamen.nieuwTentamen.leider}" id="leider" name="leider"
                                       type="text" class="form-control-plaintext" readonly>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group row">
                            <label for="opmerking" class="col-4 col-form-label" style="font-family: 'Segoe UI Semibold'">Opmerking:</label>
                            <div class="col-8">
                                    <textarea id="opmerking" name="opmerking" cols="40" rows="4"
                                              class="form-control-plaintext"
                                              readonly> ${this.tentamen.nieuwTentamen.opmerking} </textarea>
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

        this.tentamen = storage.findDraftTentamenById(getParam('id'));
    }
}

export class TentamenKeurenDetailsButtons extends LitElement {

    static get properties() {
        return {
            'id': {attribute: false}
        };
    }

    render() {
        if (!storage.checkLoggedIn())
            return;

        return html`
            <a href="../../pages/tentamen-keuren-aanpassen.html?id=${this.id}" class="btn btn-primary float-right">Wijzigen</a>            
        `;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.id = getParam('id');
    }    
}

function getParam(name) {
    const parts = window.location.href.split('?');

    if (parts.length > 1) {
        name = encodeURIComponent(name);
        const params = parts[1].split('&');
        const found = params.filter(el => (el.split('=')[0] === name) && el);
        if (found.length) return decodeURIComponent(found[0].split('=')[1]);
    }
}

customElements.define('tentamen-keuren-details-component', TentamenKeurenDetails);
customElements.define('tentamen-keuren-wijzigen-btn-component', TentamenKeurenDetailsButtons);