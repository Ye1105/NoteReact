import React, { Component } from 'react'

//引入react-router-dom
import {Link,Route} from 'react-router-dom'    

import About from './components/About'  //About是路由组件

import Home from './components/Home'    //Home是路由组件

export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
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
                                <Link to="/about" className="list-group-item">About</Link>
                                <Link to="/home" className="list-group-item">Home</Link>
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
                                    <Route path='/home' component={Home}/>
                                    <Route path='/about' component={About}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
