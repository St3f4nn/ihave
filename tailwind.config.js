module.exports = {
  content: [
    "./dist/*.html"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px'
    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'roboto': "'Roboto', sans-serif",
        'oswald': "'Oswald', sans-serif"
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '672px',
          },
          '@screen md': {
            maxWidth: '800px',
          },
          '@screen lg': {
            maxWidth: '1056px',
          },
          '@screen xl': {
            maxWidth: '1312px',
          },
          '@screen 2xl': {
            maxWidth: '1472px',
          },
          '@screen 3xl': {
            maxWidth: '1669px',
          }
        }
      })
    }
  ],
}