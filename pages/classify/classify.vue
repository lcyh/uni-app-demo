<template>
	<view class="classfy_box">
		<uni-list>
			<uni-list-item 
				v-for="i in list"
				:key="i.name"
				:title="i.name"
				:note="'列表描述'+i.name"
				:thumb="i.imgs[0]"
				link
				
			>
				
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		created(){
			this.getClass()
		},
		methods: {
			getClass(){
				// uniCloud.callFunction({
				// 	name:"getClass",
				// 	success:(res)=>{
				// 		this.list = res.result.data
				// 	}
				// })
				let data=[
					{
						"name":"HTML5",
						"price":1680,
						"imgs":["http://zhufengpeixun.com/videoCourse/images/new5.png",
						"http://zhufengpeixun.com/videoCourse/images/new1.png",
						"http://zhufengpeixun.com/videoCourse/images/reg.jpg",
						"http://zhufengpeixun.com/videoCourse/images/vueandcanvas.png"]
					},
					{
						"name":"css3",
						"price":1000,
						"imgs":["http://zhufengpeixun.com/videoCourse/images/new5.png",
						"http://zhufengpeixun.com/videoCourse/images/new1.png",
						"http://zhufengpeixun.com/videoCourse/images/reg.jpg",
						"http://zhufengpeixun.com/videoCourse/images/vueandcanvas.png"]
					},
					{
						"name":"Javascript",
						"price":11800,
						"imgs":["http://zhufengpeixun.com/videoCourse/images/new5.png",
						"http://zhufengpeixun.com/videoCourse/images/new1.png",
						"http://zhufengpeixun.com/videoCourse/images/reg.jpg",
						"http://zhufengpeixun.com/videoCourse/images/vueandcanvas.png"]
					},
				]
				this.list=data;
				
			}
		}
	}
</script>

<style>

</style>
