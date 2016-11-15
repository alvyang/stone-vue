<template id="my_menu">
	<ul class="menu_list">
		<router-link :to="{path:'/menu',name:'menu',params:{id:m.id}}" tag="li" v-for="m in menu">{{m.name}}</router-link>
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
			this.getNavData();
		},
		mounted(){
			/*
			 * el被新创建的vm.$el替换，并挂载到实例上去之后，调用该钩子
			 * 设置菜单导航高度
			 */
			$(".menu_list").height($(window).height()-80);
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
	.menu_list{
	    list-style-type: none;
	    -webkit-margin-before: 0em;
	    -webkit-margin-after: 0em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	    -webkit-padding-start: 0px;
	    width: 180px;
	    border-right:solid 1px #cdcdcd ;
	}
	.menu_list li{
		cursor: pointer;
		text-align: center;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.menu_list li:hover{
		background: #464646;
	}
</style>