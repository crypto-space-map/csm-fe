import { getSessionStorageItem, setSessionStorageItem, ItemNames } from './session-storage';

export const setFirstValueFromUrl = (pathname: string) => {
  const pathsHistory = getSessionStorageItem(ItemNames.PATHS_HISTORY) ?? [];
  if (!pathsHistory.length) setSessionStorageItem(ItemNames.PATHS_HISTORY, [pathname]);
};

export const getPathsHistory = () => getSessionStorageItem(ItemNames.PATHS_HISTORY) ?? [];

export const getTheLastPath = () => {
  const pathsHistory = getPathsHistory();
  return pathsHistory[pathsHistory.length - 1];
};
export const addNewPath = (pathname: string) => {
  const pathsHistory = getSessionStorageItem(ItemNames.PATHS_HISTORY) ?? [];
  setSessionStorageItem(ItemNames.PATHS_HISTORY, [...pathsHistory, pathname]);
};

export const removeTheLastPath = () => {
  const pathsHistory = getSessionStorageItem(ItemNames.PATHS_HISTORY) ?? [];
  const historyWithRemovedElement = [...pathsHistory].slice(0, pathsHistory.length - 1);
  setSessionStorageItem(ItemNames.PATHS_HISTORY, historyWithRemovedElement);
};
