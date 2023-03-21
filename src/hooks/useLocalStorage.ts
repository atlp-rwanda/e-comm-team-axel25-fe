/**
 * useLocalStorage hook
 * @param {string} key - The key to store the value under.
 * @param {any} initialValue - The initial value to store.
 * @returns {array} - The value and the setter function.
 * @description This function is a custom hook that stores a value in localStorage.
 * @example
 * const [name, setName] = useLocalStorage('name', 'John Doe');
 */

import { useState } from 'react';

// !🚨 TODO: Fix any type. Never use any unless you have to.
// !🚨 This hook is just a placeholder. You need to implement it with the correct types, and correct functionality.

const useLocalStorage = (key: string, initialValue: any): any => {
  localStorage.setItem(key, JSON.stringify(initialValue));
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
};
