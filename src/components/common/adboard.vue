<template>
	<div>
		<div class="ad-board">
			<ul>
				<li  v-for="(item , index) in homeData.themeList" :key="index">
					<a href="javascript:;">
						<img v-bind:src="item.img" />
					</a>
				</li>
			</ul>
		</div>
		<div class="kong-se-three"></div>
	</div>
</template>

<script>
	export default {
		props: ["homeData"]
	}
</script>

<style lang="less">
	@kong: #f0f0f0;
	@headerHeight: 0.99rem;
	@footerHeight: 0.77rem;
	@priceColor: #e6121d;
	.ad-board {
		width: 100%;
		ul {
			li {
				padding-top: 0.16rem;
				height: 3.41rem;
				a {
					img {
						display: block;
						width: 100%;
						height: auto;
					}
				}
			}
		}
	}
	.kong-se-three {
        height: 0.15rem;
        width: 100%;
        background: @kong;
    }
</style>