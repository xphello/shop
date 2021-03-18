<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,i) in navs" :key="i" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		components: {
			"goods-list": goodsList
		},
		data() {
			return {
				swipers: [],
				navs: [{
						icon: "iconfont icon-03",
						title: "我的超市",
						path: "/pages/goods/goods"
					},
					{
						icon: "iconfont icon-shouye",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icon: "iconfont icon-gouwuche",
						title: "社区图片",
						path: "/pages/pics/pics"
					},
					{
						icon: "iconfont icon-gouwuche",
						title: "学习视频",
						path: "/pages/videos/videos"
					},
				],
				goods: []
			}
		},
		onLoad() {
			this.getSwipers();
			this.getHotGoods();
		},
		methods: {
			//获取轮播图数据
			async getSwipers() {
				// uni.request({
				// 	url: "http://jsonplaceholder.typicode.com/photos",
				// 	success(res) {
				// 		if (res.statusCode !== 200) {
				// 			return uni.showToast({
				// 				title: "获取数据失败!"
				// 			})
				// 		}
				// 		this.swipers = res.data;
				// 	}
				// })
				const res = await this.$myRequest({
					url: "/photos"
				})
				this.swipers = res.data.slice(0, 3)
			},
			// 获取推荐商品数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url: "/photos?albumId=5"
				})
				this.goods = res.data.slice(0,10)
			},
			// 导航点击
			navItemClick(url){
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url: "../goods-detail/goods-detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					line-height: 120rpx;
					margin: 10px auto;
					border-radius: 50%;
					background-color: $shop-color;
					color: #fff;
					font-size: 50rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			background-color: #eee;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				margin: 7rpx auto;
			}
		}
	}
</style>
