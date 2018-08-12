import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import DynamicImporter from './common/DynamicImporter';

class Routes extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.location.pathname === '/') this.props.history.push('/blog');
  }

  render() {
    return (
      <Switch>
        <Route exact path="/:type(labs|blog)/:name" component={DynamicImporter} />
        <Route exact path="/:type(labs|blog)" component={DynamicImporter} />
        <Route
          path="/contact"
          component={(props) => <DynamicImporter {...props} type="contact" name="contact" />}
        />
      </Switch>
    );
  }
}

export default withRouter(Routes);
