/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        w500: "500px",
      },
      borderWidth: {
        px1: "1px",
      },
    },
  },
  plugins: [],
};
