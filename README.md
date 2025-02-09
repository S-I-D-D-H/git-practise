# git-practise

## Project Description
This is a practice project for learning and demonstrating Git workflows. It includes basic JavaScript and TypeScript functionality for mathematical operations and conflict resolution.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/S-I-D-D-H/git-practise.git
   ```
2. Navigate to the project directory:
   ```bash
   cd git-practise
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage Examples
1. Start the application:
   ```bash
   npm start
   ```
2. Run the application in development mode:
   ```bash
   npm run dev
   ```

## Available Functions
### `add(a, b)`
- **Description**: Adds two numbers and returns the result.
- **Parameters**:
  - `a` (number): The first number.
  - `b` (number): The second number.
- **Returns**: The sum of `a` and `b`.
- **Throws**: `TypeError` if inputs are not numbers.

### `divide(a, b)`
- **Description**: Divides two numbers and returns the result.
- **Parameters**:
  - `a` (number): The numerator.
  - `b` (number): The denominator.
- **Returns**: The result of dividing `a` by `b`.
- **Throws**:
  - `TypeError` if inputs are not numbers.
  - `Error` if `b` is zero.

### `resolveConflict(str1, str2)`
- **Description**: Resolves conflicts between two strings by merging them intelligently.
- **Parameters**:
  - `str1` (string): The first string.
  - `str2` (string): The second string.
- **Returns**: A merged string.
- **Throws**: `TypeError` if inputs are not strings.

## Contributing Guidelines
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request and describe your changes.