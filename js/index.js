import Vue from	'vue/dist/vue.js';
import VueResource from 'vue-resource';
//引入组件
import Navigation from "components/navigation.vue";
import Logo from "components/logo.vue";
Vue.use(VueResource);

//引入路由
import router from "router/router.js";
/*
 * 1.注册子组件,并在子组件中，通过props  default的方式传入固定值。
 * 2.将路由功能，添加到app下，将所有的子组件，添加相同的路由功能。
 */
new Vue({
	el:"#app",
	router,
	components:{
		'my-navigation':Navigation,
	    'my-logo':{
	    	...Logo,
	    	props:{
				logo:{
					default:"vue"
				}
			}
	    }
	}
});