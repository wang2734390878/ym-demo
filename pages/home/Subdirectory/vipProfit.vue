<template>
	<view class="--status-bar-height ">
		<view class="vipProfit">
			<view class="head">
				<image @click="backHome" src="../../../static/组 723 (2).png" mode="widthFix"
					style="width: 56rpx;vertical-align: middle;margin-right: 192rpx;"></image>
				<text style="vertical-align: middle;">会员收益</text>
			</view>
		</view>
		<view class="down">
			<view class="title">
				<text>会员收益形式</text>
			</view>
			<view class="cardBox">
				<view class="cardItem">
					<image class="cardRight" src="../../../static/组 814.png" mode="widthFix" style="width: 52rpx;">
					</image>
					<text class="cardText">直推8%</text>
					<image class="cardLeft" src="../../../static/组 817.png" mode="widthFix" style="width: 32rpx;">
					</image>
				</view>
				<view class="cardItem">
					<image class="cardRight" src="../../../static/组 815.png" mode="widthFix" style="width: 52rpx;">
					</image>
					<text class="cardText">见推10%</text>
					<image class="cardLeft" src="../../../static/组 817.png" mode="widthFix" style="width: 32rpx;">
					</image>
				</view>
				<view class="cardItem">
					<image class="cardRight" src="../../../static/组 816.png" mode="widthFix" style="width: 52rpx;">
					</image>
					<text class="cardText">领导奖1%-15%</text>
					<image class="cardLeft" src="../../../static/组 817.png" mode="widthFix" style="width: 32rpx;">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			backHome() {
				uni.navigateBack({
						url: '/pages/home/index',
				})
				console.log('我跳转了')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vipProfit {
		background-size: 100% 100%;
		background: url('../../../static/画板 2.png')no-repeat;
		height: 740rpx;

		.head {
			padding: 60rpx 40rpx;
			color: #FFFFFF;
			font-size: 44rpx;
			font-family: 'BOLD';

		}
	}

	.down {
		width: 100%;
		border-radius: 32rpx 32rpx 0 0;
		height: 904rpx;
		background-color: #FFFFFF;
		position: relative;
		padding: 0 40rpx;
		margin-top: -30rpx;
		box-sizing: border-box;

		.title {
			font-size: 36rpx;
			font-family: 'BOLD';
			font-weight: 800;
			position: absolute;
			top: 80rpx;
		}

		.cardBox {
			position: absolute;
			top: 91px;
			width: 668rpx;

			.cardItem {
				position: relative;
				margin-bottom: 32rpx;
				padding: 0 40rpx;
				height: 132rpx;
				display: flex;
				align-items: center;
				box-shadow: 0rpx 4rpx 16rpx 0rpx #30313324;
				border-radius: 16rpx;

				.cardRight {
					margin-right: 32rpx;
					vertical-align: middle;
				}

				.cardText {
					vertical-align: middle;
				}

				.cardLeft {
					vertical-align: middle;
					position: absolute;
					right: 40rpx;
				}
			}
		}

	}


	@font-face {
		font-family: 'BOLD';
		src: url('~@/static/PINGFANG BOLD.TTF')
	}
</style>
