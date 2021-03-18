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
		font-family: "iconfont";
		src: url('~@/static/font/iconfont.eot?t=1505955784604');
		/* IE9*/
		src: url('~@/static/font/iconfont.eot?t=1505955784604#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
			url('~@/static/font/iconfont.ttf?t=1505955784604') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
			url('~@/static/font/iconfont.svg?t=1505955784604#iconfont') format('svg');
		/* iOS 4.1- */
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.icon-03:before {
		content: "\e603";
	}
	
	.icon-shouye:before {
		content: "\e625";
	}
	
	.icon-gouwuche:before {
		content: "\e513";
	}
</style>
