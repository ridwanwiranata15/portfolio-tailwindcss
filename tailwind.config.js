/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      'gambar':{
        'background-image':'url("./logo.png")',
        'width':'100px',
        'height':'100px',
        'background-size':'cover',
        'border-radius':'20px',
        'background-color':'white',
        'margin':'10px'      } 
    },screens:{
      'sm': {'min': '360px', 'max': '800px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    }
  },
  plugins: [],
}

