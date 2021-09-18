//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件和redux组件
import{connect} from 'react-redux'

//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

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

export default connect(
    state => ({name:state}),

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
)(CountUI)

