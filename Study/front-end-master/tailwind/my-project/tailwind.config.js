/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#CC00CC',
          light: '#FF00CC',
          DEFAULT: 'rebeccapurple',
        },
        'forest-green': {
          50: '#f3faf3',
          100: '#e3f5e3',
          200: '#c9e9c9',
          300: '#9ed79f',
          400: '#6cbc6d',
          500: '#489f49',
          600: '#388539',
          700: '#2e672f',
          800: '#285329',
          900: '#234424',
          950: '#0f2411',
        },

        mandy: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#ea546c',
          600: '#d5294d',
          700: '#b31d3f',
          800: '#961b3c',
          900: '#811a39',
          950: '#48091a',
        },
      },
      // colors(theme) {
      //   return {
      //     primary: {
      //       ...theme.colors.purple,
      //       DEFAULT: theme.colors.purple[500],
      //     },
      //   };
      // },
    },
  },
  plugins: [],
}
