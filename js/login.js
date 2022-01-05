import {html,css,LitElement } from "lit-element";
import * as storage from "./storage.js";

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
                    <label class="form-label" for="typeEmailX-2">Emailadres:</label>
                    <input id="mailInput" type="email" class="form-control form-control-lg" placeholder="test@hu.nl" tabindex="0"/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="typePasswordX-2">Wachtwoord:</label>
                    <input id="wwInput" type="password" class="form-control form-control-lg" placeholder="••••••••••" tabindex="0" />
                </div>

                <span id="logintext"></span>
                <a href="#" class="btn btn-primary float-right" @click="${this.login}" tabindex="0">Login</a>
                <a href="/index.html" class="btn btn-primary float-right" style="margin-right: 10px;" tabindex="0">Terug</a>   
            </form>

        </div>    
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        `
    }    

    login() {
        sessionStorage.setItem('email', this.shadowRoot.querySelector("#mailInput").value);
        sessionStorage.setItem('wachtwoord',this.shadowRoot.querySelector("#wwInput").value);

        let email = sessionStorage.getItem('email');
        let wachtwoord = sessionStorage.getItem('wachtwoord');
    
        let emailInput = this.shadowRoot.querySelector("#mailInput");
        let wachtwoordInput = this.shadowRoot.querySelector("#wwInput");

        var emails = storage.getGebruikers().map(gebruiker => gebruiker.email)        
        
            if (emailInput.value == '') {
                this.shadowRoot.querySelector("#logintext").textContent = 'Email is leeg.'
                this.shadowRoot.querySelector("#logintext").style.color = 'red';
            }
            if (wachtwoordInput.value == '') {
                this.shadowRoot.querySelector("#logintext").textContent = 'Wachtwoord is leeg.'
                this.shadowRoot.querySelector("#logintext").style.color = 'red';
            }
            if (wachtwoordInput.value == '' && emailInput.value == '') {
                this.shadowRoot.querySelector("#logintext").textContent = 'Email en wachtwoord zijn leeg.'
                this.shadowRoot.querySelector("#logintext").style.color = 'red';
            }

            if(emailInput.value != '' && wachtwoordInput.value != '') {
                if(emails.includes(email)){                   
                    storage.getGebruikers().filter(gebruiker => {  
                        if(gebruiker.email == email && gebruiker.wachtwoord == wachtwoord ){
                            console.log(gebruiker)
                            this.shadowRoot.querySelector("#logintext").textContent = 'Succesvol ingelogd!';
                            this.shadowRoot.querySelector("#logintext").style.color = 'green';
                            sessionStorage.setItem("ingelogd","ja")
                            window.location = '/testpage.html'
                        }     
                        if(gebruiker.email == email && gebruiker.wachtwoord != wachtwoord ){
                            console.log(gebruiker)
                            this.shadowRoot.querySelector("#logintext").textContent = 'Inloggegevens kloppen niet!';
                            this.shadowRoot.querySelector("#logintext").style.color = 'red';
                        }             
                      
                    })
                }
                else{
                    this.shadowRoot.querySelector("#logintext").textContent = 'Account bestaat niet!';
                    this.shadowRoot.querySelector("#logintext").style.color = 'red';
                }
               
            }        
        
    }

}

customElements.define('login-component',loginComponent);