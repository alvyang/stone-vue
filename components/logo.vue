<template>
	<div class="logo">
		<router-link :to="{path:'/'}" >{{logo}}</router-link>
	</div>
</template>
<style>
	.logo{
		position:absolute;
		background: url(../img/stone.png) center center no-repeat;
		background-size: 60px auto;
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
	    color: black;
	    cursor: default;
	    padding-left: 115px;
	    font-size: 25px;
	    line-height: 75px;
	}
</style>