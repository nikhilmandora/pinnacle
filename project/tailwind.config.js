/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        superaUltraLight: ['Supera Gothic UltraLight', 'sans-serif'],
        superaLight: ['Supera Gothic Light', 'sans-serif'],
        superaThin: ['Supera Gothic Thin', 'sans-serif'],
        superaBook: ['Supera Gothic Book', 'sans-serif'],
        supera: ['Supera Gothic', 'sans-serif'],
        superaBold: ['Supera Gothic Bold', 'sans-serif'],
        superaExtraBold: ['Supera Gothic ExtraBold', 'sans-serif'],
        superaUltraBold: ['Supera Gothic UltraBlack', 'sans-serif']
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        "right-left" : "right-left 3s ease-in-out infinite"
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(10%)' },
          to: { transform: 'translateX(-100%)' },
        },

        spin: {
          '0%': {
            transform: 'rotate(360deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },

        "right-left":{
          "0%" : {
            transform: "translateX(0%)",
            opacity: "1"
          },
          "20%" : {
            transform: "translateX(0%)",
            opacity: "1"
          },
          "50%" : {
            transform : "translateX(-100%)",
            opacity: "0"
          },
          "80%" : {
            transform: "translateX(0%)",
            opacity: "1"
          },
          "100%" : {
            transform : "translateX(0%)",
            opacity: "1"
          }
        }
      },

      screens: {
        xxs: "320px",
        vxs: "360px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1360px",
      },
    },
  },
  plugins: [],
  
};
