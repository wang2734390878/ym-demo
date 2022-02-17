<template>
	<view class="ranking">
		<view class="top">
	 <u-tabs class="tabs" :list="list1" lineColor="#5F67EC" :inactiveStyle="{color:'#999999'}" lineHeight="4px" lineWidth="60px"></u-tabs>
		</view>

		<view class="bgc">
		<image src="../../static/组 678.png" mode="widthFix" style="width: 100%;"></image>	
		</view>
		</view>
	</view>
	</view>
	
	</view>
	</view>
</template>

<script>
	export default {
		name: 'MyYimiaoDemoIndex',

		data() {
			return {
				list1: [{
						name: '会员榜',
					}, {
						name: '团队榜',
					}, 
					]
				};
			},

			mounted() {

				},

				methods: {

				},
		};
</script>

<style lang="scss" scoped>
.ranking{
	.top{
		margin: 32rpx 40rpx;
		/deep/ .u-tabs__wrapper__nav__item__text[data-v-3b2b1a80]{
			font-size: 40rpx;
		}
	.bgc{
		}
	}
}
</style>
