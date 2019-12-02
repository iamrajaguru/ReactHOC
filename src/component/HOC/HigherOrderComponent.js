import React from 'react';

 const HigherOrderComponent = (ActualComponent)=>{

    
    
class InnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increamentCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
      
    return <ActualComponent count={this.state.count} increamentCount={this.increamentCount} />;
  }
}
    

    return InnerComponent

}

export default HigherOrderComponent;