/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F6F1F1',
        dark: '#020917',
        primary: '#638CF6',
        secondary: '#5EECBE',
        warning: '#F6C863',
        danger: '#FA4A4A',
        success: '#63F6A3',
      },
    },
    plugins: [],
  },
};
