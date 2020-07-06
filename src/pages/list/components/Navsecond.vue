<template>
	<div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active iconfont" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐排序&#xe625;
						</a>
						<a class="mui-control-item iconfont" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							线路玩法&#xe625;
						</a>
						<a class="mui-control-item iconfont" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							行程天数&#xe625;
						</a>
						<a class="mui-control-item iconfont" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							筛选&#xe611;
						</a>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import "@/assets/mui/css/mui.min.css"
export default{
	name: "ListNavsecond"
}
</script>

<style lang="stylus" scoped>
*{
	touch-action: pan-y;
}
#slider{
	background: #fff;
}
.mui-control-item{
	height:.8rem
	line-height: .8rem
	padding-right: 2% !important;
	font-size:.28rem;
}
</style>