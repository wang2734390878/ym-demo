<template>
  <view class="fund">
	  <!-- 轮播图 -->
	 <view class="block">
	        <u-swiper calss="rotation"
	                    :list="pic"
	                    previousMargin="2px"
	                    nextMargin="6px"
	                    circular
	                    :autoplay="false"
	                    radius="10px"
	                    bgColor="#ffffff"
	 				   height="196px"
	 				   autoplay
	            ></u-swiper>
	 </view>
	  <!-- 限购 -->
	  <view class="shopp">
	  	
	  </view>
	  <!-- 期限 -->
	  <view class="term">
	  	
	  </view>
	  
       <view class="btn">我要认领</view>	  	
	  </view>
  </view>
</template>

<script>
export default {
  name: 'MyYimiaoDemoIndex',

  data () {
    return {
		pic:[
			"../../static/组 663.png",
			"../../static/矩形 529.png"
			
		]
	}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
	.fund{
		margin: 0 40rpx ;
		.block{
			  margin-right: -40rpx;
		::v-deep .uni-swiper-slides{
			width: 636rpx;
		  }
		  }
	}
</style>
