/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f8',
          100: '#d9e2ef',
          200: '#b3c4df',
          300: '#7d99c4',
          400: '#4d6ba3',
          500: '#2f4a85',
          600: '#1f3566',
          700: '#16274d',
          800: '#0f1d3a',
          900: '#0a1428',
          950: '#070d1e',
        },
        accent: {
          50: '#eafff5',
          100: '#cffee6',
          200: '#9ffbcc',
          300: '#5ff3aa',
          400: '#2ee98a',
          500: '#10d26c',
          600: '#08a856',
          700: '#088547',
          800: '#0a6a3a',
          900: '#0a5631',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 29, 58, 0.06), 0 1px 2px rgba(15, 29, 58, 0.04)',
        'card-hover': '0 8px 24px rgba(15, 29, 58, 0.1), 0 2px 6px rgba(15, 29, 58, 0.06)',
      },
    },
  },
  plugins: [],
};
