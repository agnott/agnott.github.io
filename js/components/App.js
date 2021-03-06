import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './header/Header';
import Routes from './Routes';

class App extends React.Component {
  render() {

    return (
      <Router>
        <React.Fragment>
          <Header />
          <Routes />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
