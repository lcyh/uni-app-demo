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

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: 'iconfont';  /* project id 2066331 */
	  src: url('//at.alicdn.com/t/font_2066331_66kri3uhq6v.eot');
	  src: url('//at.alicdn.com/t/font_2066331_66kri3uhq6v.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_2066331_66kri3uhq6v.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_2066331_66kri3uhq6v.woff') format('woff'),
	  url('//at.alicdn.com/t/font_2066331_66kri3uhq6v.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_2066331_66kri3uhq6v.svg#iconfont') format('svg');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-shouye:before {
	  content: "\e60e";
	}
	
	.icon-selected-home:before {
	  content: "\e610";
	}
	
</style>
