import React, { Component } from 'react'

import {Button,Space} from 'antd'

export default class Count extends Component {

    //加法
    increment=() => {
        console.log("执行加法")
        //通知redux加value
        const{value}=this.selectNumber
        this.props.jia(value*1)
    }

    //减法
    decrement=() => {
        console.log("执行加法")
        //通知redux加value
        const{value}=this.selectNumber
        this.props.jian(value*1)
    }
    
    //奇数再加
    incrementIfOdd=() => {
        console.log("奇数再加")
        const{value}=this.selectNumber

    }
    
    //异步加
    incrementAsync=(params) => {
        console.log("执行异步")
        const{value}=this.selectNumber
        this.props.jiaAsync(value*1,1000)
    }


    render() {
        console.log("countUI组件接收到的参数：",this.props.name)
        return (
            <div>
                <h1>当前求和为:{this.props.name}</h1>
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
