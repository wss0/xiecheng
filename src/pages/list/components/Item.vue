<template>
	<div>
		<ul>
			<li class="item" v-for="item of itemList" :key="item.id">
				<div class="item-img">
					<img  class="img" :src="item.imgUrl" />
					<div class="starting">上海出发</div>
				</div>
				<div class="desc">
					<p class="top">{{item.desc}}</p>
					<div class="bottom">
						<span class="score">{{item.score}}</span>
						<span class="sold">{{item.sold}}</span>
						<div class="price">
							<span class="icon">￥</span>
							<span class="num">{{item.price}}</span>
							<span class="word">起</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: "ListItem",
	props: {
		itemList: Array
	}
}
</script>

<style lang="stylus" scoped>
	.item
		height: 2.3rem
		margin-top: .2rem
		margin-left: .2rem
		margin-right:.2rem
		.item-img
			position: relative
			width: 31%
			height: 2.3rem
			float: left
			.img
				width: 100%
				height: 100%
			.starting
				position: absolute
				top: 2rem
				width: 100%
				line-height: .33rem
				text-align: center
				font-size: .22rem
				color: #fff
				background: rgba(68,68,68, .8)
		.desc
			width: 64.6%
			height:2.3rem
			margin-left: .2rem
			float: left
			.top
				height: .68rem
				line-height: .34rem
				text-overflow: ellipsis
				display:-webkit-box
				-webkit-box-orient:vertical
				-webkit-line-clamp: 2
				overflow: hidden
				color: #333
				font-size: .28rem
			.bottom
				margin-top: 1.2rem
				font-size: .24rem
				.score
					color:#448aff
				.sold
					color: #999
				.price
					position: relative
					top: -.4rem
					left: 3rem
					color: #ff6913
					font-size: .24rem
					.num
						font-size: .4rem
					.word
						color: .24rem
</style>