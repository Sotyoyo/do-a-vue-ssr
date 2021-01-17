import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      name: 'vue2',
    },
    mutations: {
      changeName: (state, payload) => {
        state.name = payload
      },
    },
    actions: {
      changeName: ({ commit }) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('changeName', 'vue3')
            resolve()
          }, 1000)
        })
      },
    },
  })

  if (typeof window != 'undefined' && window.__INITIAL_STATE__) {
    // 浏览器开始渲染了

    // 将后端渲染好的结果 同步给前端  vuex中核心方法
    store.replaceState(window.__INITIAL_STATE__) // 用服务端加载好的数据替换掉
  }

  return store
}
