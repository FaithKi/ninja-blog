/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      primary: {100:'#FB8500', 200:'#FFB703'},
      secondary: {100:'#023047', 200:'#219EBC', 300:'#8ECAE6'},
    },fontFamily : {
      'body' : ['Afacad']
    },},
  },
  plugins: [],
}

