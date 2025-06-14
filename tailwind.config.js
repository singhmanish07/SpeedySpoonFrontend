/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#fc8a06',
        secondary:'#03081F'
      },
      screens: {
        xs: '400px', 
      },
    },
  },
  plugins: [],
}