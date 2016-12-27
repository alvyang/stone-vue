<template>
	<div>
		<my-menu></my-menu>
		<transition name="component">
			<router-view class="com_lib_view"></router-view>
		</transition>
	</div>
</template>
<script>
	import $ from "jquery";
	import Menu from "components/Menu.vue";
	export default({
		components:{
			'my-menu':{
				...Menu,
				props:{
					menuData:{default:"db/menu_component.json"}
				}
			}
		},
		mounted(){
			/*
			 * el被新创建的vm.$el替换，并挂载到实例上去之后，调用该钩子
			 * 设置菜单导航高度
			 */
			//$(".com_lib_view").width($(window).width()-180);
		},
	});
</script>
<style>
	.component-enter-active, .component-leave-active {
	  transition: opacity 0.8s
	}
	.component-enter, .component-leave-active {
	  opacity: 0
	}
	.com_lib_view{
		position: absolute;
		left: 180px;
		top: 55px;
	}
</style>