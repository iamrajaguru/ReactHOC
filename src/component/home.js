import React, { Fragment, Component } from "react";
import Axios from "axios";
import {
  Route,
  BrowserRouter,
  Switch,Router,
  Link,
  HashRouter
} from "react-router-dom";
import ButtonCounter from "./HOC/ButtonCounter";
// import LocationCode from './locationCode';
import Chat from "../container/chat";
import GoogleApiWrapper from "./locationCode";
// import HigherOrderComponent from './HOC/HigherOrderComponent';

export default class Home extends Component {
  async componentDidMount() {
    let response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    let array_split = response.data;
    // console.log(response.data);
    // alert(response.data);
    let mazp = array_split.map(() => array_split);
    console.log(mazp);
    this.props.updateData("data", response.data);
  }
  changeCall = (k, e) => {
    console.log(k + "" + e.target.value);
    this.props.updateData(k, e.target.value);
  };

  render() {
    const conStyle = {
      height: "100vh",
      width: "100vw"
    };

    return (
      <div>
        {/* <Router>
          <Switch>
            {/* <Route path="/" component={} /> */}
            {/* <Route path="/Chat" component={Chat} exact /> */}

            {/* <Route path="/setting" component={Setting} /> */}
            {/* <Route component={Error} />
          </Switch> 
        </Router> */}

        <GoogleApiWrapper />
         <Chat /> 
        <div>
          <label>Home</label>
          <br />
          <input
            type="text"
            value={this.props.id}
            onChange={e => this.changeCall("id", e)}
          ></input>
          <br />
          <input
            type="text"
            value={this.props.name}
            onChange={e => this.changeCall("name", e)}
          ></input>

          <br />
          <input
            type="text"
            value={this.props.body}
            onChange={e => this.changeCall("body", e)}
          ></input>
          <br />

          {this.props.data
            .filter(i => i.id > 10)
            .map(j => (
              <Fragment key={j.id}>
                <p>{j.id}</p>
              </Fragment>
            ))}
          {/*
        <div>
          {this.props.data.map((person, index) => (
            <p>
              Hello, {person.id} from {person.name}!
            </p>
          ))}
        </div> */}
        </div>
        <div style={conStyle}>
          <ButtonCounter />
          {/* <HoverCounter /> */}
          {/* <HigherOrderComponent/> */}
        </div>
      </div>
    );
  }
}

// export default class Home extends Component {
//   async componentDidMount() {
//     let response = await Axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     let array_split = response.data;
//     // console.log(response.data);
//     // alert(response.data);
//     let mazp = array_split.map(() => array_split);
//     console.log(mazp);
//     this.props.updateData("data", JSON.stringify(response.data));
//   }
//   changeCall = (k, e) => {
//     console.log(k + "" + e.target.value);
//     this.props.updateData(k, e.target.value);
//   };

//   render() {
//     return (
//       <div>
//         <h2>map learning</h2>
//         {this.props.data.map(value => (
//           <div>{value.id}</div>
//         ))}
//       </div>
//     );
//   }
// }
