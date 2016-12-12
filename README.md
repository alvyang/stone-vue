#简介
创建该项目有以下几个目的
*学习使用vue以及与vue相关插件。
*用vue做前端组件。  
前端界面显示参考  
[MTUI](http://mtui.mtsee.com/)  
[iView](https://www.iviewui.com/)			

#目录结构
> +build		webpack打包后的文件  
> +components	项目中用到的公共组件  
>> -logo	logo组件  
>> -navigation	导航组件  
>> -menu	左侧菜单导航  

> +css	项目全局css样式  
> +db	项目用到的静态数据和模拟获取数据库json数据  
> +img	项目全局图片  
> +js	项目全局js文件  
> +lib  项目js工具类  
> +router	路由  
> +view 非组件类vue界面  


#组件  
##components/navigation
1.在配置文件db/data.json中以json格式，配置导航信息。  
2.在navigation.vue文件中，异步请求data.json中的nav数据，并初始化导航栏。  
3.navigation组件以子组件的方式，注册到id为navigation的vue下。
##components/logo
项目logo组件