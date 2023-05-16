/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      Blue: '#a6c9eb',
      white: '#ffffff',
      black: '#000000',
      red: '#e53138',
      green: '',
      grey_Dark: '',
      grey_light: '',
    },
    extend: {},
  },
  plugins: [],
}

