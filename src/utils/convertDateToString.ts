/**
 * @param {Date} date
 * @returns {string}
 * @description: Converts a date to a string.
 * @example
 * import { convertDateToString } from 'utils';
 * const date = new Date();
 * const dateAsString = convertDateToString(date);
 */

export const convertDateToString = (date: Date): string => {
  return date.toISOString();
};
