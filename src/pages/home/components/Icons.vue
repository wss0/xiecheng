<template>
	<div class="icons">
		<ul class="header">
			<li class="header-item" v-for="item of headerList" :key="item.id">
				<div class="header-icon" :style="item.position"></div>
				<div class="header-desc">{{item.desc}}</div>
			</li>
		</ul>
		<div class="body">
			<div class="body-top">
				<div class="hotel">酒店</div>
				<div class="house">民宿·客栈</div>
				<div class="ticket">机票·火车票+酒店</div>
			</div>
			<div class="body-center">
				<div class="plane">机票</div>
				<div class="train">火车票</div>
				<div class="car">汽车·船票</div>
				<div class="taxi">汽车·租车</div>
			</div>
			<div class="body-bottom">
				<div class="travel">旅游</div>
				<div class="skytrain">高铁游</div>
				<div class="boat">邮轮游</div>
				<div class="custom">定制游</div>
			</div>
		</div>
		<ul class="bottom">
			<li class="bottom-item" v-for="item of bottomList" :key="item.id">
				<div class="bottom-icon" :style="item.position"></div>
				<div class="bottom-desc">{{item.desc}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeIcons',
	props: {
		headerList: Array,
		bottomList: Array
	}
}
</script>

<style lang="stylus" scoped>
	.icons
		position: relative
		top: -1rem
		z-index: 10
		padding-left: .24rem
		padding-right: .24rem
		.header
			height: 1.2rem
			border-radius: .16rem
			background: #fff
			.header-item
				width: 20%
				float: left
				.header-icon
					width: .8rem
					height: .8rem
					margin: 0 auto
					background: url(//pic.c-ctrip.com/platform/h5/home/home-fivemain-sprite2x@v7.15.png)
					background-repeat: no-repeat
					background-size: .8rem auto
				.header-desc
					text-align: center
					font-size: .24rem
					color: #222
		.body
			margin-top: .2rem
			margin-right: .1rem
			color: #fff
			background: #fff
			border-radius: .16rem
			.body-top
				overflow: hidden
				margin-bottom: .02rem
				border-top-left-radius: .16rem
				border-top-right-radius: .16rem
				.hotel,.house,.ticket
					float: left
					line-height: 1.28rem
				.hotel
					width: 25.6%
					padding-left: .3rem
					margin-right: .02rem
					background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-hotel@v7.15.png)
					background-size: 1.46rem auto
					background-position: right bottom
					background-repeat: no-repeat
					background-color: #fb7d51
				.house
					width:  27.6%
					padding-left: .3rem
					margin-right: .02rem
					background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-minsu@v7.15.png)
					background-size: .74rem
					background-position: left bottom
					background-repeat: no-repeat
					background-color: #fb7d51
				.ticket
					width: 46.2%
					text-align: center
					background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-jhj@v7.15.png)
					background-size: 1.72rem auto
					background-position: right bottom
					background-repeat: no-repeat
					background-color: #ffc04b	
			.body-center
				overflow: hidden
				margin-bottom: .02rem
				.plane, .train, .car, .taxi
					float: left
					line-height: 1.28rem
				.plane
					width: 25.6%
					padding-left: .3rem
					margin-right: .02rem
					background-image:url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-flight@v7.15.png)
					background-size: 1.58rem auto
					background-position: right bottom
					background-repeat: no-repeat
					background-color: #4d9aed
				.train
					width: 27.6%
					text-align: center
					margin-right:.02rem
					background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-train.png)
					background-size: .74rem auto
					background-position: left bottom
					background-repeat: no-repeat
					background-color: #4d9aed
				.car, .taxi
					width: 22.9%
					text-align: center
					background: #4d9aed
				.car
					margin-right: .02rem
			.body-bottom
				overflow: hidden
				border-bottom-left-radius: .16rem
				border-bottom-right-radius: .16rem
				.travel, .skytrain, .boat, .custom
					float: left
					line-height: 1.28rem
				.travel
					width: 25.6%
					padding-left: .3rem
					margin-right: .02rem
					background-image:url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-travel@v7.15.png)
					background-size: 1.88rem auto
					background-position: right bottom
					background-repeat: no-repeat
					background-color: #50cb80
				.skytrain
					width: 27.6%
					text-align: center
					margin-right:.02rem
					background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-dingzhi@v7.15.png)
					background-size: 1.22remm auto
					background-position: left bottom
					background-repeat: no-repeat
					background-color: #50cb80
				.boat, .custom
					width: 22.9%
					text-align: center
					background: #50cb80
				.boat
					margin-right: .02rem
		.bottom
			overflow: hidden
			margin-top: .1rem
			font-size: .24rem
			color: #222
			.bottom-item
				width: 20%
				float: left
				margin-top: .1rem
				.bottom-icon
					width: .56rem
					height: .56rem
					margin: 0 auto
					margin-bottom: .1rem
					background-image:url(//pic.c-ctrip.com/platform/h5/home/un_ico_subnav2x@v7.152.png)
					background-size: .56rem
					background-repeat: no-repeat
				.bottom-desc
					text-align: center
				
</style>





