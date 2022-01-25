import {html, LitElement} from 'lit';
import * as XLSX from 'xlsx';
import * as storage from '../../storage';

class ExportKnop extends LitElement {

    render() {
        if (!storage.checkLoggedIn())
            return;

        return html`
            <button class="btn btn-secondary float-right" @click="${this.exporteren}">Exporteren</button>
        `;
    }

    createRenderRoot() {
        return this;
    }

    exporteren() {
        let exportData = [];
        storage.getTentamens().forEach(e => {
            exportData.push([
                e.opleiding, e.code, e.naam, e.toetsvorm, e.weging, e.ec,
                e.nieuwTentamen.opleiding, e.nieuwTentamen.code, e.nieuwTentamen.naam, e.nieuwTentamen.toetsvorm, e.nieuwTentamen.weging, e.nieuwTentamen.ec,
                e.nieuwTentamen.periode, e.nieuwTentamen.leider, e.nieuwTentamen.opmerking]);
        });

        const columns = [
            [
                'Oude opleiding', 'Oude code', 'Oude naam', 'Oude toetsvorm', 'Oude weging', 'Oude ec',
                'Nieuwe opleiding', 'Nieuwe code', 'Nieuwe naam', 'Nieuwe toetsvorm', 'Nieuwe weging', 'Nieuwe ec',
                'Periode', 'Leider', 'Opmerking'
            ]
        ]

        const worksheetCols = [
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:13},
            {wch:10},
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:30},
            {wch:13},
            {wch:10},
            {wch:10},
            {wch:30},
            {wch:30}
        ];

        const worksheet = XLSX.utils.book_new();
        worksheet['!cols'] = worksheetCols;

        XLSX.utils.sheet_add_aoa(worksheet, columns);
        XLSX.utils.sheet_add_json(worksheet, exportData, { origin: 'A2', skipHeader: true });

        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Tentamens");

        XLSX.writeFile(workbook, 'tentamens.xlsx');
    }
}

customElements.define('export-knop-component', ExportKnop);