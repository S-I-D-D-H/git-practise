/**
 * Adds two numbers and returns the result.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 * @throws {TypeError} If either of the inputs is not a number.
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    return a + b;
}
console.log("addition-3");
console.log("jkdjfdjfkf");