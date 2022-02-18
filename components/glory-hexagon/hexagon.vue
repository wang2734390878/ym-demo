<template>
  <view>
    <view class="border-1" :style="borderStyle">
      <view class="border-2">
        <view class="border-3">
          <view class="content-1" :style="contentStyle">
            <view class="content-2">
              <view class="content-3">
                <image :src="src" :mode="mode" :style="contentStyle" @click="onClick"/>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'hexagon',
    computed: {
      borderStyle() {
        return this.formatStyle({
          height: this.toPx(this.size, true),
          width: (this.toPx(this.size) / 5 * 4) + 'px',
          '--size': this.size,
          '--color': this.borderColor
        })
      },
      contentStyle() {
        let size = this.toPx(this.size) - (this.toPx(this.borderWidth) * 2)
        return this.formatStyle({
          height: size + 'px',
          width: (size / 5 * 4) + 'px'
        })
      }
    },
    props: {
      src: String,
      mode: {
        type: String,
        default: 'aspectFill'
      },
      borderWidth: {
        type: [String, Number],
        default: '2rpx'
      },
      borderColor: {
        type: String,
        default: '#000000'
      },
      size: {
        type: [String, Number],
        default: '200rpx'
      }
    },
    data() {
      return {};
    },
    methods: {
      /**
       * upx,rpx,px 转 px;
       * @param number 数字/100rpx  
       */
      toPx(number, unit = false) {
        let px;
        if (/upx|rpx/.test(number)) {
          px = uni.upx2px(parseInt(number));
        } else {
          px = parseInt(number);
        }
        return unit ? (px + 'px') : px;
      },
      /**
       * 转换成uniapp各平台可识别样式
       * {width:100px,height:100px}
       */
      formatStyle(data = {}) {
        let style;
        // #ifdef H5
        style = data;
        // #endif
        // #ifdef APP-PLUS||MP-WEIXIN
        style = '';
        for (let [name, value] of Object.entries(data)) {
          style += name + ':' + value + ';';
        }
        // #endif
        return style;
      },
      onClick(){
        this.$emit('click');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .border-1 {
    width: 200px;
    height: 250px;
    overflow: hidden;
    transform: rotate(120deg);
  }

  .border-2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(-60deg);
  }

  .border-3 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(-60deg);
    background-color: var(--color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-1 {
    width: 196px;
    height: 245px;
    overflow: hidden;
    transform: rotate(120deg);
  }

  .content-2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(-60deg);
  }

  .content-3 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(-60deg);
    background-color: #efefef;
  }
</style>
