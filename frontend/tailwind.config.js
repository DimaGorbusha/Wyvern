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
      }
    },
  },
  plugins: [],
}
