<template>
	<div class="input">
		<div class="search">
			<div class="icon"></div>
			<input class="search-input" v-model="keyword" type="text" placeholder="拼音/中文" />
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" 
					v-for="item of list" 
					:key="item.id"
					@click="handleCityClick(item.name)"
				>
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="!list.length">
					没有找到匹配城市
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default{
	name: "CityInput",
	props:{
		cities: Object
	},
	data(){
		return{
			keyword: "",
			list: [],
			timer: null
		}
	},
	watch: {
		keyword(){
			if(this.timer) {
				clearTimeout(this.timer)
			}
			if (!this.keyword){
				this.list = []
				return
			}
			this.timer = setTimeout(()=>{
				const result = []
				for(let i in this.cities){
					this.cities[i].forEach((value)=>{
						if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
							result.push(value)
						}
					})
				}
				this.list = result
			}, 100)
		}
	},
	methods:{
		handleCityClick(city){
			this.changeCity(city)
			this.$router.push("./list")
		},
		...mapMutations(['changeCity'])
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.search)
	}
}
</script>

<style lang="stylus" scoped>
	.search
		height: 1.2rem
		margin-top: .88rem
		padding-left: .4rem
		background: #efeff4
		.icon
			position: absolute
			height: .4rem
			width: .4rem
			margin-top: .44rem
			margin-left: .2rem
			background:url(https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/un_index_v7.png), no-repeat
			background-color: #fff
			background-size: 5.6rem
			background-position: -60px -80px
		.search-input
			box-sizing: border-box
			border: none
			width: 100%
			height: .76rem
			padding-left: .9rem
			margin-top: .2rem
			margin-left: -.2rem
			line-heght: .76rem
			border-radius: 1rem
			corlor: #efeff4
			font-size: .28rem
	.search-content
		z-index: 2
		position: absolute
		top: 2.08rem
		left: 0
		right: 0
		bottom: 0
		overflow: hidden
		background:#efeff4
		.search-item
			line-height: .6rem
			padding-left: .6rem
			background:#fff
			color:#999
</style>