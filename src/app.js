import Vue from 'vue'
import App from './App.vue'
import createRouter from './router.js'

export default () => {
  let router = createRouter()
  const app = new Vue({
    router,
    render: (h) => h(App),
  })

  return { app, router }
}
