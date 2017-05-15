<template>
	<div>
		<!--头部-->
		<ProudctHeader></ProudctHeader>
		<!--主体-->
		<div class="product-main">
			<!--轮播-->
			<div class="product-banner">
				<div class="swiper-container">
					<div class="swiper-wrapper" v-if="productData.imgUrl">
						<div class="swiper-slide" v-for="(item , index) in productData.imgUrl" :key="index">
							<img :src="item.imgs" />
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<!--产品信息-->
			<div class="product-info">
				<div class="top">
					<p>
						<span class="price">¥{{productData.price}}0</span>
						<span class="ntprice">约NT${{productData.defaultPrice}}</span>
						<s class="defaultprice">¥{{productData.defaultPrice}}</s>
						<span class="banjia">
							<img src="static/images/banjia.png" />
						</span>
					</p>

				</div>
				<div class="center">
					<p class="pName">{{productData.name}}</p>
				</div>
				<div class="bottom">
					<div class="quhuo">
						<span>{{productData.deliveryMode}}</span>
					</div>
					<div class="yishou">
						<span>已售657件</span>
					</div>
				</div>
			</div>
			<!--更多-->
			<div class="product-gengduo">
				<div class="gengduo-banjia">
					<span>
						<img src="static/images/banjia.png" />
					</span>
				</div>
				<div class="gengduo-maioshu">
					<p>同款商品第二件半价。</p>
				</div>
				<div class="gengduo-icon">
					<p class="iconfont icon-xiangyoujiantou"></p>
				</div>
			</div>
			<!--产品信息-->
		</div>
		<!--底部-->
		<div class="product-footer">
			<div class="footer-left">
				<a href="javascript:;" class="car">
					<span class="shu">1</span>
					<div class="iconfont icon-gouwudai"></div>
					<p class="icon-info">购物袋</p>
				</a>
				<a href="javascript:;" class="kefu">
					<div class="iconfont icon-fuwushangkefu"></div>
					<p class="icon-info">客服</p>
				</a>

			</div>
			<div class="footer-right" v-on:click="slotInsert">
				<a href="javascript:;">加入购物袋</a>
			</div>
			<div class="footer-center" v-on:click="slotBuy">
				<a href="javascript:;">立即购买</a>
			</div>
		</div>
		<!--底部-->
		<BuyNow v-if="isShow" v-on:aaa="isShowFun">
			<div class="confirm-btn" v-if="slotShow">
				<a href="#lijigoumai">立即购买</a>
			</div>
			<div class="confirm-btn" v-if="!slotShow" v-on:click="alertFun">
				<a href="#gouwudai">加入购物袋</a>
				<!--加入购物车-->
				<div class="insertshopcar" v-if="insert">
					加入购物车
				</div>
			</div>
		</BuyNow>
	</div>
</template>

<script>
	import ProudctHeader from "./product-header";
	import BuyNow from "./buy-now.vue";

	export default {
		data: function() {
			return {
				productData: {
					imgUrl: [
						{ imgs: "http://img.yhiker.com//uploads/img/20160628141846610.jpg" },
						{ imgs: "http://img.yhiker.com//uploads/img/20160628141913194.jpg" },
						{ imgs: "http://img.yhiker.com//uploads/img/20160628141928819.jpg" },
						{ imgs: "http://img.yhiker.com//uploads/img/20160628143347920.jpg" }
					],
					price: 9.9,
					defaultPrice: 59.8,
					deliveryMode: "去程机场取货",
					name: "【限桃园落地领取】reSKINZ 经典保湿旅行组 瞬透活水 旅行好伴侣·水润保湿 活动限量",
					deliveryMode: "去程机场取货",
					//					count : ""
				},
				isShow: false,
				slotShow: false,
				insert: false,
				productMessage: []
			}
		},
		mounted: function() {
			new Swiper(".swiper-container", {
				autoplay: 3000,
				loop: true,
				pagination: ".swiper-pagination",
				observer: true,
				autoplayDisableOnInteraction: false
			});
		},
		methods: {
			isShowFun: function(abc) {
				//				console.log(11)
				this.isShow = false;
				//				console.log(this.isShow)
				//				console.log(abc)
				this.productData.count = abc
			},
			slotInsert: function() {
				this.isShow = true;
				this.slotShow = false;
			},
			slotBuy: function() {
				this.isShow = true;
				this.slotShow = true;
			},
			alertFun: function() {
				this.insert = true;
				var that = this;
				setTimeout(function() {
					that.insert = false;
					that.isShow = false;
				}, 1000)
				var count = document.getElementById("count");
				//console.log(count.value)
				var ggg = {
					pImg: this.productData.imgUrl[0],
					pPrice: this.productData.price,
					pName: this.productData.name,
					pCount: count.value
				}
				//localStorage.clear();
				//console.log(localStorage.productMessage)

				if(!localStorage.productMessage) {
					console.log("第一次")
					console.log(localStorage.productMessage)
					this.productMessage.push(ggg)
					localStorage.setItem("productMessage", JSON.stringify(this.productMessage))
				} else {
					console.log("第二次undefined")
					console.log(JSON.parse(localStorage.productMessage))
					var c = JSON.parse(localStorage.productMessage)
					console.log(c[0])
					c.push(ggg)
					localStorage.setItem("productMessage", JSON.stringify(c))
					console.log(localStorage)
				}

				//				productMessage.push(ggg)
				//console.log(this.productMessage)
				//				console.log(this)

				

			}
		},
		components: {
			ProudctHeader,
			BuyNow
		}
	}
</script>

<style lang="less">
	/*主体*/
	
	.product-main {
		padding-bottom: 0.76rem;
		width: 100%;
		/*<!--轮播-->*/
		.product-banner {
			height: 5.49rem;
			background: #FFFFFF;
			.swiper-slide {
				width: 100%;
				height: 5.49rem;
				img {
					width: 100%;
					height: auto;
					display: block;
				}
			}
			.swiper-pagination-bullet-active {
				background: #f12b44;
			}
		}
		/*<!--产品信息-->*/
		.product-info {
			height: 1.62rem;
			width: 100%;
			background: #FFFFFF;
			border-top: 1px solid #f6f6f6;
			border-bottom: 1px solid #f6f6f6;
			.top {
				height: 0.56rem;
				text-align: center;
				font: 0.22rem e("/") 0.56rem "microsoft yahei";
				.price {
					color: #fb494a;
				}
				.ntprice {
					color: #b3b3b3;
					font: 0.18rem e("/") 0.56rem "microsoft yahei";
				}
				.defaultprice {
					color: #b3b3b3;
					font: 0.18rem e("/") 0.56rem "microsoft yahei";
				}
				.banjia {
					width: 0.89rem;
					height: 0.22rem;
					display: inline-block;
					img {
						width: 100%;
						height: auto;
						display: block;
					}
				}
			}
			.center {
				height: 0.54rem;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-break: break-all;
				overflow: hidden;
			}
			.bottom {
				height: 0.5rem;
				padding-left: 30%;
				&:after {
					content: "";
					display: block;
					clear: both;
				}
				.quhuo {
					width: 1.2rem;
					padding-top: 0.1rem;
					color: #FFFFFF;
					height: 0.5rem;
					box-sizing: border-box;
					float: left;
					span {
						height: 0.25rem;
						padding: 0 0.16rem 0 0.16rem;
						display: inline-block;
						font: 0.14rem e("/") 0.25rem "microsoft yahei";
						background: #fe5873;
					}
				}
				.yishou {
					padding: 0 0.16rem 0 0.16rem;
					font: 0.18rem e("/") 0.5rem "microsoft yahei";
					color: #747474;
					float: left;
				}
			}
		}
		/*<!--更多-->*/
		.product-gengduo {
			height: 0.68rem;
			background: #FFFFFF;
			width: 100%;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			.gengduo-banjia {
				width: 1.18rem;
				height: 0.68rem;
				padding: 0.2rem 0.23rem 0 0.23rem;
				box-sizing: border-box;
				float: left;
				span {
					display: inline-block;
					height: 0.68rem;
					img {
						width: 100%;
						height: auto;
						display: block;
					}
				}
			}
			.gengduo-maioshu {
				float: left;
				p {
					line-height: 0.68rem;
				}
			}
			.gengduo-icon {
				width: 0.68rem;
				height: 0.68rem;
				float: right;
			}
			.gengduo-icon {
				font: 0.2rem e("/") 0.68rem "microsoft yahei";
				color: #c4c4c6;
			}
		}
		/*<!--轮播-->*/
	}
	/*底部*/
	
	.product-footer {
		height: 0.76rem;
		width: 100%;
		background: #fafafa;
		position: fixed;
		bottom: 0;
		border-top: 2px solid #d0d0d0;
		box-sizing: border-box;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
		.footer-left {
			width: 6.4-(1.5*2)rem;
			height: 0.74rem;
			float: left;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			.car {
				padding: 0 0.3rem 0 0.3rem;
				height: 0.74rem;
				display: block;
				float: left;
				color: #ed4662;
				position: relative;
				.shu {
					position: absolute;
					width: 0.25rem;
					height: 0.25rem;
					background: #ed4662;
					right: 0;
					top: -0.1rem;
					border-radius: 50%;
					color: #FFFFFF;
				}
				.iconfont {
					height: 0.46rem;
					font: 0.3rem e("/") 0.46rem "microsoft yahei";
				}
				.icon-info {
					height: 0.28rem;
					font-size: 0.18rem;
				}
			}
			.kefu {
				color: #000000;
				padding: 0 0.3rem 0 0.3rem;
				height: 0.74rem;
				display: block;
				float: left;
				.iconfont {
					height: 0.46rem;
					font: 0.3rem e("/") 0.46rem "microsoft yahei";
				}
				.icon-info {
					height: 0.28rem;
					font-size: 0.18rem;
				}
			}
		}
		.footer-center {
			width: 1.55rem;
			height: 0.74rem;
			background: #fbb44c;
			float: right;
			text-align: center;
			font: 0.22rem e("/") 0.74rem "microsoft yahei";
			color: #FFFFFF;
			a {
				color: #FFFFFF;
			}
		}
		.footer-right {
			width: 1.55rem;
			height: 0.74rem;
			background: #f5485b;
			float: right;
			text-align: center;
			font: 0.22rem e("/") 0.74rem "microsoft yahei";
			color: #FFFFFF;
			a {
				color: #FFFFFF;
			}
		}
	}
</style>