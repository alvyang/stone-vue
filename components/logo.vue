<template>
	<div class="logo">
		<router-link :to="{path:'/'}" >复方view</router-link>
	</div>
</template>
<style>
	.logo{
		position:absolute;
		background: url(../img/logo.png) 20px center no-repeat;
		background-size: 40px auto;
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
	    cursor: pointer;
        padding-left: 57px;
   		font-size: 15px;
	    line-height: 75px;
	}
</style>