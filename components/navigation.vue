<template>
	<div>
		<div class="navigation">
			<a v-on:click="routePage(n.id,index)" v-for="(n,index) in nav" :class="{nav_active:index==currentIndex}" v-if="n.id!='url'">{{n.name}}</a>
			<a v-bind:href="n.url" target="_blank" v-else>{{n.name}}</a>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	export default({
		data(){
			return {
				nav:[],
				currentIndex:0//当前路由状态
			}
		},
		created(){
			//组件创建完成后，获取数据  此时的data已经被observed了
			this.getNavData()
		},
		methods:{
			routePage(path,index){
				$(".navigation > a").removeClass("nav_active");
				$(".navigation > a").eq(index).addClass("nav_active");
				//使用router-link 无法动态添加路径，采用编程路由方式实现
				var fullPath = this.$router.currentRoute.fullPath;
				var index = fullPath.lastIndexOf("/");
				var base = "";
				if(index == fullPath.length-1){
					base = "/";
				}else{
					base = fullPath.substring(0,index+1);
				}
				this.$router.push({path:base+path});
			},
			getNavData(){
				var _self = this;
				$.ajaxSettings.async = false; 
				$.getJSON("db/data.json",{},function(data){
				    _self.nav=data.nav;
				});
				
				var fullPath = this.$router.currentRoute.fullPath;
				var index = fullPath.lastIndexOf("/");
				//导航选中状态
				var routePath = fullPath.substring(index+1,fullPath.length);
				for(let i=0 ; i < _self.nav.length ; i++){
					if(_self.nav[i].id == routePath){
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
	.navigation{
		background-color:#ffffff;
		border-bottom:solid 1px #ffa81d;
		width:100%;
	    height: 55px;
		box-sizing: border-box;
	    padding-right: 50px;
		text-align:right;
		font-size: 14px;
	}
	.navigation a{
		display:inline-block;
		box-sizing: border-box;
		width:100px;
		height:55px;
		line-height:55px;
		text-decoration: none;
		cursor:pointer;
		text-align: center;
	}
	.nav_active{
		color: #ffffff;
		background-color: #ffa81d;
	}
</style>