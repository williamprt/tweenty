import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Interface from './components/interface';
import Loading from './components/loading';
import Feed from './components/feed';
import Logs from './components/loggs';

import store from './_redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="AppMain">
          <Loading />
          <Logs />
          <Feed />
          <Interface />
        </div>
      </Provider>
    )
  }
}

export default App;
