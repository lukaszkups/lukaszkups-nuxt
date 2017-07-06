<template>
  <div>
    <div v-if="article && article.title && article.html">
      <h2 class="article-title">{{ article.title }}</h2>
      <article v-html="article.html">
      </article>
    </div>
    <div v-else class="centered">
      <h1>404: Page not found</h1>
      <p>Oops, the page you were looking for doesn't exist!</p>
      <nuxt-link to="/">Back to home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['href', 'contentLink'],
  data () {
    return {
      article: {}
    }
  },
  async asyncData (context) {
    const slug = context.route.params.slug
    const postList = context.store.getters.postList
    let article = []
    for (let year in postList) {
      if (!article.length) {
        article = postList[year].filter(obj => {
          return obj.slug === slug
        })
      }
    }
    return {article: article[0]}
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/variables.scss';

.centered {
  text-align: center;
  line-height: 2em;
  float: left;
  width: 100%;
  margin: 150px 0 0;
  display: block;

  a {
    color: $red;
  }
}

h1 {
  font-family: $passion-font-family;
  font-size: $font-size-100;
  color: $dark-blue;
  margin-bottom: 50px;
}

.article-title {
  font-size: $font-size-4;
  font-family: $monospace-font-family;
  color: #fff;
  background: $dark-blue;
  margin: 30px 0;
  display: inline-block;
  clear: both;
  padding: 10px;
}

article {
  width: 90%;
  display: block;

  p {
    line-height: 2em;
    font-size: $font-size-3;
    text-align: justify;
  }

  a {
    color: $red;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h2 {
    color: $gray;
    font-size: $font-size-4;
    line-height: 2em;
    margin: 1.5em 0;
  }

  h2:before {
    content: '#';
    margin-left: -30px;
    margin-right: 15px;
  }

  pre {
    display: block;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap;
    padding: 10px;
    color: $white;
    background-color: $dark-blue;
    line-height: 2em;
    font-size: $font-size-3;
    overflow: hidden;
    margin: 1em 0;

    code {
      word-wrap: break-word;
      white-space: pre-wrap;
      word-break: break-all;
      display: block;
      overflow: hidden;
      line-height: 1.5em;
    }
  }

  code {
    display: inline-block;
    padding: 3px 5px;
    color: $white;
    background-color: $dark-blue;
    line-height: 1em;
  }

  img {
    clear: both;
    margin: 1em auto;
    display: block;
    color: $gray;
    max-width: 100%;
  }

  ul {
    list-style: none;
    margin: 1em 0;
    display: block;

    li {
      font-size: $font-size-3;
      line-height: 2em;
    }

    li:before {
      content: '- ';
      color: $red;
    }
  }
}
</style>
