<template>
	<div class="input_module_div">
		<label></label>
		<slot></slot>
		<div v-show="inputMessage.inputStatus == 'error'">{{inputMessage.error}}</div>
		<div v-show="inputMessage.inputStatus == 'focus'">{{inputMessage.focus}}</div>
	</div>
</template>
<script>
	export default({
		props:['inputMessage']
	});
</script>
<style>
	.input_module_div input{
		width:238px;
		height: 36px;
		border: solid 1px #e3e3e3;
		outline: none;
		padding-left: 5px;
	}
	.input_module_div .active{
		background-color: #e7f4fa;
		border: solid 1px #66c2e8;
	}
	.input_module_div .error{
		background-color: #f9ebea;
		border: solid 1px #ec827f;
	}
</style>