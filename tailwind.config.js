module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl': '6.7rem',
      },
    },

    extend: {
      borderRadius: {
        overlay: '50px',
      },
      screens: {
        '2xl': '1600px',
        '3xl': '1900px',
      },

      width: {
        lg: '50rem',
        md: '35rem',
        120: '30rem',
      },

      height: {
        lg: '50rem',
        md: '35rem',
      },

      backgroundImage: (theme) => ({
        contactBg: "url('/src/assests/contactPage/heroGradient.png')",
      }),

      inset: {
        105: '27rem',
        110: '29rem',
        120: '34rem',
        150: '45rem',
        90: '22rem',
        '-120': '-1000rem',
        services: '35rem',
      },

      animation: {
        'spin-slow': 'spin 24s linear infinite',

        // if you are using the animate variant of the modal
        modal: 'modal 0.5s',

        // if you are using drawer variant right
        'drawer-right': 'drawer-right 0.3s',

        // if you are using drawer variant left
        'drawer-left': 'drawer-left 0.3s',

        // if you are using drawer variant top
        'drawer-top': 'drawer-top 0.3s',

        // if you are using drawer variant bottom
        'drawer-bottom': 'drawer-bottom 0.3s',
      },
      keyframes: {
        // if you are using the animate variant of the modal
        modal: {
          '0%, 100%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        // if you are using drawer variant right
        'drawer-right': {
          '0%, 100%': { right: '-500px' },
          '100%': { right: '0' },
        },

        // if you are using drawer variant left
        'drawer-left': {
          '0%, 100%': { left: '-500px' },
          '100%': { left: '0' },
        },

        // if you are using drawer variant top
        'drawer-top': {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },

        // if you are using drawer variant bottom
        'drawer-bottom': {
          '0%, 100%': { bottom: '-500px' },
          '100%': { bottom: '0' },
        },
      },

      colors: {
        'brand-bg': '#F9FEFB',
        'text-primary': '#0A1D37',
        'text-brand': '#198FB1',
        'text-secondary': '#3E4057',
        'text-secondary-light': '#73748A',
        'brand-shape': '#DEF1FF',
        'btn-gradient-start': '#B6DBFB',
        'btn-gradient-stop': '#097A9B',
        planet: '#A6D4F6',
        'footer-brand': '#318EA0',
        'testimonial-heading': '#2C4D79',
        'chevron-bg': '#E1F2FF',
      },

      lineHeight: {
        'brand-spacing': '4.5rem',
        'brand-spacing-large': '6.5rem',
      },

      boxShadow: {
        'inner-planet': 'inset 0 5px 10px 0 rgba(0, 0, 0, 0.3)',
        'shadow-projects': '5px 10px 13px rgb(37,131,78, 0.3)',
        'shadow-brand': '2px 10px 13px rgb(37,131,78, 0.3)',
        'shadow-brand-accordion': '0px 5px 10px rgb(37,131,78, 0.3)',
      },

      fontFamily: {
        rubik: ['Rubik', 'Roboto'],
      },

      zIndex: {
        '-100': '-100',
      },

      rotate: {
        360: '360deg',
      },
    },
  },
  variants: {
    transitionProperty: {
      height: 'height',
    },
    extend: {
      backgroundColor: ['active', 'checked'],
      inset: ['checked'],
      opacity: ['disabled'],
      textColor: ['active'],
    },
  },
  plugins: [],
};
