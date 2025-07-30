/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gradient-color-1': 'var(--gradient-color-1)',
        'gradient-color-2': 'var(--gradient-color-2)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, var(--gradient-color-1), var(--gradient-color-2))',
      }
    },
  },
  plugins: [],
}