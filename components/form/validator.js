class Validator{
	constructor(el,vnode,binding){
		this.el = el;
		this.value = binding.value;
		//获取子组件（也就是form表单组件）data数据
		this.childData = vnode.context.$children[this.value];
		this.config = vnode.context.$data.config[this.value];
		
		var label = this.config.label;
		this.errorMsg={
			nonvoid: `${label}不能为空`,
	        reg: `${label}格式错误`,
//	        limit: `${name}必须在${ext[0]}与${ext[1]}之间`,
//	        equal: `两次${ext}不相同`,
	        unique: `${label}重复`,
		};
		this.regs={
			phone:/^1[3|4|5|7|8]\d{9}$/,
			email:/^(\w)+(\.\w+)*@([\w-])+((\.\w+)+)$/g,
			money:/^\d{1,}(\.\d{1,2})?$/,
			realName: /^[\u4e00-\u9fa5 ]{2,10}$/,
			userName: /^[\w|\d]{4,16}$/,
    		password: /^[\w!@#$%^&*.]{6,16}$/,
    		imgCode: /^[0-9a-zA-Z]{4}$/,
		    smsCode: /^\d{6}$/,
		    bankNum: /^\d{10,19}$/,
		    answer: /^\S+$/,
		};
	}
	
	novoid(){
		var type = this.config.type || "";
		
	}
}
/*
 * 以下两个方法用于监听表单的focus blur事件，参数validator对象
 */
function focus(v){//获取焦点事件
	v.el.className = "active";
	v.childData.status = "focus";
}
function blur(v){//失去焦点事件
	v.el.className = "error";
	v.novoid();
	v.childData.status = "error";
}
export default({
	directives: {
	  	validator:{
	  		bind:function(el,binding,vnode,oldVnode){
	  			var v = new Validator(el,vnode,binding);
	  			el.onfocus = function(){
	  				focus(v);
	  			};
	  			el.onblur = function(){
	  				blur(v);
	  			};
	  		}
	  	}
	}
});