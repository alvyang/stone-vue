//引入所有form表单，vue页面
import Input from "view/form/input.vue";
import Checkbox from "view/form/checkbox.vue";
import Radio from "view/form/radio.vue";
import Select from "view/form/select.vue";
import Selects from "view/form/selects.vue";

export default [{
	path:'',component:Input
},{
	path:'input',component:Input
},{
	path:'checkbox',component:Checkbox
},{
	path:'radio',component:Radio
},{
	path:'select',component:Select
},{
	path:'selects',component:Selects
}]
