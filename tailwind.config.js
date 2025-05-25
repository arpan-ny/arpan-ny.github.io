// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' will now use your custom font first, then Tailwind's default sans-serif stack
        sans: ['Delius', ...defaultTheme.fontFamily.sans],
        // You could also define a completely new font family
        // display: ['Cool Display Font', 'serif'],
      },
      colors: {
        'app-bg': '#f8f8f8',
      },
    },
  },
  plugins: [],
};