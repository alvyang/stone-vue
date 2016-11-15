import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';
//引入组件
import Navigation from "components/navigation.vue";
import Logo from "components/logo.vue";
//引入非组件类界面
import Main from "view/main.vue";
import Comp_lib from "view/component_library.vue";
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[{
		path:'/',component:Main
	},{
		path:'/main',component:Main
	},{
		path:'/comp_lib',
		component:Comp_lib,
		subRoutes: {
            'form': {
            	name:"form",
                component: "<div>form</div>"
            },
            'button': {
            	name:"button",
                component: "<div>button</div>"
            }
        }
	},{
		path:'/nav/:id',name:'nav',redirect: to => {
	      	const {hash,params,query} = to;
	      	return {path:'/'+params.id};
    	}
	},{
		path:'/menu/:id',name:'menu',redirect: to => {
	      	const {hash,params,query} = to;
	      	return {path:'/comp_lib/'+params.id};
    	}
	}]
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