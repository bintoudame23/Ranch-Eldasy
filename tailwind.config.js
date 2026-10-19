/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        ranch: {
          50:  '#faf6ec',
          100: '#f3ebd0',
          200: '#e8d9a5',
          300: '#d8be72',
          400: '#caa248',
          500: '#c18427',
          600: '#a86d1f',
          700: '#8a541c',
          800: '#72431e',
          900: '#5e371d',
        },
        forest: {
          50:  '#f0f6f2',
          100: '#daeae0',
          200: '#b6d5c3',
          300: '#84b89e',
          400: '#559779',
          500: '#35795c',
          600: '#275f48',
          700: '#214d3b',
          800: '#1d3e30',
          900: '#183428',
          950: '#0e2019',
        },
      },
    },
  },
  plugins: [],
};
