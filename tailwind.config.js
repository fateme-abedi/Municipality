/** @type {import('tailwindcss').Config} */
module.exports = {
    mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
    theme: {
      extend: {
        colors: {
          'button-color': '#2D5847',
          'input':'#5D8D73',
          'footer':'#2C5847'
        },
      }                                                                  
    }
 ,
  plugins: [],
}
