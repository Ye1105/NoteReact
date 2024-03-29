/*
 * @Author: your name
 * @Date: 2021-09-10 10:12:30
 * @LastEditTime: 2021-09-17 18:00:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\index.js
 */
import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'

import store from './redux/store'

import {Provider} from 'react-redux'

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
,document.getElementById('root'))

//监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
/* store.subscribe(() => {
    ReactDOM.render(<App/>,document.getElementById('root'))
}) */