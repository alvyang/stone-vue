import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//测试vue
import Form from "view/form.vue";
import Button from "view/button.vue";
import Other from "view/other.vue";

//引入子路由
import NavRouter from "router/routers/nav_router.js";
import FormRouter from "router/routers/form_router.js";

import Main from "view/main.vue";

const User = {
  template: `
    <div class="user">
      <router-view></router-view>
    </div>
  `
}
const router = new VueRouter({
	routes:[{
		path:'/',component:Main
	},{
		path:'/nav/:id',
		name:'nav',
		component:User,
		children:NavRouter
	}]
});
export default router
