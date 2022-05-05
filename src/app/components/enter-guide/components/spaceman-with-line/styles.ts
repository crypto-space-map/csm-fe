import styled from '@emotion/styled';

const extraForSpaceManAnimation = 20;

export const StyledSpaceManWrapper = styled.div<{ isHide: boolean; top: number; left: number }>`
  position: absolute;
  ${props => props.isHide && 'opasity: 0;'};
  ${props => props.top && `top: ${props.top + extraForSpaceManAnimation}px;`};
  ${props => props.left && `left: ${props.left}px;`};
`;

export const GuideFilterLineWrapper = styled.div<{ lineTop: number; lineLeft: number; isRendered: boolean }>`
  position: absolute;
  opacity: 0;
  top: ${props => (props.lineTop ? `${props.lineTop - extraForSpaceManAnimation}px` : 0)};
  left: ${props => (props.lineLeft ? `${props.lineLeft}px` : 0)};
  z-index: -1;
  ${props => `${props.isRendered && 'opacity:1;'}`};
  transition: opacity 0.3s ease-in;
`;

export const SpaceManIconWrapper = styled.div<{ rotate: number | null; scale: number }>`
  transform: ${props =>
    `${props.rotate !== null ? `rotate(${props.rotate}deg)` : ''} ${
      props.scale ? `scaleX(${props.scale})` : ''
    }`};
`;

export const SpaceManIconContent = styled.div<{ isRendered: boolean }>`
  ${props => `${props.isRendered && 'transform:translateY(-20px);'}`};
  transition: all 0.3s ease-in;
`;

export const StyledSpaceManContent = styled.div`
  position: relative;
`;
