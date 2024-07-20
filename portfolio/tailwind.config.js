/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#112D4E",
        primaryContent: "#2E236C",
        primarySubcontent: "#433D8B",
        primaryAccent: "#C8ACD6",
        primaryBase: "#00000",
        primaryBg: "#BBE9FF",
      },
    },
  },
  plugins: [],
};
