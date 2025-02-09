/**
 * Processes an array of numbers to calculate the sum and average.
 * @param {number[]} numbers - An array of numbers to process.
 * @returns {{ sum: number, average: number }} An object containing the sum and average of the numbers.
 * @throws {TypeError} If the input is not an array of numbers.
 */
function processNumbers(numbers) {
    if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
        throw new TypeError('Input must be an array of numbers');
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = numbers.length > 0 ? sum / numbers.length : 0;

    return { sum, average };
}

module.exports = { processNumbers };