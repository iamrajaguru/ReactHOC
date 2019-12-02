import React, { Component } from 'react'
import { Provider } from "react-redux";
import store from "../store/store";
import Home from '../container/home';
import Chat from '../container/chat';
import LocationCode from './locationCode';

export default class Boot extends Component {
    render() {
        return (
          <Provider store={store}>
            <div className="App">
              <Chat />
              {/* <Home /> */}
              <LocationCode/>
            </div>
          </Provider>
        );
    }
}








