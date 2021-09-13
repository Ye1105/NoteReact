import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class index extends Component {

    /*     constructor(props){
            console.log('constructor');
            super(props);
        }
    */
    //npm install pubsub-js
    componentDidMount(){
        //声明
        var My_TOPIC='test';
        this.token=PubSub.subscribe(My_TOPIC,(msg,data)=>{   
            //不想接收msg时，也可以用占位符 (_,data){}
            console.log("List组件:成功订阅到【My_TOPIC】的消息",data);
            this.setState(data);
        })
    }

    componentWillUnmount(){
        //卸载组件是，取消订阅
        PubSub.unsubscribe(this.token);
    }


    state={
        //初始化状态
        users:[], //Users初始值为数组
        isFirst:true, //是否为第一次打开界面
        isLoading:false, //标识是否处于加载中
        err:'', //存储请求相关的错误信息
    }


    render() {

        const{users,isFirst,isLoading,err}=this.state;

        return (        
            <div className="row">
                {
                    isFirst? <h2>欢迎使用，输入关键字，随后点击搜索</h2>:
                    isLoading? <h2>Loading...</h2>:
                    err?<h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj) => {
                        return(
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target='_blank' rel='noreferrer'>
                                    <img src={userObj.avatar_url} alt="head" style={{width:'100px'}} />
                                </a>
                                <p className='card-text'>{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
