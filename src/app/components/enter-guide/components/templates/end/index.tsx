import { useEffect, useState, useMemo } from 'react';

import { Button } from 'common/components';

import { TemplateProps, LinesType } from '../../../types';
import { SpacemanWithLine } from '../../spaceman-with-line';
import { StyledEndContentWrapper, StyledContent, StyledTitle, StyledSocial, StyledInfo } from './styles';

const lineTop = -170;
const lineLeft = 150;
const absoluteSpaceManTopExtra = 134;
const absoluteSpaceManLeftExtra = 524;
const rotate = 20;

export const End = ({ onClose, setSizeOptions }: Pick<TemplateProps, 'onClose' | 'setSizeOptions'>) => {
  const [absoluteOptions, setAbsoluteOptions] = useState({ top: 0, left: 0 });
  const isHide = useMemo(() => absoluteOptions.top === 0 && absoluteOptions.left === 0, [absoluteOptions]);

  useEffect(() => {
    setSizeOptions(null);
  }, [setSizeOptions]);

  useEffect(() => {
    const height = document.body.clientHeight;
    const width = document.body.clientWidth;

    setAbsoluteOptions({ top: height / 2, left: width / 2 });
  }, []);

  return (
    <>
      <StyledEndContentWrapper>
        <StyledContent>
          <StyledTitle>You’re good to go!</StyledTitle>
          <StyledInfo>We hope it’s all clear now</StyledInfo>
          <StyledInfo>
            Join our socials to ask, share or simply stay in touch. Thanks and good luck!
          </StyledInfo>
          <StyledSocial>Telegram, Twitter</StyledSocial>
        </StyledContent>
        <Button onClick={onClose}>Close</Button>
      </StyledEndContentWrapper>

      <SpacemanWithLine
        isHide={isHide}
        lineTop={lineTop}
        lineLeft={lineLeft}
        top={absoluteOptions.top - absoluteSpaceManTopExtra}
        left={absoluteOptions.left - absoluteSpaceManLeftExtra}
        rotate={rotate}
        lineType={LinesType.END}
      />
    </>
  );
};
