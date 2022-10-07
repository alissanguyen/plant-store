/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "*.{html,js}"], //like this,
  purge: [
    "./src/components/**/*.tsx",
    "./pages/**/*.tsx",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        custom: "905px"
      }
    },
    plugins: []
  }
};
