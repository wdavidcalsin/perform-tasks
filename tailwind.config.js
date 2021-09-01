module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#27303F",
      secondary: "#1B1F2E",
      white: "white",
      red: "#FF5552",
      green: "#15FF60",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      backgroundColor: {
        primary: "#27303F",
        secondary: "#1B1F2E",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
