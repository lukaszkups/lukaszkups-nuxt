import Vuex from 'vuex'
import axios from 'axios'
import fm from 'front-matter'
import token from './../static/secrets/secret.json'

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
    pushPost (state, data, index) {
      if (!state.postList[data.year]) {
        state.postList[data.year] = []
      }
      state.postList[data.year][data.index] = data
    },
    pushPosts (state, dataList) {
      state.postList[dataList[0].year] = dataList
    }
  },
  getters: {
    postList: state => {
      return state.postList
    },
    years: state => {
      return state.years
    }
  },
  actions: {
    async nuxtServerInit ({ commit }, { req }) {
      // fetch years of blogging
      const {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes?access_token=${token.token}`)
      let years = data.map(obj => {
        return obj.name
      })
      years = years.reverse()
      commit('setYears', years)
      // fetch all notes, grouped by years
      for (let year in years) {
      // years.map(async year => {
        let {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes/${years[year]}?access_token=${token.token}`)
        commit('pushPost', [{year: years[year]}])
        // reverse posts list to get desc dates order
        data = data.reverse()
        data.map(async (obj, index) => {
          // get each note content
          const resp = await axios.get(obj.download_url)
            // parse markdown
          let str = fm(resp.data)
          let entry = {
            index: index,
            title: str.attributes.title,
            date: str.attributes.date,
            url: obj.download_url,
            slug: obj.name,
            year: years[year],
            content: str.body || ''
          }
          commit('pushPost', entry)
        })
      }
    }
  }
})

export default store
