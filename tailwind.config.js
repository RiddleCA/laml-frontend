module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "70vw": "70vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        aurora: "url('./assets/aurora.jpg')",
      }),
    },
  },
};
