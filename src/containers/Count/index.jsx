//引入Count的UI组件
//import CountUI from '../../components/Count'
import React, { Component } from 'react'

import {Button,Space} from 'antd'

//引入connect用于连接UI组件和redux组件
import{connect} from 'react-redux'

//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'

//使用connet()() 创建并暴露一个Count的容器组件

/* 
  1.mapStateToProps函数返回的是一个对象
  2.函数的返回值作为状态传递给了UI组件props的key,value就作为传递给UI组件props的value ------ 状态
 */
//const mapStateToProps= state => ({name:state})

/*
  1.mapDispatchToProps函数返回的是一个函数
  2. 函数的返回值作为状态传递给了UI组件props的key,value就作为传递给UI组件props的value ------ 操作状态的方法 
*/
/* const mapDispatchToProps= dispatch =>
  ({
    //通知redux执行加法
    jia:number=>  dispatch(createIncrementAction(number)),
    jiaAsync:(number,time)=>  dispatch(createIncrementAsyncAction(number,time)),
    jian:number=>  dispatch(createDecrementAction(number))
  }) */


//定义UI组件
class Count extends Component {

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

export default connect(
  state => ({name:state.he}),

  //mapDispatchToProps 的一般写法
  /*  dispatch =>
      ({
        //通知redux执行加法
        jia:number=>  dispatch(createIncrementAction(number)),
        jiaAsync:(number,time)=>  dispatch(createIncrementAsyncAction(number,time)),
        jian:number=>  dispatch(createDecrementAction(number))
      })
  */

  //mapDispatchProps 的简写
  {
    jia:createIncrementAction,
    jiaAsync:createIncrementAsyncAction,
    jian:createDecrementAction
  }
)(Count)