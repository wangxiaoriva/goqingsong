<template>
	<div>
		<wodeHeader></wodeHeader>
		<wodeMain></wodeMain>
		<vFooter></vFooter>
	</div>
</template>

<script>
	import wodeHeader from "./wode-header.vue";
	import wodeMain from "./wode-main.vue";
	import vFooter from "../common/footer.vue";
	export default {
		components :{
			wodeHeader,
			wodeMain,
			vFooter
		}
	}
</script>

<style>
</style>