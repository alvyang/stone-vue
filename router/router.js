import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//测试vue
import Form from "view/form.vue";
import Button from "view/button.vue";
import Other from "view/other.vue";

//引入子路由
import fromRouter from "router/routers/form_router.js";
import navRouter from "router/routers/nav_router.js";
const allRoutes = [
	...fromRouter,
	...navRouter
];

//引入非组件类界面
import Main from "view/main.vue";
const router = new VueRouter({
	routes:[{
			path:'/',component:Main
		},{
			path:'/nav/:id',
			name:'nav',
			component:Main
		},
		...allRoutes
	]
});
export default router
