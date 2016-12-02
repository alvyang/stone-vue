<template>
	<div>
		<div class="navigation">
			<a v-on:click="routePage(n.id,index)" v-for="(n,index) in nav" :class="{nav_active:index==0}" v-if="n.id!='url'">{{n.name}}</a>
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
				base:"/",//相对路径，根路径
			}
		},
		created(){
			//组件创建完成后，获取数据  此时的data已经被observed了
			this.getNavData()
		},
		watch:{
			// 如果路由有变化，会再次执行该方法 只要地址变化，就会执行这个方法'$route':'getNavData'
			'$route' (to, from){
				
			}
		},
		methods:{
			routePage(path,index){
				//使用router-link 无法动态添加路径，采用编程路由方式实现
				this.$router.push({path:"/"+path});
			},
			getNavData(){
				var _self = this;
				$.ajaxSettings.async = false; 
				$.getJSON("db/data.json",{},function(data){
				    _self.nav=data.nav;
				});
			}
		}
	});
</script>
<style>
	.navigation{
		background-color:#ffffff;
		border-bottom:solid 1px #cdcdcd;
		width:100%;
	    height: 55px;
		box-sizing: border-box;
	    padding-right: 50px;
		text-align:right;
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
	/*.nav_active{
		font-weight:bold;
		color: #f24040;
		border-bottom: solid 1px #f04646;
	}*/
</style>
