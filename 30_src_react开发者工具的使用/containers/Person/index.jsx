import React, { Component } from 'react'

//引入connect用于连接UI组件和redux组件
import{connect} from 'react-redux'

import {Input,Space,Button} from 'antd'

import {createAddPersonAction} from '../../redux/actions/person' 

import {nanoid} from 'nanoid'

class Person extends Component {

    addPerson=() => {
        const{nameNode,ageNode}=this
        const name=nameNode.input.value
        const age=ageNode.input.value*1
        const personObj={id:nanoid(),name,age}
        console.log(personObj)
        this.nameNode.input.value=''
        this.ageNode.input.value=''
        this.props.add_person(personObj)
    }

    render() {
        console.log("personUI组件接收到的参数：",this.props)
        const{renshu}=this.props
        return (
            <div>
                 <h1>当前Count值：{this.props.name}</h1>
              <br />
                 <Space size='small'>
                    <Input  ref={c=>this.nameNode=c} size="default size" style={{width:'200px'}} placeholder="输入名称"/>
                    <br />
                    <Input  ref={c=>this.ageNode=c} size="default size" style={{width:'200px'}}  placeholder="输入年龄"/>
                    <Button onClick={this.addPerson}>添加</Button>
                </Space>
                <ul>
                    {
                        renshu.map((params) => {
                           return <li key={params.id}>{params.name}----{params.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    //mapStatetoProps
    state => ({
        name:state.he,
        renshu:state.rens
    }), 
     //mapDispatchtoProps
    {
        add_person:createAddPersonAction
    }
)(Person)