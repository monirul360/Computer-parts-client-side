module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    daisyui: {
      themes: ["cupcake", "dark", "cmyk"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
