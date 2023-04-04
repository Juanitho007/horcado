/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // <= add this
    "./src/**/*.{js,ts,jsx,tsx,html,css}", // <= no spaces
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
