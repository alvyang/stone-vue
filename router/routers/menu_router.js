//引入非组件类界面
import Form from "view/component_view/form.vue";
import Button from "view/component_view/button.vue";
import Other from "view/component_view/other.vue";

//引入表单子路由
import formRouter from "router/routers/form_router.js";

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