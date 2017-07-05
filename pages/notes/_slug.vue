<template>
  <div>
    {{ contentLink }}
    {{ article }}
  </div>
</template>

<script>
export default {
  props: ['href', 'contentLink'],
  computed: {
    article () {
      return this.$store.state.articles[this.href]
    }
  }
}
</script>

<style>

</style>
