<template>
	<div>
		<div class="navigation">
			<router-link :to="{name:'nav',params:{id:n.id}}"  v-for="n in nav" v-if="n.id!='url'">{{n.name}}</router-link>
			<a v-bind:href="n.url" target="_blank" v-else>{{n.name}}</a>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	export default({
		data(){
			return {
				nav:[]
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
		height:80px;
		box-sizing: border-box;
		text-align:center;
	}
	.navigation a{
		display:inline-block;
		box-sizing: border-box;
		width:100px;
		height:80px;
		line-height:80px;
		text-decoration: none;
		color:#f04046;
		cursor:pointer;
	}
	.navigation a:hover{
		font-weight:bold;
		border-bottom: solid 1px #f04646;
	}
</style>
