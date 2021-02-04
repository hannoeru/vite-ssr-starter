/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'Meiryo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.teal,
      },
      opacity: {
        15: '0.15',
        20: '0.2',
        95: '0.95',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
      padding: {
        '2/3': '66.666%',
      },
      height: {
        18: '4.5rem',
      },
      width: {
        18: '4.5rem',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      animation: ['group-hover'],
      backgroundOpacity: [
        'dark',
        'active',
      ],
    },
  },
  darkMode: 'class',
}
