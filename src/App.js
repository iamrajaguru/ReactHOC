import React from 'react';
import './App.css';
// import { Provider} from 'react-redux';
// import store from './store/store'
// import Home from './container/home';
// import Chat from './container/chat';
import Boot  from './component/Boot'
// import Chat from './container/chat'

function App() {
    
  return (
    // <Provider store={store}>
      <div className="App">
       <Boot/>
      </div>
    // </Provider>
  );
}

export default App;
