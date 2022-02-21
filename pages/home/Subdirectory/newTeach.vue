<template>
	<view class="--status-bar-height newTeach">
		<view class="title">
			<image @click="backHome" src="../../../static/组 723.png" mode="widthFix" style="width: 56rpx;vertical-align: middle;"></image>
			<text style="vertical-align: middle;margin-left: 192rpx;font-weight: 800;">新手教学</text>
		</view>
		<view class="register">
			<text class="BOLD" style="font-size: 36rpx;">注册管理</text>
			<view class="administration">
				<image src="../../../static/组 896.png" mode="widthFix" style="width: 40rpx;vertical-align: middle;margin-right: 20rpx;"></image>
				<text style="vertical-align: middle;">免费注册，注册需要填写邀请人ID</text>
			</view>
			<view class="administration">
				<image src="../../../static/组 897.png" mode="widthFix" style="width: 40rpx;vertical-align: middle;margin-right: 20rpx;"></image>
				<text style="vertical-align: middle;">注册完成后可以直接做任务,没购买基金的会员可以获得任 务1、2、3、4奖励（注：没购买基金的会员将无法获得直 推、见推、领导奖</text>
			</view>
		</view>
		
	<view class="welfare">
		<text class="BOLD">福利 (天天任务)</text>
		<view class="welItem1">
			<text style="margin:24rpx 0;display: block;">福利一</text>
			 <view style="color: #999999;margin-bottom: 24rpx;" class="top">
			 	<text style="margin-right: 40rpx;">任务</text>
			 	<text style="margin-right: 400rpx;">要求</text>
			 	<text >荣誉分</text>
			 </view>
			 <view class="bottom" v-for="(item,index) in task" :key="index">
			 	<image style="width: 34rpx;float: left;margin-right: 66rpx;" :src="item.icon" mode="widthFix"></image>
				<text style="width: 336rpx;">{{item.text}}</text>
				<text style="float: right;">{{item.branch}}</text>
			 </view>
		</view>
		<view class="welItem2">
			<text style="margin:24rpx 0;display: block;font-size: 30rpx;">福利二</text>
			<text class="item">完成任务1、2、3获得48$(480荣誉分）</text>
		</view><view class="welItem3">
			<text style="margin:24rpx 0;display: block;font-size: 30rpx;">福利三</text>
			<text class="item">完成任务1、2、3、4获得198$(19800荣誉分）</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				task:[
					{icon:'../../../static/组 899.png',
					 text:'每日签到',
					 branch:"1$(100荣誉分）"
					},{icon:'../../../static/组 900.png',
					 text:'直推一位任意vip',
					 branch:"10$(1000荣誉分）"
					},{icon:'../../../static/组 901.png',
					 text:'帮助您直推的伙伴推一位新会员',
					 branch:"28$(2800荣誉分）"
					},{icon:'../../../static/组 902.png',
					 text:'连续三天直推新增会员',
					 branch:"88$(8800荣誉分）"
					},
				]
			}
		},
		methods:{
		backHome(){
			uni.navigateBack({
				url:'/pages/home/index'
			})
		}
			
		}
	}
</script>

<style lang="scss" scoped>
	*{
		box-sizing: border-box;
	}
	.newTeach{
	 padding: 0 40rpx;	
	.title{
		font-family: 'BOLD';
		font-size: 44rpx;
		margin: 60rpx 0 42rpx;
		
	}
	.administration{
		margin-top: 16rpx;
		font-size: 24rpx;
		color: #333333;
	}
	.welfare{
		margin-top: 48rpx;
		.welItem1{
			margin-top: 24rpx;
			font-size: 30rpx;
			.bottom{
				font-size: 24rpx;
				margin-top: 22rpx;
			}
		}
		.welItem2,.welItem3{
			.item{
				font-size: 24rpx;
				color: #333333;
			}
		}
	}
	}
	.BOLD{
		font-weight: 800;
		font-family: 'BOLD';
		font-size: 36rpx;
	}
</style>
