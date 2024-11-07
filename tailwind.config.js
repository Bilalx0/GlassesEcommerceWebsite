/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        john: ["Josefin Sans", "sans-serif"],
        gistesy: ["Gistesy", "cursive"],
      }
    },
  },
  plugins: [],
}