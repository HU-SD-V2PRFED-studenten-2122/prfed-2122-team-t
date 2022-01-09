import {html, LitElement} from "lit-element";
import * as storage from '../storage.js'

class AuthenticatieKnop extends LitElement {

    render() {
        return html`
            <a class="btn btn-primary" tabindex="1" id="auth-button" @click="${this.redirect}"></a>
        `;
    }

    createRenderRoot() {
        return this;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        const knop = document.getElementById('auth-button');

        if (storage.checkLoggedIn()) {
            knop.innerText = 'Log uit';
        } else {
            knop.innerText = 'Log in';
        }
    }

    redirect() {
        if (storage.checkLoggedIn()) {
            window.location.href = '/index.html';
            sessionStorage.setItem('ingelogd','nee');
        } else {
            window.location.href = '/pages/login.html';
        }
    }
}

customElements.define('authenticatie-knop-element', AuthenticatieKnop);