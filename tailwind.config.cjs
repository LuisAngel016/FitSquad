/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'imgLogin': "url(./src/assets/imgLogin.svg)"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#283078',
        'secondary': '#7BCA9C',
        'terciary': '#FDFDFD',
        'quaternary': '#F1F1F1',
      }),
      textColor: {
        'primary': '#F3F3F3',
        'secondary': '#000000',
        'terciary': '#616161',
      },
      fontFamily: {
        FitSquad: ['FitSquad', 'sans-serif']
      }
    },
  },
  plugins: [],
}

