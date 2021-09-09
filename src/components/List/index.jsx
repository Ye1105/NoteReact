import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="row">
                <div className="card">
                    <a href="https://github.com/reactjs" target='_blank' rel='noreferrer'>
                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt='' style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer'>
                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt='' style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer'>
                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt='' style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer'>
                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt='' style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer'>
                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        )
    }
}
