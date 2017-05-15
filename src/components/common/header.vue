<template>
	<header>
		<div class="head-left">
			<div class="address">
				<a href="javascript:;">
					<p>{{gheaderList.dizhi}}<span class="iconfont icon-caret"></span></span>
					</p>
				</a>
			</div>
		</div>
		<div class="head-center">
			<div class="serach">
				<span class="iconfont icon-sousuo"></span>
				<input type="search" :placeholder="gheaderList.serachName" />
			</div>
		</div>
		<div class="head-right">
			<div class="saoyisao">
				<a href="#/barcode">
					<p class="iconfont" :class="gheaderList.className"></p>
				</a>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		props: ["gheaderList"]
	}
</script>

<style lang="less">
	/*	//头部*/
	
	@kong: #f0f0f0;
	@headerHeight: 0.99rem;
	@footerHeight: 0.77rem;
	@priceColor: #e6121d;
	/*//头部*/
	
	header {
		position: fixed;
		z-index: 100;
		top: 0;
		height: 0.99rem;
		width: 100%;
		background: #f84558;
		display: flex;
		padding: 0.18rem 0 0.17rem;
		box-sizing: border-box;
		/* //  头部左边*/
		.head-left {
			width: 1.05rem;
			a {
				color: #FFFFFF;
				p {
					text-align: center;
					font: 0.24rem e("/") 0.64rem "microsoft yahei";
				}
			}
		}
		/*  //  头部中间*/
		.head-center {
			flex: 1;
			background: #FFFFFF;
			border-radius: 0.04rem;
			.serach {
				display: flex;
				height: 100%;
				span {
					width: 0.7rem;
					text-align: center;
					font: 0.32rem e("/") 0.64rem "microsoft yahei";
				}
				input {
					flex: 1;
					border: none;
					outline: none;
					-webkit-appearance: none;
					-moz-appearance: none;
					-o-appearance: none;
					appearance: none;
					padding: 0;
					font: 0.26rem e("/") 0.64rem "microsoft yahei";
				}
			}
		}
		/*  //  头部右边*/
		.head-right {
			width: 0.99rem;
			.saoyisao {
				text-align: center;
				font: 0.24rem e("/") 0.64rem "microsoft yahei";
				a {
					color: #FFFFFF;
				}
			}
		}
	}
</style>