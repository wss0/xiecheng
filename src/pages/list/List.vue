<template>
	<div>
		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
			<div v-if="show">
				<list-header></list-header>
				<list-navfirst></list-navfirst>
			</div>
		</transition>
		<div :class="{'nav': !show}">
			<list-navsecond></list-navsecond>
			<list-navthird></list-navthird>
		</div>
		<list-item :itemList="itemList"></list-item>
	</div>
</template>

<script>
import ListHeader from "./components/Header"
import ListNavfirst from "./components/Navfirst"
import ListNavsecond from "./components/Navsecond"
import ListNavthird from "./components/Navthird"
import ListItem from "./components/Item"
import axios from 'axios'
import { mapState } from 'vuex'
export default{
	components:{
		ListHeader,
		ListNavfirst,
		ListNavsecond,
		ListNavthird,
		ListItem
	},
	data(){
		return{
			show: true,
			itemList: [],
			lastCity: ""
		}
	},
	computed:{
		...mapState(['city'])
	},
	mounted(){
		this.lastCity = this.city
		window.addEventListener("scroll", this.headScroll)
		this.getListInfo()
	},
	activated(){
		if(this.lastCity !== this.city){
			this.getListInfo()
			this.lastCity = this.city
		}
	},
	methods:{
		headScroll(){
			var scrollTop = document.documentElement.scrollTop;
			if (scrollTop > 160) {
				this.show = false
			} else {
				this.show = true
			}
		},
		getListInfo(){
			axios.get("api/list.json?city=" + this.city)
				.then(this.getListInfoSucc)
		},
		getListInfoSucc(res){
			if (res.data.ret && res.data.data) {
				const data = res.data.data
				this.itemList = data.itemList
			}
		}
	}
}
</script>

<style scoped>
*{
	touch-action: pan-y;
}
*{
	background: #fff !important
}
.nav{
	position: fixed;
	top: 0;
	z-index: 10;
}
</style>
