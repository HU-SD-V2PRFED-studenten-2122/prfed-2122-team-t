import {html,css,LitElement } from "lit-element";
import * as storage from "../storage.js";

class loginComponent extends LitElement{

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
                            <label for="mailInput" class="form-label" for="typeEmailX-2">E-mail adres:</label>
                            <input id="mailInput" type="email" class="form-control form-control-lg"
                                   placeholder="test@hu.nl" tabindex="0"/>
                        </div>

                        <div class="form-outline mb-4">
                            <label for="wwInput" class="form-label" for="typePasswordX-2">Wachtwoord:</label>
                            <input id="wwInput" type="password" class="form-control form-control-lg"
                                   placeholder="••••••••••" tabindex="0"/>
                        </div>

                        <span id="logintext"></span>
                        <a href="#" class="btn btn-primary float-right" @click="${this.login}" tabindex="0">Login</a>
                        <a href="/index.html" class="btn btn-primary float-right" style="margin-right: 10px;"
                           tabindex="0">Terug</a>
                    </form>

                </div>
        `
    }    

    createRenderRoot(){
        return this;
    }

    login() {
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
                            console.log(gebruiker)
                            this.renderRoot.querySelector("#logintext").textContent = 'Succesvol ingelogd!';
                            this.renderRoot.querySelector("#logintext").style.color = 'green';
                            sessionStorage.setItem("ingelogd","ja")
                            window.location = '/pages/toevoegen.html'
                        }     
                        if(gebruiker.email == email && gebruiker.wachtwoord != wachtwoord ){
                            console.log(gebruiker)
                            this.renderRoot.querySelector("#logintext").textContent = 'Inloggegevens kloppen niet!';
                            this.renderRoot.querySelector("#logintext").style.color = 'red';
                        }             
                      
                    })
                }
                else{
                    this.renderRoot.querySelector("#logintext").textContent = 'Account bestaat niet!';
                    this.renderRoot.querySelector("#logintext").style.color = 'red';
                }
               
            }        
        
    }

}

customElements.define('login-component',loginComponent);