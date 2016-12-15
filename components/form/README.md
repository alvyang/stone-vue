#前言

#input 组件
form表单组件中data返回config数组  
config:[{  
	label:"用户名",  
	type:"nonvoid",  
},{  
	label:"密码",  
	type:"",  
}]  
type:类型（非必填不传该值）
nonvoid:(非空)  
reg:(正则)  
limit:(区间)  
equal:(与某个input相等)  
unique:(不能相同)  

#组件设计原则  
1.组件中不对html5自字义标签，如：text、placeHolder、maxlength等属性进行二次赋值。  
2.组件中只提供提示信息、错误信息、输入框样式模板，不对数据做任何处理。  

#表单验证validator.js

#表单验证设计原则
[参考](https://segmentfault.com/a/1190000007575302)  
1.在构造函数中，加载配置参数。  
2.集中式的管理检验规则和报错内容模板。  
3.按顺序来检验。  
4.检验时机可选。  
5.检验正确后，打包成对象，可以直接使用。