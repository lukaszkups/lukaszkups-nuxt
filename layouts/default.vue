<template>
  <div>
    <app-borders></app-borders>
    <app-menu></app-menu>
    <div :class="{opened: $store.state.showMenu}" class="content-wrapper">
      <app-navigation></app-navigation>    
      <div class="main-container">
        <nuxt></nuxt>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Borders from '~components/Borders.vue'
import Navigation from '~components/Navigation.vue'
import Menu from '~components/Menu.vue'
import Footer from '~components/Footer.vue'

export default {
  components: {
    appBorders: Borders,
    appNavigation: Navigation,
    appMenu: Menu,
    appFooter: Footer
  }
}
</script>

<style>
@import '~assets/stylesheets/reset.scss';
@import '~assets/stylesheets/app.scss';

.content-wrapper {
  position: relative;
  z-index: 2;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  background: #fff;
  width: 100%;
  min-height: 100vh;
  clear: both;
  float:left;
  transition: margin-top .7s;
  transform: .5s cubic-bezier(.45,.05,.55,.95), -webkit-transform .5s cubic-bezier(.45,.05,.55,.95);
}

.content-wrapper.opened {
  margin-top: 300px;
  transition: margin-top .7s;  
  transform: .5s cubic-bezier(.45,.05,.55,.95), -webkit-transform .5s cubic-bezier(.45,.05,.55,.95);
}

</style>
