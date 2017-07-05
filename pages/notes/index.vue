<template>
  <div>
    <h1 class="title">notes.</h1>
    <div v-for="year in years" :key="year">
      <h2>{{ year }}</h2>
      <app-post-list :year="year"></app-post-list>
    </div>
  </div>
</template>

<script>
import PostList from '~components/PostList'

export default {
  computed: {
    years () {
      const posts = this.$store.getters.postList
      let years = []
      for (let year in posts) {
        years.unshift(year)
      }
      return years
    }
  },
  components: {
    appPostList: PostList
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
