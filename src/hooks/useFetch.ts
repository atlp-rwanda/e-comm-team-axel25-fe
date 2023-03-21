/**
 * @file useFetch.ts
 * @description This file contains the useFetch hook.
 */

import { useState, useEffect } from 'react';

/**
 * @function useFetch
 * @param {string} url - The URL to fetch.
 * @param {object} options - The options to pass to the fetch request.
 * @returns {object} - The response from the fetch request.
 * @description This function is a custom hook that fetches data from a URL.
 * @example
 * const { data, loading, error } = useFetch('https://google.com');
 * @example
 * const { data, loading, error } = useFetch('https://google.com', {
 *  method: 'POST',
 * body: JSON.stringify({ name: 'John Doe' }),
 * });
 * @example
 * const { data, loading, error } = useFetch('https://google.com', {
 * method: 'POST',
 * body: JSON.stringify({ name: 'John Doe' }),
 * headers: {
 *  'Content-Type': 'application/json',
 * },
 * });
 */

// ! 🚨 TODO: Fix any type. Never use any unless you have to.

const useFetch = (url: string, options: any): object => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError('An error occurred.');
      }
    };

    fetchData();
  }, []);

  return { response, error, loading };
};
