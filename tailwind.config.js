/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#0092fc",
      secondary: "#f6bd60",
      background: "#f7ede2",
      surface: "#fff"
    },
    extend: {},
  },
  plugins: [],
}
