<template>
	<view class="dialog_box">
		<view class="slot_box">
			<slot></slot>
		</view>
		<view class="mask" @click='fn'>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			fn(){
				console.log(666)
				this.$emit('close')
			}
		}
	}
</script>

<style lang="less">
	@keyframes opa {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.dialog_box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 30;
		animation: opa 0.2s;

		.slot_box {
			background: #fff;
			width: 300px;
			margin: auto;
			top: 25%;
			position: relative;
			z-index: 20;
		}

		.mask {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 10;
		}
	}
</style>
