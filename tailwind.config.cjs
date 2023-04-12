/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#E6FA00'
      },
      fontFamily: {
        'jetbrains' : ['"JetBrains Mono"']
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-in',
      }
    },
  },
  plugins: [],
}