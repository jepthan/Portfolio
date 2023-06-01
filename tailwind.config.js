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
      Blue: '#519ee8',
      white: '#ffffff',
      black: '#000000',
      red: '#e53138',
      green: '#004225',
      grey_Dark: '',
      grey_light: '',
    },
    extend: {},
  },
  plugins: [],
}

