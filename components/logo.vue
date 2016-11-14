<template>
	<div class="logo">
		<router-link :to="{path:'/'}" >{{logo}}</router-link>
	</div>
</template>
<style>
	.logo{
		position:absolute;
		left: 0;
		top: 0;
		height:80px;
		width: 150px;
		line-height:80px;
		text-align: center;
		cursor: default;
	}
	.logo a{
		text-decoration: none;
		color:#f04046;
		cursor: default;
	}
</style>