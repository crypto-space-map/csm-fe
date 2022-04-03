import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.notifierStore || initialState;

export const selectedNotifications = (state: RootState) => selectDomain(state).notifications;
