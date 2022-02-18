<template>
	<view class="ranking">
		<view class="top">
			<u-tabs class="tabs" :list="list1" lineColor="#5F67EC" :inactiveStyle="{color:'#999999'}" lineHeight="4px"
				lineWidth="60px"></u-tabs>
		</view>

		<view class="bgc" >
			<view class="headBox1" >
			<hexagon  src="../../static/组 675.png" mode="aspectFill" size="180rpx"borderWidth="0"></hexagon>
			<text>ID:21312321</text>
			</view><view class="headBox2" >
			<hexagon src="../../static/组 675.png" mode="aspectFill" size="200rpx"borderWidth="0"></hexagon>
			<text>ID:21312321</text>
			</view><view class="headBox3" >
			<hexagon src="../../static/组 675.png" mode="aspectFill" size="180rpx"borderWidth="0"></hexagon>
			<text>ID:21312321</text>
			</view>
			
	      	<!-- 柱状图 -->
			<view style="position: absolute;bottom: 0;right: 0;left: 0;">
				<view class="histogram ">
					<image class="histogramPic" src="../../static/组 670.png" mode="widthFix"></image>
					<image class="histogramPic" src="../../static/组 671.png" mode="widthFix"></image>
					<image class="histogramPic" src="../../static/组 672.png" mode="widthFix"></image>
				</view>
				<view class="histogramtext">
					<text>70000</text>
					<text>100000</text>
					<text>50000</text>
				</view>
			</view>
		</view>
		  
	</view>
</template>

<script>
	import hexagon from '@/components/glory-hexagon/hexagon.vue';

	export default {
		components: {
			hexagon
		},
		data() {
			return {
				list1: [{
					name: '会员榜',
				}, {
					name: '团队榜',
				}, ],
				headList:[
					{
					url:'../../static/组 675.png',
					id:"34234"
				},	{
					url:'../../static/组 673.png',
					id:"12323123"
				},	{
					url:'../../static/组 674.png',
					id:"86566453"
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
	.ranking {
		.top {
			margin: 32rpx 40rpx;

			/deep/ .u-tabs__wrapper__nav__item__text[data-v-3b2b1a80] {
				font-size: 40rpx;
			}

		}
			.bgc {
				
				padding: 0 40rpx;
				background: url('/static/组%20678.png') right bottom no-repeat,;
				background-size:100%;
				height: 630rpx;
	             position: relative;
				 color: #FFFFFF;
				.headBox1{
				  position: absolute;
				  top:160rpx;
				  left: 34rpx;
				}
				.headBox2{
					position: absolute;
					top:73rpx;
					right: 290rpx;
				}
				.headBox3{
				position: absolute;
				top:160rpx;
				right: 38rpx;
				}
			}
	    .histogram{
			position: absolute;
			bottom: -10rpx;
			.histogramPic{
				display:inline-block;
				width: 222rpx;	
		}
	}      
	  .histogramtext{
		  position: absolute;
		  z-index: 99;
		  left: 0;
		  right: 0;
		  top: 0;
		  padding: 40rpx;
		  display: flex;
		  justify-content: space-around;
		  color: #000;
		  font-size: 36rpx;
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
