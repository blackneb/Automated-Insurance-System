/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
