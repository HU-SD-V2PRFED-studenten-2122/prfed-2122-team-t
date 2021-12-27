export class Gebruiker {
    /**
     * Gebruiker constructor
     * @constructor
     * @param {string} email
     * @param {string} wachtwoord
     * @param {string} role
     */
    constructor(email, wachtwoord, role) {
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.role = role;
    }
}