<template>
  <div>
    <h1 class="title">notes.</h1>
    <p>{{ years }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import token from './../../static/secrets/secret.json'

export default {
  computed: {
    years () {
      return this.$store.state.years
    }
  },
  async fetch ({ store, params }) {
    // fetch years of blogging
    const {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes?access_token=${token.token}`)
    const years = data.map(obj => {
      return obj.name
    })
    store.commit('setYears', years)
    // fetch all notes, grouped by years
    for (let year in years) {
      let {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes/${years[year]}?access_token=${token.token}`)
      data.forEach(obj => {
        // get each note content
        const {data} = axios.get(obj.download_url)
        let entry = {
          url: obj.download_url,
          slug: obj.name,
          year: years[year],
          content: data || ''
        }
        store.commit('pushPost', entry)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

h1.title {
  font-family: $passion-font-family;
  font-size: $font-size-100;
  color: $dark-blue;
  margin-bottom: 50px;
}
</style>
