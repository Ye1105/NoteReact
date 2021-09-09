/*
 * @Author: Jiancong Ye
 * @Date: 2021-09-09 10:10:26
 * @LastEditTime: 2021-09-09 11:03:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\setupProxy.js
 */

/*
 *http-proxy-middleware 按住ctrl键
 *点击可查 react脚手架 中已经配置，如果没有配置，
 *yarn add http-proxy-middleware --save
*/ 

const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		proxy('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
		}),
		proxy('/api2',{
			target:'http://localhost:5001',
			changeOrigin:true,
			pathRewrite:{'^/api2':''}
		}),
	)
}