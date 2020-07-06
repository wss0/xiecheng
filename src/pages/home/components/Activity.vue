<template>
	<div class="activity">
		<div class="header">
			<div class="left"></div>
			<div class="iconfont desc">获取更多福利&#xe63f;</div>
		</div>
		<ul class="list">
			<li class="border item" v-for="item of activityList" :key="item.id">
				<img class="img" :src="item.imgUrl" />
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: "HomeActivity",
	props:{
		activityList: Array
	}
}
</script>

<style lang="stylus" scoped>
	.activity
		background: #fff
		.header
			height: 0
			padding-bottom: .88rem
			.left
				height: .3rem
				width: 1.6rem
				margin-top: .3rem
				margin-left: .16rem
				float: left
				background: url(//pic.c-ctrip.com/h5/home/un_home_text.png) no-repeat
				background-size: 1.58rem auto
				background-position: 0 -19px
			.desc
				width: 2rem
				line-height: .4rem
				text-align: center
				margin-top: .24rem
				margin-right: .16rem
				padding-left: .1rem
				border-radius: .3rem
				font-size: .24rem
				color: #fff
				float: right
				background: linear-gradient(to right, #ff4e63,#ff6cc9)
		.list
			overflow: hidden
			background: #fafafc
			.item
				width: 50%
				float: left
				.img
					width: 100%
					height: 100%
</style>