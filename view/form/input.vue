<template>
	<div>
		<i-input v-bind:input-message="inputMessage[0]">
			<input placeholder="请输入..." v-validator="0"/>
		</i-input>
	</div>
</template>
<script>
	import InputModule from "components/form/input.vue";
	import validator from "components/form/validator.js";
	
	export default({
		data(){
			return {
				inputMessage:[{
					inputStatus:"error",
					error:"格式错误",
					focus:"请输入",
				},{
					inputStatus:"focus",
					error:"格式错误",
					focus:"请输入",
				}]
			}
		},
		mixins: [validator],
		components:{
			'i-input':InputModule,
		}
	});
</script>
<style>
	
</style>