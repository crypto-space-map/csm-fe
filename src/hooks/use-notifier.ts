/* https://codesandbox.io/s/angry-dawn-838gjq?file=/redux/reducers.js:993-1124 */
import { useEffect } from 'react';

import { useSnackbar, SnackbarKey } from 'notistack';
import { useSelector } from 'react-redux';

import { selectedNotifications } from 'store/notifier/selectors';
import { useDispatchAction } from 'store/notifier/slice';

let displayed: SnackbarKey[] = [];

const storeDisplayed = (id: SnackbarKey) => {
  displayed = [...displayed, id];
};

const removeDisplayed = (id: SnackbarKey) => {
  displayed = [...displayed.filter(key => id !== key)];
};

export const useNotifier = () => {
  const notifications = useSelector(selectedNotifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { remoteNotify, closeNotify } = useDispatchAction();

  useEffect(() => {
    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) return;

      // display snackbar using notistack
      enqueueSnackbar(message, {
        key,
        ...options,

        onExited: (event, myKey) => {
          // remove this snackbar from redux store
          remoteNotify(myKey);
          removeDisplayed(myKey);
        },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, remoteNotify, closeNotify]);
};
