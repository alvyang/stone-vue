<template>
	<div class="logo">
		<router-link :to="{path:'/'}" >{{logoName}}</router-link>
	</div>
</template>
<style>
	.logo{
		position:absolute;
		background: url(../img/logo.png) 20px center no-repeat;
		background-size: 30px auto;
		left: 0;
		top: 0;
		height:55px;
		width: 150px;
		line-height:55px;
		text-align: center;
		color: #666666;
		cursor: default;
	}
	.logo a{
		text-decoration: none;
	    color: black;
	    cursor: pointer;
        padding-left: 40px;
   		font-size: 15px;
	    line-height: 55px;
	}
</style>