<template>
  <view class="fund">
	  <!-- 轮播图 -->
	 <view class="block">
	        <u-swiper calss="rotation"
	                    :list="pic"
	                    circular
	                    :autoplay="false"
	                    radius="10px"
	                    bgColor="#ffffff"
	 				   height="196px"
	 				   indicator
	 				   indicatorMode="dot"
					   indicatorActiveColor="#5f67ec"
					   indicatorInactiveColor="#d2d2d2"
					   indicatorStyle="bottom"
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
			"../../static/矩形 529 (1).png"
			
		]
	}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
	.fund{
		.block{
			
			.rotation{
			
			}
		
		  }
	}
</style>
