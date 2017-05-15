<template>
	<div>
		<div class="activity-product">
			<ul>
				<li v-for="(item , index) in imgList" :key="index">
					<a href="#product">
						<div class="activity-product-img">
							<img v-bind:src="item.imgUrl" />
						</div>
						<p class="activity-product-price">¥9.90</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="kong-se-three"></div>
	</div>

</template>

<script>
		export default {
		data : function(){
			return {
				imgList : [
					{
						imgUrl : "http://img.yhiker.com//uploads/img/20160705110847310.png"
					},
					{
						imgUrl : "http://img.yhiker.com//uploads/img/20170504165719141.png"
					},
					{
						imgUrl : "http://img.yhiker.com//uploads/img/20161101163437723.png"
					},
				]
			}
		}
	}
</script>

<style lang="less">
	@headerHeight: 0.99rem;
	@footerHeight: 0.77rem;
	@priceColor: #e6121d;
	.activity-product {
		height: 2.64rem;
		width: 100%;
		ul {
			background: #FFFFFF;
			display: flex;
			li {
				flex: 1;
				a {
					.activity-product-img {
						height: 1.92rem;
						background: #FFFFFF;
						img {
							width: 100%;
							height: auto;
							display: block;
						}
					}
					.activity-product-price{
                        color: @priceColor;
                        height: 0.72rem;
                        font: 0.2rem e("/") 0.72rem "microsoft yahei";
                        text-align: center;
                    }
				}
			}
		}
	}
</style>