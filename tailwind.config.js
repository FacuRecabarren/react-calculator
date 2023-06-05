/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      backgroundColor: {
        'base-calculator': '#262626',
        'numbers': '#F2F2F2',
        'operators': '#494740',
        'operators2': '#A62E5A',
        'operators-hover': ' #802E4C',
      },
      boxShadow: {
        'box-shadow': '0px 7px 7px 3px rgba(0,0,0,0.75)',
        'box-shadow-numbers': '0px 4px 2px 0px rgba(166,46,90,0.75)',
      },
      colors: {
        'numbers': '#262626',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

