---
title: 跨域的解决
description: "好像没啥用的description"
categories:
    - vue
tags:
    - vue
    - cross-domain
publish: true
date: 2021-5-17 10:00:00
---
在做天气查询的时候，调用到腾讯地图API，遇到了跨域问题，跨域还是挺普遍的  

所以来归纳一下跨域的解决方式吧（不全）

# 什么是跨域？
一般来说，跨域是一个网页去请求另一个不同源网页的资源时产生
这是由浏览器同源策略限制的

# 同源策略
同源指的是“协议+域名+端口”三者相同，任何一个不同，就会产生跨域
同源策略页数浏览器最核心和最基本的安全功能  
  
同源策略限制javascript代码部分行为：  
    1.Cookie、LocalStorage和IndexDB无法读取  
    2.DOM无法获得  
    3.AJAX请求不能发送    
    
# 一、vue-jsonp

首先安装vue-jsonp

:::tip
npm install vue-jsonp --save
:::
在vue cli项目的main.js中添加，**不要忘了{}**

:::tip
import { VueJsonp } form 'vue-jsonp'  
Vue.use(VueJsonp)
:::

然后就可在任意一个.vue文件使用

:::tip
可以直接使用this.$jsonp  
Vue.use(VueJsonp)方法将$jsonp赋给了vue原型: Vue.prototype.$jsonp = jsonp
:::

当然，你也可以在某个Vue文件的script中直接添加使用  

然后用法就是（这里用腾讯地图API举例，当然要真正使用还需去腾讯地图那设置ip白名单）
:::tip
let url = "api地址"   // 具体API封装请自行查询  
let data = {  
&emsp;key: "腾讯地图API的key",  
&emsp;output: "jsonp"  
}  
this.$jsonp(url, data)  // 可以看到jsonp返回的是promise对象  
&emsp;.then(res=>{})  
&emsp;.catch(error=>{})  
:::
**jsonp的跨域原理**  
不是发生ajax请求，而是script标签可以跨域。  

用js构造一个script标签，把json的url赋给script的src属性，将这个
script标签插入到dom，让浏览器获取  

# 二、proxy本地代理
在跟做云E办项目时，用到proxy代理获取后端的验证码（ps:他们没给我sql文件！我的项目进行不了！）  

首先在vue项目根目录下，创建vue.config.js文件
```js
module.exports = {
    devServer: {
        port: 端口号,
        https: false,
        proxy: {
            '/api': {   // 如果是首页，那么这里就是'/'，也就是请求的位置路由
                ws: false, // 不启动websocket
                target: '目标地址',
                changeOrigin: true, //发生请求头host被置换为target
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}
```