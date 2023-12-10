/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Work-Sans': ['Work Sans', 'sans-serif']
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      screens: {
        'sm': '320px', // Added custom breakpoint for 320px
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        'xxl': '1440px'
      },
    },
  },
  plugins: [],
};
