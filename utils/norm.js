/**
 * Normalizes a value within a specified range.
 *
 * @param {number} value - The value to normalize.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 *
 * @returns {number} The normalized value within the specified range.
 */
export const norm = (value, min, max) => (value - min) / (max - min)
