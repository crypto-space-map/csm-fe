// TO DO uncomment pages in future
import { Route, Switch } from 'react-router-dom';

import { AppLayout } from './containers/app-layout';
import { DetailInfoCard } from './containers/detail-info-card';
import { Layout } from './containers/layout';
import { Login } from './containers/login';
import { SpaceMapPage } from './containers/space-map';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={SpaceMapPage} />
      <Route exact path="/layout" component={Layout} />
      <Route path="/card" component={DetailInfoCard} />
      <Route
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
