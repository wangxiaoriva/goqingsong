<template>
	<div>
		<vHeader v-bind:gheader-list="gheaderList"></vHeader>
		<HomeMain v-bind:home-data="homeData"></HomeMain>
		<vFooter></vFooter>
	</div>

</template>

<script>
	import vHeader from "./common/header.vue";
	import HomeMain from "./home/main.vue";
	import vFooter from "./common/footer.vue";

	export default {
		data: function() {
			return {
				homeData: [],
				gheaderList: {
					dizhi: "台湾",
					className: "icon-scan",
					serachName: "安耐晒"
				}
			}
		},
		components: {
			vHeader,
			HomeMain,
			vFooter
		},
		created: function() {
			this.getHomeData();
		},
		methods: {
			getHomeData: function() {
				this.$http.get("./static/json/index.json").then(function(res) {
					//					console.log(JSON.parse(res.bodyText));
					console.log(res.body);
					this.homeData = res.data[0].result;
					return res.data
				})
			}
		}
	}
</script>

<style lang="less">
	@import "../css/ba.min.css";
	@import "../css/swiper.css";
	body {
		background:#f0f0f0;
	}
</style>