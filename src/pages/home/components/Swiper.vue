<template>
	<div class="swiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default{
	name: 'HomeSwiper',
	props:{
		swiperList: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				}
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.swiper>>>.swiper-pagination-bullet-active
		width: .48rem !important
		background: #fff !important
		border-radius: .1rem !important
		opacity: .9 !important
	.swiper>>>.swiper-pagination-bullet
		background: #fafafc
		opacity: .6
	.swiper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 60%
		border-radius: 0 0 20% 20%
		.swiper-img
			width: 100%
		.swiper-pagination
			top: 3.2rem
			left: auto
			right: .12rem
			width: auto
</style>