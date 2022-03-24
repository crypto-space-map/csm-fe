import { useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { getPathsHistory } from 'utils/router-history';

export const useDetailHeader = () => {
  const history = useHistory();
  const pathsHistory = getPathsHistory();
  const isShowArrowBack = pathsHistory?.length > 1;

  const handleArrowBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleClose = useCallback(() => {
    const steps = pathsHistory.length * -1;
    history.go(steps);
  }, [history, pathsHistory.length]);

  useEffect(() => {
    document.body.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        handleClose();
      }
    });

    return () => {
      document.removeEventListener('keydown', e => {
        if (e.key === 'Escape') {
          handleClose();
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isShowArrowBack,
    handleArrowBack,
    handleClose,
  };
};
