import {Tentamen} from './domein/tentamen.js';
import {Gebruiker} from './domein/gebruiker.js';

// Test data
let gebruiker = new Gebruiker('test@gmail.com', 'test123', 'onderwijs_coordinator');
let gebruiker2 = new Gebruiker('hallo@gmail.com', 'test123', 'onderwijs_coordinator');
let gebruiker3 = new Gebruiker('doei@gmail.com', 'test123', 'onderwijs_coordinator');
sessionStorage.setItem('gebruikers', JSON.stringify([gebruiker,gebruiker2,gebruiker3]));

const nieuwTentamen1 = new Tentamen('BKMER', 'MBME-OND2-17', 'Onderzoek 2', 'Schriftelijke tentamen', 50, 2.5, 'A,B', 'andre.ras@hu.nl', null, null);
const oudTentamen1 = new Tentamen('BKMER', 'MBME-OND2-17', 'Onderzoek 2', 'Schriftelijke tentamen', 50, 2.5, null, null, null, nieuwTentamen1);

const nieuwTentamen2 = new Tentamen('BKMER', 'MBME-OND2-17', 'Onderzoek 2', 'Onderzoeksrapport', 50, 2.5, 'A,B', 'andre.ras@hu.nl', null, null);
const oudTentamen2 = new Tentamen('BKMER', 'MBME-OND2-17', 'Onderzoek 2', 'Onderzoeksrapport', 50, 2.5, null, null, null, nieuwTentamen2);

const nieuwTentamen3 = new Tentamen('BKMER', 'MBME-VAFSTUD-17', 'Afstuderen MER voltijd', 'Scriptie/verslag', 60, 18, 'Jaar', 'Irene.vanderMarel-Koning@hu.nl', null, null);
const oudTentamen3 = new Tentamen('BKMER', 'MBBU-H-AFSBDK-20', 'Afstudeerproject', 'Gehele cursus', 100, 30, null, null, null, nieuwTentamen3);

if (sessionStorage.getItem('tentamens') == null) {
    for (let i = 0; i < 5; i++) {
        saveTentamen(oudTentamen1);
        saveTentamen(oudTentamen2);
        saveTentamen(oudTentamen3);
    }
}

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

    tentamen.id = uuidv4();

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

    tentamen.id = uuidv4();

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
 * Verwijder een tentamen van de archief
 * @param {number} id
 */
export function verwijderVanArchief(id){
    let tentamenArchief = [];

    getArchief().forEach(function (geArchiveerdeTentamen) {
        if (geArchiveerdeTentamen.id != id) {
            tentamenArchief.push(geArchiveerdeTentamen);
        }
    });

    sessionStorage.setItem('archief', JSON.stringify(tentamenArchief));

}

/**
 * Verwijder een tentamen van de archief en sla het weer op in de zichtbare tentamen lijst.
 * @param {Tentamen} tentamen
 */
export function deArchifeerTentamen(tentamen){
    verwijderVanArchief(tentamen.id);
    saveTentamen(tentamen);
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

    tentamen.id = uuidv4();

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

/**
 * Genereer een uuid
 * @returns {string}
 */
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}