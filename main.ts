/**
 * Main application file for performing addition and division operations.
 * Demonstrates the usage of imported functions with proper error handling.
 */

import { add } from './addition/addition.js';
import { divide } from './division/division.js';

try {
    const sum: number = add(10, 20);
    console.log('Sum:', sum);

    const quotient: number = divide(100, 5);
    console.log('Quotient:', quotient);
} catch (error) {
    console.error('An error occurred:', error.message);
}