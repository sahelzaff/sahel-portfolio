/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '53': '53%',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
        outfit: ['Outfit', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
