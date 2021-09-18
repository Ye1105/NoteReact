import React, { Component } from 'react'

import './App.less';

import Count from './containers/Count'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
            </div>
        )
    }
}
