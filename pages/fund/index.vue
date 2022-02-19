<template>
  <view class="--status-bar-height">
	  <!-- 轮播图 -->
	 <view class="block">
	        <carousel :img-list="info" url-key="url">
			</carousel>
	 </view>
	  <!-- 限购 -->
	  <view class="shopp">
		            <view class="page-section swiper">
		                <view class="page-section-spacing">
		                    <swiper class="swiper" display-multiple-items="3" :autoplay="true" skip-hidden-item-layout :interval="3000" duration="300" circular next-margin="-14px">
		                        <swiper-item v-for="item in grade" :key="item.index">
		                            <view class="swiper-item">
										<text style="font-size:12px;color:#2c2c2c; margin-right:5px;">{{item.rank}}</text>
										<text style="font-size:10px;color: #cccccc;">{{item.quota}}</text>
										<text style="font-size:18px;color: #878787; font-weight: 800;font-family:'BOLD';margin:0 24px ;">{{item.money}}</text>
									</view>
		                        </swiper-item>
		                    </swiper>
		                </view>
	  </view>
	  <!-- 期限 -->
	  <view style="font-size:18px; color: #999999;margin:14px 0 24px;">期限</view>
	  
	  <view class="term ">
	  	  <view class="grid">
	  	      <uni-grid :column="5" >
	  	          <uni-grid-item v-for="(item,index) in baseList" :key="index">
	  	              <text class="text">{{item.title}}</text>
	  	          </uni-grid-item>
	  	      </uni-grid>
	  	     </view>
    		<u-button class="btn" type="primary" shape="circle" text="我要认领"></u-button>
	  </view>
	  
	  </view>
  </view>
</template>

<script>
import carousel from '@/components/vear-carousel/vear-carousel'
	    export default {
	        components: {
	            carousel,
				
	        },
  data () {
    return {
		info:[
			{url: "../../static/组 663.png"},
			{url: "../../static/矩形 529 (1).png"},
		],
		grade:[
			{rank:'游客',money:'100$',quota:"限购一次"},
			{rank:'vip',money:'500$',quota:"限购一次"},
			{rank:'黄金vip',money:'1000$',quota:"限购一次"},
			{rank:'铂金vip',money:'3000$',quota:"限购一次"},
		],//等级
		baseList:[{
                    name: 'photo',
                    title: '01'
                    },
                    {
                        name: 'lock',
                        title: '03'
                    },
                    {
                        name: 'star',
                        title: '05'
                    },
                    {
                        name: 'hourglass',
                        title: '07'
                    },
                    {
                        name: 'home',
                        title: '15'
                    }, {
                        name: 'home',
                        title: '30'
                    }, {
                        name: 'home',
                        title: '60'
                    }, {
                        name: 'home',
                        title: '90'
                    }, {
                        name: 'home',
                        title: '180'
                    },
                    {
                        name: 'star',
                        title: '360'
                    },]
		
		
		
		
	}
  },

  mounted () {},

  methods: {
  }
}
</script>

<style lang="scss" scoped>
	.fund{ 
		min-height: 100vh;
		.shopp{
			padding: 0 40rpx;
		   height: 96rpx;;
		   .swiper{
			   height: 156rpx;
		   }
			.swiper-item{
				width: 202rpx;
				height: 96rpx;
				background-color: #FFFFFF;
				box-shadow: 0 10rpx 20rpx rgba($color: #6f6f6f, $alpha: 0.3);
			}
		}
	.term{
		height: 136rpx;
		.text{
			font-size: 36rpx;	
			color: #999999;
			text-align: center;
			line-height: 136rpx;
		}
		.btn{
			margin-top: 95rpx;
			background-color: #5f67ec;
		}
	}
	 
	  @font-face{
	  		font-family:"BOLD";
	  		src: url('~@/static/PINGFANG BOLD.TTF')
	     }
      @font-face{
	  		font-family:"LIGHT";
	  		src: url('~@/static/PINGFANG EXTRALIGHT.TTF')
	     }
	}
</style>
