import Vue from	'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Navigation from "components/navigation/navigation.vue";
import logo from "components/logo/logo.vue";
import menu from "components/menu/menu.vue";

Vue.use(VueRouter);

//Vue.component('my-menu',{
//	...menu
//});
//new Vue({
//	el:"#menu"
//});

//注册子组件
new Vue({
	el:"#navigation",
	components: {
		'my-navigation':Navigation,
	    'my-logo':logo
	}
});