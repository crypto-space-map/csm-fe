import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import { AccountPageStateDTO, MenuItems } from './types';
import { sliceKey as name } from './utils';

// The initial state of the DeparturesPage container
export const initialState: AccountPageStateDTO = {
  selectedTab: MenuItems.FAVORITE_PROJECTS,
};

const accountPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMenuTab(state, action: PayloadAction<MenuItems>) {
      state.selectedTab = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountPageSlice;
