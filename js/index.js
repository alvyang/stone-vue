import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Navigation from "components/navigation.vue";
import Logo from "components/logo.vue";
import Menu from "components/menu.vue";

Vue.use(VueRouter);

const Main = {template : "<div style='text-align:center;'>首页</div>"};
const Home = {template: '<router-view></router-view>'};
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
 * 1.注册子组件,并在子组件中，通过props  default的方式传入固定值。
 * 2.将路由功能，添加到app下，将所有的子组件，添加相同的路由功能。
 */
new Vue({
	el:"#app",
	router,
	components:{
		'my-navigation':Navigation,
	    'my-logo':{
		    	...Logo,
		    	props:{
				logo:{
					default:"vue"
				}
			}
	    }
	}
});