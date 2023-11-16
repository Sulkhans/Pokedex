/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        neutral: {
          300: "#dcdcdc",
          400: "#cecece",
          500: "#c0c0c0",
          600: "#737373",
        },
      },
    },
  },
  plugins: [],
};
