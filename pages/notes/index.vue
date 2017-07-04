<template>
  <div>
    <h1 class="title">notes.</h1>
    <div v-for="(year, index) in years" :key="index">
      <h2>{{ year }}</h2>
      <app-post-list :year="year"></app-post-list>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import fm from 'front-matter'
// import token from './../../static/secrets/secret.json'
import PostList from '~components/PostList'

export default {
  computed: {
    years () {
      return this.$store.getters.years
    }
  },
  components: {
    appPostList: PostList
  },
  asyncData (context) {
    // // fetch years of blogging
    // const {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes?access_token=${token.token}`)
    // let years = data.map(obj => {
    //   return obj.name
    // })
    // years = years.reverse()
    // context.store.commit('setYears', years)
    // // fetch all notes, grouped by years
    // for (let year in years) {
    //   let {data} = await axios.get(`http://api.github.com/repos/lukaszkups/lukaszkups-nuxt/contents/static/notes/${years[year]}?access_token=${token.token}`)
    //   Promise.all(data.map(async obj => {
    //     // get each note content
    //     const resp = await axios.get(obj.download_url)
    //       // parse markdown
    //     let str = fm(resp.data)
    //     let entry = {
    //       title: str.attributes.title,
    //       date: str.attributes.date,
    //       url: obj.download_url,
    //       slug: obj.name,
    //       year: years[year],
    //       content: str.body || ''
    //     }
    //     console.warn(entry)
    //     context.store.commit('pushPost', entry)
    //     // })
    //   }))
    // }
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

h2 {
  font-size: $font-size-3;
  font-family: $monospace-font-family;
  color: #fff;
  background: $dark-blue;
  margin: 30px 0;
  display: inline-block;
  clear: both;
  padding: 10px;
}
</style>
