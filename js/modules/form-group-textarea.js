import {html, LitElement} from "lit";

export class FormGroupTextarea extends LitElement {

    static get properties() {
        return {
            'name': {attribute: true},
            'ariaLabelText': {attribute: true},
            'text': {attribute: true},
            'placeholder': {attribute: true},
            'value': {attribute: true},
            'colSize': {attribute: true}
        }
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="form-group row">
                <label for="${this.name}" class="col-4 col-form-label" aria-label="${this.ariaLabelText}">${this.text}:</label>
                <div class="col-${this.colSize}">
                    <textarea id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" cols="40" rows="4"
                              class="form-control">${this.value}</textarea>
                </div>
            </div>
        `;
    }
}

customElements.define('form-group-textarea-component', FormGroupTextarea);