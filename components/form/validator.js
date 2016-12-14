export default({
	directives: {
	  	validator:{
	  		bind:function(el,binding,vnode,oldVnode){
	  			console.log(el);
	  			console.log(binding);
	  			console.log(vnode.context.$data);
	  			vnode.context.$data.inputMessage[binding.value].error = "没错";
	  		}
	  	}
	},
	methods:{
		inputFocus(){
			
		},
		inputBlur(){
			
		}
	}
});