<template>
	<view class="content">
		<navBar :opa="opa">首页</navBar>
		<view class="swiper_box">
			<swiper class="swiper"  :autoplay="false" :indicator-dots="true" :circular="true">
				<swiper-item v-for='item in bannerAry' :key='item._id'>
					<image :src="item.img" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="video">
			<view class="til">
				展示
			</view>
			<view class="video_box">
				<image src="http://www.zhufengpeixun.cn/skin/20142/img/zfBg2.jpg" mode="aspectFill"></image>
				<view class="play_icon" @click='showKnow'>
					<image src="http://www.zhufengpeixun.cn/skin/20142/img/video.png" mode=""></image>
				</view>
			</view>
			<mydialog v-show='isShowKnow' @close='closeKnow'>
				<video src="http://img.zhufengpeixun.cn/zfcctv.mp4" controls></video>
			</mydialog>
		</view>
		<view class="video">
			<view class="til">
				长城故事
			</view>
			<view class="video_box">
				<image src="http://www.zhufengpeixun.cn/skin/20142/img/zfBg.jpg" mode="aspectFill"></image>
				<view class="play_icon" @click='showStory'>
					<image src="http://www.zhufengpeixun.cn/skin/20142/img/video.png" mode=""></image>
				</view>
			</view>
			<uni-popup ref='popup'>
				<video src="https://vdept.bdstatic.com/4a564e4a434c6d69505843514c594b47/7a53525449556968/112bbabeaa43cc6e6d6564ea6a6fdd40ff04903ca83101b67a8ce15f704e3a0695dea5c2614f890a6a8aafcdc39cd6c704e2541bf498ec3460f6b63359f39753.mp4?auth_key=1596626640-0-0-e06749750fd0717800ee62f936af6e39" controls></video>
			</uni-popup>
		</view>
		
		<pub-class :list='pubClassList'></pub-class>
		{{$store.state.count}} 
		{{count}} 
	</view>
</template>

<script>
	import pubClass from './pubClass.vue'
	import {mapState} from 'vuex'
	export default {
		components:{'pub-class':pubClass},
		data() {
			return {
				title: 'Hello',
				flag: true,
				opa: 0,
				bannerAry:[],
				isShowKnow:false,
				pubClassList:[]
			}
		},
		onPageScroll({
			scrollTop
		}) {
			this.flag = true;
			if (scrollTop > 5) {
				this.opa = 1;
			} else {
				this.opa = 0;
			}
			// if(this.flag){
			// 	this.flag = false;
			// 	setTimeout(()=>{
			// 		this.flag = true;
			// 		if(scrollTop > 5){
			// 			this.opa = 1;
			// 		}else{
			// 			this.opa = 0;
			// 		}
			// 	},200)
			// }
		},
		created(){
			this.getBanner()
			this.getPubClass()
			console.log('this.$store.state.count',this.$store.state.count)
		},
		computed:{
			// count(){
			// 	return this.$store.state.count
			// }
			...mapState(['count'])
		},
		methods: {
			showStory(){
				this.$refs.popup.open()
			},
			showKnow(){
				this.isShowKnow = true
			},
			closeKnow(){
				console.log(777)
				this.isShowKnow = false
			},
			getBanner(){
				// uniCloud.callFunction({
				// 	name:'getBanner',
				// 	success:(res)=>{
				// 		console.log('getBanner',res)
				// 		this.bannerAry = res.result.data
				// 	}
				// })
				let data=[
					{
						"img":"http://pic-bucket.ws.126.net/photo/0001/2020-08-04/FJ68IFA356NT0001NOS.jpg"
					},
					{
						"img":"http://pic-bucket.ws.126.net/photo/0001/2020-08-04/FJ68IFA456NT0001NOS.jpg"
					},
					{
						"img":"http://pic-bucket.ws.126.net/photo/0001/2020-08-04/FJ68IFA556NT0001NOS.jpg"
					},
					{
						"img":"http://pic-bucket.ws.126.net/photo/0001/2020-08-05/FJ8SOIKH56NT0001NOS.jpg"
					}
				]
				this.bannerAry=data;
			},
			getPubClass(){
				// uniCloud.callFunction({
				// 	name:"getPubClass"
				// }).then(data=>{
				// 	console.log(data)
				// 	// setTimeout(()=>{
				// 		this.pubClassList = data.result.data
				// 	// },1000)
					
				// })
				let data=[
					{
						"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello2/f0df6420-dab1-11ea-8a36-ebb87efcf8c0.jpg",
						"title":"手写Vue源码-可能是你见过最完整的版本！",
						"url":"https://mp.weixin.qq.com/s/cTOxf1n-YSTWLvlYh04AMw"
					},
					{
						"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello2/f0dad040-dab1-11ea-8bd0-2998ac5bbf7e.jpg",
						"title":"两天时间基于Vue从零打造自己的UI组件库",
						"url":"https://mp.weixin.qq.com/s/0QGv8p-jmv5AN7YHCl3xYA"
					},
					{
						"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello2/f0e15ff0-dab1-11ea-8a36-ebb87efcf8c0.jpg",
						"title":"工程化1:1从零实现Vue源码",
						"url":"https://mp.weixin.qq.com/s/-aZ1yo3Lumk2b3Y1JI655A"
					}
				]
				this.pubClassList=data;
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #dfe7e7;
	}
	.content{
		
	}
	.swiper_box{
		height: 180px;
		width: 90%;
		margin: auto;
		overflow: hidden;
		border-radius: 10px;
		background-color: #eee;
		.swiper{
			height: 100%;
			image{
				width: 100%;
			}
		}
	}
	.video{
		width: 90%;
		margin: 10px auto 20px;
		box-shadow: 0px 2px 13px 5px #ccc;
		background-color: #fff;
		text-align: center;
		.video_box{
			position: relative;
			image{
				width:100%
			}
			.play_icon{
				width: 80px;
				height: 80px;
				position: absolute;
				z-index: 10;
				left: 50%;
				top:50%;
				margin: -40px auto auto -40px;
				image{
					width: 100%;
					height:100%
				}
			}
		}
		.til{
			font-size: 30px;
			margin-bottom: 20px;
			padding-top: 20px;
			text-align: center;
		}
	}
</style>
