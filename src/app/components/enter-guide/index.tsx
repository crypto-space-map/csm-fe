import { OverlayCloseIcon } from 'assets';

import { BackgroundBlock } from './components/background-block';
import { BorderBlock } from './components/border-block';
import { HelloCosmo } from './components/hello-cosmo';
import { StepList } from './components/step-list';
import { useEnterGuide } from './hooks';
import { StyledContentWrapper, StyledCloseIcon } from './styles';

export const EnterGuide = () => {
  const {
    step,
    isShowGuide,
    sizeOptions,
    setNewSizeOptions,
    handleBackStepClick,
    handleCloseGuide,
    handleNextStepClick,
    handleToggleIsShowGuide,
  } = useEnterGuide();

  return (
    <>
      <HelloCosmo handleClick={handleToggleIsShowGuide} isShowGuide={isShowGuide} />
      {isShowGuide && (
        <>
          <BackgroundBlock options={sizeOptions} />
          <BorderBlock options={sizeOptions} />
          <StyledContentWrapper>
            <StepList
              activeStepIndex={step}
              onBackClick={handleBackStepClick}
              onNextClick={handleNextStepClick}
              onClose={handleCloseGuide}
              setSizeOptions={setNewSizeOptions}
            />
          </StyledContentWrapper>
          <StyledCloseIcon onClick={handleCloseGuide}>
            <OverlayCloseIcon />
          </StyledCloseIcon>
        </>
      )}
    </>
  );
};
