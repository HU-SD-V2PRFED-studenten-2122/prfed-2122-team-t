import {html, LitElement} from 'http://unpkg.com/lit-element?module';
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

            newNaam: {attibute: true, reflect: true, type: String},
            newOpleiding: {attibute: true, reflect: true, type: String},
            newCode: {attibute: true, reflect: true, type: String},
            newToetsvorm: {attibute: true, reflect: true, type: String},
            newEC: {attibute: true, reflect: true, type: Number},
            newWeging: {attibute: true, reflect: true, type: Number},

            tentamenPeriode: {attibute: true, reflect: true, type: String},
            tentamenLeider: {attibute: true, reflect: true, type: String},
            opmerking: {attibute: true, reflect: true, type: String}
        }
    }

    render(){
        return html`
            <div class="row">
                
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <p>Oud</p>
                        <hr style="border: 1px solid dimgrey">
                        <label for="oudOpleiding">Opleiding</label>
                        <input type="text" value="${this.oudOpleiding}" @change="${()=>this.oudOpleiding=this.renderRoot.querySelector("#oudOpleiding").value}" class="form-control" id="oudOpleiding">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <p>Nieuw</p>
                        <hr style="border: 1px solid dimgrey">
                        <label for="newOpleiding">Opleiding</label>
                        <input type="text" value="${this.newOpleiding}" @change="${()=>this.newOpleiding=this.renderRoot.querySelector("#newOpleiding").value}" class="form-control" id="newOpleiding">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudCode">Code</label>
                        <input type="text" value="${this.oudCode}" @change="${()=>this.oudCode=this.renderRoot.querySelector("#oudCode").value}" class="form-control" id="oudCode">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newCode">Code</label>
                        <input type="text" value="${this.newCode}" @change="${()=>this.newCode=this.renderRoot.querySelector("#newCode").value}" class="form-control" id="newCode">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudNaam">Naam</label>
                        <input type="text" value="${this.oudNaam}" @change="${()=>this.oudNaam=this.renderRoot.querySelector("#oudNaam").value}" class="form-control" id="oudNaam">
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newNaam">Naam</label>
                        <input type="text" value="${this.newNaam}" @change="${()=>this.newNaam=this.renderRoot.querySelector("#newNaam").value}" class="form-control" id="newNaam">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="oudToetsvorm">Toetsvorm</label>
                        <input type="text" value="${this.oudToetsvorm}" @change="${()=>this.oudToetsvorm=this.renderRoot.querySelector("#oudToetsvorm").value}" class="form-control" id="oudToetsvorm">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="newToetsvorm">Toetsvorm</label>
                        <input type="text" value="${this.newToetsvorm}" @change="${()=>this.newToetsvorm=this.renderRoot.querySelector("#newToetsvorm").value}" class="form-control" id="newToetsvorm">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="oudEC">EC</label>
                        <input type="number" value="${this.oudEC}" @change="${()=>this.oudEC=this.renderRoot.querySelector("#oudEC").value}" min="0" class="form-control" id="oudEC">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="oudWeging">Weging</label>
                        <input type="number" value="${this.oudWeging}" @change="${()=>this.oudWeging=this.renderRoot.querySelector("#oudWeging").value}" min="0"  class="form-control" id="oudWeging">
                    </div>
                </div>

                <div class="col-md-2">
                    <label for="staticEmail2" class="visually-hidden"></label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="">
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="newEC">EC</label>
                        <input type="number" value="${this.newEC}" @change="${()=>this.newEC=this.renderRoot.querySelector("#newEC").value}" min="0"  class="form-control" id="newEC">
                    </div>
                </div>
                
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="newWeging">Weging</label>
                        <input type="number" value="${this.newWeging}" @change="${()=>this.newWeging=this.renderRoot.querySelector("#newWeging").value}" min="0"  class="form-control" id="newWeging">
                    </div>
                </div>
            </div>
            
            <hr>
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="Periode">Periode</label>
                        <input type="text" value="${this.tentamenPeriode}" @change="${()=>this.tentamenPeriode=this.renderRoot.querySelector("#Periode").value}" class="form-control" id="Periode">
                    </div>
                </div>
                
                <div class="mb-10">
                    <label for="Opmerking" class="form-label">Opmerking</label>
                    <textarea class="form-control" @change="${()=>this.opmerking=this.renderRoot.querySelector("#Opmerking").value}" id="Opmerking" rows="3" cols="50">${this.opmerking}</textarea>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="Leider">Leider</label>
                        <input type="text" value="${this.tentamenLeider}" @change="${()=>this.tentamenLeider=this.renderRoot.querySelector("#Leider").value}" class="form-control" id="Leider">
                    </div>
                </div>
            </div>
            
            <div class="col-auto">
                    <button @click="${()=>this.submitChanges()}" class="btn btn-primary mb-3">Opslaan</button>
            </div>
        `
    }

    createRenderRoot(){
        return this;
    }

    connectedCallback(){
        super.connectedCallback();
        console.log("connected-callback")
        let tentamennnnn = new Tentamen("ICT","ICT-FEP-1","Front End programming","toets","10",3,"A,B","Mishernon Wedervoort","tentamen 1 opmerking",null);
        let tentamennnnnn2 = new Tentamen("OPEN-ICT","ICT-ANGUL-12","BEP2","Opdracht","15",20,"C,B","Mishernon Wedervoort","tentamen 2 opmerking",tentamennnnn);

        sessionStorage.setItem("clickedTentamen",JSON.stringify(tentamennnnnn2))

        let tentamen=JSON.parse(sessionStorage.getItem("clickedTentamen"))

        console.log(tentamen)

        storage.saveTentamen(tentamen)

        this.oudOpleiding=tentamen.opleiding
        this.oudCode=tentamen.code
        this.oudToetsvorm=tentamen.toetsvorm
        this.oudEC=tentamen.ec
        this.oudWeging=tentamen.weging
        this.oudNaam=tentamen.naam

        this.opmerking=tentamen.nieuwTentamen.opmerking
        this.tentamenLeider=tentamen.nieuwTentamen.leider
        this.tentamenPeriode=tentamen.nieuwTentamen.periode

        this.newCode=tentamen.nieuwTentamen.code
        this.newWeging=tentamen.nieuwTentamen.weging
        this.newToetsvorm=tentamen.nieuwTentamen.toetsvorm
        this.newEC=tentamen.nieuwTentamen.ec
        this.newNaam=tentamen.nieuwTentamen.naam
        this.newOpleiding=tentamen.nieuwTentamen.opleiding
    }

    submitChanges(){
        event.preventDefault()
        console.log("in submit changes")
        let tentamen = JSON.parse(sessionStorage.getItem("clickedTentamen"))
        console.log(storage.getTentamens())

        if (this.oudOpleiding==""||this.oudEC==""||this.oudWeging==""||this.oudToetsvorm==""||this.oudNaam==""||this.oudCode==""||this.newCode==""||this.newEC==""||this.newNaam==""||this.newOpleiding==""||this.newWeging==""||this.newToetsvorm==""||this.tentamenLeider==""||this.tentamenPeriode==""){
            alert("Je hebt een of meer velden open gelaten vul deze aub in en probeer opnieuw.")
        }else{
            tentamen.opleiding=this.oudOpleiding
            tentamen.naam=this.oudNaam
            tentamen.weging=this.oudWeging
            tentamen.ec=this.oudEC
            tentamen.code=this.oudCode
            tentamen.toetsvorm=this.oudToetsvorm

            tentamen.periode=this.tentamenPeriode
            tentamen.opmerking=this.opmerking
            tentamen.leider=this.tentamenLeider

            tentamen.nieuwTentamen.opleiding=this.newOpleiding
            tentamen.nieuwTentamen.naam=this.newNaam
            tentamen.nieuwTentamen.weging=this.newWeging
            tentamen.nieuwTentamen.ec=this.newEC
            tentamen.nieuwTentamen.code=this.newCode
            tentamen.nieuwTentamen.toetsvorm=this.newToetsvorm

            storage.editTentamen(tentamen.id,tentamen)
            alert("Tentamen succesvol gewijzigd")
            console.log(storage.getTentamens())
        }
    }


    getClickedTentamen(){
        let tentamenJSON=JSON.parse(sessionStorage.getItem("clickedTentamen"))
        // let nieuwTentamen=
        return new Tentamen(tentamenJSON.opleiding, tentamenJSON.code, tentamenJSON.naam, tentamenJSON.toetsvorm, tentamenJSON.weging, tentamenJSON.ec, tentamenJSON.periode, tentamenJSON.leider, tentamenJSON.opmerking, tentamenJSON.nieuwTentamen)
    }
}

customElements.define('tentamen-aanpassen-component',TentamenAanpassenComponent);