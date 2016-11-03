<template>
	<div>
		<div class="navigation">
			<router-link to="{path:n.id}" v-for="n in nav">{{n.name}}</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<style>
	.navigation{
		width:100%;
		height:80px;
	}
	.navigation a{
		display:inline-block;
		width:100px;
		text-decoration: none;
	}
</style>
<script>
	export default{
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
			// 如果路由有变化，会再次执行该方法
			'$route':'getNavData'
		},
		methods:{
			getNavData(){
				for(var i = 0 ; i < 4 ;i++){
					this.nav.push({name:"nav"+(i+1),id:i+1});
				}
			}
		}
	}
</script>