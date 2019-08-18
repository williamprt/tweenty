import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Interface from './components/interface';
import Feed from './components/feed';

import store from './_redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="AppMain">
          <Feed />
          <Interface />
        </div>
      </Provider>
    )
  }
}

export default App;
