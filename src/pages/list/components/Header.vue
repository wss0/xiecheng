<template>
	<div class="header">
		<div class="header-top">
			<router-link class="iconfont header-left" tag="div" to="/">&#xe64f;</router-link>
			<div class="search">
				<router-link class="search-left" tag="div" to="/city">
					<div class="iconfont location">&#xe667;</div>
					<div class="station">{{this.city}}</div>
					<div class="station">站</div>
				</router-link>
				<div class="search-right">
					<div class="search-icon"></div>
					<div class="desc">目的地/关键字</div>
				</div>
			</div>
		</div>
		<div class="header-bottom"></div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default{
	name: "ListHeader",
	computed:{
		...mapState(['city'])
	}
}
</script>

<style lang="stylus">
	.header
		height: .88rem
		.header-top
			padding-right: .3rem
			overflow: hidden
			background: #fff
			.header-left
				width: 10%
				text-align: center
				line-height: .88rem
				float: left
				color: #000
				font-size: .5rem
				font-weight: 500
			.search
				width: 88%
				line-height: .6rem
				margin-top: .12rem
				margin-left: .1rem
				border-radius: 1rem
				float: left
				background: #eaeaea
				.search-left
					padding-left: .2rem
					padding-right: .3rem
					float: left
					.location,.station
						font-size: .28rem
						color: #448aff
						float: left
				.search-right
					line-height: .6rem
					.search-icon
						width: .4rem
						height: .4rem
						margin-top: .17rem
						background:url(https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/special_tour/spe_sou.png) no-repeat!important
						background-size: .26rem auto !important
						float: left
					.desc
						font-size: .28rem
						color: #999
</style>