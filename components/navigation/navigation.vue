<template>
	<div id="nav_template">
		<div class="navigation">
			<router-link :to="{name:'nav',params:{id:n.id}}" v-for="n in nav">{{n.name}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import Vue from "vue/dist/vue.js";
	import router from 'components/navigation/navigation.js';
	
	export default({
		el:"#nav_template",
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
			'$route' (to, from) {
			}
		},
		methods:{
			getNavData(){
				for(var i = 0 ; i < 4 ;i++){
					this.nav.push({name:"nav"+(i+1),id:i+1});
				}
			}
		},
		router,
	});
</script>
<style>
	.navigation{
		background-color:#ffffff;
		border-bottom:solid 1px #cdcdcd;
		width:100%;
		height:80px;
		text-align:center;
	}
	.navigation a{
		display:inline-block;
		width:100px;
		height:40px;
		line-height:40px;
		margin-top: 20px;
		text-decoration: none;
		color:#f04046;
	}
	.navigation a:hover{
		font-weight:bold;
	}
</style>
