<template>
	<ul class="all-order">
		<li>
			<a href="javascript:;">
				<p class="icon-box">
					<span class="iconfont" :class="titleData.className"></span>
				</p>
				<p class="miaoshu">
					{{titleData.pName}}
				</p>
				<p class="gengduo iconfont" :class="titleData.gengdDuo"></p>
			</a>
		</li>
		<li>
			<!--代付款-->
			<ul>
				<li v-for="(item , index) in iconData" :key="index">
					<a href="javascript:;">
						<div class="left">
							<div class="iconfont" :class="item.className"></div>
							<p class="daifukuan">{{item.pName}}</p>
						</div>
						<span class="xiantiao"></span>
					</a>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		data: function() {
			return {

				titleData: {
					className: "icon-xingzhuang97",
					pName: "全部订单",
					gengdDuo: "icon-iconfontxiangyou"
				},
				iconData: [
					{ className: "icon-daifukuan8", pName: "待付款" },
					{ className: "icon-icon02", pName: "进行中" },
					{ className: "icon-daipingjia2", pName: "待评价" },
					{ className: "icon-shouhoubaozhang", pName: "售后" }
				]
			}

		}
	}
</script>

<style lang="less">
	.all-order {
		background: #FFFFFF;
		padding: 0 0.3rem 0 0.16rem;
		box-sizing: border-box;
		width: 100%;
		li {
			height: 0.68rem;
			border-bottom: 1px solid #fafafa;
			a {
				display: block;
				padding: 0.18rem 0;
				.icon-box {
					height: 0.32rem;
					width: 0.32rem;
					border-radius: 0.04rem;
					text-align: center;
					float: left;
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fc8ec0+1,ee94be+50,fd8ec4+100 */
					background: #fc8ec0;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #fc8ec0 1%, #ee94be 50%, #fd8ec4 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #fc8ec0 1%, #ee94be 50%, #fd8ec4 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #fc8ec0 1%, #ee94be 50%, #fd8ec4 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc8ec0', endColorstr='#fd8ec4', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
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
			&:nth-child(2) {
				a {
					padding: 0.07rem 0 0;
					color: #555555;
				}
			}
			/*//          代付款*/
			ul {
				width: 100%;
				li {
					&:nth-last-child(1) {
						.xiantiao {
							display: none;
						}
					}
					float: left;
					width: 25%;
					text-align: center;
					.left {
						float: left;
						text-align: center;
						padding-left: 25%;
						.iconfont {
							font-size: 0.24rem;
							height: 0.3rem;
						}
						.daifukuan {
							font: 0.18rem e("/") 0.38rem "microsoft yahei";
							height: 0.38rem;
						}
					}
					.xiantiao {
						width: 0.02rem;
						height: 0.38rem;
						background: #cfcfcf;
						float: right;
						margin-top: 0.15rem;
					}
				}
			}
		}
	}
</style>