<template>
  <div>
    <borders></borders>
    <div class="main-container">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import Borders from '~components/Borders.vue'

export default {
  components: {
    Borders
  }
}
</script>

<style>
@import '~assets/stylesheets/reset.scss';
@import '~assets/stylesheets/app.scss';
</style>
