<template>
<view class="my">
  <image src="../../static/组 685.png" style="width: 48rpx;margin: 120rpx 0 40rpx;" mode="widthFix"></image>
  <view class="top" v-for="item in info" :key="item.index">
	<view class="topL" >
  	<text style="font-size: 32rpx; margin-right:30rpx;">{{item.name}}</text>
	<text style="font-size: 14px;color: #999999;">邀请码:{{item.code}}</text>
	<view class="vipBox">
	<image src="../../static/组 720.png" mode="widthFix" style="width: 192rpx;height: 52rpx;"></image>
		<text class="vipGrade">{{item.grade}}</text>
	</view>
	 </view>
	 <view class="topR">
	 	<u-avatar :src="item.src" size="66px"></u-avatar>
	 </view>
  </view>
</view>


</template>

<script>
export default {
    name: 'MyYimiaoDemoIndex',

    data() {
        return {
            info:[{
				name:'A 暴富女士',
				code:'12312',
				grade:'钻石vip',
				src:"./../static/组 675.png"
			},]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.my{
	margin: 40rpx;
	.top{
		.topL{
			float: left;
			width: 400rpx;
			height: 132rpx;
		}
		.vipBox{
			position: relative;
			margin-top: 10rpx;
			.vipGrade{
			 position: absolute;
              top: 14rpx;
			  left: 76rpx;
			  color: #FFFFFF;
			}
		}
	}
	.topR{
		float: right;
	}
}
</style>