import {html, LitElement} from 'lit';

export class FormGroupNumber extends LitElement {

    static get properties() {
        return {
            'name': {attribute: true},
            'ariaLabelText': {attribute: true},
            'text': {attribute: true},
            'placeholder': {attribute: true},
            'value': {attribute: true},
            'colSize': {attribute: true},
            'plaintext': {attribute: true}
        }
    }

    createRenderRoot() {
        return this;
    }

    render() {
        if (this.plaintext == undefined) {
            return html`
                <div class="form-group row">
                    <label for="${this.name}" class="col-8 col-form-label" aria-label="${this.ariaLabelText}">${this.text}: *</label>
                    <div class="col-${this.colSize}">
                        <input value="${this.value}" id="${this.name}" name="${this.name}"
                               placeholder="${this.placeholder}" type="number" step="0.1" class="form-control" required="required" aria-required="true">
                    </div>
                </div>
            `;
        } else {
            return html`
                <div class="form-group row">
                    <label for="${this.name}" class="col-8 col-form-label" aria-label="${this.ariaLabelText}" style="font-family: 'Segoe UI Semibold'">${this.text}: *</label>
                    <div class="col-${this.colSize}">
                        <input value="${this.value}" id="${this.name}" name="${this.name}" type="text" class="form-control-plaintext" readonly>
                    </div>
                </div>
            `;
        }
    }
}

customElements.define('form-group-number-component', FormGroupNumber);