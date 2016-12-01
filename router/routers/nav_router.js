//引入非组件类界面
import Main from "view/main.vue";
import Comp_lib from "view/component_library.vue";
import Rule from "view/rule.vue";

//组件库类型路由
import menuRouter from "router/routers/menu_router.js";

export default [{
	path:"/",component:Main
},{
	path:"/main",component:Main
},{
	path:"/comp_lib",
	component:Comp_lib,
	children:menuRouter,
},{
	path:"/rule",component:Rule
}]