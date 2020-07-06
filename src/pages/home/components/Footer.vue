<template>
	<div class="footer">
		<ul>
			<li class="item">
				<div class="iconfont icon">&#xe64a;</div>
				<div class="desc">电话预定</div>
			</li>
			<li class="item">
				<div class="iconfont icon">&#xe637;</div>
				<div class="desc">下载客户端</div>
			</li>
			<li class="item">
				<div class="iconfont icon">&#xe622;</div>
				<div class="desc">我的</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: "HomeFooter"
}
</script>

<style lang="stylus" scoped>
	.footer
		height: 0
		margin-top: .2rem
		padding-bottom: 1.2rem
		background: #fff
		.item
			margin-top: .2rem
			float: left
			width: 33%
		.icon
			font-size: .4rem
			text-align: center
		.desc
			margin-top: .1rem
			font-size: .24rem
			text-align: center
			color: #333
ul{
	overflow: hidden
}
</style>