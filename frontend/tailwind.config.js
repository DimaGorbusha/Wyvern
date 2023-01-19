/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'gramatika-bold': ['Gramatika-Bold'],
        'gramatika-black': ['Gramatika-Black'],
        'gramatika-light': ['Gramatika-Light'],
        'gramatika-regular': ['Gramatika-Regular'],
        'gramatika-mdeium': ['Gramatika-Medium'],
      },
      colors:{
        custom_black: '#35302F',
        dark_gray: '#494443',
        gray: '#8F8F8F',
        light_gray: '#B4B4B4',
        bg: '#F8F8F8',
        main: '#0D4FDC',
        hov: '#2365F1',
        inactive: '#ACACAC',
      }
    },
  },
  plugins: [],
}
