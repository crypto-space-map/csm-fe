import { PayloadAction } from '@reduxjs/toolkit';
import { SnackbarKey, VariantType } from 'notistack';
import { v4 as uuidv4 } from 'uuid';

import { useActions as useDispatchActionHook } from 'hooks';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the NotificationStoreTypes container
export const initialState: ContainerState = {
  notifications: [],
};

const notifierStoreTypesSlice = createSlice({
  name: 'notifierStore',
  initialState,
  reducers: {
    addNotify(state, action: PayloadAction<{ message: string; type: VariantType }>) {
      const { message = 'Something is wrong', type = 'default' } = action.payload;
      const key = uuidv4();
      const newNotifier = {
        message,
        key,
        options: {
          key,
          variant: type,
        },
      };

      state.notifications = [...state.notifications, newNotifier];
    },
    closeNotify(state, action: PayloadAction<SnackbarKey>) {
      const dismissAll = !action.payload; // dismiss all if no key has been defined
      state.notifications = state.notifications.map(notification =>
        dismissAll || notification.key === action.payload
          ? { ...notification, dismissed: true }
          : { ...notification }
      );
    },
    remoteNotify(state, action: PayloadAction<SnackbarKey>) {
      state.notifications = state.notifications.filter(notification => notification.key !== action.payload);
    },
  },
});

export const { actions, reducer, name: sliceKey } = notifierStoreTypesSlice;
export const useDispatchAction = () => useDispatchActionHook(actions);
