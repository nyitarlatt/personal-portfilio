module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      display: ["group-hover"],
      colors: {
        pfBg: "#282542",
        pfBgLight: "#44425f",
        pfText: "#fefefe",
        pfTextLight: "#d9d7df",
        pfBlue: "#2a59fe",
        pfBlueLight: "#4a79fe",
      },
      fontFamily: {
        Lato: ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
