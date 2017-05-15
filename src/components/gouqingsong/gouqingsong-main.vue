<template>
	<!--主体内容-->
	<div class="gouqingsong-main" v-if="num" >
		<!--分类热搜-->
		<fenleiresou v-bind:feilei="gqsData.goodsCategoryList"></fenleiresou>
		<!--分类热搜2-品牌精选-->
		<fenleiresou v-bind:feilei="gqsData.goodsBrandList"></fenleiresou>
		<!--正品-->
		<zhengpin></zhengpin>
		<!--广告1-牛轧糖-->
		<adone v-bind:ad-data="adData[0]"></adone>
		<!--wifi电话卡-->
		<wifiselect v-bind:theme="gqsData"></wifiselect>
		<!--广告2-伴手礼和茶-->
		<!--活动限量版-->
		<adproduct v-bind:adp-data="adpData[0]" v-bind:adprouct-data="num[0]"></adproduct>
		<!--广告3-宝岛必败美妆攻略-->
		<adone style="margin-bottom: 0.16rem;" v-bind:ad-data="adData[1]"></adone>
		<!--广告-产品类表-->
		<adproduct v-bind:adp-data="adpData[1]" v-bind:adprouct-data="num[2]"></adproduct>
		<!--广告-产品类表-->
		<adproduct v-bind:adp-data="adpData[2]"v-bind:adprouct-data="num[3]"></adproduct>
		<!--广告-产品类表-->
	</div>
</template>

<script>
	import fenleiresou from "./gqs-fenleiresou.vue";
	import zhengpin from "../common/zhengpin.vue";
	import adone from "../common/adone.vue";
	import wifiselect from "./gqs-wifiselect.vue";
	import adproduct from "./ad-product.vue";
	
	export default {
		props : ["gqsData"],
		data : function(){
			return {
				adData : [
					{tupian :"http://img.yhiker.com//uploads/img/20170405103314914.jpg"},
					{tupian :"http://img.yhiker.com//uploads/img/20170414094617212.jpg"}
				],
				adpData : [
					{adptupian:"http://img.yhiker.com//uploads/img/20170310175420624.jpg"},
					{adptupian:"http://img.yhiker.com//uploads/img/20160815154009248.jpg"},
					{adptupian:"http://img.yhiker.com//uploads/img/20170118172531875.jpg"}
				]
			}
		},
		computed :{
			num : function(){
				return this.gqsData.activityList
			}
		},
		components : {
			fenleiresou,
			zhengpin,
			adone,
			wifiselect,
			adproduct
		}
	}
</script>

<style lang="less">
	@headerHeight: 0.99rem;
	@footerHeight: 0.77rem;
	@priceColor: #e6121d;
	/*//购轻松主体内容*/
	
	.gouqingsong-main {
		padding: @headerHeight 0 @footerHeight;
		width: 100%;
		/*//  分类热搜*/
		/*//  分类热搜2-品牌精选
		//正品*/
		/*//  广告1-轻松台湾行*/
		/*//  广告3-宝岛必败美妆攻略*/
		.ad-three {
			height: 2.57rem;
			width: 100%;
			margin-bottom: 0.16rem;
			img {
				width: 100%;
				height: auto;
				display: block;
			}
		}
		/*//广告2-伴手礼和茶*/
	}
</style>