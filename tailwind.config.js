/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anchor: {
          50: '#F3F5F1',
          100: '#E7EBE4',
          600: '#2C4A52',
        },
        resist: { 100: '#EAF1EA', 600: '#3E6146', bar: '#6B8F71' },
        partial: { 100: '#FBF2E7', 600: '#8A5B22', bar: '#D9A15D' },
        relapse: { 100: '#FBEBE8', 600: '#8A3F30', bar: '#C97064' },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}