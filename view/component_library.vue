<template>
	<div>
		<my-menu></my-menu>
		<router-view class="com_lib_view"></router-view>
	</div>
</template>
<script>
	import $ from "jquery";
	import Menu from "components/Menu.vue";
	
	export default({
		components:{
			'my-menu':Menu
		},
		mounted(){
			/*
			 * el被新创建的vm.$el替换，并挂载到实例上去之后，调用该钩子
			 * 设置菜单导航高度
			 */
			$(".com_lib_view").width($(window).width()-180);
		},
	});
</script>
<style>
	.com_lib_view{
		position: absolute;
		left: 180px;
		top: 80px;
	}
</style>