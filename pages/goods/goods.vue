<template>
	<view>
		<view class="goods_list">
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
			<view class="isOver" v-if="flag">
				-----我是有底线的-----
			</view>
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
				albumId: 5,
				goods: [],
				flag: false
			}
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: "/photos?albumId=" + this.albumId
				})
				this.goods = [...this.goods, ...res.data]
				callBack && callBack()
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url: "../goods-detail/goods-detail?id="+id
				})
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if (this.goods.length <= this.albumId * 10) return this.flag = true;
			console.log("触底了")
			this.albumId++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			console.log("下拉刷新了")
			this.albumId = 5
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			}, 1000)
		},
	}
</script>

<style lang="scss">
	.goods_list {
		background-color: #eee;

		.isOver {
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 28rpx;
		}
	}
</style>
