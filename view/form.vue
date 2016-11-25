<template>
		<div class="form_nav">
			<router-link :to="{path:'option_tab',name:'option_tab',params:{id:fn.path}}" append activeClass="sel-active" v-for="fn in formNav" >
				{{fn.name}}
			</router-link>
			<router-view class="form_tab"></router-view>
		</div>
</template>
<script>
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
			console.log(this);
		}
	});
</script>
<style>
	.form_nav,.form_tab{
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
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
	.sel-active{
		color: #313a49;
	    border-bottom: 3px solid #313a49;
	}
</style>