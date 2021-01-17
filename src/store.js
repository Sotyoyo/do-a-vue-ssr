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
  return store
}
