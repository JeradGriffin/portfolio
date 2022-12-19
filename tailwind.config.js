/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'design-dev': "url('../public/desdev.jpg')"
      },
      fontFamily: {
        burtons: "burtons",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
      fontFamily: {
        montserratB: "Montserrat-Bold",
      },
    },
  },
  plugins: [],
}
