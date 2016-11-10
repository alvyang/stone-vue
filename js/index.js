import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Navigation from "components/navigation/navigation.vue";
import logo from "components/logo/logo.vue";
import menu from "components/menu/menu.vue";

Vue.use(VueRouter);

/* 
 * 创建全局组件，并在vue组件，发送异步请求，获取menu数据
 */
var Menu = Vue.component('my-menu',{
	...menu
});

var Main = {template : "<div>首页</div>"};
const routes = [
	{path:'/nav/1',component:Main},
	{path:'/nav/2',component:Menu}
];
const router = new VueRouter({
	routes
});
/*
 * 注册子组件,并在子组件中，通过props  default的方式传入固定值。
 */
new Vue({
	el:"#navigation",
	router,
	components: {
		'my-navigation':Navigation,
	    'my-logo':{
	    	...logo,
	    	props:{
				logo:{
					default:"vue"
				}
			}
	    }
	}
});