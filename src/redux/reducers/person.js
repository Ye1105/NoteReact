/*
 * @Author: your name
 * @Date: 2021-09-18 14:21:44
 * @LastEditTime: 2021-09-18 16:39:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\redux\reducers\person.js
 */
import {ADD_PERSON} from '../constant'

const initState=[{name:'yejiancong',age:26}] //初始化状态

export default function personReducer(perState=initState,action)
{
    console.log('初始化personReducer')
    const {type,data}=action
    //console.log(type,data)
    switch (type) {
        case ADD_PERSON:
            console.log('add_person',data)
            //展开运算符
            return [data,...perState]
        default:
            return perState
    }
}