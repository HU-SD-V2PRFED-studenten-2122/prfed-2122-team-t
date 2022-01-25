import * as storage from '../../storage.js'
import {LitElement, html} from "lit";

import {Tentamen} from '../../domein/tentamen'
import '../form/form-group-textarea'
import '../form/form-group-text'
import '../form/form-group-number'

export class TentamenAanpassen extends LitElement {

    static get properties() {
        return {
            mode: {type: String},
            tentamen: {type: Tentamen}
        }
    }

    render() {
        return html`
            <form id="aanpassen-form" @submit="${this.submitChanges}">
                <div class="row">
                    <div class="col-md-6">
                        <p style="font-weight: bold">Oud Tentamen</p>
                        
                        <hr>

                        <form-group-text-component name="opleiding-oud" ariaLabelText="Oude opleiding" text="Opleiding" placeholder="Opleiding" colSize="8" value="${this.tentamen.opleiding}"></form-group-text-component>
                        <form-group-text-component name="code-oud" ariaLabelText="Oude code" text="Code" placeholder="Code" colSize="8" value="${this.tentamen.code}"></form-group-text-component>
                        <form-group-text-component name="naam-oud" ariaLabelText="Oude naam" text="Naam" placeholder="Naam" colSize="8" value="${this.tentamen.naam}"></form-group-text-component>
                        <form-group-text-component name="toetsvorm-oud" ariaLabelText="Oude toetsvorm" text="Toetsvorm" placeholder="Toetsvorm" colSize="8" value="${this.tentamen.toetsvorm}"></form-group-text-component>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <form-group-number-component name="weging-oud" ariaLabelText="Oude weging" text="Weging" placeholder="Weging" colSize="4" value="${this.tentamen.weging}"></form-group-number-component>
                            </div>
                            <div class="col-md-6">
                                <form-group-number-component name="ec-oud" ariaLabelText="Oude EC" text="EC" placeholder="EC" colSize="4" value="${this.tentamen.ec}"></form-group-number-component>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p style="font-weight: bold">Nieuw Tentamen</p>
                        
                        <hr>
                        
                        <form-group-text-component name="opleiding-nieuw" ariaLabelText="Nieuwe opleiding" text="Opleiding" placeholder="Opleiding" colSize="8" value="${this.tentamen.nieuwTentamen.opleiding}"></form-group-text-component>
                        <form-group-text-component name="code-nieuw" ariaLabelText="Nieuwe code" text="Code" placeholder="Code" colSize="8" value="${this.tentamen.nieuwTentamen.code}"></form-group-text-component>
                        <form-group-text-component name="naam-nieuw" ariaLabelText="Nieuwe naam" text="Naam" placeholder="Naam" colSize="8" value="${this.tentamen.nieuwTentamen.naam}"></form-group-text-component>
                        <form-group-text-component name="toetsvorm-nieuw" ariaLabelText="Nieuwe toetsvorm" text="Toetsvorm" placeholder="Toetsvorm" colSize="8" value="${this.tentamen.nieuwTentamen.toetsvorm}"></form-group-text-component>

                        <div class="row">
                            <div class="col-md-6">
                                <form-group-number-component name="weging-nieuw" ariaLabelText="Oude weging" text="Weging" placeholder="Weging" colSize="4" value="1" value="${this.tentamen.nieuwTentamen.weging}"></form-group-number-component>
                            </div>
                            <div class="col-md-6">
                                <form-group-number-component name="ec-nieuw" ariaLabelText="Oude EC" text="EC" placeholder="EC" colSize="4" value="1" value="${this.tentamen.nieuwTentamen.ec}"></form-group-number-component>
                            </div>
                        </div>
                    </div>

                    <div style="width: 100%; padding: 0 15px 0 15px;">
                        <hr>
                    </div>

                    <div class="col-md-6">
                        <form-group-text-component name="periode" ariaLabelText="Periode" text="Periode" placeholder="Periode" colSize="8" value="${this.tentamen.nieuwTentamen.periode}"></form-group-text-component>
                        <form-group-text-component name="leider" ariaLabelText="Leider" text="Leider" placeholder="Leider" colSize="8" value="${this.tentamen.nieuwTentamen.leider}"></form-group-text-component>
                    </div>

                    <div class="col-md-6">
                        <form-group-textarea-component name="opmerking" ariaLabelText="Opmerking" text="Opmerking" placeholder="Opmerking" colSize="8" value="${this.tentamen.nieuwTentamen.opmerking}"></form-group-textarea-component>
                    </div>
                </div>

                <button class="btn btn-primary float-right" id="opslaanButton" >Opslaan</button>
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
        } else if (this.mode === 'keuren') {
            storage.editDraftTentamen(tentamen.id, tentamen);
        } else {
            storage.editTentamen(tentamen.id, tentamen);
            window.location = '/pages/tentamen.html?id=' + tentamen.id;
        }
    }
}

customElements.define('tentamen-aanpassen-component', TentamenAanpassen);