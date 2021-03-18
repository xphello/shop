<template>
	<view class="contact">
		<image class="img" src="../../static/img/contact_img.jpeg"></image>
		<view class="info">
			<view @click="phone">联系电话：18360701631（点击拨打）</view>
			<view>联系地址：苏州市工业园区创意产业园</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.740392,
				latitude: 31.270454,
				scale: 13,
				markers: [
					{
						longitude: 120.740392,
						latitude: 31.270454,
						iconPath: "../../static/img/map_img.png",
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber: "18360701631"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
