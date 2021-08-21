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
  plugins: [require("tailwindcss-filters"), require("tailwind-glassmorphism")],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      backgroundImage: (theme) => ({
        aurora: "url('./assets/aurora.jpg')",
        aurora2: "url('./assets/aurora.webp')",
      }),
    },
  },
};
