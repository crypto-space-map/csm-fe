import { useState, ReactNode, useMemo } from 'react';

import {
  StyledMoreLess,
  StyledMoreLessAnchor,
  StyledMoreLessAnchorWrapper,
  StyledListWrapper,
} from './styles';

interface MoreLessProps {
  list: ReactNode[];
}

export const MoreLess = ({ list }: MoreLessProps) => {
  const [isShow, setIsShow] = useState(false);
  const shortList = useMemo(() => list.slice(0, 2), [list]);
  const isShowButton = list.length > 2;

  const toggleIsShow = () => setIsShow(!isShow);

  return (
    <StyledMoreLess isShow={isShow}>
      <StyledListWrapper>{isShow ? list : shortList}</StyledListWrapper>
      {isShowButton && (
        <StyledMoreLessAnchorWrapper>
          <StyledMoreLessAnchor onClick={toggleIsShow}>{isShow ? 'Less' : '...More'}</StyledMoreLessAnchor>
        </StyledMoreLessAnchorWrapper>
      )}
    </StyledMoreLess>
  );
};
