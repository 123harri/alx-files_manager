const crypto = require('crypto');

/**
 * Hash password function
 * @param {string} password - The password to hash.
 * @returns {string} - The hashed password.
 */
const hashPassword = (password) => crypto.createHash('sha1').update(password).digest('hex');

module.exports = hashPassword;
