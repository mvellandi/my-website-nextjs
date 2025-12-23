// PostCSS configuration
// Note: Keeping tailwindcss/nesting for now due to nested @apply usage in codebase

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
