import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';

import DynamicImporter from './common/DynamicImporter';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route path="/experiment" component={(props) => <DynamicImporter {...props} type="experiments" name="SampleExperiment" />} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
