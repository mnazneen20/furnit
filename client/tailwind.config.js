/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#feefe0',
        'dark-ash': '#23292e'
      }
    },
  },
  plugins: [],
}

