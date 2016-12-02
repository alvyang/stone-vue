<template>
	<div class="main">
		首页
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
			$(".main").height($(window).height()-55);
			$(".main").css("line-height",$(window).height()-55 + "px");
		}
	});
</script>
<style>
	.main{
		text-align: center;
	}
</style>