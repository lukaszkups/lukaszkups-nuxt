<template>
  <div>
    <nav>
      <logo></logo>
      <burger></burger>
    </nav>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'
import Burger from '~components/Burger.vue'

export default {
  components: {
    Logo,
    Burger
  }
}
</script>

<style lang="scss">
@import '~assets/stylesheets/colors.scss';

nav {
    display: block;
    clear: both;
    width: 100%;
    color: $dark-blue;
}

nav a {
    text-decoration: none;
    color: $dark-blue;
}

nav a:hover {
    text-decoration: underline;
    color: $red;
}

nav .logo-wrapper {
    vertical-align: top;
}


</style>
