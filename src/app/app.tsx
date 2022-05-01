import { Route, Switch } from 'react-router-dom';

import { AccountPage } from './containers/account/loadable';
import { AppLayout } from './containers/app-layout';
import { LoginPage } from './containers/login/loadable';
import { MainPage } from './containers/mainPage/loadable';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/" component={MainPage} />
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
