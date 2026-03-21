/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        deepBlue:"linear-gradient(135deg, #0d0b1a 0%, #2b1044 50%, #150f24 100%)",
        fontBlue:"linear-gradient(50deg, #fbc2eb 0%, #a6c1ee 100%)",
      },
      colors:{
        color1:"#ec4899",
        color1Hover:"#db2777",
        color2:"#38bdf8",
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