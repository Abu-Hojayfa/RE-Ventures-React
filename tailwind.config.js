/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["corporate"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}