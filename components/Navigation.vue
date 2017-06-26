<template>
  <div>
    <div class="main-container">
      <nav>
        <logo></logo>
        <a class="menu-button" @click="$store.commit('toggleMenu')">MENU</a>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
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

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

nav {
  display: block;
  clear: both;
  width: 100%;
  color: $dark-blue;
}

nav .logo-wrapper {
  vertical-align: top;
}

nav .menu-button {
  float: right;
  font-family: $abel-font-family;
  border: none;
  background: transparent;
  outline: none;
  text-decoration: none;
  font-size: $font-size-1;
  cursor: pointer;
  color: $dark-blue;
}

nav .menu-button:hover {
  text-decoration: none;
  color: $red;  
}

</style>
