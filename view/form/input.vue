<template>
	<div>
		<i-input v-bind:config="config[0]">
			<input type="text" placeholder="请输入..." v-validator="0"/>
		</i-input>
		<i-input v-bind:config="config[1]">
			<input type="text" placeholder="请输入..." v-validator="1"/>
		</i-input>
		<i-input v-bind:config="config[2]">
			<input type="text" placeholder="请输入..." v-validator="2"/>
		</i-input>
	</div>
</template>
<script>
	import InputModule from "components/form/input.vue";
	import validator from "components/form/validator.js";
	
	export default({
		data(){
			return {
				config:[{
					label:"用户名",
					type:"nonvoid",
				},{
					label:"密码",
					type:"reg",
				},{
					label:"确认密码"
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