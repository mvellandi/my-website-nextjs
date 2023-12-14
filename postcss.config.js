// The 'nesting' plugin by tailwind adapts the 'postcss-nesting' plugin and CSS Nesting Module Draft specification:
// https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting
// https://www.w3.org/TR/css-nesting-1/

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
