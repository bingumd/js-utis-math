/**
 * Linearly interpolates between two values.
 *
 * @param {number} start - The starting value.
 * @param {number} end - The ending value.
 * @param {number} amt - The interpolation amount (between 0 and 1).
 *
 * @returns {number} The interpolated value.
 */
export const lerp = (start, end, amt) => (1 - amt) * start + end * amt
