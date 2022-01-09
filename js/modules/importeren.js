import {LitElement, html, css} from "lit";
import * as XLSX from "xlsx";
import {Tentamen} from "../domein/tentamen";
import * as storage from '../storage.js';

class Importeren extends LitElement {

    render() {
        return html`
            <div class="alert alert-danger" id="message" style="display: none">
                Voer een file in
            </div>
            
            <div class="form-group">
                <label for="file-input">Bestand:</label>
                <input type="file" id="file-input" class="form-control">
            </div>
            
            <button class="btn btn-primary" @click=${this.import}>Importeren</button>
        `;
    }

    createRenderRoot() {
        return this;
    }

    import() {
        let file = document.getElementById('file-input').files[0];

        if (!file) {
            this.toggleMessage(true);
            return;
        }

        this.toggleMessage(false);

        let reader = new FileReader();
        reader.onload = function(e) {
            const data = e.target.result;
            const workbook = XLSX.read(data, {type: 'binary'});

            XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]],{header:1}).forEach((row, index) => {
                if (index < 4)
                    return;

                const opleiding = row[0];
                const nieuweCode = row[8];
                let nieuweNaam = row[9];
                if (nieuweNaam)
                    nieuweNaam = nieuweNaam.replace(/(\\r\\n|\n|\r)/gm, "");

                const nieuweToets = row[11];
                const nieuweWeging = row[12];
                const nieuweEcToets = row[13];
                const periode = row[14];
                const leider = row[15];
                const opmerkingen = row[16];

                const oudeCode = row[1];
                let oudeNaam = row[2];
                if (oudeNaam)
                    oudeNaam = oudeNaam.replace(/(\\r\\n|\n|\r)/gm, "");

                const oudeToets = row[4];
                const oudeWeging = row[5];
                const oudeEcToets = row[6];

                const nieuwTentamen = new Tentamen(opleiding, nieuweCode, nieuweNaam, nieuweToets, nieuweWeging, nieuweEcToets, periode, leider, opmerkingen, null);
                const oudTentamen = new Tentamen(opleiding, oudeCode, oudeNaam, oudeToets, oudeWeging, oudeEcToets, null, null, null, nieuwTentamen);

                storage.saveDraftTentamen(oudTentamen);
            });
        };
        reader.readAsBinaryString(file);

        window.location.href = '/pages/controleren.html';
    }

    toggleMessage(bool) {
        const message = document.getElementById('message');
        if (bool == true)
            message.style.display = 'block';
        else
            message.style.display = 'none';
    }
}

customElements.define('import-element', Importeren);