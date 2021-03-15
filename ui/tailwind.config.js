module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    scale: ['active', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
