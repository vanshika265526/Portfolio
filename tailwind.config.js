/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        deepBlue:"linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #020617 100%)",
        fontBlue:"linear-gradient(50deg, #c4b5fd 0%, #67e8f9 100%)",
      },
      colors:{
        color1:"#8b5cf6",
        color1Hover:"#7c3aed",
        color2:"#06b6d4",
        color3:"#0d0b1a",
      },
      fontFamily:{
        sora:["Sora","sans"]
      },
      width:{
        radarWidth:"40rem!important"
      },
    },
  },
  plugins: [],
}