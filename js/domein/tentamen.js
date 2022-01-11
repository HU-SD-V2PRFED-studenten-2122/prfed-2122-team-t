export class Tentamen {
    /**
     * Tentamen constructor
     * @constructor
     * @param {number} id
     * @param {string} opleiding
     * @param {string} code
     * @param {string} naam
     * @param {string} toetsvorm
     * @param {string} weging
     * @param {number} ec
     * @param {string} periode
     * @param {string} leider
     * @param {string} opmerking
     * @param {Tentamen} nieuwTentamen
     */
    constructor(opleiding, code, naam, toetsvorm, weging, ec, periode, leider, opmerking, nieuwTentamen) {
        this.id = null;
        this.opleiding = opleiding;
        this.code = code;
        this.naam = naam;
        this.toetsvorm = toetsvorm;
        this.weging = weging;
        this.ec = ec;
        this.periode = periode;
        this.leider = leider;
        this.opmerking = opmerking;
        this.nieuwTentamen = nieuwTentamen;
    }
}