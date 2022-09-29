/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        red: "#1a0303",
        redHover: "#f72323",
        primary: "#00040f",
        secondary: "#e03d07",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimRed: "rgba(135, 61, 61, 0.8)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0,0,0,1)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
