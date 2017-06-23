<template>
	<div>
		<div :class="{opened: opened}" class="menu"></div>
	</div>
</template>

<script>
export default {
  props: ['opened']
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/colors.scss';

.menu {
	box-sizing: border-box;
	display: block;
	margin: 0;
	padding: 30px;
	width: 100%;
	clear: both;
	height: 0px;
	background-color: $dark-blue;
	color: #fff;
	overflow: hidden;
	transition: height 1s ease-in-out;
}

.menu.opened {
	height: 300px;
	transition: height 1s ease-in-out;	
}
</style>
