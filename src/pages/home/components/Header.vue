<template>
	<div>
		<transition-group name="fade">
			<div class="header" v-if="!hideHeader" key="first">
				<div class="search-box">
					<div class="search-left"></div>
					<div class="search-right">搜索:目的地/酒店/景点/航班号</div>
				</div>
				<div class="header-right">
					<div class="icon"></div>
					<div class="text">我的</div>
				</div>
			</div>
			<div class="backwhite" v-if="hideHeader" key="second">
				<div class="backwhite-search-box">
					<div class="backwhite-search-left"></div>
					<div class="backwhite-search-right">搜索:目的地/酒店/景点/航班号</div>
				</div>
				<div class="backwhite-header-right">
					<div class="iconfont backwhite-icon">&#xe622;</div>
					<div class="backwhite-text">我的</div>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script>
export default{
	name: 'HomeHeader',
	data(){
		return{
			hideHeader: false
		}
	},
	mounted(){
		window.addEventListener("scroll", this.headScroll)
	},
	methods:{
		headScroll(e){
			var scrollTop = document.documentElement.scrollTop;
			if (scrollTop > 44) {
				this.hideHeader = true
			} else {
				this.hideHeader = false
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity 0.5s;
	}
	.header
		position:absolute
		top:0
		left: 0
		right: 0
		bottom: 0
		z-index: 2
		height: .88rem
		padding-left: .24rem
		background: -webkit-linear-gradient(rgba(128,128,128,1),rgba(0,0,0,0))
		.search-box
			display: flex
			width: 87%
			float: left
			margin-top: .15rem
			font-size: .3rem
			background: #fff
			border-radius: .3rem
			.search-left
				width: .7rem
				height: .56rem
				overflow: hidden
				background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png) no-repeat
				background-size: .42rem auto
				background-position: 15px 7px
			.search-right
				flex: 1
				line-height: .56rem
		.header-right
			width: 13%
			color: #fff
			float: right
			.icon
				width: .44rem
				height: .44rem
				margin-left: .2rem
				margin-top: .1rem
				background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png) no-repeat
				background-size: .42rem auto
				background-position: 1px -36px
			.text
				font-size: .24rem
				margin-top: .04rem
				margin-right: .15rem
				text-align: center
	.backwhite
		position: fixed
		top:0
		left: 0
		right: 0
		bottom: 0
		z-index: 20
		height: .88rem
		padding-left: .24rem
		background: #fff
		.backwhite-search-box
			display: flex
			width: 87%
			float: left
			margin-top: .15rem
			font-size: .3rem
			background: #ececed
			border-radius: .3rem
			.backwhite-search-left
				width: .7rem
				height: .56rem
				overflow: hidden
				background: url(//pic.c-ctrip.com/platform/h5/home/home-common-sprite2x@v7.15.png) no-repeat
				background-size: .42rem auto
				background-position: 15px 7px
			.backwhite-search-right
				flex: 1
				line-height: .56rem
				color:#666
		.backwhite-header-right
			width: 13%
			color: #fff
			float: right
			.backwhite-icon
				text-align: center
				margin-top: .1rem
				margin-right: .2rem
				color: #222
				font-size: .44rem
			.backwhite-text
				color: #000
				font-size: .24rem
				margin-top: .04rem
				margin-right: .15rem
				text-align: center
				color: #222
</style>