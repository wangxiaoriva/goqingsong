<template>
	<ul class="service">
		<li>
			<a href="javascript:;">
				<p class="icon-box">
					<span class="iconfont icon-broadcast"></span>
				</p>
				<p class="miaoshu">

					机场配送服务费用规则
				</p>
				<p class="gengduo iconfont icon-iconfontxiangyou"></p>
			</a>
		</li>
	</ul>
</template>

<script>
</script>

<style lang="less">
	/*//服务*/
	
	.service {
		height: 0.7rem;
		background: #FFFFFF url("../../../static/images/orderbg.png") repeat-x;
		padding: 0 0.3rem 0 0.16rem;
		box-sizing: border-box;
		width: 100%;
		li {
			height: 0.68rem;
			border-bottom: 1px solid #fafafa;
			a {
				display: block;
				padding: 0.18rem 0 0.22rem;
				.icon-box {
					height: 0.32rem;
					width: 0.32rem;
					border-radius: 0.04rem;
					text-align: center;
					float: left;
					background: #fe4258;
					.iconfont {
						font: 0.2rem e("/") 0.32rem "microsoft yahei";
						color: #FFFFFF;
					}
				}
				.miaoshu {
					float: left;
					color: #2e2e2e;
					padding-left: 0.16rem;
					font: 0.2rem e("/") 0.32rem "microsoft yahei";
				}
				.gengduo {
					float: right;
					color: #c7c7c9;
					font: 0.2rem e("/") 0.32rem "microsoft yahei";
				}
			}
		}
	}
</style>