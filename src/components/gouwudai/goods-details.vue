<template>
	<div>
		<div tag="div" class="goods-details" v-for="(item , index) in detailsData" :key="index">
			<div class="input-check" @click="allChecked">
				<div class="check-box" :class="{'active' : checked}">
					<p class="iconfont icon-gou1"></p>
				</div>
			</div>
			<div class="details-info">
				<a href="#product">
					<div class="details-info-img">
						<img :src="item.pImg.imgs" alt="图片" title="tupian" />
					</div>
					<div class="details-info-miaoshu">
						<p class="miaoshu-title">{{item.pName}}</p>
						<div class="maioshu-price">
							<span>¥{{item.pPrice}}</span>
							<a href="javascript:;" class="bianji">
								<span class="iconfont icon-bianji5"></span>
							</a>
							<span class="shuliang">×{{item.pCount}}</span>

						</div>
					</div>
				</a>
			</div>
		</div>
		
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				checked: false,
				detailsData: []
			}
		},
		created: function() {
			this.getDetailsData()
		},
		methods: {
			getDetailsData: function() {
				//console.log(JSON.parse(localStorage.getItem("productMessage")))
				this.detailsData = JSON.parse(localStorage.getItem("productMessage"))
				//console.log(this.detailsData)
			},
			allChecked: function() {
				this.checked = !this.checked;

			},
			indexFun:function(){
				console.log(this.index)
			},
			fanxuan: function() {
				this.checked = false
			}
		}
	}
</script>

<style lang="less">
	.goods-details {
		width: 100%;
		height: 1.55rem;
		padding: 0 0.3rem 0 0.2rem;
		border-bottom: 1px solid #f6f6f6;
		box-sizing: border-box;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
		.input-check {
			width: 0.5rem;
			height: 1.55rem;
			float: left;
			padding-top: 0.54rem;
			box-sizing: border-box;
			.check-box {
				width: 0.3rem;
				height: 0.3rem;
				border-radius: 0.02rem;
				border: 1px solid #d3d3d3;
				.iconfont {
					display: none;
				}
			}
			.check-box.active {
				/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff5655+0,ff5650+50,ff5754+100 */
				background: #ff5655;
				/* Old browsers */
				background: -moz-radial-gradient(center, ellipse cover, #ff5655 0%, #ff5650 50%, #ff5754 100%);
				/* FF3.6-15 */
				background: -webkit-radial-gradient(center, ellipse cover, #ff5655 0%, #ff5650 50%, #ff5754 100%);
				/* Chrome10-25,Safari5.1-6 */
				background: radial-gradient(ellipse at center, #ff5655 0%, #ff5650 50%, #ff5754 100%);
				/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff5655', endColorstr='#ff5754', GradientType=1);
				/* IE6-9 fallback on horizontal gradient */
				.iconfont {
					text-align: center;
					font: 0.24rem e("/") 0.3rem "microsoft yahei";
					color: #FFFFFF;
					display: block;
				}
			}
		}
		.details-info {
			width: 5.4rem;
			height: 1.55rem;
			float: left;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			a {
				color: #000000;
				.details-info-img {
					width: 1.25rem;
					height: 1.55rem;
					float: left;
					img {
						width: 100%;
						height: auto;
						display: block;
					}
				}
				.details-info-miaoshu {
					width: 4.06rem;
					height: 1.55rem;
					float: left;
					.miaoshu-title {
						height: 0.82rem;
						font-size: 0.2rem;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						word-break: break-all;
						overflow: hidden;
					}
					.maioshu-price {
						height: 0.56rem;
						font: 0.16rem e("/") 0.56rem "microsoft yahei";
						text-align: left;
						&:after {
							content: "";
							display: block;
							clear: both;
						}
						.iconfont {
							font-size: 0.13rem;
						}
						.shuliang {
							float: right;
							padding-right: 0.15rem;
						}
						.bianji {
							font: 0.32rem e("/") 0.56rem "microsoft yahei";
							float: right;
							color: #ed7b7b;
						}
					}
				}
			}
		}
	}
	/*//结算*/
	
	
</style>