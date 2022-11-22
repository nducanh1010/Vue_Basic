/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  purge:['./index.html','./src/**/*.{vue,js,ts}'],
  mode:'jit',
  content: [],
  theme: {
    screens: {
      xs: '0px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {},
  },
  plugins: [],
}
