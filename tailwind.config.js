/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    extend: {
      colors: {
        primary: '#F43757',
        pink: '#F8EFF1',
        lightBlue: '#F4F9FF',
        text: {
          grey: '#8E8E8E',
        },
      },
      borderRadius: {
        lg: '0.625rem',
      },
      height: {
        12.5: '3.125rem',
      },
      width: {
        12.5: '3.125rem',
        menuOpened: '298px',
        menuCollapsed: '86px',
      },
      minHeight: {
        12.5: '3.125rem',
      },
      minWidth: {
        12.5: '3.125rem',
      },
    },
  },
  plugins: [],
}
