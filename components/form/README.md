#前言

#input 组件
form表单组件中data返回config数组,数组每一项可配置属性：  
*	label:表单元素前的名称    
*	type:表示表单验证类型，包含以下属性：  
	- nonvoid：非空验证  
    - reg:正则表达式验证  
	- compare:比较验证  
*	typeValue:不同的type值，设置不同的typeValue值  
	1. type为reg时，typeValue包含以下属性  
    phone（手机号码）、email（邮箱）等。也可以直接配置正则表达式  
    2. type为compare时，typeValue包含以下属性  
    equal（相等）、less（小于）、greater（大于）
*	target:当type为compare时配置，该值为对应表单的tabel值
  

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