<template>
	<div class="payment">
			<div class="payment-check" @click="allChecked">
				<div class="Allcheck-box" :class="{'active' : checked}">
					<p class="iconfont icon-gou1"></p>
				</div>
			</div>
			<div class="payment-info">
				<p class="p1">合计：<span>¥0.00</span></p>
				<p class="p2">总额：¥0.00 优惠：¥0.00</p>
			</div>
			<div class="payment-btn">
				<div class="btn">去结算（0）</div>
			</div>
		</div>
</template>

<script>
	export default {
		data : function(){
			return {
				checked : true
			}
		},
		methods : {
			allChecked: function() {
				this.checked = !this.checked;

			}
		}
	}
</script>

<style lang="less">
	.payment {
		height: 0.92rem;
		border-top: 1px solid #ececec;
		box-sizing: border-box;
		position: fixed;
		bottom: 0.77rem;
		background: #fafafa;
		width: 100%;
		padding: 0 0.3rem 0 0.2rem;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
		.payment-check {
			width: 0.5rem;
			height: 1.55rem;
			float: left;
			padding-top: 0.3rem;
			box-sizing: border-box;
			.Allcheck-box {
				width: 0.3rem;
				height: 0.3rem;
				border-radius: 0.02rem;
				border: 1px solid #d3d3d3;
				.iconfont {
					display: none;
				}
			}
			.Allcheck-box.active {
				width: 0.3rem;
				height: 0.3rem;
				border-radius: 0.02rem;
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
		.payment-info {
			width: 4rem;
			height: 100%;
			float: left;
			padding: 0.12rem 0 0.15rem;
			.p1 {
				font: 0.2rem e("/") 0.33rem "microsoft yahei";
				color: #000000;
				span {
					color: #f86e7f;
				}
			}
			.p2 {
				color: #b6b6b6;
			}
		}
		.payment-btn {
			width: 1.4rem;
			height: 100%;
			float: left;
			padding-top: 0.14rem;
			box-sizing: border-box;
			.btn {
				width: 1.4rem;
				height: 0.62rem;
				/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fe4258+0,f94458+50,ff5754+100 */
				background: #fe4258;
				/* Old browsers */
				background: -moz-radial-gradient(center, ellipse cover, #fe4258 0%, #f94458 50%, #ff5754 100%);
				/* FF3.6-15 */
				background: -webkit-radial-gradient(center, ellipse cover, #fe4258 0%, #f94458 50%, #ff5754 100%);
				/* Chrome10-25,Safari5.1-6 */
				background: radial-gradient(ellipse at center, #fe4258 0%, #f94458 50%, #ff5754 100%);
				/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe4258', endColorstr='#ff5754', GradientType=1);
				/* IE6-9 fallback on horizontal gradient */
				border-radius: 0.04rem;
				color: #FFFFFF;
				text-align: center;
				line-height: 0.62rem;
			}
		}
	}
</style>