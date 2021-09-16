import React, { Component } from 'react'

import {Button,Space} from 'antd'

export default class Count extends Component {

    state={
        count:0
    }

    //加法
    increment=() => {
        console.log("执行加法")
        const{value}=this.selectNumber
        const{count}=this.state
        this.setState({count:count+ Number(value)})
        //this.setState({count:count+ value*1})
    }

    //减法
    decrement=() => {
        console.log("执行减法")
        const{value}=this.selectNumber
        const{count}=this.state
        this.setState({count:count-Number(value)})
    }
    
    //奇数再加
    incrementIfOdd=() => {
        console.log("奇数再加")
        const{value}=this.selectNumber
        const{count}=this.state
        if(count%2!==0){
            this.setState({count:count+Number(value)})
        }
    }
    
    //异步加
    incrementAsync=(params) => {
        console.log("执行异步")
        const{value}=this.selectNumber
        const{count}=this.state
        const timeOut= setTimeout(() => {
            this.setState({count:count+Number(value)})
            clearTimeout(timeOut)
        }, 500);    
    }


    render() {
        const {count}=this.state
        return (
            <div>
                <h1>当前求和为{count}</h1>
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
