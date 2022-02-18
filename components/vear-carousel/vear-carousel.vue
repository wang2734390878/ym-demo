<template>
	<swiper indicator-dots indicator-active-color="#5f67ec" class="image-container" previous-margin="45rpx" next-margin="45rpx" circular autoplay
		@change="swiperChange">
		<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'"
			v-for="(item, index) in imgList" :key="item[urlKey]">
			<image @click="clickImg(item)" :class="currentIndex == index ? 'item-img' : 'item-img-side'"
				:src="item[urlKey]" lazy-load :style="dontFirstAnimation ? 'animation: none;' : ''" mode="aspectFill">
			</image>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		props: {
			imgList: {
				type: Array,
				default () {
					return []
				}
			},
			urlKey: {
				type: String,
				default () {
					return ''
				}
			},
		},
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true
			}
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				this.$emit('selected', item, this.currentIndex)
			}
		}
	}
</script>
<style lang='scss' scoped>
	.image-container {
		width: 750rpx;
		height: 508rpx;
		padding-bottom: 128rpx;
		
	}

	.item-img {
		width: 630rpx;
		height: 392rpx;
		border-radius: 14rpx;
		animation: to-big .3s;
		margin: 10rpx;
		box-shadow: 0px 6px 11px 0px rgba($color: #949494, $alpha: 0.3);
	}

	.swiper-item {
		width: 630rpx;
		height: 300rpx; 
		display: flex;
		justify-content: center;
		align-items: center;
		
	}

	.item-img-side {
		width: 630rpx;
		height: 260rpx;
		border-radius: 14rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		width: 630rpx;
		height: 260rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
   /deep/.uni-swiper-dots { // 指示点整个区域
        bottom:1rpx;
    }
    /deep/ .uni-swiper-dot { // 指示点元素默认样式
        width: 20rpx !important;
        height: 20rpx !important;
    }
	/deep/ .uni-swiper-dot-active { // 指示点元素激活（当前选中）状态样式
	       width: 64rpx !important;
	       			height: 20rpx !important;
	       			background: #5e66eb !important;
	       			border-radius: 10rpx;
	    }
	@keyframes to-mini {
		from {
			height: 300rpx;
		}

		to {
			height: 260rpx;
		}
	}

	@keyframes to-big {
		from {
			height: 260rpx;
		}

		to {
			height: 300rpx;
		}
	}
</style>
