import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Interface from './components/interface';
import Alerts from './components/alerts';
import Feed from './components/feed';

import store from './_redux/store';

import './global.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="AppMain">
          <Alerts />
          <Feed />
          <Interface />
        </div>
      </Provider>
    )
  }
}

export default App;
