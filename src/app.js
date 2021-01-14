import Vue from 'vue'
import App from './App.vue'

export default () => {
  return new Vue({
    render(h) {
      return h(App)
    },
  })
}
