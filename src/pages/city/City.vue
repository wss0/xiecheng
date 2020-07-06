<template>
	<div>
		<city-header></city-header>
		<city-input :cities="cities"></city-input>
		<city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
	</div>
</template>

<script>
import CityHeader from "./components/Header"
import CityInput from "./components/Input"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
import axios from "axios"
export default{
	components:{
		CityHeader,
		CityInput,
		CityList,
		CityAlphabet
	},
	data(){
		return{
			cities:{},
			hotCities:[],
			letter: ""
		}
	},
	mounted(){
		this.getCityInfo()
	},
	methods:{
		getCityInfo(){
			axios.get("api/city.json")
				.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc(res){
			if(res.data.ret && res.data.data){
				const data = res.data.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handleLetterChange(letter){
			this.letter = letter
		}
	}
}
</script>