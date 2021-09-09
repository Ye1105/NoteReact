import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Search extends Component {

    static propTypes = {
        updateAppState: PropTypes.func
    }

    search=() => {
        //获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyWord}}=this;
        console.log(this.keyWordElement.value);
        console.log(keyWord);
        //发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true});
        //发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response=>{
                //请求成功后通知App更新状态
                console.log(response.data)
                this.props.updateAppState({isLoading:false,users:response.data})
            }
        )
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
