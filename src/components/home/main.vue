<template>
	<div class="main">
		<!--轮播-->
		<Vswiper v-bind:home-data="homeData"></Vswiper>
		<!--选择区域-->
		<NavSlect v-bind:home-data="homeData"></NavSlect>
		<!--广告1-牛轧糖-->
		<AdOne v-bind:ad-data="adData"></AdOne>
		<!--活动限量版-->
		<ActiveProduct></ActiveProduct>
		<!--广告图板块-->
		<AdBoard v-bind:home-data="homeData"></AdBoard>
		<!--产品列表-->
		<productList v-bind:home-data="homeData"></productList>
		<!--产品列表-->
	</div>
</template>

<script>
	import Vswiper from "../common/vswiper.vue";
	import NavSlect from "../common/navslect.vue";
	import AdOne from "../common/adone.vue";
	import ActiveProduct from "../common/activeproduct.vue";
	import AdBoard from "../common/adboard.vue";
	import ProductList from "../common/productlist.vue";
	
	export default {
		props: ["homeData"],
		data : function(){
			return {
				adData:{tupian :"http://img.yhiker.com/uploads/img/20170329143710631.jpg"}
			}
		},
		mounted: function() {
			new Swiper(".swiper-container", {
				autoplay: 3000,
				loop: true,
				pagination: ".swiper-pagination",
				observer: true,
				autoplayDisableOnInteraction: false
			});
		},
		components : {
			Vswiper,
			NavSlect,
			AdOne,
			ActiveProduct,
			AdBoard,
			ProductList
		}
	}
</script>

<style lang="less">
	/*//主体内容*/
	
	@headerHeight: 0.99rem;
	@footerHeight: 0.77rem;
	@priceColor: #e6121d;
	.main {
		width: 100%;
		padding-top:@headerHeight;
		padding-bottom:@footerHeight;
		/*//  广告1-牛轧糖*/
	}
</style>