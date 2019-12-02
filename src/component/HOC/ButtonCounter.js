import React, { Component } from 'react'
import HigherOrderComponent from "./HigherOrderComponent";
class ButtonCounter extends Component {
    render() {
        const { count,increamentCount } = this.props
        return <button onClick={increamentCount}>Clicked {count} Times</button>;
    }
}
export default HigherOrderComponent(ButtonCounter);