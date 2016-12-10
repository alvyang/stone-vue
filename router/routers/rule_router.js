//引入所有form表单，vue页面
const Color= resolve => require.ensure([], () => resolve(require('view/rule_view/color.vue')), 'group-rule');
const Font= resolve => require.ensure([], () => resolve(require('view/rule_view/font.vue')), 'group-rule');

export default [{
	path:'',component:Color
},{
	path:'color',component:Color
},{
	path:'font',component:Font
}]