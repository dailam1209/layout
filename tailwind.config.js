/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineClamp: {
        7: "7"
      }
    }
  },
  plugins: []
};
