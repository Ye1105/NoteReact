/* 
    汇总所有的reducer变为总的reducer
*/

//引入为count组件服务的reducer
import count from './count'
import persons from './person'
import {combineReducers} from 'redux'
 
export default combineReducers({
    count,
    persons
})