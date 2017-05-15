<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in homeData.activityList">
					<img v-bind:src="item.img" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["homeData"]
	}
</script>

<style lang="less">
	/*    //  轮播*/
	
	.banner {
		height: 2.57rem;
		.swiper-slide {
			width: 100%;
			height: 2.57rem;
			img {
				width: 100%;
				height: auto;
				display: block;
			}
		}
	}
</style>