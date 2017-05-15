<template>
	<!--头部-->
	<div class="wode-header">
		<div class="header-kong"></div>
		<a href="#/login" class="header-info">
			<div class="header-info-img">
				<img src="static/images/touxiang.png" />
			</div>
			<div class="header-info-name">点击登录</div>
		</a>
		<div class="header-message">
			<p class="iconfont icon-xinfengpsd"></p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.wode-header {
		height: 2.08rem;
		width: 100%;
		background: #ff4057;
		display: flex;
		text-align: center;
		padding: 0.25rem 0 0.13rem;
		box-sizing: border-box;
		color: #FFFFFF;
		.header-kong {
			width: 0.93rem;
		}
		.header-info {
			flex: 1;
			color: #FFFFFF;
			.header-info-img {
				height: 1.1rem;
				padding-left: 40%;
				img {
					width: 1.1rem;
					height: 1.1rem;
					display: block;
				}
			}
			.header-info-name {
				font: 0.18rem e("/") 0.62rem "microsoft yahei";
			}
		}
		.header-message {
			width: 0.93rem;
			.iconfont {
				font: 0.28rem e("/") 0.42rem "microsoft yahei";
			}
		}
	}
</style>