<template>
	<!--底部-->
	<footer>
		<ul>
			<router-link tag="li" v-for="(item , index) in footerList" :key="index" :to="item.path">
				<a href="javascript:;">
					<div class="iconfont-tu">
						<div class="iconfont-bg" /></div>
					</div>
					<p>{{item.pName}}</p>
				</a>
			</router-link>
		</ul>
	</footer>
</template>

<script>
	export default {
		data : function(){
			return {
				footerList : [
					{
						className : "",
						pName : "精选",
						path : "/home"
					},
					{
						className : "",
						pName : "购轻松",
						path : "/gouqingsong"
					},
					{
						className : "",
						pName : "购物袋",
						path : "/gouwudai"
					},
					{
						className : "",
						pName : "我的",
						path : "/wode"
					}
				]
			}
		}
		
	}
</script>

<style lang="less">
	/*//底部*/
	footer {
		height: 0.77rem;
		width: 100%;
		background: #fafafa;
		border-top: 2px solid #dfdfdf;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		ul {
			height: 0.77rem;
			display: flex;
			li {
				flex: 1;
				text-align: center;
				a {
					display: block;
					padding-top: 0.03rem;
					box-sizing: border-box;
					color: #4a4a4a;
					.iconfont-tu {
						height: 0.5rem;
						width: 100%;
						padding-top: 0.07rem;
						box-sizing: border-box;
						padding: 0 35% 0 35%;
						.iconfont-bg {
							width: 0.35rem;
							height: 0.36rem;
						}
					}
					p {
						font: 0.12rem e("/") 0.22rem "microsoft yahei";
					}
				}
			}
			li:nth-child(1) {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/jingxuan.png) no-repeat center/cover;
						}
					}
				}
			}
			li:nth-child(2) {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/gouqingsong.png) no-repeat center/cover;
						}
					}
				}
			}
			li:nth-child(3) {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/gouwudai.png) no-repeat center/cover;
						}
					}
				}
			}
			li:nth-child(4) {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/wode.png) no-repeat center/cover;
						}
					}
				}
			}
			li.active {
				a {
					color: #fa4558;
				}
			}
			li:nth-child(1).active {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/jingxuan_se.png) no-repeat center/cover;
						}
					}
				}
			}
			li:nth-child(2).active {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/gouqingsong_se.png) no-repeat center/cover;
						}
					}
				}
			}
			li:nth-child(3).active {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/gouwudai_se.png) no-repeat center/cover;
						}
					}
				}
			}
			li:nth-child(4).active {
				a {
					.iconfont-tu {
						.iconfont-bg {
							background: url(../../../static/images/wode_se.png) no-repeat center/cover;
						}
					}
				}
			}
		}
	}
</style>