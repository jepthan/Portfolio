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
      col_text: '#FFFFFF',
      background: '#050505',
      primary: '#519ee8',
      secondary: '#1c1c17',
      accent: '#c84687',
      dark_grey: '#202020',

    },
    extend: {},
  },
  plugins: [],
}

