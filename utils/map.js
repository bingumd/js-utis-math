/**
 * Maps a value from one range to another.
 *
 * @param {number} x - The value to map.
 * @param {number} a - The start of the input range.
 * @param {number} b - The end of the input range.
 * @param {number} c - The start of the output range.
 * @param {number} d - The end of the output range.
 *
 * @returns {number} The mapped value.
 */
export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c
