<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss" scoped>
	/*每个页面公共css */
	@import "uview-ui/index.scss";  
	@font-face{
			font-family:"BOLD";
			src: url('~@/static/PINGFANG BOLD.TTF')
	   }
	   @font-face{
			font-family:"EXTRALIGHT";
			src: url('~@/static/PINGFANG EXTRALIGHT.TTF')
	   }
	   @font-face{
			font-family:"HEAVY";
			src: url('~@/static/PINGFANG HEAVY.TTF')
	   }
	   @font-face{
			font-family:"LIGHT";
			src: url('~@/static/PINGFANG LIGHT.TTF')
	   }
	   @font-face{
			font-family:"REGULAR";
			src: url('~@/static/PINGFANG REGULAR.TTF')
	   }
   uni-page{
	   font-family: 'MEDIUM';
	   color: #000000;
	   font-size: 14rpx;
	   background-color: #f6f6f6;
   }
.status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
.header_top{
	padding-top: calc(45px + var(--status-bar-height));
}
</style>
