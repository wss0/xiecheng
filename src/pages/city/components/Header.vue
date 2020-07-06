<template>
	<div class="header">
		<router-link class="iconfont back" tag="div" to="/list">
			&#xe64f;
		</router-link>
		<div class="text">选择出发站</div>
	</div>
</template>

<script>
export default{
	name:"CityHeader"
}
</script>

<style lang="stylus" scoped>
	.header
		position: fixed
		top: 0
		width: 100%
		height: .88rem
		background: #fff
		z-index: 25
		.back
			width: 11.7%
			font-size: .44rem
			font-weight: 700
			line-height: .88rem
			text-align: center
			float: left
		.text
			float: left
			width: 87%
			line-height: .88rem
			padding-left: 22%
			font-size: .44rem
</style>