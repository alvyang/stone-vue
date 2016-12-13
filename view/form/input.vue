<template>
	<div>
		<i-input v-bind:alert_message="aData">
			<input slot="input_module" placeholder="请输入..."/>			
		</i-input>
		<i-input v-bind:alert_message="aData">
			<input slot="input_module" placeholder="请输入..."/>			
		</i-input>
	</div>
</template>
<script>
	import InputModule from "components/form/input.vue";
	export default({
		data(){
			return {
				aData:{
					s:"123",
					h:"456",
				}
			}
		},
		components:{
			'i-input':InputModule
		}
	});
</script>
<style>
	
</style>