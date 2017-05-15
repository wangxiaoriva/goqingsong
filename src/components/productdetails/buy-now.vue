<template>
	<div class="buy-now-body">
		<!--底部-->
		<div class="buy-now-footer">
			<!--购买数量-->
			<div class="buy-number">
				<!--信息-->
				<div class="buy-info">
					<span class="span1">购买数量</span>
					<span class="span2">库存：9</span>
				</div>
				<!--数量点击-->
				<div class="buy-count">
					<span class="reduce" @click="reduceFun">－</span>
					<input type="text" class="inputnum" placeholder="1" v-model="count" id="count"/>
					<span class="add" @click="addFun">＋</span>
				</div>
			</div>
			<!--总计-->
			<div class="total">
				<p>总计<span>¥{{totalComputed}}.00</span></p>
			</div>
			<!--按钮-->
			<div class="btn">
				<div class="cancel-btn" v-on:click="cancel">取消</div>
				<slot></slot>
				<!--<div class="confirm-btn">立即购买</div>-->
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				count: "1"
			}
		},
		methods: {
			addFun: function() {
				this.count++;
				if(this.count >= "9") {
					this.count = "9"
				}
			},
			reduceFun: function() {
				this.count--;
				if(this.count <= "1") {
					this.count = " 1"
				}
			},
			cancel: function() {
//				console.log(0)
				this.$emit("aaa",this.count)
			}
		},
		watch: {
			count: function() {
				var strnum = this.count.toString();
				if(strnum.length > 2) {
					this.count = strnum.charAt(0);
				}

			}
		},
		computed: {
			totalComputed: function() {
				return this.count * 239
			}
		}

	}
</script>

<style lang="less">
	.buy-now-body {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.buy-now-footer {
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		width: 100%;
		height: 2.64rem;
		padding: 0 0.16rem 0 0.16rem;
		box-sizing: border-box;
		/*购买数量*/
		.buy-number {
			height: 1.03rem;
			width: 100%;
			border-bottom: 2px solid #f1f1f2;
			box-sizing: border-box;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			/*信息*/
			.buy-info {
				text-align: left;
				width: 1.5rem;
				float: left;
				padding-top: 0.2rem;
				.span1 {
					font-size: 0.28rem;
					display: block;
					color: #000000;
				}
				.span2 {
					font-size: 0.18rem;
					color: #808080;
				}
			}
			/*数量点击*/
			.buy-count {
				float: right;
				padding-top: 0.2rem;
				height: 1.03rem;
				box-sizing: border-box;
				.reduce {
					width: 0.6rem;
					height: 0.55rem;
					display: inline-block;
					border: 1px solid #e4e4e4;
					float: left;
					text-align: center;
					font: 0.28rem e("/") 0.55rem "microsoft yahei";
				}
				.inputnum {
					width: 0.6rem;
					height: 0.55rem;
					display: inline-block;
					border: 1px solid #e4e4e4;
					float: left;
					text-align: center;
					color: #000000;
					outline: none;
					font: 0.26rem e("/") 0.55rem "microsoft yahei";
				}
				.add {
					width: 0.6rem;
					height: 0.55rem;
					display: inline-block;
					border: 1px solid #e4e4e4;
					float: left;
					font: 0.28rem e("/") 0.55rem "microsoft yahei";
				}
			}
		}
		/*总计*/
		.total {
			height: 0.67rem;
			p {
				text-align: left;
				font: 0.26rem e("/") 0.67rem "microsoft yahei";
				color: #000000;
				span {
					color: #ff2e38;
					margin-left: 0.25rem;
				}
			}
		}
		/*按钮*/
		.btn {
			height: 0.93rem;
			padding-top: 0.16rem;
			width: 100%;
			box-sizing: border-box;
			color: #FFFFFF;
			&:after {
				content: "";
				display: block;
				clear: both;
			}
			.cancel-btn {
				height: 0.62rem;
				background-color: #999999;
				text-align: center;
				width: 2.9rem;
				float: left;
				font: 0.28rem e("/") 0.62rem "microsoft yahei";
			}
			.confirm-btn {
				height: 0.62rem;
				width: 2.9rem;
				float: right;
				background-color: #fa4558;
				font: 0.28rem e("/") 0.62rem "microsoft yahei";
				a {
					color: #FFFFFF;
				}
			}
		}
	}
	/*加入购物车*/
	
	.insertshopcar {
		height: 0.85rem;
		width: 2.57rem;
		background: #000000;
		position: fixed;
		top: 35%;
		left: 30%;
		text-align: center;
		font: 0.2rem e("/") 0.85rem "microsoft yahei";
		color: #FFFFFF;
	}
</style>