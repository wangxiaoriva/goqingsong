<template>
	<div class="ad-one">
		<a href="#product">
			<img v-bind:src="adData.tupian" />
		</a>
	</div>
</template>

<script>
	export default {
		props: ["adData"]
	}
</script>

<style lang="less">
	/*//  广告1-牛轧糖*/
	
	.ad-one {
		height: 2.58rem;
		width: 100%;
		img {
			width: 100%;
			height: auto;
			display: block;
		}
	}
</style>