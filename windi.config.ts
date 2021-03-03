import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'

const config = defineConfig({
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
  darkMode: 'class',
})

export default config
