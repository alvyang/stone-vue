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
			'my-menu':{
				...Menu,
				props:{//数组或对象默认值应当由一个工厂返回
					menuData:{default:function(){
						var m = [{
							"name":"色彩规范",
							"id":"color"
						},{
							"name":"字体规范",
							"id":"font"
						}]
						return m;
					}}
				}
			}
		}
	});
</script>
<style>
	.com_lib_view{
		position: absolute;
		left: 180px;
		top: 55px;
	}
</style>