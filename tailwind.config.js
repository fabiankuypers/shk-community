/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#c0ddfd',
          300: '#94c6fb',
          400: '#60a5f8',
          500: '#3b82f6',
          600: '#2667eb',
          700: '#1d4fd8',
          800: '#1d41b0',
          900: '#0F4C81',
        },
        orange: {
          500: '#F26419',
          600: '#e05916',
          700: '#c84c14',
        }
      },
    },
  },
  plugins: [],
};