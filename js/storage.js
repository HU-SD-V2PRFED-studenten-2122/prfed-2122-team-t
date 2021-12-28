import {Tentamen} from './domein/tentamen.js';
import {Gebruiker} from './domein/gebruiker.js';

let gebruiker = new Gebruiker('test@gmail.com', 'test123', 'onderwijs_coordinator');
sessionStorage.setItem('gebruikers', JSON.stringify([gebruiker]));

/**
 * Sla een tentamen op in de sessie
 * @param {Tentamen} tentamen
 */
export function saveTentamen(tentamen) {
    let tentamens = [];

    if (sessionStorage.getItem('tentamens') != null) {
        getTentamens().forEach(function (element) {
            tentamens.push(element);
        });

        tentamens.push(tentamen);
    } else {
        tentamens.push(tentamen);
    }

    sessionStorage.setItem('tentamens', JSON.stringify(tentamens));
}

/**
 * Wijzig een tentamen
 * @param {number} id
 * @param {Tentamen} tentamen
 */
export function editTentamen(id, tentamen) {
    let tentamens = [];

    getTentamens().forEach(function (element) {
        tentamens.push(element);
    });

    for (let i = 0; i < tentamens.length; i++) {
        if (tentamens[i].id == id) {
            tentamen.id = id;
            tentamens[i] = tentamen;
        }
    }

    sessionStorage.setItem('tentamens', JSON.stringify(tentamens));
}

/**
 * Verwijder een tentamen uit de sessie
 * @param {Tentamen} tentamen
 */
export function deleteTentamen(id) {
    let tentamens = [];

    getTentamens().forEach(function (element) {
        if (element.id != id) {
            tentamens.push(element);
        }
    });

    sessionStorage.setItem('tentamens', JSON.stringify(tentamens));
}

/**
 * Haal alle tentamens op in de sessie
 * @returns {array}
 */
export function getTentamens() {
    return JSON.parse(sessionStorage.getItem('tentamens'));
}

/**
 * Haal alle gebruikers op in de sessie
 * @returns {array}
 */
export function getGebruikers() {
    return JSON.parse(sessionStorage.getItem('gebruikers'));
}