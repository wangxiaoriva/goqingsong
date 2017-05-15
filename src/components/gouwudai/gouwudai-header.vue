<template>
	<!--头部-->
		<div class="gouwudai-header">
			<div class="head-left">
				<div class="address">
					<a href="javascript:;">
						<p>台湾<span class="iconfont icon-caret"></span></span>
						</p>
					</a>
				</div>
			</div>
			<div class="head-center">
				<div class="serach">
					购物袋
				</div>
			</div>
			<div class="head-right">
				<div class="saoyisao">
					<a href="javascript:;">
						<p class="iconfont">编辑</p>
					</a>
				</div>
			</div>
		</div>
</template>

<script>
</script>

<style lang="less">
	.gouwudai-header {
    height: 0.66rem;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    background:#fafafa ;
    display: flex;
    padding: 0.18rem 0 0.17rem;
    border-bottom: 2px solid #e8e6e5;
    box-sizing: border-box;
    /*//  头部左边*/
    .head-left {
        width: 1.05rem;
        a {
            color: #262626;
            p {
                text-align: center;
                font-size: 0.22rem;
            }
        }

    }
 /*   //  头部中间*/
    .head-center {
        flex: 1;
        font-size: 0.26rem;
        text-align: center;
    }
    /*//  头部右边*/
    .head-right {
        width: 0.99rem;
        .saoyisao {

            text-align: center;
            font-size: 0.22rem;
            a {
                color: #262626;
            }
        }
    }
}
</style>