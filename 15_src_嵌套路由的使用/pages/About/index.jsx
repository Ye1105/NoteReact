import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class About extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        console.log(this.props)
        return (
            <div>
                about....
            </div>
        )
    }
}
