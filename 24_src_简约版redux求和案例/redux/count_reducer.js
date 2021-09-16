/*
 * @Author: your name
 * @Date: 2021-09-16 12:32:15
 * @LastEditTime: 2021-09-16 13:24:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\redux\count_reducer.js
 */

/* 
    1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
    2.reducer函数会接收到两个参数，分别为：之前的状态（preState）,动作对象（action）
 */

const initState=0 //初始化状态

export default function countReducer(preState=initState,action){
    //console.log(preState,action)
    //从action对象中获取：type，data
    const{type,data}=action
    switch (type) {
        case 'increment':  //如果是加
            console.log('执行increment')
            return preState+data
        case 'decrement':  //如果是减
            return preState-data
        default:
            return preState
    }
}