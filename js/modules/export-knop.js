import {html, LitElement} from "lit";
import * as XLSX from "xlsx";
import * as storage from "../storage.js";

class ExportClass {
    constructor(oudeOpleiding, oudeCode, oudeNaam, oudeToetsvorm, oudeWeging, oudeEc, nieuweOpleiding, nieuweCode, nieuweNaam, nieuweToetsvorm, nieuweWeging, nieuweEc, periode, leider, opmerking) {
        this.oudeOpleiding = oudeOpleiding;
        this.oudeCode = oudeCode;
        this.oudeNaam = oudeNaam;
        this.oudeToetsvorm = oudeToetsvorm;
        this.oudeWeging = oudeWeging;
        this.oudeEc = oudeEc;
        this.nieuweOpleiding = nieuweOpleiding;
        this.nieuweCode = nieuweCode;
        this.nieuweNaam = nieuweNaam;
        this.nieuweToetsvorm = nieuweToetsvorm;
        this.nieuweWeging = nieuweWeging;
        this.nieuweEc = nieuweEc;
        this.periode = periode;
        this.leider = leider;
        this.opmerking = opmerking;
    }
}

class ExportKnop extends LitElement {

    render() {
        return html`
            <button class="btn btn-primary float-right" @click="${this.exporteren}">Exporteren</button>
        `;
    }

    createRenderRoot() {
        return this;
    }

    exporteren() {
        let exportData = [];
        storage.getTentamens().forEach(e => {
            exportData.push(new ExportClass(
                e.opleiding, e.code, e.naam, e.toetsvorm, e.weging, e.ec,
                e.nieuwTentamen.opleiding, e.nieuwTentamen.code, e.nieuwTentamen.naam, e.nieuwTentamen.toetsvorm, e.nieuwTentamen.weging, e.nieuwTentamen.ec,
                e.nieuwTentamen.periode, e.nieuwTentamen.leider, e.nieuwTentamen.opmerking));
        });

        const worksheetCols = [
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:10},
            {wch:10},
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:10},
            {wch:10},
            {wch:10},
            {wch:30},
            {wch:30}
        ];

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        worksheet['!cols'] = worksheetCols;

        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Tentamens");

        XLSX.writeFile(workbook, 'tentamens.xlsx');
    }
}

customElements.define('export-knop-component', ExportKnop);