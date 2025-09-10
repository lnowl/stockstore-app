/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ['Sarabun', 'sans-serif']
      },
      colors: {
        darkbg: '#0D1117',
        cardbg: '#151B23',
        cardhover: '#1F2630'
      }
    },
  },
  plugins: [],
}
