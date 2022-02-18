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
			font-family:"MEDIUM";
			src: url('~@/static/PINGFANG MEDIUM.TTF')
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
