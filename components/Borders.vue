<template>
  <div>
    <div class="top-border"></div>
    <div class="left-border"></div>
    <div class="right-border"></div>
    <div class="bottom-border"></div>
  </div>
</template>

<style lang="scss">
@import '~assets/stylesheets/variables.scss';

  .top-border, .left-border, .right-border, .bottom-border {
    position: fixed;
    display: block;
    z-index: 3;
    background-color: $border-color;
  }

  .top-border {
    top: 0;
    left: 0;
    right: 0;
    height: $border-size;
  }

  .bottom-border {
    bottom: 0;
    left: 0;
    right: 0;
    height: $border-size;
  }

  .left-border {
    top: 0;
    left: 0;
    bottom: 0;
    width: $border-size;
  }

  .right-border {
    top: 0;
    right: 0;
    bottom: 0;
    width: $border-size;
  }


</style>
