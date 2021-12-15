import { useCallback, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hooks';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { accountPageSaga } from './saga';
import { selectCurrentMenuTab } from './selectors';
import { actions, reducer } from './slice';
import { MenuItems } from './types';
import { sliceKey } from './utils';

export function useAccountPageSlice() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: accountPageSaga });
  return useActions(actions);
}

export function useAccount() {
  const { setMenuTab } = useAccountPageSlice();
  const selectedTab = useSelector(selectCurrentMenuTab);

  const onSetTab = useCallback(
    (val: MenuItems) => {
      setMenuTab(val);
    },
    [setMenuTab]
  );

  return {
    selectedTab,
    onSetTab,
  };
}
