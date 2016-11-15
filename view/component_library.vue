<template>
	<div>
		<my-menu></my-menu>
		<router-view></router-view>
	</div>
</template>
<script>
	import Menu from "components/Menu.vue";
	
	export default({
		components:{
			'my-menu':Menu
		}
	});
</script>
<style>
	
</style>