import React, { Component } from 'react';
import { Provider } from 'react-redux';

// import configureStore from './common/store/configureStore';
import Storage from './common/storage/Storage';

import App from './app';

// const store = configureStore();
// global.storage = new Storage();
class rootApp extends Component {
  render() {
    // return (
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );
    return(
   <App/>

    )
  }
}
export default rootApp;
