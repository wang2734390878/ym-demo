<template>
<view class="--status-bar-height">
	<view class="vip">
 <image
   src="../../static/组 629.png"
   mode="aspectFit"
   style="width: 100%"
 />
  <view class="claim" >我要认领</view>
<view class="list">
	<radio-group>
	<label class="radio" v-for="item in vipList" :key="item.value" >
		<view class="li">
		<radio  class="li" color="#F1B52C" style="transform:scale(0.7)"/><text>{{item.name}}</text>
		<view class="go">Go</view>
		</view>
	</label>
	</radio-group>
</view>
</view>
	</view>
</template>

<script>
export default {
    name: 'MyYimiaoDemoIndex',

    data() {
        return {
            vipList:[
				{value:1,name:'福利领取'},
				{value:2,name:'vip会员'},
				{value:3,name:'黄金vip'},
				{value:4,name:'铂金vip'},
				{value:5,name:'钻石vip'},
				{value:6,name:'王者vip'},
				{value:7,name:'至尊vip'},
				{value:8,name:'凤凰vip'},
				{value:9,name:'天启vip'},
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
.vip{
	 font-size: 36rpx;
	 color: #333;
	.vipPic{
		height: 340rpx;
		width: 340rpx;
		margin-bottom: 24rpx;
	}
	.claim{
		width: 100%;
		font-size: 40rpx;
		font-weight: 600;
		margin: 12px 0 88rpx 0;
		text-align: center;
	}
   .list{
     padding-left: 40rpx;
	 .li{
		 margin-bottom: 40rpx;
		 line-height: 48rpx;
		 .go{
			 display: inline-block;
			 position: absolute;
			 right: 40rpx;
			 width: 116rpx;
			 height: 48rpx;
			 background-color:#d2d2d2;
			 border-radius: 40rpx;
			 text-align: center;
			 color: #FFFFFF;
		 }
		 .go:active{
			 background-color: #5f67ec;
		 }
   }
 }
}
</style>