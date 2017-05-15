<template>
	<div class="wifi-select">
		<!--wifi行程-->
		<ul v-if="theme.theme">
			<li v-for="(item , index) in theme.theme.themeCategoryList" :key="index">
				<a href="javascript:;">
					<img :src="item.img" />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props : ["theme"]
	}
</script>

<style lang="less">
	/*//  wifi电话卡*/
	.wifi-select {
		margin-bottom: 0.16rem;
		height: 1.35rem;
		width: 6.4rem;
		overflow-x: auto;
		background: #FFFFFF;
		ul {
			width: 2.56*6rem;
			li {
				width: 2.56rem;
				float: left;
				height: 1.35rem;
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
</style>