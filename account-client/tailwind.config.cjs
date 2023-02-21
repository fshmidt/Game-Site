/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/*.vue','./src/views/*.vue', './src/components/*.vue'],
  theme: {
    extend: {
      fontSize: {
        '5xl': '3.375rem',
        'xxl': '1.375rem',
        '5xl': '3.375rem',
        '3xl': '1rem',
      },
      backgroundImage: {
        'philippines': "url('src/img/philippines.jpg')",
      }
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('extend')
    })
  },
  plugins: [],
}
