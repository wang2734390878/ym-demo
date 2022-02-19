<template>
	<view class="--status-bar-height">
		<image src="../../static/组 685.png" style="width: 48rpx;margin: 120rpx 0 40rpx;" mode="widthFix"></image>
		<view class="top" v-for="item in info" :key="item.index">
			<view class="clearfix">
				<view class="topL">
					<text style="font-size: 32rpx; margin-right:30rpx;">{{item.name}}</text>
					<text style="font-size: 14px;color: #999999;">邀请码:{{item.code}}</text>
					<view class="vipBox">
						<image src="../../static/组 720.png" mode="widthFix" style="width: 192rpx;height: 52rpx;">
						</image>
						<text class="vipGrade">{{item.grade}}</text>
					</view>
				</view>
				<view class="topR ">
					<u-avatar :src="item.src" size="66px"></u-avatar>
				</view>
			</view>
			<view class="topMiddle">
				<u-grid col="3">
					<u-grid-item v-for="(teamItem,teamIndex) in team" :key="teamIndex">
						<text>{{teamItem.title}}</text>
						<text class="grid-text">{{teamItem.num}}</text>
					</u-grid-item>
				</u-grid>
			</view>
			<view class="vipCard">
				<view class="cardL">
					<image src="../../static/组 721.png" mode="widthFix"
						style="width: 84rpx; height: 48rpx;margin-right: 8rpx;"></image>
					<text style="font-size: 28rpx; color: #FFFFFF;">会员卡</text>
				</view>
				<u-button class="btn" type="primary" shape="circle" text="开通vip"></u-button>
			</view>
			<view class="fund">
				<view class="fundCard">
					<text style="font-size: 32rpx;">我的基金</text>
					<u-grid col="3" class="fundGrid">
						<u-grid-item v-for="(item,index) in fundList">
							<image class="fundPic" :src="item.src" mode="widthFix"></image>
							<text>{{item.text}}</text>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
			<view class="service">
				<view class="serviceCard">
					<text style="font-size: 32rpx;">其他服务</text>
					<u-grid col="3" class="serviceGrid">
					<u-grid-item v-for="(item,index) in serviceList">
						<image class="servicePic" :src="item.src" mode="widthFix"></image>
						<text>{{item.text}}</text>
					</u-grid-item>
					</u-grid>
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
				info: [{
					name: 'A 暴富女士',
					code: '12312',
					grade: '钻石vip',
					src: "../../static/组 675.png"
				}, ], //用户信息
				team: [{
					title: "团队收益",
					num: 1000
				}, {
					title: "直推任务",
					num: 2
				}, {
					title: "团队人数",
					num: 6
				}, ],
				fundList: [{
					src: "../../static/组 764.png",
					text: '进行中'
				}, {
					src: "../../static/组 765.png",
					text: '审核中'
				}, {
					src: "../../static/组 766.png",
					text: '已审核'
				}, ],
				serviceList: [{
					src: "../../static/组 705.png",
					text: '零钱提现'
				}, {
					src: "../../static/组 705.png",
					text: '充值服务'
				}, {
					src: "../../static/组 705.png",
					text: '消息中心'
				}, {
					src: "../../static/组 705.png",
					text: '个人信息'
				}, {
					src: "../../static/组 705.png",
					text: '签到抽奖'
				}, {
					src: "../../static/组 705.png",
					text: '我的账单'
				}, {
					src: "../../static/组 705.png",
					text: '我的团队'
				}, {
					src: "../../static/组 705.png",
					text: '修改密码'
				}, {
					src: "../../static/组 705.png",
					text: '联系上级'
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
	.my {
		margin: 40rpx;

		.top {
			.topL {
				float: left;
				width: 400rpx;
				height: 132rpx;
			}

			.vipBox {
				position: relative;
				margin-top: 10rpx;

				.vipGrade {
					position: absolute;
					top: 14rpx;
					left: 76rpx;
					color: #FFFFFF;
				}
			}

			.topR {
				float: right;
			}
		}

		.topMiddle {
			margin: 40rpx 0;
			color: #999999;
			font-size: 24rpx;

			.grid-text {
				color: #333333;
				font-size: 32rpx;
				font-weight: 800;
			}
		}

		.vipCard {
			height: 116rpx;
			background: url("../../static/蒙版组 12.png") no-repeat;
			margin: 32rpx 40rpx;
			;

			.cardL {
				margin: 32rpx 40rpx;
				float: left;
			}

			.btn {
				margin: 32rpx 40rpx;
				width: 168rpx;
				height: 56rpx;
				background-color: #FFFFFF;
				border: none;
				float: right;
				color: #333333;
			}
		}

		.fund {
			height: 174rpx;
			background-color: #FFFFFF;
			padding: 40rpx;

			.fundGrid {
				padding: 40rpx;

				.fundPic {
					width: 56rpx;
				}
			}
		}

		.service {
			margin-top: 48rpx;

			.serviceCard {
				padding: 40rpx;
				height: 388rpx;
				background-color: #FFFFFF;
				.servicePic{
					width: 48rpx;
					margin-top: 30rpx;
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
	}
</style>
