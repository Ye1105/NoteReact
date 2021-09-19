import React, { Component } from 'react'
import './App.less';
import Count from './containers/Count'
import Person from './containers/Person'
import {Divider} from 'antd'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <Divider />
                <Person/>
            </div>
        )
    }
}
