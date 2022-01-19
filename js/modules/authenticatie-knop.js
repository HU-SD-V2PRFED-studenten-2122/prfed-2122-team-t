import {html, LitElement} from "lit";
import * as storage from '../storage.js'

class AuthenticatieKnop extends LitElement {

    render() {
        return html`
            <a class="btn btn-primary" tabindex="0" id="auth-button" @click="${this.redirect}"></a>
            <a href="../../pages/home.html" class="btn btn-primary" id="home-button" tabindex="0">Home</a>
            <a href="../../index.html" class="btn btn-info" id="info-button" aria-label="Informatie pagina" tabindex="0">?</a>
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
            window.location.href = '/pages/home.html';
            sessionStorage.setItem('ingelogd','nee');
        } else {
            window.location.href = '/pages/login.html';
        }
    }
}

customElements.define('authenticatie-knop-element', AuthenticatieKnop);