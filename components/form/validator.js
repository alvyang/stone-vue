var elem,data;
function inputFocus(){
	elem.className = "active";
	data.inputStatus = "focus";
}
function inputBlur(){
	elem.className = "error";
	data.inputStatus = "error";
}
export default({
	directives: {
	  	validator:{
	  		bind:function(el,binding,vnode,oldVnode){
	  			elem = el;
	  			data = vnode.context.$data.inputMessage[binding.value];
	  			el.onfocus = inputFocus;
	  			el.onblur = inputBlur;
	  		}
	  	}
	}
});