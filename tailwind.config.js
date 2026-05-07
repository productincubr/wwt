/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      'warm-white': '#FDF9F4',
      'cream': '#FAF7F2',
      'burgundy': '#6B2737',
      'burgundy-light': '#8B3A4A',
      'burgundy-dark': '#4A1A26',
      'rose': '#C4768A',
      'gold': '#B8915A',
      'tan': '#B8915A',
      'text-dark': '#2C1F1F',
      'text-mid': '#5A3F3F',
      'text-light': '#9A7E7E',
      'border': 'rgba(107, 39, 55, 0.15)',
    },
    fontFamily: {
      'display': ['Cormorant Garamond', 'Georgia', 'serif'],
      'body': ['Jost', 'system-ui', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'xs': ['0.68rem', { lineHeight: '1' }],
        'sm': ['0.72rem', { lineHeight: '1' }],
        'base': ['0.95rem', { lineHeight: '1.7' }],
        'lg': ['1.05rem', { lineHeight: '1.3' }],
      },
      animation: {
        'fadeUp': 'fadeUp 0.9s ease both',
        'fadeIn': 'fadeIn 1.1s 0.2s ease both',
        'fadeIn-slow': 'fadeIn 1.2s 0.4s ease both',
        'fadeIn-slower': 'fadeIn 1.3s 0.5s ease both',
        'fadeIn-slowest': 'fadeIn 1.3s 0.6s ease both',
        'pulse-slow': 'pulse 2s infinite',
        'scroll': 'scrollAnim 1.8s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollAnim: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
    },
  },
  plugins: [],
}

