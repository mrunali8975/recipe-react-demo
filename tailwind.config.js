/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Young Serif"', 'serif'], // For Young Serif
        outfit: ['"Outfit"', 'sans-serif'], // For Outfit
      },
    },
  },
  plugins: [],
}