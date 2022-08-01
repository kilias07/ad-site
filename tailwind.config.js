/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColorGray: "#1A1919",
        grayLight: "#666262",
        claretDark: "#330E0E",
        claretLight: "#664343",
        grayLighter: "#B3ABAB",
        backgroundColor: "#F8FBFF",
        whiteCream: "#FFFEF9",
      },
      screens: {
        xsm: "380px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
