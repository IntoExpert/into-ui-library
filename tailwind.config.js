/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#0092fc",
      primaryVariant: "#D9EAFD",
      secondary: "#f6bd60",
      background: "#f7ede2",
      surface: "#fff",
      error: colors.red['600']
    },
    extend: {
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
