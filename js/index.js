import Vue from	'vue/dist/vue.js';
import Navigation from "components/navigation/navigation.vue";
import NavigationRouter from "components/navigation/navigation.js";
import logo from "components/logo/logo.vue";

//var MyNavigation = Vue.extend({
//	template:Navigation
//});
//
//Vue.component('my-navigation',MyNavigation);
//
//var MyLogo = Vue.extend({template:logo});
//
//Vue.component('my-logo',MyLogo);

new Vue({
	el:"#navigation",
	components: {
	    'my-navigation': new Vue({
	    		router:NavigationRouter,
	    		...Navigation
	    }).$amunt("#navigation"),
	    'my-logo':logo
	}
});