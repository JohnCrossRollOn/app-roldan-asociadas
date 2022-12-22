/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
      },
      fontFamily: {
        icon: ['"Material Icons"'],
      },
    },
  },
  plugins: [require('daisyui')],
};
