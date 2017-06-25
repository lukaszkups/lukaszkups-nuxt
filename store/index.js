import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    showMenu: false
  },
  mutations: {
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    }
  }
})

export default store
