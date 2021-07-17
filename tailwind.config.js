// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      rotate: {
        '270': '270deg',
      },
      height: {
        '18': '90px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
