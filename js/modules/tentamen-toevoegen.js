import * as storage from '../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from "../domein/tentamen";

export class TentamenToevoegen extends LitElement {

    static get properties() {
        return {
            tentamen: {type: Tentamen}
        }
    }

    render() {
        return html`
            <form @submit="${this.submit}">
                <div class="row">
                    <div class="col-md-6">
                        <p style="font-weight: bold">Oud Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-oud" class="col-4 col-form-label"
                                   aria-label="Oude opleiding">Opleiding: *</label>
                            <div class="col-8">
                                <input id="opleiding-oud" name="opleiding-oud" placeholder="Opleiding" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-oud" class="col-4 col-form-label"
                                   aria-label="Oude code">Code: *</label>
                            <div class="col-8">
                                <input id="code-oud" name="code-oud" placeholder="Code" type="text" class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-oud" class="col-4 col-form-label"
                                   aria-label="Oude naam">Naam: *</label>
                            <div class="col-8">
                                <input id="naam-oud" name="naam-oud" placeholder="Naam" type="text" class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-oud" class="col-4 col-form-label"
                                   aria-label="Oude toetsvorm">Toetsvorm: *</label>
                            <div class="col-8">
                                <input id="toetsvorm-oud" name="toetsvorm-oud" placeholder="Toetsvorm" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-oud" class="col-8 col-form-label"
                                           aria-label="Oude weging">Weging: *</label>
                                    <div class="col-4">
                                        <input id="weging-oud" name="weging-oud" class="form-control"
                                               required="required" type="number" step="0.1" value="1"
                                               aria-required="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-oud" class="col-8 col-form-label"
                                           aria-label="Oude EC">EC: *</label>
                                    <div class="col-4">
                                        <input id="ec-oud" name="ec-oud" class="form-control" required="required"
                                               type="number" step="0.1" value="1" aria-required="true">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p style="font-weight: bold">Nieuw Tentamen</p>
                        <hr style="background-color: #000000FF;border: 0 none;height: 1px;">
                        <div class="form-group row">
                            <label for="opleiding-nieuw" class="col-4 col-form-label"
                                   aria-label="Nieuwe opleiding">Opleiding: *</label>
                            <div class="col-8">
                                <input id="opleiding-nieuw" name="opleiding-nieuw" placeholder="Opleiding" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="code-nieuw" class="col-4 col-form-label" aria-label="Nieuwe code ">Code:
                                *</label>
                            <div class="col-8">
                                <input id="code-nieuw" name="code-nieuw" placeholder="Code" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="naam-nieuw" class="col-4 col-form-label" aria-label="Nieuwe naam ">Naam:
                                *</label>
                            <div class="col-8">
                                <input id="naam-nieuw" name="naam-nieuw" placeholder="Naam" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="toetsvorm-nieuw" class="col-4 col-form-label" aria-label="Nieuwe toetsvorm">Toetsvorm:
                                *</label>
                            <div class="col-8">
                                <input id="toetsvorm-nieuw" name="toetsvorm-nieuw" placeholder="Toetsvorm" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="weging-nieuw" class="col-8 col-form-label" aria-label="Nieuwe weging">Weging:
                                        *</label>
                                    <div class="col-4">
                                        <input id="weging-nieuw" name="weging-nieuw" class="form-control"
                                               required="required" type="number" step="0.1" value="1"
                                               aria-required="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label for="ec-nieuw" class="col-8 col-form-label"
                                           aria-label="Nieuwe ec">EC: *</label>
                                    <div class="col-4">
                                        <input id="ec-nieuw" name="ec-nieuw" class="form-control" required="required"
                                               type="number" step="0.1" value="1" aria-required="true">
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
                                <input id="periode" name="periode" placeholder="Periode" type="text"
                                       class="form-control" required="required" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="leider" class="col-4 col-form-label">Leider: *</label>
                            <div class="col-8">
                                <input id="leider" name="leider" placeholder="Leider" type="text" class="form-control"
                                       required="required" aria-required="true">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group row">
                            <label for="opmerking" class="col-4 col-form-label">Opmerking:</label>
                            <div class="col-8">
                                    <textarea id="opmerking" name="opmerking" placeholder="Opmerking" cols="40" rows="4"
                                              class="form-control"></textarea>
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

    submit(event) {
        event.preventDefault();

        const nieuwTentamen = new Tentamen(
            document.getElementById('opleiding-nieuw').value,
            document.getElementById('code-nieuw').value,
            document.getElementById('naam-nieuw').value,
            document.getElementById('toetsvorm-nieuw').value,
            document.getElementById('weging-nieuw').value,
            document.getElementById('ec-nieuw').value,
            document.getElementById('periode').value,
            document.getElementById('opmerking').value,
            document.getElementById('leider').value,
            null);

        const oudTentamen = new Tentamen(
            document.getElementById('opleiding-oud').value,
            document.getElementById('code-oud').value,
            document.getElementById('naam-oud').value,
            document.getElementById('toetsvorm-oud').value,
            document.getElementById('weging-oud').value,
            document.getElementById('ec-oud').value,
            null, null, null,
            nieuwTentamen);

        storage.saveTentamen(oudTentamen);

        window.location = '/pages/home.html';
    }

}

customElements.define('tentamen-toevoegen-component', TentamenToevoegen);