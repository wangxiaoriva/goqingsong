<template>
	<div class="product-list">
		<ul>
			<li v-for="(item , index) in homeData.goodsHotList" :key="index">
				<a href="#product">
					<div class="product-img">
						<img v-bind:src="item.img" />
					</div>
					<div class="product-info">
						<p class="product-info-title">{{item.name}}</p>
						<p class="product-info-price">
							¥{{item.price}}.00
							<span></span>
						</p>
						<p class="product-info-getgoods">
							<span>{{item.deliveryMode}}</span>
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:["homeData"]
	}
</script>

<style lang="less">
	/*//  产品列表*/
	
    .product-list {
        width: 100%;
        padding:0 0 0.15rem 0;
        ul {
            li {
                margin-top: 0.15rem;
                height: 2.23rem;
                &:nth-child(4n+1){
                    background: #fff9f9;
                }
                &:nth-child(4n+2){
                    background: #f8fbf2;
                } 
                &:nth-child(4n+3){
                    background: #fffdff;
                }
                
                 &:nth-child(4n+4){
                    background: #fffbf8;
                }
                a {
                    color: #1e1c1f;
                    display: block;
                    &:after {
                        content: "";
                        display: block;
                        clear: both;
                    }
                    .product-img {
                        width: 2.2rem;
                        height: 100%;
                        float: left;
                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                        }
                    }
                    .product-info {
                        padding: 0.22rem 0.23rem 0.05rem 0.16rem;
                        float: left;
                        width: 3.8rem;
                        height: 100%;
                        .product-info-title {
                        	text-align: left;
                            font: 0.2rem e("/") 0.26rem "microsoft yahei";
                            padding-bottom: 0.54rem;
                        }
                        .product-info-price {
                        	text-align: left;
                            span {
                                width: 0.42rem;
                                height: 0.21rem;
                                display: inline-block;
                                background: url("../../../static/images/manjian.png") no-repeat center/cover;
                            }
                        }

                        .product-info-getgoods {
                            height: 0.42rem;
                            padding: 0.07rem 0 0.07rem 0;
                            color: #FFFFFF;
                            span{
                                display: block;
                                width: 1.3rem;
                                text-align: center;
                                font: 0.14rem e("/") 0.36rem "microsoft yahei";
                                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fa4e66+0,f85a69+50,fa4e66+100 */
                                background: #fa4e66;
                                /* Old browsers */
                                background: -moz-radial-gradient(center, ellipse cover, #fa4e66 0%, #f85a69 50%, #fa4e66 100%);
                                /* FF3.6-15 */
                                background: -webkit-radial-gradient(center, ellipse cover, #fa4e66 0%,#f85a69 50%,#fa4e66 100%);
                                /* Chrome10-25,Safari5.1-6 */
                                background: radial-gradient(ellipse at center, #fa4e66 0%,#f85a69 50%,#fa4e66 100%);
                                /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fa4e66', endColorstr='#fa4e66',GradientType=1 );
                                /* IE6-9 fallback on horizontal gradient */

                            }
                        }

                    }

                }
            }
        }
    }
</style>