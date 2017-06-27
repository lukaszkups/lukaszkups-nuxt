import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    showMenu: false,
    years: [],
    postList: {}
  },
  mutations: {
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    },
    setYears (state, data) {
      state.years = data
      data.map(obj => {
        state.postList[obj] = []
      })
    },
    pushPost (state, data) {
      state.postList[data.year].push(data)
    }
  }
})

export default store
