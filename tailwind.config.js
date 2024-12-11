/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "once": "bounce 1s linear 1.52"
      }
    },
  },
  plugins: [require("daisyui")],
}