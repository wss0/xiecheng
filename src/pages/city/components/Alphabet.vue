<template>
	<div class="all">
		<ul class="alpha">
			<li class="letter">当前</li>
			<li class="letter">热门</li>
			<li class="letter"
				v-for="item of letters" 
				:key="item"
				:ref="item"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handTouchEnd"
				@click="handleLetterClick"
			>
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: "CityAlphabet",
	props:{
		cities: Object
	},
	computed:{
		letters(){
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	data(){
		return{
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated(){
		this.startY = this.$refs["A"][0].offsetTop
	},
	methods:{
		handleLetterClick(e){
			this.$emit("change", e.target.innerText)
		},
		handleTouchStart(){
			this.touchStatus = true
		},
		handleTouchMove(e){
			if(this.touchStatus) {
				if (this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(()=>{
					const touchY = e.touches[0].clientY
					const index = Math.floor((touchY - 187.5 - this.startY)/14)
					if(index >= 0 && index < this.letters.length) {
						this.$emit("change", this.letters[index])
					}
				}, 16)
			}
		},
		handTouchEnd(){
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.alpha
		position: fixed
		top: 3.75rem
		right: 0
		z-index: 1
		.letter
			width: .56rem
			height: .28rem
			color: #19a0f0
			font-size:.2rem
			text-align: center
</style>