import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const nav = {
	template:`<div>
				<h2>nav {{$route.params.id}}</h2>
			  </div>`,
	watch: {
	    '$route' (to, from) {
//	      	// 对路由变化作出响应...
//	      	console.log(to);
//	      	console.log(from);
	    }
	}
};

const router = new VueRouter({
	routes:[
		//动态路径参数，以冒号开头
		{path:'/nav/:id',name:'nav',component:nav}
	]
});

export default router