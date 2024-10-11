/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',    // Extra small devices (custom breakpoint)
        sm: '640px',    // Small devices (640px and up)
        md: '768px',    // Medium devices (768px and up)
        lg: '1024px',   // Large devices (1024px and up)
        xl: '1280px',   // Extra large devices (1280px and up)
        '2xl': '1536px', // 2x Extra large devices (1536px and up)
      },
      boxShadow: {
        'box': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        cagliostro: ['Cagliostro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poiretOne: ['Poiret One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'scope-one': ['Scope One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}