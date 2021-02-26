const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.layout': {
          display: 'grid',
          gridTemplateColumns: '13.25rem auto',
          gridTemplateRows: '1fr',
        },
        '.nav': {
          gridColumn: '1'
        },
        '.main': {
          gridColumn: '2'
        }
      }

      addUtilities(newUtilities)
    })
  ]
}