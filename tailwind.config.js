/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Font mặc định là Montserrat
        oozes: ["Oooh Baby", "cursive"], // Font phụ
      },
      backgroundImage: {
        'home': "url('./src/assets/images/login.png')",
      },
      colors: {
        'main': '#FF5959',
      },
    },
  },
  plugins: [],
};
