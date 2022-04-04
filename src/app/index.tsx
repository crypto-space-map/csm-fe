import { Global } from '@emotion/react';
import { pallette } from 'global/styles';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { SvgGradient } from 'common/components/svg-gradient';

import { configureAppStore } from '../store/configureStore';
import { App } from './app';
import { ErrorBoundary } from './components';

const MOUNTED_NODE = document.getElementById('root') as HTMLElement;
const store = configureAppStore();

interface Props {
  Component: typeof App;
}

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
    </Provider>
  </ErrorBoundary>
);

const render = (Component: typeof App): void => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNTED_NODE);
};

render(App);

if (module.hot) {
  // Hot reloadable app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app'], () => {
    ReactDOM.unmountComponentAtNode(MOUNTED_NODE);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    render(require('./app').App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
