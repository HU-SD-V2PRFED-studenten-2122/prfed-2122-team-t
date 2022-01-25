import * as storage from '../../storage.js'
import {LitElement, html} from "lit";
import {Tentamen} from '../../domein/tentamen';
import '../form/form-group-textarea'
import '../form/form-group-text'
import '../form/form-group-number'

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
                        <p style="font-weight: bold">Oud Tentamen</p>
                        
                        <hr>

                        <form-group-text-component name="opleiding-oud" ariaLabelText="Oude opleiding" text="Opleiding" colSize="8" value="${this.tentamen.opleiding}" plaintext></form-group-text-component>
                        <form-group-text-component name="code-oud" ariaLabelText="Oude code" text="Code" colSize="8" value="${this.tentamen.code}" plaintext></form-group-text-component>
                        <form-group-text-component name="naam-oud" ariaLabelText="Oude naam" text="Naam" colSize="8" value="${this.tentamen.naam}" plaintext></form-group-text-component>
                        <form-group-text-component name="toetsvorm-oud" ariaLabelText="Oude toetsvorm" text="Toetsvorm" colSize="8" value="${this.tentamen.toetsvorm}" plaintext></form-group-text-component>

                        <div class="row">
                            <div class="col-md-6">
                                <form-group-number-component name="weging-oud" ariaLabelText="Oude weging" text="Weging" colSize="4" value="${this.tentamen.weging}" plaintext></form-group-number-component>
                            </div>
                            <div class="col-md-6">
                                <form-group-number-component name="ec-oud" ariaLabelText="Oude EC" text="EC" colSize="4" value="${this.tentamen.ec}" plaintext></form-group-number-component>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <p style="font-weight: bold">Nieuw Tentamen</p>
                        
                        <hr>

                        <form-group-text-component name="opleiding-nieuw" ariaLabelText="Nieuwe opleiding" text="Opleiding" colSize="8" value="${this.tentamen.nieuwTentamen.opleiding}" plaintext></form-group-text-component>
                        <form-group-text-component name="code-nieuw" ariaLabelText="Nieuwe code" text="Code" colSize="8" value="${this.tentamen.nieuwTentamen.code}" plaintext></form-group-text-component>
                        <form-group-text-component name="naam-nieuw" ariaLabelText="Nieuwe naam" text="Naam" colSize="8" value="${this.tentamen.nieuwTentamen.naam}" plaintext></form-group-text-component>
                        <form-group-text-component name="toetsvorm-nieuw" ariaLabelText="Nieuwe toetsvorm" text="Toetsvorm" colSize="8" value="${this.tentamen.nieuwTentamen.toetsvorm}" plaintext></form-group-text-component>

                        <div class="row">
                            <div class="col-md-6">
                                <form-group-number-component name="weging-nieuw" ariaLabelText="Nieuwe weging" text="Weging" colSize="4" value="${this.tentamen.nieuwTentamen.weging}" plaintext></form-group-number-component>
                            </div>
                            <div class="col-md-6">
                                <form-group-number-component name="ec-nieuw" ariaLabelText="Nieuwe EC" text="EC" colSize="4" value="${this.tentamen.nieuwTentamen.ec}" plaintext></form-group-number-component>
                            </div>
                        </div>
                    </div>

                    <div style="width: 100%; padding: 0 15px 0 15px;">
                        <hr>
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
                        <form-group-textarea-component name="opmerking" ariaLabelText="Opmerking" text="Opmerking" colSize="8" value="${this.tentamen.nieuwTentamen.opmerking}" plaintext></form-group-textarea-component>
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

        this.tentamen = storage.findTentamenById(storage.getParam('id'));
    }
}

export class TentamenDetailsButtons extends LitElement {

    static get properties() {
        return {
            'id': {attribute: false}
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

        this.id = storage.getParam('id');
    }

    archiveren() {
        storage.archiveerTentamen(storage.findTentamenById(this.id));
        storage.deleteTentamen(this.id);

        window.location = '/pages/home.html'
    }
}

customElements.define('tentamen-details-component', TentamenDetails);
customElements.define('tentamen-details-buttons-component', TentamenDetailsButtons);