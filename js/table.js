import {Tentamen} from './domein/tentamen.js';

/**
 * Voeg een row toe aan een tabel
 * @param table{HTMLElement}
 * @param tentamen{Tentamen}
 * @param archief{boolean}
 */
export function voegRowToe(table, tentamen, archief) {
    table.insertRow().innerHTML =
        "<tr>" +
        "<th scope='row'>" + tentamen.code + "</th>" +
        "<td>" + tentamen.opleiding + "</td>" +
        "<td>" + tentamen.naam + "</td>" +
        "<td>" + tentamen.toetsvorm + "</td>" +
        "<td>" + tentamen.ec + "</td>" +
        "</tr>";

    const element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];

    if (archief === 'false') {
        element.setAttribute("onclick", "location.href='tentamen.html?id=" + tentamen.id + "'");
    } else {
        element.setAttribute("onclick", "location.href='tentamen-archief.html?id=" + tentamen.id + "'");
    }

    element.setAttribute("style", "cursor: pointer");
    element.setAttribute("aria-label", "Link");
}