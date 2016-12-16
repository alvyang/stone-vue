class Validator{
	constructor(el,vnode,binding){
		this.el = el;
		this.value = binding.value;
		this.vnode = vnode;
		//获取子组件（也就是form表单组件）data数据
		this.childData = vnode.context.$children[this.value];
		this.config = vnode.context.$data.config[this.value];
		
		var label = this.config.label;
		this.errorMsg={
			nonvoid: `${label}不能为空`,
	        reg: `${label}格式错误`,
//	        limit: `${name}必须在${ext[0]}与${ext[1]}之间`,
	        equal: `两次${label}不相同`,
	        less:`小于`,
	        greater:`大于`,
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
	//非空验证
	nonvoid(){
		var vaData = this.el.value;
		if(vaData){
			return true;
		}
		this.childData.errorMessage = this.errorMsg.nonvoid;
		return false;
	}
	//正则验证
	reg(){
		var vaData = this.el.value;
		var typeValue = this.config.typeValue;
		var regex = typeof typeValue == "string"?this.regs[typeValue]:typeValue;
		if(vaData.match(regex)){
			return true;
		}
		this.childData.errorMessage = this.errorMsg.reg;
		return false;
	}
	//比较验证
	compare(){
		var config = this.vnode.context.$data.config;
		var target = this.config.target;
		for(var i = 0 ; i < config.length ; i++){
			if(config[i].label == target){
				break;
			}
		}
		var source = this.vnode.context.$children[i].$el.getElementsByTagName("input")[0].value;
		if(this.el.value == source){
			return true;
		}
		this.childData.errorMessage = this.errorMsg.equal;
		return false;
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
	var type = v.config.type || "";
	if(!type){//配置信息中,无type,说明非必填
		v.childData.status = "";
		v.el.className = "";
		return;
	}
	var r = v[type]();
	if(r){
		v.childData.status = "success";
		v.el.className = "";
	}else{
		v.el.className = "error";
		v.childData.status = "error";
	}
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