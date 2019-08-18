import React, { Component } from 'react';

import Interface from './components/interface';
import Feed from './components/feed';

class App extends Component {
  render() {
    return (
      <div className="AppMain">
        <Feed />
        <Interface />
      </div>
    )
  }
}

export default App;
