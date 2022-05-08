module.exports = {
  content: [
    "./dist/*.html",
    "./dist/js/*.js",
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
      },
      letterSpacing: {
        '0.72': '0.72px',
        '0.96': '0.96px',
        '1.44': '1.44px'
      },
      lineHeight: {
        6.75: '27px',
        7.25: '29px',
        10.25: '41px',
        13.25: '53px',
        15: '60px',
        18.5: '74px',
        23.5: '94px'
      },
      colors: {
        '656565': '#656565',
        'dfe3eb': '#dfe3eb',
        '231f20': '#231f20',
        'ff9300': '#ff9300',
        '9c9c9c': '#9c9c9c',
        '4b4b4b': '#4b4b4b',
        'db6e00': '#db6e00',
        'ebeff7': '#ebeff7'
      },
      spacing: {
        0.11: '0.44px',
        0.25: '1px',
        0.5: '2px',
        0.75: '3px',
        1.0425: '4.17px',
        1.57: '6.28px',
        2.095: '8.38px',
        2.1625: '8.65px',
        3.5: '14px',
        4.25: '17px',
        5.5: '22px',
        7.5: '30px',
        8.1175: '32.47px',
        8.125: '32.5px',
        8.445: '33.78px',
        8.5: '34px',
        9.055: '36.22px',
        9.5: '38px',
        12.25: '49px',
        12.5: '50px',
        13: '52px',
        19.5: '78px',
        27.5: '110px',
        36.25: '145px',
        41.625: '166.5px',
        42.5: '170px',
        45.25: '181px',
        48.5: '194px',
        49.89: '199.56px',
        52.5: '210px',
        62.25: '249px',
        67: '268px',
        67.25: '269px',
        96.75: '387px'
      },
      fontSize: {
        '28': '28px',
        '50': '50px',
        '64': '64px'
      },
      boxShadow: {
        'cta-buy': '0px 2px 4px #00000029',
        'cta-add': '0px 2px 6px #00000029, 0px 2px 6px #00000029 inset'
      },
      maxWidth: {
        130.5: '522px',
        105: '420px',
        140: '560px',
        144.5: '578px',
        149: '596px',
        156: '624px'
      },
      backgroundImage: {
        'hero-background': 'linear-gradient(90deg, rgba(223,227,235,1) 30%, rgba(235,239,247,1) 30%)'
      },
      width: {
        23.75: '95px'
      },
      height: {
        1.25: '5px'
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