/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        secondary: ['Playfair Display', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
}

