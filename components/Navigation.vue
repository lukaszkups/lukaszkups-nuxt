<template>
  <div>
    <app-menu :opened="opened"></app-menu>
    <nav>
      <logo></logo>
      <button @click="toggleMenu">MENU</button>
    </nav>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'
import Menu from '~components/Menu.vue'

export default {
  components: {
    Logo,
    appMenu: Menu
  },
  data () {
    return {
      opened: false
    }
  },
  methods: {
    toggleMenu () {
      this.opened = !this.opened
    }
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
