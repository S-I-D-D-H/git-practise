/**
 * Divides two numbers and returns the result.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} The result of the division.
 * @throws {TypeError} If either of the inputs is not a number.
 * @throws {Error} If attempting to divide by zero.
 */
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}