/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {'min': '350px', 'max': '431px'},
        'md': {'min': '768px', 'max': '1023px'},
      }
    },
  },
  plugins: [],
}