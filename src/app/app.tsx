// TO DO uncomment pages in future

import { Route, Switch } from 'react-router-dom';

import { PageLayout } from 'common';

import { Layout } from './containers/pages/ layout';
import { Login } from './containers/pages/login';

const App = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/layout" component={Layout} />
      <Route path="*" component={() => <>404 NOT FOUND</>} />
    </Switch>
  </PageLayout>
);
export default App;
