/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: {
          DEFAULT: '#00e5ff',
          glow: 'rgba(0, 229, 255, 0.5)',
        },
        secondary: {
          DEFAULT: '#7000ff',
          glow: 'rgba(112, 0, 255, 0.5)',
        },
        accent: {
          DEFAULT: '#00ffa3',
          glow: 'rgba(0, 255, 163, 0.5)',
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
