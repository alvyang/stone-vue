import Vue from	'vue/dist/vue.js';
import Navigation from "components/navigation/navigation.vue";
import NavigationRouter from "components/navigation/navigation.js";
import logo from "components/logo/logo.vue";

//注册全局组件
Vue.component('my-navigation',new Vue({
	router:NavigationRouter,
	...Navigation
}).$mount("#navigation"));

//注册子组件
new Vue({
	el:"#top",
	components: {
	    'my-logo':logo
	}
});