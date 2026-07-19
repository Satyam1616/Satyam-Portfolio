/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d14',
        'spider-dark': '#0d0d14',
        'spider-red': '#ff003c',
        'spider-blue': '#4d9eff',
        'multi-blue': '#4d9eff',
        'comic-yellow': '#ffd700',
        'ink': '#000000',
        'ink-black': '#000000',
        'paper': '#f5f5f0',
        'paper-white': '#f5f5f0',
        'verse-dark': '#0d0d14',
        'spiderverse-bg': '#0d0d14',
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'float': 'float 6s infinite ease-in-out',
        'web-swing': 'web-swing 2s ease-in-out',
        'halftone-pulse': 'halftone-pulse 2s infinite',
        'marquee': 'marquee 20s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'web-swing': {
          '0%': { transform: 'rotate(-5deg) translateX(-10px)', opacity: '0' },
          '50%': { transform: 'rotate(3deg) translateX(5px)', opacity: '1' },
          '100%': { transform: 'rotate(0) translateX(0)', opacity: '1' },
        },
        'halftone-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-lg': '6px 6px 0px 0px #000000',
        'comic-red': '4px 4px 0px 0px #ff003c',
        'comic-blue': '4px 4px 0px 0px #4d9eff',
      },
    },
  },
  plugins: [],
}
