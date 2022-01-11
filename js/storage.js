import {Tentamen} from './domein/tentamen.js';
import {Gebruiker} from './domein/gebruiker.js';

// Test data
let gebruiker = new Gebruiker('test@gmail.com', 'test123', 'onderwijs_coordinator');
let gebruiker2 = new Gebruiker('hallo@gmail.com', 'test123', 'onderwijs_coordinator');
let gebruiker3 = new Gebruiker('doei@gmail.com', 'test123', 'onderwijs_coordinator');
sessionStorage.setItem('gebruikers', JSON.stringify([gebruiker,gebruiker2,gebruiker3]));

/**
 *
 * @param id
 * @returns {Tentamen}
 */
export function findTentamenById(id) {
    if (sessionStorage.getItem('tentamens') != null) {
        for (let i = 0; i < getTentamens().length; i++) {
            if (getTentamens()[i].id == id)
                return getTentamens()[i];
        }
    }

    return null;
}

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
 * Sla een tentamen op in de sessie in het archief
 * @param {Tentamen} tentamen
 */
export function archiveerTentamen(tentamen) {
    let tentamens = [];

    if (sessionStorage.getItem('archief') != null) {
        getArchief().forEach(function (element) {
            tentamens.push(element);
        });

        tentamens.push(tentamen);
    } else {
        tentamens.push(tentamen);
    }

    sessionStorage.setItem('archief', JSON.stringify(tentamens));
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
 * @param {number} id
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
 * Haal alle tentamens op uit het archief
 * @returns {array}
 */
export function getArchief() {
    return JSON.parse(sessionStorage.getItem('archief'));
}

/**
 * Haal alle gebruikers op in de sessie
 * @returns {array}
 */
export function getGebruikers() {
    return JSON.parse(sessionStorage.getItem('gebruikers'));
}

/**
 * Sla een draft tentamen op in de sessie
 * @param {Tentamen} tentamen
 */
export function saveDraftTentamen(tentamen) {
    let tentamens = [];

    if (sessionStorage.getItem('draftTentamens') != null) {
        getDraftTentamens().forEach(function (element) {
            tentamens.push(element);
        });

        tentamens.push(tentamen);
    } else {
        tentamens.push(tentamen);
    }

    sessionStorage.setItem('draftTentamens', JSON.stringify(tentamens));
}

/**
 * Haal alle draft tentamens op in de sessie
 * @returns {array}
 */
export function getDraftTentamens() {
    return JSON.parse(sessionStorage.getItem('draftTentamens'));
}

/**
 * Verwijder een draft tentamen uit de sessie
 * @param {number} id
 */
export function deleteDraftTentamen(id) {
    let tentamens = [];

    getDraftTentamens().forEach(function (element) {
        if (element.id != id) {
            tentamens.push(element);
        }
    });

    sessionStorage.setItem('draftTentamens', JSON.stringify(tentamens));
}

/**
 * Publiceer een draft tentamen
 * @param tentamen
 */
export function publishDraftTentamen(tentamen) {
    deleteDraftTentamen(tentamen.id);
    saveTentamen(tentamen);
}

/**
 * Check of iemand is ingelogd
 * @returns {boolean}
 */
export function checkLoggedIn(){
    return sessionStorage.getItem("ingelogd") == 'ja';
}