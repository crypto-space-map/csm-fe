import { ReactNode, useMemo } from 'react';

import { CustomButton } from 'common/components';

import { TemplateProps } from '../../types';
import { ButtonsGroup } from '../buttons-group';
import { StyledWrapper, StyledHeader, StyledTextContent, StyledText, StyledButton } from './styles';

interface BlockDescriptionProps extends Omit<TemplateProps, 'setSizeOptions'> {
  headerText: string;
  children: ReactNode;
}

export const BlockDescription = ({
  headerText,
  children,
  position,
  totalSteps,
  onBackClick,
  onNextClick,
  onClose,
}: BlockDescriptionProps) => {
  const buttonText = useMemo(() => `Go to ${position + 1} of ${totalSteps}`, [position, totalSteps]);
  return (
    <StyledWrapper>
      <StyledTextContent>
        <StyledHeader>{headerText}</StyledHeader>
        <StyledText>{children}</StyledText>
      </StyledTextContent>
      <ButtonsGroup
        leftButtonText="Back"
        rightButtonText={buttonText}
        leftHandler={onBackClick}
        rightHandler={onNextClick}
      />
      <CustomButton variant="outlined" onClick={onClose} text="Close" />
    </StyledWrapper>
  );
};
