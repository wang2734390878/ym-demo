<template>
	<view class="--status-bar-height">
		<view class="top">
			<u-tabs class="tabs" :list="list1" lineColor="#5F67EC" :inactiveStyle="{color:'#999999'}" lineHeight="4px"
				lineWidth="60px"></u-tabs>
		</view>
		<view class="bgc">
			<view class="bigbox">
				<view class="headBox1">
					<view class="head1">
						<view class="iconBox1">
						<hexagon src="../../static/组 675.png" mode="aspectFill" size="162rpx" borderWidth="0"></hexagon>
						<image class="logo" style="width: 40rpx;" src="../../static/组 850.png" mode="widthFix"></image>
						<text>ID:21312</text>
						</view>
					</view>
					<view class="head2">
						<view class="iconBox2">
						<hexagon src="../../static/组 675.png" mode="aspectFill" size="194rpx" borderWidth="0"></hexagon>
						<image class="logo2" style="width: 60rpx;" src="../../static/组 849.png" mode="widthFix"></image>
						<text>ID:21315</text>
						</view>
					</view>
					<view class="head3">
						<view class="iconBox3">
						<hexagon src="../../static/组 675.png" mode="aspectFill" size="162rpx" borderWidth="0"></hexagon>
						<image class="logo" style="width: 40rpx;" src="../../static/组 848.png" mode="widthFix"></image>
						<text>ID:21314</text>
						</view>
					</view>
				</view>
				<view>
					<view class="histogram">
						<image class="histogramPic" src="../../static/组 839.png" mode="widthFix"></image>
						<view class="histogramtext">
							<text class="one">70000</text>
							<text class="two">100000</text>
							<text class="three">60000</text>
						</view>
					</view>
				</view>
			</view>
		</view>
        <ranklist :headList="headList"></ranklist>
		
	</view>
</template>

<script>
	import hexagon from '@/components/glory-hexagon/hexagon.vue';
    import ranklist from './list.vue'
	export default {
		components: {
			hexagon,ranklist
		},
		data() {
			return {
				list1: [{
					name: '会员榜',
				}, {
					name: '团队榜',
				}, ],
				headList: [{
					url: '../../static/组 673.png',
					id: '12323123',
					num:"100000"
				}, {
					url: '../../static/组 675.png',
					id: '34234',
					num:"70000"
				}, {
					url: '../../static/组 674.png',
					id: '86566453',
					num:"60000"
				}, ]
			};
		},

		mounted() {

		},

		methods: {

		},
	};
</script>

<style lang="scss" scoped>
	.ranking {
		.top {
			/deep/ .u-tabs__wrapper__nav__item__text[data-v-3b2b1a80] {
				font-size: 40rpx;
			}
		}

		.bgc {
			padding: 0 36rpx;
			background: url('/static/组%20678.png') right bottom no-repeat, ;
			background-size: 100%;
			height: 630rpx;
			color: #FFFFFF;

			.bigbox {
				position: relative;
				height: 100%;
				.headBox1 {
					height: 57.5%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28rpx;
					.iconBox2{
					position: relative;
					  .logo2{
						  position: absolute;
						  top: 150rpx;
						  left: 48rpx;
					  }
					  text{
					  	position: absolute;
					  	top: 218rpx;
					  	
					  }
					}
					.iconBox1,.iconBox3{
						position: relative;
						top: 50rpx;
					 .logo{
						position: absolute;
						top: 130rpx;
						left: 46rpx;
					 }
					 text{
					 	position: absolute;
					 	top: 180rpx;
					 }
					}
					
				}
			}

			.histogram {
				position: relative;
				.histogramPic {
					width: 100%;
					display: flex;
				}

				.histogramtext {
					color: #FFFFFF;
					display: flex;
					justify-content: space-around;
                     font-size: 36rpx;
					.one {
						position: absolute;
						top: 114rpx;
						left: 60rpx;
					}

					.two {
						position: absolute;
						top: 44rpx;
						left: 282rpx;
					}

					.three {
						position: absolute;
						top: 184rpx;
						right: 64rpx;
					}
				}
			}
		}
	}
	
	
	.clearfix::after {
		content: "";
		visibility: hidden;
		height: 0;
		display: block;
		clear: both;
	}

	.clearfix {
		*zoom: 1;
	}
</style>
