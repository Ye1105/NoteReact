import React, { Component } from 'react'

import {Button,message} from 'antd'

import './App.less';


const info = () => {
    message.info('This is a normal message',1,()=>{
        console.log("nihao ")
    });
  };

export default class App extends Component {
    render() {
        return (
            <div>
              <Button type="primary" onClick={info}>Primary Button</Button>
              <Button type="ghost">ghost  Button</Button>
              <Button type="dashed">dashed  Button</Button>
              <Button type="link" >link  Button</Button>
            </div>
        )
    }
}
