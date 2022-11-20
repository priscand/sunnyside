/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'lg': '1440px'
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif']        
      },
      colors: {
        'sunny': '#25564B',
        'grayblue': '#5A636C',
        'darkblue': '#818498',
        'bb': '#A7ABAE',
      },

      
      backgroundImage: theme => ({
        'head' : "url('/headeror.jpg')"
      })


    }
  },
  plugins: [],
}
