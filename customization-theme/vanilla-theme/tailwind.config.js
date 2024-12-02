/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.ftl', './**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

