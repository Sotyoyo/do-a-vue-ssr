import Vue from 'vue'
import Router from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.use(Router)

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
    ],
  })
  return router
}
