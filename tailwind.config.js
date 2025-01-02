/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7FE786',
        secondary: '#58A7FE',
        dark: '#151A20',
        gray: '#242B33',
      },
      backgroundImage: {
        gradient: 'linear-gradient(45deg, #7FE786, #58A7FE)',
      },
      fontSize: {
        h1: '50px',
        h2: '30px',
        small: '12px'
      }
    },
  },
  plugins: [],
}
