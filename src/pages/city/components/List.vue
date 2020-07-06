<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="header">
				<div class="now">当前</div>
				<div class="local-city border">{{this.city}}</div>
			</div>
			<div class="center">
				<div class="hot">热门出发站</div>
				<ul class="city-list">
					<li class="item border" 
						v-for="item of hotCities" 
						:key="item.id"
						@click="handleCityClick(item.name)"
					>
						{{item.name}}
					</li>
				</ul>
			</div>
			<ul class="bottom-list">
				<li v-for="(item,key) of cities" 
					:key="key"
					:ref="key"
				>
					<div class="alpha">{{key}}</div>
					<div class="bottom-item border-bottom" 
						 v-for="innerItem of item" 
						 :key="innerItem.id"
						 @click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default{
	name: "CityList",
	props:{
		cities: Object,
		hotCities: Array,
		letter: String
	},
	computed:{
		...mapState(['city'])
	},
	methods:{
		handleCityClick(city){
			this.changeCity(city)
			this.$router.push("./list")
		},
		...mapMutations(['changeCity'])
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.wrapper,{mouseWheel:true,click:true,tap:true})
	},
	watch:{
		letter(){
			if (this.letter) {
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.list
		z-index:1
		overflow:hidden
		position: absolute
		top: 2.1rem
		left: 0
		right: 0
		bottom: 0
		background: #fff
		.header
			padding-left: .2rem
			height:1.56rem
			.now
				color: #999
				font-size: .26rem
				padding-top:.2rem
				padding-bottom: .3rem
			.local-city
				float: left
				width: 2.1rem
				margin-right: 3.3%
				line-height: .6rem
				text-align: center
				border-radius: .06rem
				color: #666
				overflow: hidden
				box-shadow: 0 0 .1rem rgba(200,200,200,1)
		.center
			height: 5.2rem
			background: #fff
			.hot
				color:#999
				font-size: .26rem
				padding-left: .2rem
				margin-top: .1rem
				margin-bottom: .3rem
			.city-list
				padding-left: .2rem
				.item
					width: 28.4%
					line-height: .6rem
					margin-right: 3.3%
					margin-bottom: .3rem
					text-align: center
					border-radius: .06rem
					color: #666
					float: left
					box-shadow: 0 0 .1rem rgba(200,200,200,1)
		.bottom-list
			padding-left: .2rem
			.alpha
				line-height: .5rem
				padding-left: .2rem
				margin-left: -.2rem
				color: #333
				font-size: .24rem
				font-weight: 400
				background:#f5f5f5
			.bottom-item
				width:6.76rem
				line-height: .88rem
				font-size:.28rem
				color:#333
				
</style>