const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        // Define a custom keyframe animation
        customFadeIn: {
          '0%, 50%': {
            opacity: 0,
            width: 0, 
          },
          '75%': {
            opacity: 0.5,
            width: '5rem', 
          },
          '90%': {
            opacity: 0.8,
            width: '15rem', 
          },
          '100%': {
            opacity: 1,
            width: '18rem', 
          },
        },
      },

      // Define a custom keyframe animation
      animation: {
        customFadeIn: 'customFadeIn 200ms ease-in-out',
      },
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
