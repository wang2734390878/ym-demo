<template>
  <view class="--status-bar-height home">
    <image
      src="../../static/画板 1.png"
      mode="scaleToFill"
      style="width: 100%"
    />
    <view class="last">
      <!-- 导航列表 -->
      <view class="navList">
        <view @click="toIntroduce">
         <image src="../../static/01.png" mode="widthFix"class="navPic" style="width: 104rpx;"></image>
          <text>公司介绍</text>
        </view>
        <view @click="tovipProfit">
          <image src="../../static/02.png" class="navPic" mode="widthFix" style="width: 104rpx;"/>
          <text >会员收益</text>
        </view>
        <view @click="tonewTeacher">
          <image src="../../static/03.png" class="navPic" mode="widthFix" style="width: 104rpx;"/>
          <text >新手教学</text>
        </view>
        <view @click="toExtension">
          <image src="../../static/04.png" class="navPic" mode="widthFix" style="width: 104rpx;"/>
          <text >推广奖励</text>
        </view>
      </view>
      <!-- 网址 -->
      <view class="site">
        <image class="sitePic" src="../../static/组 617.png" mode="widthFix" />
        <text >
          http://45.207.61.141:8501/moblie/index.html
        </text>
      </view>
      <!-- 轮播图 -->
        <view class="u-demo-block">
           <u-swiper calss="rotation"
                       :list="listPic"
                       previousMargin="2px"
                       nextMargin="10px"
                       circular
                       :autoplay="false"
                       radius="5px"
                       bgColor="#ffffff"
					   height="136px"
					   autoplay
               ></u-swiper>
    </view>

    <view class="inComing ">
    	<image class="inComingPic" src="../../static/组 618.png" mode="scaleToFill" />
    	<text style="font-size: 36rpx;color: #333;">
    	  会员进单
    	</text>
    </view>
	<view class="schedule">
		
	<image src="../../static/组 626 (1).png"  class="left" ></image>

		<view class="right">
		 	<text style="color: #333333;">项目规模: 1万元每小时返利,到期还本</text>
			<text style="font-size: 32rpx;font-weight: 800;"> 3.81%</text>
			<br>
			<text style="color: #9999;">1日化利率 1万起投</text>
			<br>
			<text style="color: #F1B52C;font-size: 28rpx;">可行中维-亚单位疫苗</text>
		</view>
		<u-button class="btn" type="primary" shape="circle" text="投资" style="width: 88rpx;height: 44rpx;background-color: #5F67EC;"></u-button>
	</view>
    </view>
	</view>
</template>

<script>
	
export default {

  name: "MyYimiaoDemoIndex",

  data() {
    return {
       listPic:["../../static/组 627.png","../../static/组 628.png"],
    };
  },

  mounted() {},

  methods: {
	  toIntroduce(){
		  uni.navigateTo({
		  	url: '/pages/home/Subdirectory/Introduce',
		  	success: res => {
				console.log('我跳转了')
			},
		  	fail: () => {},
		  	complete: () => {}
		  });
	  },
	  tovipProfit(){
		 uni.navigateTo({
		  	url:'/pages/home/Subdirectory/vipProfit',
		  })
	  },
	  tonewTeacher(){
		  uni.navigateTo({
		  	url:'/pages/home/Subdirectory/newTeach'
		  })
	  },
	  toExtension(){
		  uni.navigateTo({
		  	url:'/pages/home/Subdirectory/extension'
		  })
	  }
	  
	  
	  
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 28rpx;
  .last {
    padding: 52rpx 40rpx;
    position: relative;
    z-index: 2;
    height: 980rpx;
    background: -webkit-linear-gradient(bottom, white, #F7F7FF, #F7F7FF, #e8e8ff);
    background: linear-gradient(to bottom, white, #F7F7FF, #F7F7FF, #e8e8ff);
    border-radius: 32rpx 32rpx 0px 0px;
    margin-top: -30rpx;
    .navList {
      display: flex;
      justify-content: space-between;
      .navPic {
        display: block;
		margin-bottom: 16rpx;
      }
      text {
        font-size: 22rpx;
        color: #999999;
      }
    }
	.inComing{
		margin: 48rpx 0 96rpx 0;
	}
    .site,{
        margin: 46rpx  0;
      }
      .sitePic,.inComingPic{
        width: 48rpx;
        height: 48rpx;
        vertical-align: middle;
      }
      text{
          margin-left:14rpx;
          font-size: 24rpx;
		 vertical-align: middle
    }
  // 轮播图
  .u-demo-block{
	  margin-right: -40rpx;
::v-deep .uni-swiper-slides{
	width: 464rpx;
  }
  }
  .schedule{
	  background-color: #FFFFFF;
	 width: 670rpx;
	  height: 200rpx;
	  margin-top: 8rpx;
	  font-size: 23rpx;
	  position: relative;
	  border-radius: 16rpx;
	  .left{
		  display: inline-block;
		  width: 160rpx;
		  height: 160rpx;
		  margin: 20rpx 32rpx 20rpx 32rpx;
	  }
	  .right{
		  position: absolute;
		  top: 28rpx;
		  right: 20rpx ;
		  display: inline-block;
		  width: 420rpx;
	  }
	  .btn{
		  position: absolute;
          right:48rpx;
		  bottom: 22rpx;
		  font-size: 20rpx;
	  }
  }
  }
  
}
</style>
