import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Example from './components/Example'
import Users from './routes/user/Users'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/example" exact component={Example} />
        <Route path="/user" exact component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
