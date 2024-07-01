/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        '53': '53%',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'], // Replace with your Google Font and fallbacks
        outfit: ['Outfit', 'Arial', 'sans-serif'], // Replace with your Google Font and fallbacks
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
