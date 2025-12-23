/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tarot: ['"CormorantSC-Bold"', "CormorantSC-Light", "CormorantSC-Medium", "CormorantSC-Regular", "CormorantSC-SemiBold", "serif",'],'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
