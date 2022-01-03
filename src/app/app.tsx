// TO DO uncomment pages in future

import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/private-route';
import { Account } from './containers/account';
import { AppLayout } from './containers/app-layout';
import { DetailInfoCard } from './containers/detail-info-card';
import { Layout } from './containers/layout';
import { Login } from './containers/login';
import { SpaceMapPage } from './containers/space-map';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={SpaceMapPage} />
      <PrivateRoute path="/card" component={DetailInfoCard} />
      <PrivateRoute path="/layout" component={Layout} />
      <PrivateRoute path="/account" component={Account} />
      <PrivateRoute
        path="*"
        component={() => (
          <div
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: 40,
            }}>
            Crypto Space Map HERE
          </div>
        )}
      />
    </Switch>
  </AppLayout>
);
