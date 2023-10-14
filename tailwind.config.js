/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)',
        white: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          off: 'hsl(0, 0%, 94%)',
        },
        grey: {
          light: 'hsl(0, 0%, 86%)',
          smokey: 'hsl(0, 1%, 44%)',
        },
        'off-black': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
