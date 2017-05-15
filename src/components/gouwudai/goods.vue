<template>
	<div class="goods">
		<!--标题-->
		<goodsTitle></goodsTitle>
		<!--商品详情列表-->
		<goodsDetails></goodsDetails>
	</div>
</template>

<script>
	import goodsTitle from "./goods-title.vue";
	import goodsDetails from "./goods-details.vue";
	export default {
		components : {
			goodsTitle,
			goodsDetails
		}
	}
</script>

<style lang="less">
/*//  商品列表*/
		.goods {
			background: #FFFFFF;
			border-top: 1px solid #f6f6f6;
			border-bottom: 1px solid #f6f6f6;
			margin-top: 0.17rem;
			margin-bottom: 1.8rem;
			
		}
</style>