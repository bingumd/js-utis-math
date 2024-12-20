/**
 * Calculates the modulus (remainder) of a division operation.
 *
 * @param {number} n - The dividend.
 * @param {number} m - The divisor.
 *
 * @returns {number} The modulus (remainder) of n divided by m.
 */
export const mod = (n, m) => ((n % m) + m) % m
