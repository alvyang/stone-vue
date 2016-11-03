import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import Navigation from "components/navigation/navigation.vue";

Vue.use(VueRouter);

const router = new VueRouter({});

new Vue({
	router,
	...Navigation
}).$mount('#navigation');