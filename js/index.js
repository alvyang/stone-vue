import Vue from	'vue/dist/vue.js';
import Navigation from "components/navigation/navigation.js";
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
	    'my-navigation': Navigation,
	    'my-logo':logo
	}
});