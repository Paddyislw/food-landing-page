/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0E2368',
        secondary:'#E23744',
        gray:'#444957',
        lightGray:'#AFAFAF',
        darkGray:'#424961'
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },
      // => @media (max-width: 900px) { ... }

      sm: { max: "800px" },
      // => @media (max-width: 639px) { ... }
      mb: { max: "600px" },
    },
  },
  plugins: [],
}