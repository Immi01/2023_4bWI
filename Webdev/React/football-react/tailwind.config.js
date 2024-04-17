/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'back': '#f7f5ee',
      'betw': '#a5a49f',
      'dark': '#3f4950'
    },
    fontSize: {
      'h1': '2.5rem',
      'h2': '2rem'
    },
    spacing: {
      '90': '23rem',
      '25rem': '25rem'
    }
  },
  plugins: [],
}

