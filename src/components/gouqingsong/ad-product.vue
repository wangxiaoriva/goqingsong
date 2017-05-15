<template>
	<div>
		<!--广告2-伴手礼和茶-->
		<div class="ad-two">
			<img :src="adpData.adptupian" />
		</div>
		<!--活动限量版-->
		<div class="activity-product">
			<ul>
				<li v-for="(item , index) in adprouctData.goodsList" :key="index">
					<a href="javascript:;">
						<div class="activity-product-img">
							<img :src="item.img" />
						</div>
						<div class="activity-product-info">
							<p class="activity-product-title">{{item.name}}</p>
							<p class="activity-product-price">¥{{item.price}}.00</p>
						</div>

					</a>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["adpData", "adprouctData"]
	}
</script>

<style lang="less">
	/*//广告2-伴手礼和茶*/
	
	@priceColor: #e6121d;
	.ad-two {
		height: 2.57rem;
		width: 100%;
		img {
			width: 100%;
			height: auto;
			display: block;
		}
	}
	/*//  活动限量版*/
	
	.activity-product {
		margin-bottom: 0.16rem;
		height: 3rem;
		width: 100%;
		background: #FFFFFF;
		ul {
			&:after {
				display: block;
				clear: both;
				content: "";
			}
			li {
				width: 33.33%;
				float: left;
				a {
					.activity-product-img {
						height: 2.16rem;
						background: #FFFFFF;
						img {
							width: 100%;
							height: auto;
							display: block;
						}
					}
					.activity-product-info {
						padding: 0 0.3rem;
						box-sizing: border-box;
						height: 0.74rem;
						text-align: center;
						.activity-product-title {
							color: #252525;
							font: 0.14rem e("/") 0.24rem "microsoft yahei";
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							word-break: break-all;
							height: 0.45rem;
							overflow: hidden;
						}
						.activity-product-price {
							font: 0.16rem e("/") 0.28rem "microsoft yahei";
							color: @priceColor;
							height: 0.29rem;
						}
					}
				}
			}
		}
	}
</style>