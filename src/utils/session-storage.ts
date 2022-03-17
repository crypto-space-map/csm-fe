export enum ItemNames {
  PATHS_HISTORY = 'PATHS_HISTORY',
  SELECTED_TAB = 'SELECTED_TAB',
}

export const setSessionStorageItem = (name: string, value: unknown) => {
  const preparedValue = typeof value === 'object' ? JSON.stringify(value) : (value as string);

  sessionStorage.setItem(name, preparedValue);
};

export const getSessionStorageItem = (name: string) => {
  const value = sessionStorage.getItem(name) || 'null';
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

export const clearSessionStorageItems = (lsItemIds: string[]) => {
  lsItemIds.forEach(id => {
    sessionStorage.removeItem(id);
  });
};
