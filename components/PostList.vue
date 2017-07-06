<template>
  <div>
    <ul>
      <li v-for="(note, index) in postList" :key="index">
        <nuxt-link :to="prepareUrl(note.slug)"><span class="red-bg">{{ humanizeDate(note.date) }}</span> {{ note.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['year'],
  computed: {
    postList () {
      return this.$store.state.postList[this.year]
    }
  },
  methods: {
    humanizeDate (date) {
      return moment(date).format('DD/MM/YYYY')
    },
    prepareUrl (url) {
      return `/notes/${url}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

  ul {
    display: block;
    clear: both;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul li {
    display: block;
    clear: both;
    margin: 10px 0;
    padding: 0;
  }
  ul li a {
    text-decoration: none;
    color: $dark-blue;
    padding: 4px 5px 3px 5px;
    display: inline-block;
    clear: both;
  }
  .red-bg {
    color: #fff;
    background: $red;
    padding: 4px 5px 3px 5px;
    display: inline-block;
  }

  ul li a:hover, ul li a:hover .red-bg {
    color: #fff;
    background: $dark-blue;    
  }
</style>
