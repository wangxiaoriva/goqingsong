<template>
	<div class="title">
		<a href="javascript:;" class="goods-title">
			<ul>
				<li>
					<div class="manjian">
						<img src="static/images/manjian.png" />
					</div>
					<p class="miaoshu">

						伴手礼和茶 最高立减90
					</p>
					<p class="gengduo iconfont icon-iconfontxiangyou"></p>

				</li>
			</ul>
		</a>
	</div>
</template>

<script>
</script>

<style lang="less">
	.title {
		width: 100%;
		.goods-title {
			display: block;
			padding-left: 0.68rem;
			line-height: 0.68rem;
			border-bottom: 1px solid #f6f6f6;
			padding-right: 0.3rem;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			ul {
				li {
					&:after {
						content: "";
						display: block;
						clear: both;
					}
					.manjian {
						float: left;
						width: 0.42rem;
						height: 0.21rem;
						padding-top: 0.24rem;
						box-sizing: border-box;
						img {
							width: 100%;
							height: auto;
							display: block;
						}
					}
					.miaoshu {
						width: 4.5rem;
						float: left;
						padding-left: 0.18rem;
						box-sizing: border-box;
						font-size: 0.2rem;
						color: #2e2e2e;
					}
					.gengduo {
						font-size: 0.2rem;
						color: #c7c7c9;
						float: right;
					}
				}
			}
		}
	}
</style>