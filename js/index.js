import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Navigation from "components/navigation/navigation.vue";
import logo from "components/logo/logo.vue";
import Menu from "components/menu/menu.vue";

Vue.use(VueRouter);

var Main = {template : "<div>首页</div>"};
const Home = {template: '<router-view></router-view>' }
const router = new VueRouter({
	routes:[
		{path:'/',component:Home,children:[
			{path:'',component:Main},
			{path:'main',component:Main},
			{path:'menu',component:Menu}
		]},
		{path:'/nav/:id?',name:'nav',redirect: to => {
	      	const {hash,params,query} = to;
	      	return {path:'/'+params.id};
	    }},
	    //catch all redirect
    	{ path: '*', redirect: '/' }
	]
});
/*
 * 注册子组件,并在子组件中，通过props  default的方式传入固定值。
 */
new Vue({
	el:"#navigation",
	router,
	components:{
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