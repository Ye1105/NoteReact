/*
 * @Author: your name
 * @Date: 2021-09-09 11:16:33
 * @LastEditTime: 2021-09-13 09:35:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Web.Project.React\src\index.js
 */
//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';

//分别引入  react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'

//引入App
import App from './App';

ReactDOM.render(
<Router>
    <App/>
</Router>
,document.getElementById('root'));