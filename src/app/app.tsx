// TO DO uncomment pages in future
import { Route, Switch } from 'react-router-dom';

import { AppLayout } from './containers/pages/app-layout';
import { TestCsm } from './containers/pages/chart-test';
import { Login } from './containers/pages/login';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={TestCsm} />
    </Switch>
  </AppLayout>
);
