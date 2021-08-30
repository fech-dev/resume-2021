module.exports = {
  purge: ["./public/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFF",
      dark: "#313131",
      blue: {
        DEFAULT: "#36728C",
        dark: "#0D475F",
      },
      teal: "#36878C",
    },

    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },

    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
