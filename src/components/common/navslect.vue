<template>
	<div class="nav-select">
		<!--wifi行程-->
		<ul>
			<li v-for="(item , index) in selectList" :key="index">
				<a href="javascript:;">
					<img v-bind:src="item.imgUrl" />
				</a>
			</li>
		</ul>
		<!--正品-->
		<div class="kong-se-one"></div>
		<div class="zhengpin">
			<img src="http://img.yhiker.com/uploads/img/20170330100526476.jpg" />
		</div>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				selectList : [
					{
						imgUrl : "http://img.yhiker.com/uploads/img/20160905102653471.png"
					},
					{
						imgUrl : "http://img.yhiker.com/uploads/img/20160905102742407.png"
					},
					{
						imgUrl : "http://img.yhiker.com/uploads/img/20160905102752263.png"
					},
				]
			}
		}
	}
</script>

<style lang="less">
	/*    //  选择区域*/
	
	.nav-select {
		width: 100%;
		/*        //      wifi行程*/
		ul {
			background: #FFFFFF;
			height: 1.13rem;
			margin-bottom: 0.19rem;
			&:after {
				display: block;
				content: "";
				clear: both;
			}
			li {
				width: 33.33%;
				float: left;
				padding: 0.18rem 0;
				a {
					img {
						width: 100%;
						height: auto;
						display: block;
					}
				}
			}
		}
	}
	
	/*    //  正品*/
	
	.zhengpin {
		height: 0.74rem;
		border-top: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
		background: #FFFFFF;
		margin-bottom: 0.17rem;
		img {
			width: 100%;
			height: auto;
			display: block;
		}
	}
	
</style>