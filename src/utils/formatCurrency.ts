/**
 * Format a number to a currency string
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 *
 */

export const formatCurrency = (amount: number, currency: string): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
};
