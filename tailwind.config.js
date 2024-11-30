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
      },
      colors: {
        text: '#050d0c',
        background: '#f4f6f6',
        primary: '#245953',
        secondary: '#408e91',
        accent: '#e49393',
      },
    },
  },
  plugins: [],
}