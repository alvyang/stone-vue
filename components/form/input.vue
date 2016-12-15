<template>
	<div class="input_module_div">
		<label>{{config.label}}</label>
		<slot></slot><img v-show="status == 'success'" src="./img/success.png"/>
		<div v-show="status == 'error'" class="error_message">{{errorMessage}}</div>
		<div v-show="status == 'focus'" class="focus_message">请输入{{config.label}}</div>
	</div>
</template>
<script>
	export default({
		data(){
			return {
				status:"",
				errorMessage:"",
			}
		},
		props:['config']
	});
</script>
<style>
	.input_module_div{
		margin-top: 10px;
	}
	.input_module_div label{
		display: inline-block;
		width: 75px;
		padding-right: 5px;
		text-align: right;
		color: #333333;
	}
	.input_module_div input{
		width:238px;
		height: 36px;
		border: solid 1px #e3e3e3;
		outline: none;
		padding-left: 5px;
		vertical-align: middle;
	}
	.input_module_div img{
		vertical-align: middle;
		margin-left: 5px;
	}
	.input_module_div .active{
		background-color: #e7f4fa;
		border: solid 1px #66c2e8;
	}
	.input_module_div .error{
		background-color: #f9ebea;
		border: solid 1px #ec827f;
	}
	.error_message,.focus_message{
		/*display: inline-block;这一句提示信息一行显示*/
		height: 16px;
		line-height:16px;
		font-size: 12px;
	    padding-left: 20px;
	    margin-left: 90px;
	    margin-top: 5px;
	}
	.focus_message{
		background: url(img/alert.png) left center no-repeat;
		color: #333333;
	}
	.error_message{
		background: url(img/error.png) left center no-repeat;
		color: #f24040;
	}
</style>