module.exports = {
  content: [
    "./dist/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}