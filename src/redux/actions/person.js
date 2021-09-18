/*
 * @Author: your name
 * @Date: 2021-09-18 11:25:54
 * @LastEditTime: 2021-09-18 14:21:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\redux\actions\person.js
 */
import {ADD_PERSON} from '../constant'

const createAddPersonAction=(data)=>({type:ADD_PERSON,data})  //简写方式

export {createAddPersonAction}