const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      red: "#d3314c",
      "red-shade": "#b51c36",
      purple: {
        25: "#fbf8fc",
        200: "#c692d8",
        300: "#B169C9",
        400: "#9f47bd",
        700: "#821fa3",
        900: "#6d148a",
        1000: "#590e72",
      },
      fontSize: {
        xs: ["14px", "20px"],
        sm: ["16px", "24px"],
        base: ["18px", "28px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "2xl": ["30px", "36px"],
        "3xl": ["36px", "40px"],
        "4xl": ["48px", "1"],
        "5xl": ["60px", "1"],
        "6xl": ["72px", "1"],
        "7xl": ["96px", "1"],
        "8xl": ["128px", "1"],
      },
    },
    extend: {
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      fontFamily: {
        brand: "Dancing\\ Script",
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

// extend: {
//   spacing: {
//     1.5: "6px",
//     2.5: "10px",
//   },
// },
