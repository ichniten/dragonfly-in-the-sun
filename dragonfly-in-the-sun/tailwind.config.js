/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      error: '#e11d48',
      white: '#fff'
    },
    extend: {
      maxWidth: {
        'app-container': '1075px'
      },
      backgroundImage: {
        'main-pattern':
          'linear-gradient(180deg, #0F4260 0%, #3E778D 7.05%, #96D3E0 15.93%, #D0DED7 26.81%, #BEC6B5 62.53%, #FFE590 100%)'
      }
    }
  },
  plugins: []
}
