/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#D7263D', // Warm Red
        secondary: '#F9E8D9', // Warm Beige
        accent: '#556B2F', // Deep Olive Green
        charcoal: '#1A1A1A', // Charcoal Black
        background: '#FFFFFF', // Soft White
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        cta: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
