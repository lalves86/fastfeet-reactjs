import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Orders from '~/pages/Orders';
import NewOrder from '~/pages/NewOrder';
import Recipients from '~/pages/Recipients';
import Deliverers from '~/pages/Deliverers';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" isPrivate component={Orders} />
      <Route path="/neworder" exact isPrivate component={NewOrder} />
      <Route path="/neworder/:id" isPrivate component={NewOrder} />
      <Route path="/recipients" isPrivate component={Recipients} />
      <Route path="/deliverers" isPrivate component={Deliverers} />
      <Route path="/" component={() => <h1>404 - Not found!</h1>} />
    </Switch>
  );
}
