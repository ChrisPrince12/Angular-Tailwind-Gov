const plugin = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#081B4B",
        accent: "#ff7500",
      },
      screens:{
        'small': '0px',
        'sm': '640px',
        'md': '768px',
        'break1': '860px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1024px',
        '8xl': '1300px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

