/* TODO переписать на нормальную реализацию */

import { toast as toastLib } from 'react-toastify';

type toastType = 'warn' | 'error';

export function toast(msg: string, type: toastType) {
  return toastLib[type](msg, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
