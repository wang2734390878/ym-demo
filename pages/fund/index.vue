<template>
  <view class="fund">
	  <!-- 轮播图 -->
	 <view class="block">
	        <carousel :img-list="info" url-key="url">
				
				<!-- <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
					<swiper class="swiper-box" @change="change">
						<swiper-item v-for="(item ,index) in info" :key="index">
							<view class="swiper-item">
								{{item.content}}
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot> -->
			</carousel>
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
import carousel from '@/components/vear-carousel/vear-carousel'
	    export default {
	        components: {
	            carousel
	        },
  name: 'MyYimiaoDemoIndex',

  data () {
    return {
		info:[
			{url: "../../static/组 663.png"},
			{url: "../../static/矩形 529 (1).png"}
		],
		current: 0,
		mode: 'round',
		
	}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
	.fund{
		.block{
			
		
		  }
	}
</style>
