module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#673AB7',
      primary_lite: '#E1D8F1',
      green: '#27AE60',
      // green_lite:'#27AE60',
      red: '#FF0808',
      // red_lite:'',
      gray: '#F2F2F2',
      gary_dark: '#BDBDBD',
      black: '#000',
      white: '#fff',
      transparent:'transparent'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
