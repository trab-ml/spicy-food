# TO LOCALLY RUN TAILWIND CSS

***spicy-food$*** npx tailwindcss -i ./src/dist/style/style.css -o ./src/dist/output.css --watch

***tailwind.config.js for this project*** 
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