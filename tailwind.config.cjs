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
  daisyui: {
    themes: [
      {
        roldanTheme: {
          primary: '#f97316',
          secondary: '#7D919B',
          accent: '#EB6B47',
          neutral: '#23282F',
          'base-100': '#212121',
          info: '#0092D6',
          success: '#6CB288',
          warning: '#DAAD58',
          error: '#AB3D30',
        },
      },
    ],
  },
}
