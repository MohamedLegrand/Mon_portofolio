/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Rouge du thème assombri : plus profond et moins saturé que le rouge Tailwind par défaut,
      // tout en gardant un contraste suffisant pour le texte (red-500 sur fond noir ≥ 4,5:1).
      colors: {
        red: {
          50: '#fbf3f3',
          100: '#f6e2e2',
          200: '#edc4c4',
          300: '#e09a9a',
          400: '#d66b6b',
          500: '#cc4a4a',
          600: '#a82e2e',
          700: '#8c2424',
          800: '#721f1f',
          900: '#5c1b1b',
          950: '#330c0c',
        },
      },
    },
  },
  plugins: [],
}