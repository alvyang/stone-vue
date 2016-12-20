class Validator{
	constructor(el,vnode,value){
		this.el = el;
		this.value = value;
		this.vnode = vnode;
		//获取子组件（也就是form表单组件）data数据
		this.childData = vnode.context.$children[this.value];
		this.config = vnode.context.$data.config[this.value];
		var label = this.config.label;
		var target = this.config.target || "";
		var limit = typeof this.config.typeValue == "object"? this.config.typeValue : [];
		this.errorMsg={
			nonvoid: `${label}不能为空`,
	        reg: `${label}格式错误`,
	        limit: `${label}长度必须在${limit[0]}与${limit[1]}之间`,
	        equal: `${label}与${target}不相同`,
	        less:`${label}必须小于${target}`,
	        greater:`${label}必须大于${target}`,
	        lessEquql:`${label}必须小于等于${target}`,
	        greaterEqual:`${label}必须大于等于${target}`,
		};
		this.regs={
			phone:/^1[3|4|5|7|8]\d{9}$/,
			email:/^(\w)+(\.\w+)*@([\w-])+((\.\w+)+)$/g,
			money:/^\d{1,}(\.\d{1,2})?$/,
			realName: /^[\u4e00-\u9fa5 ]{2,10}$/,
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
		//获取要比较的值
		var source = this.vnode.context.$children[i].$el.getElementsByTagName("input")[0].value;
		if(!source){//如果要比较的目标值不存在,则验证通过
			return true;
		}
		if(this.config.typeValue == "equal" && this.el.value == source	){
			return true;
		}else if(this.config.typeValue == "greater" && this.el.value > source	){
			return true;
		}else if(this.config.typeValue == "less" && this.el.value < source	){
			return true;
		}else if(this.config.typeValue == "less-equql" && this.el.value <= source	){
			return true;
		}else if(this.config.typeValue == "greater-equal" && this.el.value >= source	){
			return true;
		}
		
		if(this.config.typeValue == "equal"){
			this.childData.errorMessage = this.errorMsg.equal;
		}else if(this.config.typeValue == "greater"){
			this.childData.errorMessage = this.errorMsg.greater;
		}else if(this.config.typeValue == "less"){
			this.childData.errorMessage = this.errorMsg.less;
		}else if(this.config.typeValue == "less-equql"){
			this.childData.errorMessage = this.errorMsg.lessEquql;
		}else if(this.config.typeValue == "greater-equal"){
			this.childData.errorMessage = this.errorMsg.greaterEqual;
		}
		return false;
	}
	//比较区间
	limit(){
		var len = this.el.value.length;
		var min = this.config.typeValue[0];
		var max = this.config.typeValue[1];
		if(len >= min && len <= max){
			return true;
		}
		this.childData.errorMessage = this.errorMsg.limit;
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
		v.childData.status = "success";
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
	methods:{
		submitCheck(){
			var f = this.$children;
			for(var i = 0 ; i < f.length ;i++){
				console.log(f[i].$vnode);
				var c = f[i].$el.getElementsByTagName("input")[0];
				var v = new Validator(c,f[i].$vnode,i);
				blur(v);
			}
		}
	},
	directives: {
	  	validator:{
	  		bind:function(el,binding,vnode,oldVnode){
	  			var v = new Validator(el,vnode,binding.value);
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