import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);
//引入非组件类界面
import Main from "view/main.vue";
import Comp_lib from "view/component_library.vue";

//测试vue
import From from "view/form.vue";
import Button from "view/button.vue";
import Other from "view/other.vue";

const router = new VueRouter({
	routes:[{
		path:'/',component:Main
	},{
		path:'/main',component:Main
	},{
		path:'/comp_lib',
		component:Comp_lib,
		children:[{
			path:"",
            component: From
        },{
			path:"form",
        	name:"form",
            component: From
        },{
        	path:"button",
        	name:"button",
            component: Button
        },{
        	path:"other",
        	name:"other",
            component: Other
        }]
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

export default router
