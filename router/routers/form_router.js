//引入所有form表单，vue页面
const Input= resolve => require.ensure([], () => r(require('view/form/input.vue')), 'group-from');
const Checkbox= resolve => require.ensure([], () => r(require('view/form/checkbox.vue')), 'group-from');
const Radio= resolve => require.ensure([], () => r(require('view/form/radio.vue')), 'group-from');
const Select= resolve => require.ensure([], () => r(require('view/form/select.vue')), 'group-from');
const Selects= resolve => require.ensure([], () => r(require('view/form/selects.vue')), 'group-from');

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