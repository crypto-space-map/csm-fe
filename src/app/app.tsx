import { Route, Switch } from 'react-router-dom';

import { useWindowSize } from 'hooks/use-screen-size';

import { AccountPage } from './containers/account/loadable';
import { AppLayout } from './containers/app-layout';
import { LoginPage } from './containers/login/loadable';
import { MainPage } from './containers/mainPage/loadable';
import { MobilePlug } from './containers/mobile-plug';

export const App = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  if (isMobile) return <MobilePlug />;
  return (
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
};
