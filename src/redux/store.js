/*
 * @Author: your name
 * @Date: 2021-09-16 12:32:03
 * @LastEditTime: 2021-09-18 16:31:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\redux\store.js
 */
/* 该文件专门用于暴露一个store对象，整个应用只有一个store对象 */

//引入createStore,专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

import allReducer from './reducers/index'

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

