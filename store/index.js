import Vuex from 'vuex'
import axios from 'axios'
import slugify from 'slugify'
import fm from 'front-matter'
import token from './../static/secrets/secret.json'

const store = () => new Vuex.Store({
  state: {
    showMenu: false,
    postList: {},
    articles: {}
  },
  mutations: {
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    },
    pushPost (state, data) {
      if (!state.postList[data.year]) {
        state.postList[data.year] = []
      }
      state.postList[data.year].unshift(data)
    },
    pushArticle (state, data) {
      state.articles[data.slug] = data.url
    }
  },
  getters: {
    postList: state => {
      return state.postList
    },
    articles: state => {
      return state.articles
    }
  },
  actions: {
    async nuxtServerInit ({ commit }, { req }) {
      let {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes?access_token=${token.token}`)
      for (let obj in data) {
        const resp = await axios.get(data[obj].download_url)
        // parse markdown
        let str = fm(resp.data)
        let entry = {
          index: obj,
          title: str.attributes.title,
          date: str.attributes.date,
          url: data[obj].download_url,
          slug: slugify(data[obj].name.slice(11, -3).toLowerCase()),
          year: str.attributes.date.slice(6, 10),
          content: str.body || ''
        }
        let article = {
          slug: entry.slug,
          url: entry.url
        }
        commit('pushPost', entry)
        commit('pushArticle', article)
      }
    }
  }
})

export default store
