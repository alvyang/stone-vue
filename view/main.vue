<template>
	<div class="main" style='text-align:center;'>
		<my-navigation></my-navigation>
		<my-logo></my-logo>
		<router-view></router-view>
	</div>
</template>
<script>
	//引入组件
	import Navigation from "components/navigation.vue";
	import Logo from "components/logo.vue";
	
	export default({
		components:{
			'my-navigation':Navigation,
		    'my-logo':Logo
		}
	});
</script>
<style>

</style>