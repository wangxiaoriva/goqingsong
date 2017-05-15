<template>
	<div>
		<vHeader></vHeader>
		<gwdMain></gwdMain>
		<vFooter></vFooter>
	</div>
</template>

<script>
	import vHeader from "./gouwudai-header.vue";
	import gwdMain from "./gouwudai-main.vue";
	import vFooter from "../common/footer.vue";
	export default {
		components : {
			vHeader,
			gwdMain,
			vFooter
		}
	}
</script>

<style>
</style>