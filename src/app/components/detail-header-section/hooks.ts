import { useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectedIsShowGuide } from 'store/pageStore/selectors';
import { getPathsHistory } from 'utils/router-history';

export const useDetailHeader = () => {
  const history = useHistory();
  const pathsHistory = getPathsHistory();
  const isShowArrowBack = pathsHistory?.length > 1;
  const isShowGuide = useSelector(selectedIsShowGuide);

  const handleArrowBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleClose = useCallback(() => {
    const steps = pathsHistory.length * -1;
    history.go(steps);
  }, [history, pathsHistory.length]);

  useEffect(() => {
    document.body.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !isShowGuide) {
        handleClose();
      }
    });

    return () => {
      document.removeEventListener('keydown', e => {
        if (e.key === 'Escape' && !isShowGuide) {
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
