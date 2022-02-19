<template>
	<view class="list">
		<u-list @scrolltolower="scrolltolower">
			
			<u-list-item v-for="(item, index) in headList" :key="index" width="90%">
				 <view class="order">
				 	{{index+4}}
				 </view>
				<u-cell :title="item.id" :value="item.num" >
					<u-avatar slot="icon" shape="circle" size="80rpx" :src="item.url">
						</u-avatar>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		props:{
			headList:{
				type:Array,
				default:()=>([])
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		padding: 40rpx;
		.u-list-item{
			padding-left: 40rpx;
			width: 90%;
			color: #999999;
			height: 158rpx;
			position: relative;
			.order{
				width: 4rpx;
				height: 100%;
				position: absolute;
				top: 36rpx;
				left: 0;
			}
			/deep/.u-cell__value{
				font-size: 36rpx;
				color: #5F67EC;
			}
		}
	}
 </style>
