/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
