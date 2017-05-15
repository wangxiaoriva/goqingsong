<template>
	<!--主体内容-->
	<div class="wode-main">
		<!--全部订单-->
		<wodeAllorder></wodeAllorder>
		<!--优惠券-->
		<yhqList v-bind:list-one="listOne.iconData"></yhqList>
		<!--邀请有礼-->
		<yhqList v-bind:list-one="listTwo.iconData"></yhqList>
		<!--关注微信号-->
		<focusWx></focusWx>
		<!--优惠券-->
	</div>
</template>

<script>
	import wodeAllorder from "./wode-allorder.vue";
	import yhqList from "./yhq-list.vue";
	import focusWx from "./focus-wx.vue";
	export default {
		data: function() {
			return {
				listOne: {
					iconData: [
						{ 
							className: "icon-youhuiquan4",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "优惠券",
							miaoshuInfo : "兑换优惠券"
						},
						{ 
							className: "icon-bangding",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "手机绑定",
							miaoshuInfo : "15072872513"
						},
						{ 
							className: "icon-shouhuodizhi",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "收货地址",
							miaoshuInfo : " "
						},
						{ 
							className: "icon-shoucang6",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "我的收藏（0）",
							miaoshuInfo : " "
						}
					]
				},
				listTwo: {
					iconData: [
						{ 
							className: "icon-yaoqingyouli1",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "邀请有礼",
							miaoshuInfo : "立减100"
						},
						{ 
							className: "icon-fuwushangkefu",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "客服服务",
							miaoshuInfo : ""
						},
						{ 
							className: "icon-fenxiang3",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "分享APP",
							miaoshuInfo : " "
						},
						{ 
							className: "icon-shezhi5",
							gengdDuo: "icon-iconfontxiangyou",
							miaoShu : "设置",
							miaoshuInfo : " "
						}
					]
				}
			}
		},
		components: {
			wodeAllorder,
			yhqList,
			focusWx
		}
	}
</script>

<style lang="less">
	@headerHeight: 0.99rem;
	@footerHeight: 0.77rem;
	@priceColor: #e6121d;
	/*//我的--主体内容*/
	
	.wode-main {
		/*//  全部订单*/
		padding: 0 0 @footerHeight;
		width: 100%;
		
		/* //  邀请有礼*/
	}
</style>