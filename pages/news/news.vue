<template>
	<view class="news">
		<newsItem :list="newsList" @itemClick="goDetail"></newsItem>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components: {
			newsItem
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url: "/photos"
				})
				this.newsList = res.data.slice(0,10)
			},
			goDetail(id){
				uni.navigateTo({
					url: "../news-detail/news-detail?id="+id
				})
			}
		},
		onLoad(){
			this.getNews()
		}
	}
</script>

<style lang="scss">
	.news {
		
	}
</style>
