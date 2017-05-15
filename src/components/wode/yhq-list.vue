<template>
	<ul class="youhuiquan">
		<li v-for="(item , index) in listOne" :key="index">
			<a href="javascript:;">
				<p class="icon-box">
					<span class="iconfont" :class="item.className"></span>
				</p>
				<div>
					<span class="miaoshu">
								{{item.miaoShu}}
							</span>
					<span class="miaoshu-info">
								{{item.miaoshuInfo}}
							</span>
				</div>

				<p class="gengduo iconfont icon-iconfontxiangyou"></p>
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ["listOne"]
	}
</script>

<style lang="less">
	/* //  优惠券*/
	
	.youhuiquan {
		background: #FFFFFF;
		padding: 0 0.3rem 0 0.16rem;
		box-sizing: border-box;
		width: 100%;
		margin-top: 0.16rem;
		li {
			height: 0.68rem;
			border-bottom: 1px solid #fafafa;
			a {
				&:after {
					content: "";
					display: block;
					clear: both;
				}
				display: block;
				padding: 0.18rem 0;
				.icon-box {
					height: 0.32rem;
					width: 0.32rem;
					border-radius: 0.04rem;
					text-align: center;
					float: left;
					.iconfont {
						font: 0.2rem e("/") 0.32rem "microsoft yahei";
						color: #FFFFFF;
					}
				}
				div {
					width: 5.3rem;
					float: left;
					text-align: left;
					.miaoshu {
						color: #2e2e2e;
						padding-left: 0.16rem;
						font: 0.2rem e("/") 0.32rem "microsoft yahei";
					}
					.miaoshu-info {
						color: #2e2e2e;
						margin-right: 0.18rem;
						float: right;
					}
				}
				.gengduo {
					float: right;
					color: #c7c7c9;
					font: 0.2rem e("/") 0.32rem "microsoft yahei";
				}
			}
		}
				li:nth-child(1) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ee985a+0,fd9061+51,f29567+100 */
					background: #ee985a;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #ee985a 0%, #fd9061 51%, #f29567 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #ee985a 0%, #fd9061 51%, #f29567 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #ee985a 0%, #fd9061 51%, #f29567 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ee985a', endColorstr='#f29567', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		li:nth-child(2) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#89d670+0,8ed671+51,87d26e+100 */
					background: #89d670;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #89d670 0%, #8ed671 51%, #87d26e 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #89d670 0%, #8ed671 51%, #87d26e 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #89d670 0%, #8ed671 51%, #87d26e 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#89d670', endColorstr='#87d26e', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		li:nth-child(3) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff566f+2,ea6e7a+51,ff6077+100 */
					background: #ff566f;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #ff566f 2%, #ea6e7a 51%, #ff6077 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #ff566f 2%, #ea6e7a 51%, #ff6077 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #ff566f 2%, #ea6e7a 51%, #ff6077 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff566f', endColorstr='#ff6077', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		li:nth-child(4) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#83a5c3+2,8eafc9+51,86aac7+100 */
					background: #83a5c3;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #83a5c3 2%, #8eafc9 51%, #86aac7 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #83a5c3 2%, #8eafc9 51%, #86aac7 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #83a5c3 2%, #8eafc9 51%, #86aac7 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#83a5c3', endColorstr='#86aac7', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		
	}
	
	.youhuiquan:nth-child(2) {
		li:nth-child(1) {
			a {
				.icon-box {
					.iconfont {
						font: 0.2rem e("/") 0.32rem "microsoft yahei";
						color: #FFFFFF;
					}
				}
			}
		}
	li:nth-child(1) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f28f6d+0,ff8273+50,ff8160+100 */
					background: #f28f6d;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #f28f6d 0%, #ff8273 50%, #ff8160 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #f28f6d 0%, #ff8273 50%, #ff8160 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #f28f6d 0%, #ff8273 50%, #ff8160 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f28f6d', endColorstr='#ff8160', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		li:nth-child(2) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7ebfec+0,6fcde5+50,82c5e0+100 */
					background: #7ebfec;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #7ebfec 0%, #6fcde5 50%, #82c5e0 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #7ebfec 0%, #6fcde5 50%, #82c5e0 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #7ebfec 0%, #6fcde5 50%, #82c5e0 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7ebfec', endColorstr='#82c5e0', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		li:nth-child(3) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a5a4e4+0,a19fd0+51,a2a1e0+100 */
					background: #a5a4e4;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #a5a4e4 0%, #a19fd0 51%, #a2a1e0 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #a5a4e4 0%, #a19fd0 51%, #a2a1e0 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #a5a4e4 0%, #a19fd0 51%, #a2a1e0 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a5a4e4', endColorstr='#a2a1e0', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
		li:nth-child(4) {
			a {
				.icon-box {
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fcbd55+0,f6c542+51,f4c450+100 */
					background: #fcbd55;
					/* Old browsers */
					background: -moz-radial-gradient(center, ellipse cover, #fcbd55 0%, #f6c542 51%, #f4c450 100%);
					/* FF3.6-15 */
					background: -webkit-radial-gradient(center, ellipse cover, #fcbd55 0%, #f6c542 51%, #f4c450 100%);
					/* Chrome10-25,Safari5.1-6 */
					background: radial-gradient(ellipse at center, #fcbd55 0%, #f6c542 51%, #f4c450 100%);
					/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcbd55', endColorstr='#f4c450', GradientType=1);
					/* IE6-9 fallback on horizontal gradient */
				}
			}
		}
	}
</style>