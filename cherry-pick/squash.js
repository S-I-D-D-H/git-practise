/**
 * Concatenates an array of strings into a single string, separated by a space.
 * @param {string[]} strings - An array of strings to concatenate.
 * @returns {string} The concatenated string.
 * @throws {TypeError} If the input is not an array of strings.
 */
function squashStrings(strings) {
    if (!Array.isArray(strings) || !strings.every(str => typeof str === 'string')) {
        throw new TypeError('Input must be an array of strings');
    }

    return strings.join(' ');
}

module.exports = { squashStrings };