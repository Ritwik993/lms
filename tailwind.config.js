/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'], 
      },
      boxShadow: {
        'custom': '0 4px 10px 0 #6E7485', // Define custom shadow
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: '4 4 0%',
        5: '5 5 0%',
        6: '6 6 0%',
      },
    },
  },
  plugins: [],
}