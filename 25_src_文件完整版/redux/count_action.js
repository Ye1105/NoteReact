/*
 * @Author: your name
 * @Date: 2021-09-16 13:49:53
 * @LastEditTime: 2021-09-16 14:10:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\redux\coun_action.js
 */

 /* 
    该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from './constant'

const createIncrementAction=(data)=>({type:INCREMENT,data})  //简写方式

const createDecrementAction=(data)=>{
    return {type:DECREMENT,data}
}

/* 分别暴露 */
export {createIncrementAction,createDecrementAction}