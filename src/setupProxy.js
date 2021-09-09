/*
 * @Author: your name
 * @Date: 2021-09-09 11:20:14
 * @LastEditTime: 2021-09-09 11:22:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\setupProxy.js
 */

const proxy=require('http-proxy-middleware');

module.exports=function(app){
    app.use(
        proxy('/api1',{  //遇见 /api1 前缀的请求，就会触发该代理配置
            target:'http://localhost:5000',
            changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
        })
    )
}