/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryTitle: "#3F72AF",
        primaryContent: "#405D72",
        primarySubcontent: "#758694",
        primaryAccent: "#DBE2EF",
        primaryBase: "#00000",
        primaryBg: "#F9F7F7",
      },
    },
  },
  plugins: [],
};
