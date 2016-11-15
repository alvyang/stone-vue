<template>
	<div class="main" style='text-align:center;'>
		<div class="main_content">首页</div>
	</div>
</template>
<script>
	import $ from "jquery";
	export default({
		mounted(){
			/*
			 * el被新创建的vm.$el替换，并挂载到实例上去之后，调用该钩子
			 * 设置菜单导航高度
			 */
			$(".main").height($(window).height()-80);
		}
	});
</script>
<style>
	.main_content{
		position: relative;
		top:50%;
		height: 300px;
		width: 500px;
		line-height: 300px;
		margin-top: -150px;
		margin-left: auto;
		margin-right: auto;
	}
</style>