<template>
	<div>
		<div class="navigation">
			<a v-on:click="routePage(n.id,index)" :class="{nav_active:index==currentIndex}" v-for="(n,index) in nav" v-if="n.id!='url'">{{n.name}}</a>
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
		mounted(){
			//组件创建完成后，获取数据  此时的data已经被observed了
			this.getNavData()
		},
		watch:{
			// 如果路由有变化，会再次执行该方法 只要地址变化，就会执行这个方法'$route':'getNavData'
			'$route' (to, from) {
				this.setCurrentIndex(to);
			}
		},
		methods:{
			setCurrentIndex(to){
				var fullPath = to.fullPath;
				for(let i=0 ; i < this.nav.length ; i++){
					if(fullPath.includes(this.nav[i].id)){
						this.currentIndex = i;
						break;
					}else{
						this.currentIndex = 0;
					}
				}
			},
			routePage(path,index){
				this.currentIndex = index;
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
				    _self.setCurrentIndex(_self.$router.currentRoute);
				});
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