<template>

	<div class="sort-info">
		<div class="sort-info-title">
			<p class="left">分类热搜</p>
			<span class="right">查看全部</span>
		</div>
		<div class="sort-info-details">
			<ul>
				<li v-for="(item , index) in feilei" :key="index">
					<a href="javascript:;">
						<div class="details-img">
							<img v-bind:src="item.img" />
						</div>
						<div class="details-name">
							<p>{{item.name}}</p>
						</div>
					</a>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	export default {
		props : ["feilei"]
	}
</script>

<style lang="less">
	.sort-info {
		background: #FFFFFF;
		margin-bottom: 0.16rem;
		.sort-info-title {
			height: 0.6rem;
			padding: 0 0.16rem;
			.left {
				float: left;
				font: 0.18rem e("/") 0.6rem "microsoft yahei";
			}
			.right {
				padding-left: 0.08rem;
				margin-top: 0.2rem;
				float: right;
				color: #d83d5d;
				border-left: 2px solid #d83d5d;
				font: 0.18rem e("/") 0.18rem "microsoft yahei";
			}
		}
		.sort-info-details {
			height: 1.83rem;
			width: 6.4rem;
			overflow-x: auto;
			ul {
				width: 1.6*5rem;
				height: 1.83rem;
				li {
					width: 1.6rem;
					float: left;
					height: 1.83rem;
					a {
						color: #474747;
						display: block;
						.details-img {
							height: 1.21rem;
							width: 100%;
							img {
								width: 100%;
								height: 1.21rem;
								display: block;
							}
						}
						.details-name {
							height: 0.62rem;
							text-align: center;
						}
					}
				}
			}
		}
	}
	.sort-info:nth-child(1){
		.sort-info-details{
			ul {
				width: 1.6*8rem;
			}
		}
	}
</style>