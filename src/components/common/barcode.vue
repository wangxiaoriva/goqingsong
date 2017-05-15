<template>
	<div class="barcode-page">
		<div class="arrowheaderbar">
			<i class="iconfont icon-msnui-menu-left baiconfont" @click="goBackPage"></i>
			<div class="bah3">扫一扫</div>
		</div>
		<div class="bcid" id="bcid"></div>
		<span class="light-up" @click="closeBarcode">开灯</span>
	</div>
</template>

<script>

export default {
	data() {
		return {			
			scan : null,
			isOpen : false
		}
	},
	mounted() {
		var that = this;
		document.addEventListener( "plusready", onPlusReady, false );
		// 扩展API加载完毕，现在可以正常调用扩展API
		function onPlusReady() {
			var e = document.getElementById("scan");
			e.removeAttribute( "disabled" );
		}
//		var scan = null;
		function onmarked( type, result ) {
			var text = '未知: ';
			switch(type){
				case plus.barcode.QR:
				text = 'QR: ';
				break;
				case plus.barcode.EAN13:
				text = 'EAN13: ';
				break;
				case plus.barcode.EAN8:
				text = 'EAN8: ';
				break;
			}
			alert( text+result );
		}
		setTimeout(function(){
			that.scan = new plus.barcode.Barcode('bcid');
			that.scan.onmarked = onmarked;
			that.scan.start();
		},1000)
	},
	methods : {
		closeBarcode(){
			this.isOpen = !this.isOpen;
			this.scan.setFlash(this.isOpen);
		},
		goBackPage() {
			this.scan.cancel();
			this.scan.close();
			this.$router.go(-1);
		}
	}
}

</script>

<style lang="less">
.barcode-page {
	overflow: hidden;
	.bcid {
		margin-top: 0.95rem;
		width: 100%;
		height: 6.4rem;
	}
	.light-up {
		display: block;
		height: 0.7rem;
		width: 1.2rem;
		border-radius: 0.6rem;
		background-color: #999;
		text-align: center;
		line-height: 0.7rem;
		font-size: 0.3rem;
		color: #fff;
		margin: 0.2rem auto 0;
	}
}	
.baiconfont{
		float: left;
		width: 1rem;
		padding-top:0.3rem;
	}
	.bah3{
		display: inline-block;
		width: 5rem;
		float: left;
		text-align: center;
		padding-top:0.3rem;
	}
</style>