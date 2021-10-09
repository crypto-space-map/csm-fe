// TO DO uncomment pages in future

import { Route, Switch } from 'react-router-dom';

import { PageLayout } from 'common';

import { Login } from './containers/pages/login';

const App = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={() => <>404 NOT FOUND</>} />
    </Switch>
  </PageLayout>
);
export default App;
