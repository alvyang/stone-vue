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
				var toPath = "";
				if(fullPath.length != 1){//如果路径长度为1，说明为根目录
					toPath = fullPath + "/" + path;
				}else{
					toPath = "/" + path;
				}
				for(let i = 0 ; i < this.nav.length ; i++){
					if(fullPath.includes(this.nav[i].id)){
						toPath = fullPath.substring(0,fullPath.indexOf(this.nav[i].id)) + path;
						break;
					}
				}
				this.$router.push({path:toPath});
			},
			getNavData(){
				var _self = this;
				$.ajaxSettings.async = false; 
				$.getJSON("db/data.json",{},function(data){
				    _self.nav=data.nav;
				});
				
				var fullPath = this.$router.currentRoute.fullPath;
				for(let i=0 ; i < _self.nav.length ; i++){
					if(fullPath.includes(_self.nav[i].id)){
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