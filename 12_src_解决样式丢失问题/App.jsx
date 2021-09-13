import React, { Component } from 'react'
//引入react-router-dom
import {Route,Switch} from 'react-router-dom'    
import About from './pages/About' // About 是路由组件
import Home from './pages/Home'  // Home是路由组件
import Test from './pages/Test'

import Header from './components/Header' // Header是一般组件
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                        <div className="row">
                            <div className="col-xs-offset-2 col-xs-8">
                                <Header/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-2">
                                <div className="list-group">
                                {/*
                                原生Html中，靠<a>跳转不同的页面
                                <a className="list-group-item active" href="./about.html">About</a>
                                <a className="list-group-item" href="./home.html">Home</a> */}
                                    {/* 在React中靠路由链接是实现切换组件 -- 编写路由链接 */}
                                    <MyNavLink to="/luoqiu/about">About</MyNavLink>
                                    <MyNavLink to="/luoqiu/home">Home</MyNavLink>             
                            </div>
                            </div>
                             <div className="col-xs-6">
                                    <div className="panel">
                                        <div className="panel-body">
                                            {/* <Switch>
                                                <Route path='/about'>
                                                    <About />
                                                </Route>
                                                <Route path='/home'>
                                                    <Home />
                                                </Route>
                                            </Switch> */}
                                            {/* 注册路由 */}
                                            <Switch>
                                                <Route path='/luoqiu/about' component={About}/>
                                                <Route path='/luoqiu/home' component={Home}/>   
                                                {/* <Route path='/luoqiu/home' component={Test}/>   */}
                                            </Switch>
                                     </div>
                                 </div>
                             </div>
                        </div>
                </div>
            </div>
        )
    }
}
