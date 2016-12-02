import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入子路由
import navRouter from "router/routers/nav_router.js";

const router = new VueRouter({
	routes:[
		...navRouter
	]
});
export default router