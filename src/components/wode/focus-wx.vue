<template>
	<div class="focus-wx">
		<div class="wx-img">
			<img src="static/images/wx.png" />
		</div>
		<div class="wx-info">
			<p class="wx-info-title">关注微信号</p>
			<p>点击二维码即可保存图片</p>
			<p>或搜索微信号hiker_goeasy</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	/* //关注微信号*/
	
	.focus-wx {
		height: 2.09rem;
		width: 100%;
		padding: 0.3rem 0;
		box-sizing: border-box;
		display: flex;
		.wx-img {
			height: 1.47rem;
			width: 1.47rem;
			img {
				height: auto;
				width: 100%;
				display: block;
			}
		}
		.wx-info {
			flex: 1;
			padding: 0.32rem 0 0 0.16rem;
			p {
				text-align: left;
				font: 0.2rem e("/") 0.34rem "microsoft yahei";
				color: #6d6c72;
				&.wx-info-title {
					color: #000000;
				}
			}
		}
	}
</style>