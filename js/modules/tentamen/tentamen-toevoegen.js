import * as storage from '../../storage.js'
import {LitElement, html} from "lit";

import {Tentamen} from '../../domein/tentamen'
import '../form/form-group-textarea'
import '../form/form-group-text'
import '../form/form-group-number'

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
                        
                        <hr>
                        
                        <form-group-text-component name="opleiding-oud" ariaLabelText="Oude opleiding" text="Opleiding" placeholder="Opleiding" colSize="8"></form-group-text-component>
                        <form-group-text-component name="code-oud" ariaLabelText="Oude code" text="Code" placeholder="Code" colSize="8"></form-group-text-component>
                        <form-group-text-component name="naam-oud" ariaLabelText="Oude naam" text="Naam" placeholder="Naam" colSize="8"></form-group-text-component>
                        <form-group-text-component name="toetsvorm-oud" ariaLabelText="Oude toetsvorm" text="Toetsvorm" placeholder="Toetsvorm" colSize="8"></form-group-text-component>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <form-group-number-component name="weging-oud" ariaLabelText="Oude weging" text="Weging" placeholder="Weging" colSize="4" value="1"></form-group-number-component>
                            </div>
                            <div class="col-md-6">
                                <form-group-number-component name="ec-oud" ariaLabelText="Oude EC" text="EC" placeholder="EC" colSize="4" value="1"></form-group-number-component>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p style="font-weight: bold">Nieuw Tentamen</p>
                        
                        <hr>

                        <form-group-text-component name="opleiding-nieuw" ariaLabelText="Nieuwe opleiding" text="Opleiding" placeholder="Opleiding" colSize="8"></form-group-text-component>
                        <form-group-text-component name="code-nieuw" ariaLabelText="Nieuwe code" text="Code" placeholder="Code" colSize="8"></form-group-text-component>
                        <form-group-text-component name="naam-nieuw" ariaLabelText="Nieuwe naam" text="Naam" placeholder="Naam" colSize="8"></form-group-text-component>
                        <form-group-text-component name="toetsvorm-nieuw" ariaLabelText="Nieuwe toetsvorm" text="Toetsvorm" placeholder="Toetsvorm" colSize="8"></form-group-text-component>

                        <div class="row">
                            <div class="col-md-6">
                                <form-group-number-component name="weging-nieuw" ariaLabelText="Oude weging" text="Weging" placeholder="Weging" colSize="4" value="1"></form-group-number-component>
                            </div>
                            <div class="col-md-6">
                                <form-group-number-component name="ec-nieuw" ariaLabelText="Oude EC" text="EC" placeholder="EC" colSize="4" value="1"></form-group-number-component>
                            </div>
                        </div>
                    </div>

                    <div style="width: 100%; padding: 0 15px 0 15px;">
                        <hr>
                    </div>

                    <div class="col-md-6">
                        <form-group-text-component name="periode" ariaLabelText="Periode" text="Periode" placeholder="Periode" colSize="8"></form-group-text-component>
                        <form-group-text-component name="leider" ariaLabelText="Leider" text="Leider" placeholder="Leider" colSize="8"></form-group-text-component>
                    </div>

                    <div class="col-md-6">
                        <form-group-textarea-component name="opmerking" ariaLabelText="Opmerking" text="Opmerking" placeholder="Opmerking" colSize="8"></form-group-textarea-component>
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

        window.location = '../../../pages/home.html';
    }
}

customElements.define('tentamen-toevoegen-component', TentamenToevoegen);