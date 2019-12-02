import React, { Component } from 'react'
import HigherOrderComponent from "./HigherOrderComponent";
 class HoverCounter extends Component {
                
                 render() {
                     const { count, increamentCount } = this.props;
                   return <h2 onMouseOver={increamentCount} >Hover To Count {count}</h2>;
                 }
               }
export default HigherOrderComponent(HoverCounter);