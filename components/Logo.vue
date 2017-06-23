<template>
  <nuxt-link to="/" class="logo-wrapper">
    <div class="logo"></div>
  </nuxt-link>
</template>

<style lang="scss">
@import '~assets/stylesheets/colors.scss';

$logo-base-size: 10px;
$animation-time: 2s;

@keyframes fade-in {
  0% {
    -webkit-transform: skew(0deg, 0deg);
    -moz-transform: skew(0deg, 0deg);
    -o-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin-left: $logo-base-size * 1.8;
  }
  10% {
    -webkit-transform: skew(0deg, 0deg);
    -moz-transform: skew(0deg, 0deg);
    -o-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin-left: $logo-base-size * 1.8;
  }
  100% {
    -webkit-transform: skew(25deg, 0deg);
    -moz-transform: skew(25deg, 0deg);
    -o-transform: skew(25deg, 0deg);
    transform: skew(25deg, 0deg);
    margin-left: $logo-base-size * 1.5;
  }
}

@keyframes fade-in-before {
  0% {
    -webkit-transform: skew(0deg, 0deg);
    -moz-transform: skew(0deg, 0deg);
    -o-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin-left: 0;
    margin-right: 0;
  }
  10% {
    -webkit-transform: skew(0deg, 0deg);
    -moz-transform: skew(0deg, 0deg);
    -o-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin-left: 0;
    margin-right: 0;
  }
  100% {
    -webkit-transform: skew(-50deg, 0deg);
    -moz-transform: skew(-50deg, 0deg);
    -o-transform: skew(-50deg, 0deg);
    transform: skew(-50deg, 0deg);
    margin-left: $logo-base-size * 1.73;
    margin-right: 0 - ($logo-base-size * 1.8);
  }
}

@keyframes fade-in-after {
  0% {
    -webkit-transform: skew(0deg, 0deg);
    -moz-transform: skew(0deg, 0deg);
    -o-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin-left: 0;
    margin-right: 0;
  }
  10% {
    -webkit-transform: skew(0deg, 0deg);
    -moz-transform: skew(0deg, 0deg);
    -o-transform: skew(0deg, 0deg);
    transform: skew(0deg, 0deg);
    margin-left: 0;
    margin-right: 0;
  }
  100% {
    -webkit-transform: skew(-50deg, 0deg);
    -moz-transform: skew(-50deg, 0deg);
    -o-transform: skew(-50deg, 0deg);
    transform: skew(-50deg, 0deg);
    margin-left: 0 - ($logo-base-size * 0.59);
    margin-right: 0 - ($logo-base-size * 0.73);
  }
}

@mixin logo-size($size) {
  width: $size * 1.1428;
  height: $size;
  margin-top: $size + ($size * 0.8);
  margin-left: $size * 1.5;
}

@mixin logo-size-before($size) {
  margin-top: 0 - $size;
  margin-left: $size * 1.73;
  margin-right: 0 - ($size * 1.8);
  height: $size;
}

@mixin logo-size-after($size) {
  margin-top: $size;
  margin-left: 0 - ($size * 0.59);
  margin-right: 0 - ($size * 0.73);
  height: $size;
}

.logo-wrapper {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 5 * $logo-base-size;
  overflow: visible;
  background-color: transparent;
  height: 5 * $logo-base-size;
  border: none;
  outline: 0;
}

.logo {
  display: block;
  background-color: $red;
  -webkit-transform: skew(25deg, 0deg);
  -moz-transform: skew(25deg, 0deg);
  -o-transform: skew(25deg, 0deg);
  transform: skew(25deg, 0deg);
  float: left;
  clear: both;
  position: relative;
  @include logo-size($logo-base-size);
  animation: $animation-time fade-in;
}

.logo:before,
.logo:after {
  content: " ";
  display: block;
  background-color: $dark-blue;
  -webkit-transform: skew(-50deg, 0deg);
  -moz-transform: skew(-50deg, 0deg);
  -o-transform: skew(-50deg, 0deg);
  transform: skew(-50deg, 0deg);
  position: relative;
}

.logo:before {
  @include logo-size-before($logo-base-size);
  animation: $animation-time fade-in-before;
}

.logo:after {
  @include logo-size-after($logo-base-size);
  animation: $animation-time fade-in-after;
}
</style>
