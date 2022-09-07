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
        25: "fbf8fc",
        100: "#dec0e8",
        200: "#c692d8",
        400: "#9f47bd",
        700: "#821fa3",
        900: "#6d148a",
        1000: "#590e72",
      },
    },
  },
  plugins: [],
};

// extend: {
//   spacing: {
//     1.5: "6px",
//     2.5: "10px",
//   },
// },
