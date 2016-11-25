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
import FormRouter from "router/routers/form_router.js";

const router = new VueRouter({
	routes:[{
		path:'/',component:Main,
		children:[]
	}]
});
export default router
