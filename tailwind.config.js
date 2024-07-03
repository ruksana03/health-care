/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        first: "#020043", //dark blue
        second:"#FFC637", //yellow
        third: "#FFFFF5", 
        fourth: "#FBFBFB",

      },
    },
  },
  plugins: [],
}

