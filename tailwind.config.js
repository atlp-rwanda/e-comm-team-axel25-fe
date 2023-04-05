/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F6F1F1',
        dark: '#020917',
        dark2: '#0F172A',
        primary: '#06B6D4',
        secondary: '#A855F7',
        success: '#22C55E',
        warning: '#EAB308',
        danger: '#EF4444',
      },
    },
    plugins: [],
  },
};
