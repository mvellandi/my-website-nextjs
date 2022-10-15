const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: "black",
      white: "white",
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
      gray: {
        1: "#fafbfc",
        25: "#EDEFF2",
        400: "#78819B",
        800: "#1f2937",
        900: "#111827",
      },
    },
    fontSize: {
      xs: ["0.875rem", "1.43"],
      // 16px
      sm: ["1rem", "1.5"],
      // 18px
      base: ["1.125rem", "1.56"],
      // 20px
      lg: ["1.25rem", "1.4"],
      // 24px
      xl: ["1.5rem", "1.33"],
      // 30px
      "2xl": ["1.875rem", "1.2"],
      // 36px
      "3xl": ["2.25rem", "1.11"],
      // 48px
      "4xl": ["3rem", "1"],
      "5xl": ["60px", "1"],
      "6xl": ["72px", "1"],
      "7xl": ["96px", "1"],
      "8xl": ["128px", "1"],
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
