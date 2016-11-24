import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入非组件类界面
import Main from "view/main.vue";
import Comp_lib from "view/component_library.vue";
//测试vue
import Form from "view/form.vue";
import Button from "view/button.vue";
import Other from "view/other.vue";
import Rule from "view/rule.vue";

//
import FormRouter from "router/form_router.js";

const router = new VueRouter({
	routes:[{
		path:'/',component:Main
	},{
		path:'/main',component:Main
	},{
		path:'/rule',component:Rule
	},{
		path:'/comp_lib',
		component:Comp_lib,
		children:[{
			path:"form",
        	name:"form",
        	component:Form,
        	children:FormRouter
        },{
        	path:"button",
        	name:"button",
            component: Button
        },{
        	path:"other",
        	name:"other",
            component: Other
        }]
	},{	//二级路由重新重定向
		path:'/nav/:id',name:'nav',redirect: to => {
	      	const {hash,params,query} = to;
	      	return {path:'/'+params.id};
    	}
	},{ //二级路由重新重定向
		path:'/menu/:id',name:'menu',redirect: to => {
	      	const {hash,params,query} = to;
	      	return {path:'/comp_lib/'+params.id};
    	}
	},{ //三级路由重新重定向
		path:'/option_tab/:id',name:'option_tab',redirect: to => {
	      	const {hash,params,query} = to;
	      	return {path:'/comp_lib/form/'+params.id};
    	}
	}]
});
export default router
