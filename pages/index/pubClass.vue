<template>
	<view class="pubClass">
		<view class="til">
			本周进行公开课----11
		</view>
		<view class="list_box">
			<view class="list_item" v-for="(item,index) in list" :key='item._id' @click="fn({url:item.url})">
				<image class="img" :src="item.img" mode=""></image>
				<text class='text'>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		created(){
			console.log('this.list',this.list)
		},
		methods:{
			fn({url}){
				console.log('pubClass',url)
				//url只是web-view  要展示的页面
				// #ifdef H5
					location.href = url
				//#endif
				
				// #ifndef H5
				uni.navigateTo({
					url:'/pages/pubinfo/pubinfo?src='+url
				})
				//#endif
				
				// if(location){ //运行阶段
				// 	location.href = url
				// }else{
				// 	uni.navigateTo({
				// 		url:'/pages/pubinfo/pubinfo?src='+url
				// 	})
				// }
			}
		}
	}
</script>

<style lang="less">
	.pubClass{
		width: 90%;
		margin: 20px auto;
		.til{
			padding: 10px;
			font-size: 20px;
			background: #FFF;
		}
		.list_box{
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			justify-content: space-between;
			.list_item{
				background: #FFF;
				width: 49%;
				text-align: center;
				margin-bottom: 8px;
				box-shadow: 0px 2px 2px 0px #ccc;
				.img{
					width: 100%;
					height: 200px;
				}
				.text{
					display: block;
					margin: 10px 0;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
					padding: 5px;
					font-size: 16px;
				}
				
			}
		}
	}
</style>
