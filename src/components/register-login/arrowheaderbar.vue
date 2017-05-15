<template>
	<div class="arrowheaderbar">
		<div class="headerbar">
			<i class="iconfont icon-msnui-menu-left" @click="goBack"></i>
			<h3>{{ title }}<span>{{ subtitle }}</span></h3>
		</div>
		<div class="gqs-title">
			<img src="static/images/gqs.png" />
		</div>
	</div>

</template>

<script>
	export default {
		props: ["title", "subtitle"],
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less">
	@mCl : #454545;
	.headerbar {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.73rem;
		border-bottom: 0.01rem solid #d6d6d6;
		background-color: #fff;
		.iconfont {
			position: absolute;
			left: 0.3rem;
			color: @mCl;
			font-size: 0.3rem;
			line-height: 0.73rem;
		}
		h3 {
			font-weight: normal;
			color: @mCl;
			font-size: 0.29rem;
			text-align: center;
			line-height: 0.73rem;
			span {
				font-size: 0.16rem;
			}
		}
	}
	.gqs-title {
			height: 0.61rem;
			padding-top: 1rem;
			width: 100%;
			padding-left: 45%;
			box-sizing: border-box;
			img {
				height: 0.45rem;
				width: 1.12rem;
				display: block;
			}
		}
</style>