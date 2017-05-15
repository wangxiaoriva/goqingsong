<template>
	<div class="product-header">
		<div class="left" @click="goback">
			<a href="">
				<span class="iconfont icon-xiangzuojiantou"></span>
			</a>
		</div>
		<div class="dingdancenter">
			<p>订单确认</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods : {
			goback:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less">
	/*头部*/
	
	.product-header {
		height: 0.6rem;
		background: transparent;
		z-index: 100;
		width: 100%;
		position: fixed;
		top: 0;
		div {
			a {
				color: #000000;
				text-align: center;
				font: 700 0.28rem e("/") 0.6rem "microsoft yahei";
			}
			display: inline-block;
			width: 0.57rem;
			height: 0.6rem;
			&.left {
				float: left;
			}
		}
		.dingdancenter{
			width:5rem;
			float: left;
			font:0.2rem e("/") 0.6rem "microsoft yahei";
			text-align: center;
		}
	}
</style>