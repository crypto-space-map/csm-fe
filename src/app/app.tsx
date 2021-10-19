// TO DO uncomment pages in future

import { Route, Switch } from 'react-router-dom';

import { PageLayout } from 'common';

import { DetailInfoCard } from './containers/detail-info-card';
import { Login } from './containers/pages/login';

export const App = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={DetailInfoCard} />
    </Switch>
  </PageLayout>
);
