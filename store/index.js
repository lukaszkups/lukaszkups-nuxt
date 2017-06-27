import Vuex from 'vuex'
import axios from 'axios'

const store = () => new Vuex.Store({
  state: {
    showMenu: false,
    posts: []
  },
  mutations: {
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    }
  },
  actions: {
    fetch ({ store, params }) {
      return axios.get('http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/static/notes').then((res) => {
        console.log(res)
        store.commit('posts', res.data)
      }).catch((err) => {
        console.warn(err)
      })
    }
  }
})

export default store
