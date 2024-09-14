/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: 'class',  // або 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'htmllessons-io': '#0ff0b8',
      },
      backgroundColor: {
        'my-bg' : '#2d4843'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents }) {
      addUtilities({
        '.hide': {
          display: 'none',
        }
      }),
          addComponents({
            '.btn': {
              display: 'inline-block',
            }
          })
    }),
  ],
}
