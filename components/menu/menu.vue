<template id="my_menu">
	<ul>
		<li :to="{name:'nav',params:{id:m.id}}" v-for="m in menu">{{m.name}}</li>
	</ul>
</template>
<script>
	import $ from "jquery";
	export default({
		data(){
			return {
				menu:[]
			}
		},
		created(){
			//组件创建完成后，获取数据  此时的data已经被observed了
			this.getNavData()
		},
		watch:{
			// 如果路由有变化，会再次执行该方法 只要地址变化，就会执行这个方法'$route':'getNavData'
			'$route' (to, from) {
			}
		},
		methods:{
			getNavData(){
				var _self = this;
				$.ajaxSettings.async = false; 
				$.getJSON("db/data.json",{},function(data){
				    _self.menu=data.menu;
				});
			}
		}
	});
</script>
<style>
	
</style>