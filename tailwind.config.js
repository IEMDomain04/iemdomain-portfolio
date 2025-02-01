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
        accent: '#95A3B7',
        dark: '#151A20',
        gray: '#242B33',
        footer: '#09090B',
      },
      backgroundImage: {
        gradient: 'linear-gradient(45deg, #7FE786, #58A7FE)',
      },
      fontFamily: {
        google: ['Google'],
        googlebold: ['Google-Bold'],
        netron: ['Netron'],
      },
      fontSize: {
        h1: '40px',
        h2: '20px',
        small: '12px',
        supertiny: '10px',
      }
    },
  },
  plugins: [],
}
