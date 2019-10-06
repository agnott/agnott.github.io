import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import DynamicImporter from './common/DynamicImporter';

class Routes extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === '/') this.props.history.push('/blog');
  }

  render() {
    return (
      <Switch>
        <Route exact path="/:type(labs|blog|reviews)/:name" component={DynamicImporter} />
        <Route exact path="/:type(labs|blog|reviews)" component={DynamicImporter} />
        <Route
          path="/contact"
          component={(props) => <DynamicImporter {...props} type="about" name="about" />}
        />
      </Switch>
    );
  }
}

export default withRouter(Routes);
