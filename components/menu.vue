<template id="my_menu">
	<ul class="menu_list">
		<li v-on:click="routePate(m.id,index)" :class="{menu_active:index==currentIndex}" v-for="(m,index) in menu">{{m.name}}</li>
	</ul>
</template>
<script>
	import $ from "jquery";
	export default({
		data(){
			return {
				menu:[],
				currentIndex:0//当前路由状态
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
			$(".menu_list").height($(window).height()-55);
		},
		watch:{
			// 如果路由有变化，会再次执行该方法 只要地址变化，就会执行这个方法'$route':'getNavData'
			'$route' (to, from) {
//				console.log(from);
//				console.log(to);
			}
		},
		methods:{
			routePate(path,index){
				this.currentIndex = index;
				//使用router-link 无法动态添加路径，采用编程路由方式实现
				//使用router-link 无法动态添加路径，采用编程路由方式实现
				var fullPath = this.$router.currentRoute.fullPath;
				var toPath ="";
				if(fullPath.length != 1){//如果路径长度为1，说明为根目录
					toPath = fullPath + "/" + path;
				}else{
					toPath = "/" + path;
				}
				for(let i = 0 ; i < this.menu.length ; i++){
					if(fullPath.includes(this.menu[i].id)){
						toPath = fullPath.substring(0,fullPath.indexOf(this.menu[i].id)) + path;
						break;
					}
				}
				this.$router.push({path:toPath});
			},
			getNavData(){
				var _self = this;
				//menuData 父组件传来的值，用于显示列表
				if(typeof _self.menuData === 'object'){
					_self.menu = _self.menuData;
				}else if(typeof _self.menuData === 'string'){
					$.ajaxSettings.async = false;
					$.getJSON(_self.menuData,{},function(data){
					    _self.menu = data;
					});
				}
				
				var fullPath = this.$router.currentRoute.fullPath;
				for(let i=0 ; i < _self.menu.length ; i++){
					if(fullPath.includes(_self.menu[i].id)){
						_self.currentIndex = i;
						break;
					}else{
						_self.currentIndex = 0;
					}
				}
			}
		}
	});
</script>
<style>
	.menu_list{
		box-sizing: border-box;
	    list-style-type: none;
	    -webkit-margin-before: 0em;
	    -webkit-margin-after: 0em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	    -webkit-padding-start: 0px;
	    width: 180px;
	    border-right:solid 1px #d6d6d6 ;
	}
	.menu_list li{
		cursor: pointer;
		text-align: center;
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: solid 1px #d6d6d6;
	}
	.menu_active{
		background: #ffa81d;
	}
</style>