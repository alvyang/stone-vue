//引入表单子路由
import formRouter from "router/routers/form_router.js";

//引入非组件类界面
const Other= resolve => require.ensure([], () => r(require('view/component_view/other.vue')), 'group-menu');
const Button= resolve => require.ensure([], () => r(require('view/component_view/button.vue')), 'group-menu');
const Form= resolve => require.ensure([], () => r(require('view/component_view/form.vue')), 'group-menu');
					   
export default [{
	path:"",
	component:Form,
	children:formRouter
},{
	path:"form",
	component:Form,
	children:formRouter
},{
	path:"button",component:Button
},{
	path:"other",component:Other
}]