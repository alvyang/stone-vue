<template>
	<div>
		<i-input v-bind:config="c" v-for="(c,index) in config">
			<input type="text" placeholder="请输入..." v-validator="index"/>
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
					label:"手机号码",
					type:"reg",
					typeValue:"phone",
				},{
					label:"密码",
					type:"nonvoid"
				},{
					label:"确认密码",
					type:"compare",
					target:"密码",
				},{
					label:"备注"
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