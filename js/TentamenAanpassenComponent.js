import { LitElement, html} from 'http://unpkg.com/lit-element?module';
import {Tentamen} from './domein/tentamen.js';

import * as storage from './storage.js'


export class TentamenAanpassenComponent extends LitElement{

    static get properties() {
        return {
            oudNaam: {attibute: true, reflect: true, type: String},
            oudOpleiding: {attibute: true, reflect: true, type: String},
            oudCode: {attibute: true, reflect: true, type: String},
            oudToetsvorm: {attibute: true, reflect: true, type: String},
            oudEC: {attibute: true, reflect: true, type: Number},
            oudWeging: {attibute: true, reflect: true, type: Number},

            tentamenPeriode: {attibute: true, reflect: true, type: String},
            tentamenLeider: {attibute: true, reflect: true, type: String},

            newNaam: {attibute: true, reflect: true, type: String},
            newOpleiding: {attibute: true, reflect: true, type: String},
            newCode: {attibute: true, reflect: true, type: String},
            newToetsvorm: {attibute: true, reflect: true, type: String},
            newEC: {attibute: true, reflect: true, type: Number},
            newWeging: {attibute: true, reflect: true, type: Number}

        }
    }

    render(){
        return html`
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudOpleiding">Opleiding</label>
                        <input type="text" value="${this.oudOpleiding}" @change="${()=>{console.log()}}" class="form-control" id="oudOpleiding">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newOpleiding">Opleiding</label>
                        <input type="text" value="${this.newOpleiding}" class="form-control" id="newOpleiding">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudCode">Code</label>
                        <input type="text" value="${this.oudCode}" class="form-control" id="oudCode">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newCode">Code</label>
                        <input type="text" value="${this.newCode}" class="form-control" id="newCode">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudNaam">Naam</label>
                        <input type="text" value="${this.oudNaam}" class="form-control" id="oudNaam">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newNaam">Naam</label>
                        <input type="text" value="${this.newNaam}" class="form-control" id="newNaam">
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudToetsvorm">Toetsvorm</label>
                        <input type="text" value="${this.oudToetsvorm}" class="form-control" id="oudToetsvorm">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newToetsvorm">Toetsvorm</label>
                        <input type="text" value="${this.newToetsvorm}" class="form-control" id="newToetsvorm">
                    </div>
                </div>
            </div>
            
            

            <div class="row">
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="oudEC">EC</label>
                        <input type="number" value="${this.oudEC}" min="0" class="form-control" id="oudEC">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="oudWeging">Weging</label>
                        <input type="number" value="${this.oudWeging}" min="0"  class="form-control" id="oudWeging">
                    </div>
                </div>

                <div class="col-md-2">
                    <label for="staticEmail2" class="visually-hidden"></label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="">
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="newEC">EC</label>
                        <input type="number" value="${this.newEC}" min="0"  class="form-control" id="newEC">
                    </div>
                </div>
                
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="newWeging">Weging</label>
                        <input type="number" value="${this.newWeging}" min="0"  class="form-control" id="newWeging">
                    </div>
                </div>
            </div>
            
            <hr>
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="Periode">Periode</label>
                        <input type="text" value="${this.tentamenPeriode}" class="form-control" id="Periode">
                    </div>
                </div>
                
                <div class="mb-10">
                    <label for="Opmerking" class="form-label">Opmerking</label>
                    <textarea class="form-control" id="Opmerking" rows="3" cols="50"></textarea>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="Leider">Leider</label>
                        <input type="text" value="${this.tentamenLeider}" class="form-control" id="Leider">
                    </div>
                </div>
            </div>
        `
    }

    createRenderRoot(){
        return this;
    }

    connectedCallback(){
        super.connectedCallback();
        console.log("connected-callback")
        // let oudTentamen=sessionStorage.getItem()
        let tentamennnnn = new Tentamen("ICT","ICTHU","FEP2","toets","10",3,"u,o","Mishernon","Beste opleiding in history",null);
        let tentamennnnnn2 = new Tentamen("ICTTT","ICTHUKK","BEP2","toets","10",3,"u,o","Mishernon","Beste opleiding in history",null);

        sessionStorage.setItem("clickedTentamen",JSON.stringify(tentamennnnn))

        let tentamen=JSON.parse(sessionStorage.getItem("clickedTentamen"))
        console.log(tentamen)

        storage.saveTentamen(tentamen)

        this.oudOpleiding=tentamen.opleiding
        this.oudCode=tentamen.code
        this.oudToetsvorm=tentamen.toetsvorm
        this.oudEC=tentamen.ec
        this.oudWeging=tentamen.weging
        this.tentamenPeriode=tentamen.periode
        this.tentamenLeider=tentamen.leider
        this.oudNaam=tentamen.naam

        this.newCode=""
        this.newWeging=""
        this.newToetsvorm=""
        this.newEC=""
        this.newNaam=""
        this.newOpleiding=""

    }

    submitChanges(){
        console.log("in submit changes")
        console.log(this.shadowRoot)
    }
}

customElements.define('tentamen-aanpassen-component',TentamenAanpassenComponent);