import { UserConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [vuePlugin()],
  build: {
    minify: false
  }
}

export default config
