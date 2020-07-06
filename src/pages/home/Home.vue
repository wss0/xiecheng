<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :headerList="headerList" :bottomList="bottomList"></home-icons>
		<home-tmh></home-tmh>
		<home-activity :activityList="activityList"></home-activity>
		<home-footer></home-footer>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeTmh from './components/Tmh'
import HomeActivity from './components/Activity'
import HomeFooter from './components/Footer'
import axios from "axios"
export default{
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeTmh,
		HomeActivity,
		HomeFooter
	},
	data(){
		return{
			swiperList:[],
			headerList:[],
			bottomList:[],
			activityList:[]
		}
	},
	mounted(){
		this.getHomeInfo()
	},
	methods:{
		getHomeInfo(){
			axios.get("api/index.json")
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc(res){
			if(res.data.ret && res.data.data){
				const data = res.data.data
				this.swiperList = data.swiperList
				this.headerList = data.headerList
				this.bottomList = data.bottomList
				this.activityList = data.activityList
			}
		}
	}
}
</script>