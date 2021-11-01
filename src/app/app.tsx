// TO DO uncomment pages in future
import { Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
import { AppLayout } from './containers/pages/app-layout';
=======
import { PageLayout } from 'common';

import { Layout } from './containers/pages/layout';
>>>>>>> stage
import { Login } from './containers/pages/login';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
<<<<<<< HEAD
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
=======
      <Route path="/layout" component={Layout} />
      <Route path="*" component={() => <>404 NOT FOUND</>} />
>>>>>>> stage
    </Switch>
  </AppLayout>
);
