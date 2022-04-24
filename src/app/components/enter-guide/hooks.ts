import { useState, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectedIsShowGuide } from 'store/pageStore/selectors';
import { useDispatchAction } from 'store/pageStore/slice';

import { SizeOptionsTypes } from './types';

export function useEnterGuide() {
  const [step, setStep] = useState(0);
  const [sizeOptions, setSizeOptions] = useState<SizeOptionsTypes | null>(null);

  const isShowGuide = useSelector(selectedIsShowGuide);

  const { setIsShowGuide } = useDispatchAction();

  const handleToggleIsShowGuide = useCallback(() => {
    setIsShowGuide(!isShowGuide);
  }, [isShowGuide, setIsShowGuide]);

  const handleCloseGuide = useCallback(() => {
    setIsShowGuide(false);
    setStep(0);
  }, [setIsShowGuide, setStep]);

  const handleNextStepClick = useCallback(() => {
    setStep(step + 1);
  }, [step, setStep]);

  const handleBackStepClick = useCallback(() => {
    setStep(step - 1);
  }, [step, setStep]);

  const setNewSizeOptions = useCallback(
    (options: SizeOptionsTypes) => {
      setSizeOptions(options);
    },
    [setSizeOptions]
  );

  useEffect(() => {
    if (!isShowGuide) setSizeOptions(null);
    return () => {
      if (!isShowGuide) setSizeOptions(null);
    };
  }, [isShowGuide]);

  return {
    step,
    isShowGuide,
    sizeOptions,
    handleToggleIsShowGuide,
    handleCloseGuide,
    handleNextStepClick,
    handleBackStepClick,
    setNewSizeOptions,
  };
}
