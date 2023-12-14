const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      pmd: "375px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      lgtall: { raw: "(orientation: portrait) and (min-width: 1024px)" },
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "2k": "2000px",
      "2k3": "2300px",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: "black",
      white: "white",
      red: "#c93b53",
      "red-shade": "#b51c36",
      orange: "#E58600",
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
        500: "#6a7182",
        600: "#585f73",
        700: "#454D63",
        800: "#1f2937",
        900: "#111827",
      },
    },
    fontSize: {
      xs: ["1.4rem", "1.43"],
      sm: ["1.6rem", "1.5"],
      base: ["1.8rem", "1.56"],
      lg: ["2rem", "1.4"],
      xl: ["2.4rem", "1.33"],
      "2xl": ["3rem", "1.2"],
      "3xl": ["3.6rem", "1.11"],
      "4xl": ["4.8rem", "1"],
      "5xl": ["6rem", "1"],
      "6xl": ["7.2rem", "1"],
    },
    spacing: {
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      60: "60px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
    },
    extend: {
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
      fontFamily: {
        brand: "Dancing\\ Script",
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        1: "0.02rem",
        2: "0.04rem",
        3: "0.06rem",
        4: "0.08rem",
      },
      typography: {
        sm: {
          css: {
            fontSize: "1.4rem",
            // lineHeight: '1.7142857' or 24px
            // use gap-[0.4rem] for simulating with flexbox columns
          },
        },
        DEFAULT: {
          css: {
            fontSize: "1.6rem",
            // lineHeight: '1.75' or 28px
            // use gap-[0.4rem] for simulating with flexbox columns
          },
        },
        base: {
          css: {
            fontSize: "1.6rem",
            // lineHeight: '1.75' or 28px
            // use gap-[0.4rem] for simulating with flexbox columns
          },
        },
        lg: {
          css: {
            fontSize: "1.8rem",
            // lineHeight: '1.7777778' or 32px
            // use gap-[0.4rem] for simulating with flexbox columns
          },
        },
        xl: {
          css: {
            fontSize: "2rem",
            // lineHeight: '1.8' or 36px
            // use gap-[0.8rem] for simulating with flexbox columns
          },
        },
        "2xl": {
          css: {
            fontSize: "2.4rem",
            // lineHeight: '1.6666667' or 40px
            // use gap-[0.8rem] for simulating with flexbox columns
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
