<template>
	<div class="form_nav">
		<span v-on:click="routePage(fn.path,index)" :class="{sel_active:index==currentIndex}" v-for="(fn,index) in formNav" >
			{{fn.name}}
		</span>
		<router-view class="form_tab"></router-view>
	</div>
</template>
<script>
	import $ from "jquery";
	var formNav = [{name:"input输入框",path:"input"},
				   {name:"radio单选框",path:"radio"},
				   {name:"checkbox多选框",path:"checkbox"},
				   {name:"select选择器",path:"select"},
				   {name:"select多选择器",path:"selects"}];
	
	export default({
		data(){
			return {
				formNav:formNav,
				currentIndex:0,
			}
		},
		mounted(){
			var fullPath = this.$router.currentRoute.fullPath;
			for(let i=0 ; i < this.formNav.length ; i++){
				if(fullPath.includes(this.formNav[i].path)){
					this.currentIndex = i;
					break;
				}else{
					this.currentIndex = 0;
				}
			}
		},
		methods:{
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
				for(let i = 0 ; i < this.formNav.length ; i++){
					if(fullPath.includes(this.formNav[i].path)){
						toPath = fullPath.substring(0,fullPath.indexOf(this.formNav[i].id)) + path;
						break;
					}
				}
				this.$router.push({path:toPath});
			}
		}
	});
</script>
<style>
	.form_nav,.form_tab{
		box-sizing: border-box;
	    padding: 20px;
	}
	.form_nav span{
		display: inline-block;
		box-sizing: border-box;
		width: 150px;
		height: 36px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
		color: #999999;
	}
	.sel_active{
		color: #313a49;
	    border-bottom: 3px solid #313a49;
	}
</style>