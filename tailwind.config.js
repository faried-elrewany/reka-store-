/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        120: "120%",
      },
      outlineOffset: {
        3: ".5px",
      },
      boxShadow: {
        skills: "0 15px 50px #000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
//  content: ["./*.html"],
