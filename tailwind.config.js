/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        textClr: "#11175D",
      },
    },
  },
  plugins: [],
};
