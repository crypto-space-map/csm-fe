import { useState, useEffect } from 'react';

import {
  SpaceManIcon,
  GuideAccountLine,
  GuideCardLine,
  GuideFilterLine,
  GuideFundLine,
  GuideMapLine,
  GuideRangeLine,
  GuideEndLine,
} from 'assets';

import { LinesType } from '../../types';
import {
  StyledSpaceManWrapper,
  GuideFilterLineWrapper,
  SpaceManIconWrapper,
  StyledSpaceManContent,
  SpaceManIconContent,
} from './styles';

const getIcon = (value: keyof typeof LinesType) => {
  switch (value) {
    case LinesType.ACCOUNT:
      return <GuideAccountLine />;
    case LinesType.CARD:
      return <GuideCardLine />;
    case LinesType.FILTER:
      return <GuideFilterLine />;
    case LinesType.FUND:
      return <GuideFundLine />;
    case LinesType.MAP:
      return <GuideMapLine />;
    case LinesType.RANGE:
      return <GuideRangeLine />;
    case LinesType.END:
      return <GuideEndLine />;

    default:
      return null;
  }
};

interface SpacemanWithLineProps {
  isHide: boolean;
  rotate?: number | null;
  scale?: number;
  top: number;
  left: number;
  lineTop: number;
  lineLeft: number;
  lineType: keyof typeof LinesType;
}

export const SpacemanWithLine = ({
  isHide = false,
  top = 0,
  left = 0,
  lineLeft = 0,
  lineTop = 0,
  scale = 0,
  rotate = null,
  lineType,
}: SpacemanWithLineProps) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isHide && !isRendered)
      setTimeout(() => {
        setIsRendered(true);
      }, 200);
  }, [isHide, isRendered]);

  return (
    <StyledSpaceManWrapper isHide={isHide} top={top} left={left}>
      <StyledSpaceManContent>
        <SpaceManIconWrapper rotate={rotate} scale={scale}>
          <SpaceManIconContent isRendered={isRendered}>
            <SpaceManIcon />
          </SpaceManIconContent>
        </SpaceManIconWrapper>

        <GuideFilterLineWrapper lineLeft={lineLeft} lineTop={lineTop} isRendered={isRendered}>
          {getIcon(lineType)}
        </GuideFilterLineWrapper>
      </StyledSpaceManContent>
    </StyledSpaceManWrapper>
  );
};

SpacemanWithLine.defaultProps = {
  rotate: null,
  scale: 0,
};
