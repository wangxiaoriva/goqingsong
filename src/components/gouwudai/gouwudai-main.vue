<template>
	<div class="gouwudai-main">
		<serviceFee></serviceFee>
		<!--商品列表-->
		<goods></goods>
		<!--结算-->
		<payment></payment>
	</div>
</template>

<script>
	import serviceFee from "./service-fee.vue";
	import goods from "./goods.vue";
	import payment from "./payment.vue";
	export default {
		components : {
			serviceFee,
			goods,
			payment
		}
	}
</script>

<style lang="less">
	/*//购物袋主体内容*/
	.gouwudai-main {
		width: 100%;
		padding: 0.66rem 0 0.77rem;
	}
	
</style>