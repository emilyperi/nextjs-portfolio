/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./pages/**/*.{js,ts,jsx,tsx}",
  	"./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
	        greybrown: '#5B4E3E',
            magenta: '#94268B',
            sand: '#D4A081',
            tange: '#D4683B',
            darkbrown: '#21190E',
            lightgreybrown: '#907965',
            greymagenta: '#7F5F68',
            gold: '#EC9C2C',
            lightgreymagenta: '#e6dee0',
            xlightgreybrown: '#DBD3CA'
          },

          fontFamily: {
              sans: [
                  'Segoe UI',
                  'Frutiger',
                  'Dejavu Sans',
                  'Helvetica Neue',
                  'Arial'
              ],
              starmoon: [
                  'Starmoon',
                  'cursive'
              ]

          }
          
	},
    
      },
  plugins: [],
}
