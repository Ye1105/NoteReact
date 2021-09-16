import React, { Component } from 'react'

import {Button,Space} from 'antd'
//引入store,获取状态
import store from '../../redux/store'

export default class Count extends Component {

    //加法
    increment=() => {
        console.log("执行加法")
        //通知redux加value
        const{value}=this.selectNumber
        store.dispatch({type:'increment',data:value*1})
        //将致使组件调用 render() 方法
        //this.forceUpdate()
    }

    // componentDidMount(){
    //     //监测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(() => {
    //         console.log("subscribe@")
    //         //this.forceUpdate()
    //         this.setState({})
    //     })
    // }


    //减法
    decrement=() => {
        console.log("执行加法")
        //通知redux加value
        const{value}=this.selectNumber
        store.dispatch({type:'decrement',data:value*1})
    }
    
    //奇数再加
    incrementIfOdd=() => {
        console.log("奇数再加")
        const{value}=this.selectNumber
        const count=store.getState()
        if(count%2!==0){
            store.dispatch({type:'increment',data:value*1})
        }
    }
    
    //异步加
    incrementAsync=(params) => {
        console.log("执行异步")
        const{value}=this.selectNumber
        const count=store.getState()
        const timeOut= setTimeout(() => {
            store.dispatch({type:'decrement',data:value*1})
            clearTimeout(timeOut)
        }, 500);    
    }


    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <Space size='small'>
                    <select ref={c=>{this.selectNumber=c} }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
            
                    <Button type='primary' onClick={this.increment}>+</Button>
                    <Button onClick={this.decrement}>-</Button>
                    <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
                    <Button onClick={this.incrementAsync}>异步</Button>

                </Space>
            </div>
   
        )
    }
}
