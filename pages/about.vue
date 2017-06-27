<template>
  <div>
    <h1 class="title">about me.</h1>
    <div class="flex">
      <div class="col gray-bg">
        <article>
          <p>Welcome to my <a href="https://nuxtjs.org">Nuxt.js</a> powered website.</p>
          <p>This is my personal web space, where I save / share my thoughts, ideas & experience.</p>
          <p>Currently I work as a front-end developer at awesome company called <a href="http://influenster.com">Influenster</a>.</p>
          <p>In my spare time I build stuff using Vue.js, Node.js and Nuxt.js.</p>
          <p>If You want to know more about my experience - please take a look at my <a href="http://linkedin.com/in/lukaszkups">linkedin</a> / <a href="http://github.com/lukaszkups">github</a> profile or <a href="/work">projects page</a>.</p>
          <p>I also blog about tech-related stuff or bootstrap some awesome open source apps.</p>
          <p>I have experience in working with Ruby on Rails and Django powered apps, which provides me APIs for creating beautiful, useful frontend interfaces. Creating custom Wordpress templates is no magic for me either.<p>
          <p>If You are interested in working together, feel free to contact me via <a href="http://twitter.com/lukaszkups">twitter</a> or <a href="mailto:letstalk@lukaszkups.net">e-mail</a>.</p>
          <p>Take care,</p>
          <p>- ł.</p>
        </article>
      </div>
      <div class="col">
        <div class="avatar-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Łukasz Kupś - a Poland-based web crafter.'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

$box-height: 500px;

h1.title {
  font-family: $passion-font-family;
  font-size: $font-size-100;
  color: $dark-blue;
  margin-bottom: 50px;
}

.flex {
  display: flex;
  width: 100%;
  clear: both;
  height: $box-height;
}

.flex .col {
  flex: 1;
  height: $box-height;
}

.gray-bg {
  background: $border-color;
  padding: 20px;
  margin: 0;
}

.avatar-bg {
  background: #fff url('~static/images/avatar.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
  width: 90%;
  float: right;
  height: $box-height;
  color: $dark-blue;
}

article h2 {
  font-family: $abel-font-family;
  margin-bottom: 15px;
  font-size: $font-size-2;
  font-weight: 300;
}

article p {
  font-size: $font-size-1;
  line-height: 1.5em;
  font-family: $monospace-font-family;
  margin-bottom: 10px;
  font-weight: 300;
}

article p a {
  color: $red;
  text-decoration: none;
}

article p a:hover {
  text-decoration: underline;
}
  
</style>
