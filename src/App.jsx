import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {


    //更新App的state
    updateAppState=(stateObj) => {
        this.setState(stateObj);
    }

    render() {
        return (
           <div className="container">
               <Search updateAppState={this.updateAppState}/>
               <List />
            </div>
        )
    }
}
