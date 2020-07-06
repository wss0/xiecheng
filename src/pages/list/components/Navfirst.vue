<template>
	<div class="mui-content">
			<div id="slider" class="mui-slider border-bootom">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							精选爆款
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							境外优选
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							国内特惠
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							特价机票
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							古北水镇
						</a>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import "@/assets/mui/css/mui.min.css"
import mui from "@/assets/mui/js/mui.min.js"
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005
});
export default{
	name: "ListNavthird"
}
</script>

<style lang="stylus" scoped>
*{
	touch-action: pan-y;
}
#slider{
	background: #fff
}
.mui-control-item{
	width: 1.4rem !important
	line-height: .52rem !important
	padding: 0 !important
	font-size:.24rem
	background: #f7f7f7
	margin: 0 .2rem .2rem .2rem
	border-radius: 1rem
}
.mui-active{
	background: #f7f7f7 !important
}
</style>