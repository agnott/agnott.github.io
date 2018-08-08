import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import DynamicImporter from './common/DynamicImporter';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/:type(labs|blog)/:name" component={DynamicImporter} />
        <Route exact path="/:type(labs|blog)" component={DynamicImporter} />
        <Route path="/" component={(props) => <DynamicImporter {...props} type="home" name="home" />} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
