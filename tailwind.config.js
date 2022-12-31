/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#13111B',
      darkPurple: '#1D192B',
      purple: '#483E6A',
      lightPurple: '#B4B6E8',
      lighterPurple: '#EDEEFF',
      white: '#FFFFFF',
      green: '#89C66D',
      red: '#F2A1A1',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Manrope', 'sans'],
    },
    fontSize: {
      sm: ['14px', '19px'],
      base: ['16px', '22px'],
      lg: ['18px', '24px'],
      xl: ['20px', '27px'],
      '2xl': ['24px', '32px'],
      '3xl': ['28px', '38px'],
      '4xl': ['32px', '43px'],
      '5xl': ['36px', '49px'],
      '6xl': ['40px', '54px'],
      '7xl': ['48px', '65px'],
      '8xl': ['56px', '76px'],
      '9xl': ['64px', '86px'],
      '10xl': ['72px', '98px'],
    },
    screens: {
      '3xs': '300px',
      '2xs': '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '840px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1400px',
    },
    extend: {
      width: {},
      spacing: {
        0.25: '1px',
        25: '100px',
        50: '200px',
      },
      borderRadius: {
        '2xs': '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '48px',
      },
      lineHeight: {
        4.5: '18px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
