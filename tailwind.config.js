/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        medic: {
          teal: 'hsl(var(--medic-teal))',
          'teal-light': 'hsl(var(--medic-teal-light))',
          navy: 'hsl(var(--medic-navy))',
          'navy-dark': 'hsl(var(--medic-navy-dark))',
          'gray-bg': 'hsl(var(--medic-gray-bg))',
          text: 'hsl(var(--medic-text))',
          muted: 'hsl(var(--medic-muted))',
          white: 'hsl(var(--medic-white))',
          border: 'hsl(var(--medic-border))',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'count-up': 'count-up 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
