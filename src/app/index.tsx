import { Global } from '@emotion/react';
import { pallette } from 'global/styles';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { YMInitializer } from 'react-yandex-metrika';

import { SvgGradient } from 'common/components/svg-gradient';

import { configureAppStore } from '../store/configureStore';
import { App } from './app';
import { ErrorBoundary } from './components';

const MOUNTED_NODE = document.getElementById('root') as HTMLElement;
const store = configureAppStore();

interface Props {
  Component: typeof App;
}

const YA_METRIC_COUNTER = [88753201]; // need to move to secure place

const ConnectedApp = ({ Component }: Props): JSX.Element => (
  <ErrorBoundary>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        autoHideDuration={2000}>
        <BrowserRouter>
          <SvgGradient />
          <Global styles={pallette} />
          <Component />
        </BrowserRouter>
      </SnackbarProvider>
      <YMInitializer
        accounts={YA_METRIC_COUNTER}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      />
    </Provider>
  </ErrorBoundary>
);

const root = createRoot(MOUNTED_NODE);

const render = (Component: typeof App): void => {
  root.render(<ConnectedApp Component={Component} />);
};

render(App);

if (module.hot) {
  // Hot reloadable app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app'], () => {
    root.unmount();
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    render(require('./app').App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
