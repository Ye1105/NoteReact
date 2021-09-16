/*
 * @Author: your name
 * @Date: 2021-09-10 10:12:30
 * @LastEditTime: 2021-09-16 13:39:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\index.js
 */
import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'

import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))


store.subscribe(() => {
    ReactDOM.render(<App/>,document.getElementById('root'))
})