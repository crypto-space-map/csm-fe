import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <BrowserRouter>
        <Component />
        <ToastContainer />
      </BrowserRouter>
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
