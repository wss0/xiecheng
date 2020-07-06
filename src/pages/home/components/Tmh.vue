<template>
	<div class="tmh">
		<div class="header">
			<div class="header-left"></div>
			<div class="iconfont header-right">更多&#xe63f;</div>
		</div>
		<div class="body">
			<router-link class="body-left" tag="div" to="/list">
				<div class="img">
					<img src="https://dimg08.c-ctrip.com/images/200f0v000000k0r3361EC_C_360_202.jpg" width=100% height=100% />
				</div>
				<div class="desc">
					三亚5日自由行(5钻)·暑“价”狂欢『冲7W人爆单·年度超人气款』【高星度假酒店4晚连住·酒店随心挑】暑期清凉风暴 亲子游火爆开售！
				</div>
				<div class="price">
					<span class="money">￥</span>
					<span class="num">1864</span>
					<span class="word">起</span>
				</div>
			</router-link>
			<div class="body-right">
				<div class="top">
					<div class="top-left">
						<div class="left-top">千款特价</div>
						<div class="left-bottom">走过路过 不要错过</div>
					</div>
					<div class="top-img">
						<img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-02.png" width="50" />
					</div>
				</div>
				<div class="bottom">
					<div class="item">
						<div class="forigen">境外精选</div>
						<div class="text">限时抢购</div>
						<div class="bottom-img">
							<img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png" width="50" />
						</div>
					</div>
					<div class="item weekend">
						<div class="play">周边玩乐</div>
						<div class="text">欢乐度周末</div>
						<div class="bottom-img">
							<img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png" width="50" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line border-topbottom"></div>
	</div>
</template>

<script>
export default{
	name: 'HomeTmh'
}
</script>

<style lang="stylus" scoped>
	.tmh
		margin-top: -.8rem
		background: #fff
		.header
			height: 0
			padding-bottom: .88rem
			.header-left
				width: 1.6rem
				height: .28rem
				margin-top: .3rem
				margin-left: .16rem
				float: left
				background: url(//pic.c-ctrip.com/h5/home/un_home_text.png) no-repeat
				background-size: 1.58rem auto
			.header-right
				width: 1.1rem
				height: .4rem
				line-height: .4rem
				margin-top: .24rem
				margin-right: .16rem
				padding-left: .1rem
				float: right
				text-align: center
				border-radius: .3rem
				font-size: .24rem
				color: #fff
				background: linear-gradient(to right, #ff4e63,#ff6cc9)
		.body
			overflow: hidden
			margin-left: .16rem
			margin-right: .16rem
			.body-left
				width: 49.5%
				float: left
				padding-bottom: .15rem
				background: #fafafc
				.img
					width: 100%
					height: 2.34rem
				.desc
					height: .72rem
					line-height: .4rem
					margin-top: .1rem
					padding-left: .16rem
					font-size: .28rem
					color: #000
					text-overflow: ellipsis
					display: -webkit-box
					-webkit-box-orient: vertical
					-webkit-line-clamp:2
					overflow: hidden
					padding-bottom: .1rem
				.price
					padding: .16rem
					height: .44rem
					width: 3.26rem
					color: #ff495e
					.money
						font-size: .24rem
					.num
						font-size: .36rem
					.word
						font-size: .3rem
			.body-right
				float: left
				width: 49%
				background: #fff
				margin-left: .1rem
				.top
					width: 102%
					height: 1.76rem
					padding: .16rem
					background: #fafafc
					.top-left
						float: left
						margin-top: .6rem
						.left-top
							font-size: .28rem
							font-weight: 700
							color: #fd3a51
							letter-spacing: .03rem
						.left-bottom
							color: #444
							font-size: .24rem
							margin-top: .1rem
					.top-img
						width: 1rem
						height: 1rem
						float: right
						margin-top: .3rem
						margin-right: .1rem
				.bottom
					width: 100%
					margin-top: .1rem
					.item
						width: 48%
						height: 1.9rem
						float: left
						background:#fafafc
						.forigen,.play
							padding-top: .1rem
							text-align: center
							font-size: .28rem
							font-weight: 700
							color: #6aabff
						.play
							color: #53ca72
						.text
							font-size: .24rem
							text-align: center
							margin-top: .1rem
						.bottom-img
							width: 1rem
							height: 1rem
							margin: 0 auto
							margin-top: .1rem
					.weekend
						margin-left: .1rem
		.line
			width: 100%
			height: .2rem
			margin-top: .2rem
			background: #fafafc
</style>