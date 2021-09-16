/*
 * @Author: your name
 * @Date: 2021-09-16 13:49:53
 * @LastEditTime: 2021-09-16 14:52:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\redux\coun_action.js
 */

 /* 
    该文件专门为Count组件生成action对象
 */
//同步aciton,就是指action的值为Object类型的一般对象
import {INCREMENT,DECREMENT} from './constant'

const createIncrementAction=(data)=>({type:INCREMENT,data})  //简写方式

const createDecrementAction=(data)=>{
    return {type:DECREMENT,data}
}
//所谓的异步action,就是指action的值为函数
const createIncrementAsyncAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            console.log('执行异步action',data,time)
            dispatch(createIncrementAction(data))
        }, time)
    }
}


/* 分别暴露 */
export {createIncrementAction,createDecrementAction,createIncrementAsyncAction}