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
      colors: {
        pfBg: "#282542",
        pfBgLight: "#44425f",
        pfText: "#fefefe",
        pfTextLight: "#d9d7df",
        pfBlue: "#2a59fe",
        pfBlueLight: "#4a79fe",
      },
    },
  },
  plugins: [],
};
