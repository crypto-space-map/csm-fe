// TO DO uncomment pages in future
import { Route, Switch } from 'react-router-dom';

import { CSMap } from './components/csm-chart';
import { DetailInfoCard } from './containers/detail-info-card';
import { AppLayout } from './containers/pages/app-layout';
import { Layout } from './containers/pages/layout';
import { Login } from './containers/pages/login';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={CSMap} />
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
