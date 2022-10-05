/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"], //like this,
  purge: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        custom: "905px",
      }
    },
    plugins: []
  }
};
