/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D4FDC',
        'red': '#D9284D',
        'orange': '#F87239',
        'yellow': '#FFC55C',
        'green': '#32B797',
        'black': '#35302F',
        'darkGray': '#494443',
        'gray': '#8F8F8F',
        'lightGray': '#B4B4B4',
        'bg': '#F8F8F8',
      },
      fontFamily:{
        gramatikaBold: ['Gramatika-Bold'],
        gramatikaRegular: ['Gramatika-Regular'],
        gramatikaBlack: ['Gramatika-Black'],
        gramatikaMedium: ['Gramatika-Medium'],
        gramatikaLight: ['Gramatika-Light'],
      },
    },
  },
  plugins: [],
}
