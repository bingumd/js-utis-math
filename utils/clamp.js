/**
 * Clamps a value within a specified range.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 *
 * @returns {number} The clamped value within the specified range.
 */
export const clamp = (value, min, max) => (value < min ? min : value > max ? max : value)
