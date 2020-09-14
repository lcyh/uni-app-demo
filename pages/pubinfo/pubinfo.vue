<template>
	<view>
		<!--  一个 组件中 只能有一个 web-view组件  不能在一个组件中使用 循环的方式展示多个该组件-->
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:''
			}
		},
		onLoad({src}) {
			console.log('pubinfo',src)
			// 页面之间传递的参数 我们可以通过 onLoad函数的参数获取
			this.src = src
		},
		
		methods: {
			
		}
	}
</script>

<style>

</style>
