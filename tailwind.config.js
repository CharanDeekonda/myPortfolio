/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alatsi': ['Alatsi', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#2A3439',  
        'light-text': '#DBD7D2',
      }
    },
  },
  plugins: [],
}

