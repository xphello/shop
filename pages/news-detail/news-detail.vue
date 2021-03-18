<template>
	<view class="news_detail">
		<text class="title">{{detail.id}}</text>
		<view class="info">
			<text>发表时间：{{detail.id | formatDate}}</text>
			<text>浏览：{{detail.albumId}}</text>
		</view>
		<view class="content">
			<!-- 富文本 -->
			<rich-text :nodes="detail.title"></rich-text>
			<!-- {{detail.title}} -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					url: "/photos/"+this.id
				})
				this.detail = res.data
			}
		},
		onLoad(options){
			this.id = options.id
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		display: block;
		width: 710rpx;
		text-align: center;
		margin: 20rpx 0;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
