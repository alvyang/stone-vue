<template>
	<div>
		<i-input v-bind:config="config">
			<input type="text" placeholder="请输入..."/>
		</i-input>
	</div>
</template>
<script>
	import InputModule from "components/form/input.vue";
	
	export default({
		data(){
			return {
				config:{
					label:"用户名"
				}
			}
		},
		components:{
			'i-input':InputModule,
		}
	});
</script>
<style>
	
</style>