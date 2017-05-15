<template>
	<div>
		<vHeader v-bind:gheader-list="gheaderList"></vHeader>
		<gqsMain v-bind:gqs-data="gqsData"></gqsMain>
		<vFooter></vFooter>
	</div>
</template>

<script>
	import vHeader from "../common/header.vue";
	import gqsMain from "./gouqingsong-main.vue";
	import vFooter from "../common/footer.vue";
	export default {
		data: function() {
			return {
				gqsData : [],
				gheaderList: {
					dizhi: "台湾",
					className: " icon-gengduo1",
					serachName: "购轻松"
				}
			}
		},
		components: {
			vHeader,
			gqsMain,
			vFooter
		},
		created: function() {
			this.getgqsData();
		},
		methods: {
			getgqsData: function() {
				this.$http.get("./static/json/gouqingsong.json").then(function(res){
					console.log(res.data);
					console.log(res.data[0].result);
					this.gqsData = res.data[0].result;
				})
			}
		}
	}
</script>

<style lang="less">
	
</style>