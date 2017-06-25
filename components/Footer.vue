<template>
  <div>
    <footer>
      Copyright © {{ currentYear }} lukaszkups.net
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

footer {
  background: $border-color;
  text-align: center;
  display: block;
  padding: 80px 0;
  margin: auto 0 0 0;
  width: 100%;
  clear: both;
  height: 200px;
  font-size: $font-size-1;
  letter-spacing: 0.8px;
  color: $dark-blue;
}
</style>
