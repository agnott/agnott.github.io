import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DynamicImporter from './common/DynamicImporter';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/:type(experiments|posts)/:name" component={DynamicImporter} />
        <Route exact path="/" component={(props) => <DynamicImporter {...props} type="home" name="home" />} />
      </Switch>
    );
  }
}

export default Routes;
