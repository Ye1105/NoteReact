//创建"外壳"组件App
import logo from './logo.svg';
import './App.css';
//es6  统一暴露和分别暴露
import React,{Component} from 'react';
import Hello from './components/Hello';
import Welcome from './components/Welcome'

//创建并暴露App组价
export default class App extends Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}

//export default App;
