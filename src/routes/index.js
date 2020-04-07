import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Orders from '~/pages/Orders';
import NewOrder from '~/pages/NewOrder';
import Recipients from '~/pages/Recipients';
import Deliverers from '~/pages/Deliverers';
import NewDeliverer from '~/pages/NewDeliverer';
import NewRecipient from '~/pages/NewRecipient';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" isPrivate component={Orders} />
      <Route path="/neworder" exact isPrivate component={NewOrder} />
      <Route path="/neworder/:id" isPrivate component={NewOrder} />
      <Route path="/recipients" isPrivate component={Recipients} />
      <Route path="/newrecipient" exact isPrivate component={NewRecipient} />
      <Route path="/newrecipient/:id" isPrivate component={NewRecipient} />
      <Route path="/deliverers" isPrivate component={Deliverers} />
      <Route path="/newdeliverer" exact isPrivate component={NewDeliverer} />
      <Route path="/newdeliverer/:id" isPrivate component={NewDeliverer} />
      <Route path="/problems" isPrivate component={Problems} />
      <Route path="/" component={() => <h1>404 - Not found!</h1>} />
    </Switch>
  );
}
