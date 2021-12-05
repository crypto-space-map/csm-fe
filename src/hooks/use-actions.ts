import { useMemo } from 'react';

import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export function useActions<A, M extends ActionCreatorsMapObject<A>>(actions: M): M {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, actions]);
}
