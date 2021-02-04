import { createSSRApp } from 'vue'
import { createRouter } from './router'
import App from './App.vue'
import './main.postcss'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
