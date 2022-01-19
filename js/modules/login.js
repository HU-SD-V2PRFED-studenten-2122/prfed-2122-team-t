import {html,css,LitElement } from "lit";
import * as storage from "../storage.js";

class LoginComponent extends LitElement{

    static get styles(){
        return css`           
        .center {
            text-align: center;
        }        
        `
    }    

    render() {
        return html`
            <div class="card-body">

                <div>
                    <h2 class="mb-4 center" tabindex="0">Login</h2>

                    <form class="loginform">
                        <div class="form-outline mb-4">
                            <label for="mailInput" class="form-label" for="typeEmailX-2">E-mailadres:</label>
                            <input id="mailInput" type="email" class="form-control form-control-lg"
                                   placeholder="test@hu.nl" tabindex="0"/>
                        </div>

                        <div class="form-outline mb-4">
                            <label for="wwInput" class="form-label" for="typePasswordX-2">Wachtwoord:</label>
                            <input id="wwInput" type="password" class="form-control form-control-lg"
                                   placeholder="••••••••••" tabindex="0"/>
                        </div>

                        <span id="logintext"></span>
                        <button class="btn btn-primary float-right" @click="${this.login}" tabindex="0">Login</button>
                        <a href="/pages/home.html" class="btn btn-primary float-right" style="margin-right: 10px;"
                           tabindex="0">Terug</a>
                    </form>

                </div>
        `
    }    

    createRenderRoot(){
        return this;
    }

    login(e) {
        e.preventDefault();

        sessionStorage.setItem('email', this.renderRoot.querySelector("#mailInput").value);
        sessionStorage.setItem('wachtwoord',this.renderRoot.querySelector("#wwInput").value);

        let email = sessionStorage.getItem('email');
        let wachtwoord = sessionStorage.getItem('wachtwoord');
    
        let emailInput = this.renderRoot.querySelector("#mailInput");
        let wachtwoordInput = this.renderRoot.querySelector("#wwInput");

        var emails = storage.getGebruikers().map(gebruiker => gebruiker.email)        
        
            if (emailInput.value == '') {
                this.renderRoot.querySelector("#logintext").textContent = 'Email is leeg.'
                this.renderRoot.querySelector("#logintext").style.color = 'red';
            }
            if (wachtwoordInput.value == '') {
                this.renderRoot.querySelector("#logintext").textContent = 'Wachtwoord is leeg.'
                this.renderRoot.querySelector("#logintext").style.color = 'red';
            }
            if (wachtwoordInput.value == '' && emailInput.value == '') {
                this.renderRoot.querySelector("#logintext").textContent = 'Email en wachtwoord zijn leeg.'
                this.renderRoot.querySelector("#logintext").style.color = 'red';
            }

            if(emailInput.value != '' && wachtwoordInput.value != '') {
                if(emails.includes(email)){                   
                    storage.getGebruikers().filter(gebruiker => {  
                        if(gebruiker.email == email && gebruiker.wachtwoord == wachtwoord ){
                            sessionStorage.setItem("ingelogd","ja")
                            window.location = '/pages/home.html'
                        }     
                        if(gebruiker.email == email && gebruiker.wachtwoord != wachtwoord ){
                            this.renderRoot.querySelector("#logintext").textContent = 'Inloggegevens kloppen niet!';
                            this.renderRoot.querySelector("#logintext").style.color = 'red';
                        }
                    })
                }
            }
    }
}

customElements.define('login-component', LoginComponent);