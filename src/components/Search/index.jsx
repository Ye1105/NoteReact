import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    static propTypes = {
        updateAppState: PropTypes.func
    }

    search=() => {
        //获取用户输入(一般写法)
        //const {value} =this.keyWordElement;
        //console.log(value);
        //获取用户的输入(连续解构赋值）
        //const {keyWordElement:{value}}=this;
        //获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyWord}}=this;  //连续结构赋值，获取到value,并重命名为keyWord
        //console.log(this.keyWordElement.value);
        console.log("keyWord的值：",keyWord);
        //发送请求前通知App更新状态
        // 多行注释  alt+shift+A
        /* this.props.updateAppState({isFirst:false,isLoading:true}); */
        var My_TOPIC='test';
        console.log("Search组件：发布【My_TOPIC】的消息");
        PubSub.publish(My_TOPIC,{isFirst:false,isLoading:true});
        
        //发送网络请求
        // axios.get(`/api1/search/users?q=${keyWord}`).then(
        //     response=>{
        //         //请求成功后通知App更新状态
        //         console.log(response.data);
        //         /* this.props.updateAppState({isLoading:false,users:response.data.items}); */
        //         PubSub.publish(My_TOPIC,{isLoading:false,users:response.data.items});
        //     },
        //     error=> {
        //         //请求失败后通知App更新状态
        //         /* this.props.updateAppState({isLoading:false,err:error.message}); */
        //         PubSub.publish(My_TOPIC,{isLoading:false,err:error.message});
        //     }
        // )

		//发送网络请求---使用fetch发送（未优化）
		/* fetch(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				console.log('联系服务器成功了');
				return response.json()
			},
			error => {
				console.log('联系服务器失败了',error);
				return new Promise(()=>{})
			}
		).then(
			response => {console.log('获取数据成功了',response);},
			error => {console.log('获取数据失败了',error);}
		) */

		//发送网络请求---使用fetch发送（优化）
		try {
			const response=  fetch(`/api1/search/users2?q=${keyWord}`)
			const data =  response.json()
			console.log(data);
			PubSub.publish('atguigu',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error);
			PubSub.publish('atguigu',{isLoading:false,err:error.message})
		}
    }


    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
