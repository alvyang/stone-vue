<template>
	<div class="form_nav">
		<span v-on:click="routePage(fn.path,index)" :class="{sel_active:index==0}" v-for="(fn,index) in formNav" >
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
				formNav:formNav
			}
		},
		mounted(){
			
		},
		methods:{
			routePage(path,index){
				//使用router-link 无法动态添加路径，采用编程路由方式实现
				this.$router.push({path:"/comp_lib/form/"+path});
				$(".form_nav > span").removeClass("sel_active");
				$(".form_nav > span").eq(index).addClass("sel_active");
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
		height: 30px;
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