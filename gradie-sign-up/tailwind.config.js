module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto, Arial, sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-gradient": "url('./assets/Background.png')",
      },
      colors: {
        "theme-blue": "#013243",
        "theme-light-blue": "#7eb6ca",
        "theme-black": "#010100",
      },
    },
  },
  plugins: [],
};
