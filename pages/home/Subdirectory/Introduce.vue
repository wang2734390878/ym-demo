<template>
	<view class="--status-bar-height">
		<view class="Introduce" >
			<image src="../../../static/组 723.png" mode="widthFix" style="width: 56rpx; vertical-align:middle;"
				@click="backHome"></image>
			<text
				style="font-size: 44rpx; font-family: BOLD;font-weight: 800; margin-left: 214rpx; vertical-align:middle">公司介绍</text>
		</view>
		<view class="name">
			<image src="../../../static/20201124115009 (1).png" mode="widthFix"
				style="width: 144rpx;vertical-align: middle;"></image>
			<text style="vertical-align: middle;font-size: 32rpx;">科兴控股生物技术有限公司</text>
		</view>
		<view class="list">
			<uni-list v-for="(item,index) in introduceList" :key="item.id">
				<uni-list-item class="listItem" :title="item.title" showArrow   :to="item.url"></uni-list-item>
			</uni-list>
			<br>
			<uni-list v-for="(item,index) in introduceList2" :key="item.id" >
				<uni-list-item class="listItem" :title="item.title" showArrow></uni-list-item>
			</uni-list><br>
			<uni-list v-for="(item,index) in introduceList3" :key="item.id">
				<uni-list-item class="listItem" :title="item.title" showArrow></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				introduceList: [{
					title: '公司介绍',
					id: 1,
					url:'/page/home/innerPage'
					
				}, {
					title: '品牌介绍',
					id: 2,
					url:'/page/home//mark'
				}, {
					title: '公司动态',
					id: 3,
					url:'/page/home//innerPage'
				}, {
					title: '企业历程',
					id: 4,
					url:'/page/home//kurs'
				}],
				introduceList2: [{
					title: '基金介绍',
					id: 5,
					url:'/page/home//fonds'
				}, {
					title: '会员解答',
					id: 6,
					url:'/page/home//vipAntwort'
				}],
				introduceList3: [{
					title: '基金购买要求及条件',
					id: 7,
					url:'/page/home/kauffonds'
				}, {
					title: '合作人奖励机制及条件',
					id: 8,
					url:'/page/home/mitarbeiter'
				}, {
					title: '股东奖励机制及条件',
					id: 9,
					url:'/page/home/shareholder'
				}],
			}
		},

		methods: {
			backHome() {
				uni.navigateBack({
					delta:1
				})
			},
			toClick(url){
			  	uni.navigateTo({
			  		url:"url"
			  	})
			}
		}
	}
</script>

<style lang="scss">
	.Introduce {
		padding: 60rpx 40rpx;
	}

	.listItem {
		padding-left: 16rpx;
		font-size: 24rpx;
		color: #333333;
	}

	.name {
		height: 94rpx;
		line-height: 94rpx;
		padding-left: 40rpx;
		border-top: 2rpx solid #E8E8E8;
		border-bottom: 2rpx solid #E8E8E8;
	}

</style>
