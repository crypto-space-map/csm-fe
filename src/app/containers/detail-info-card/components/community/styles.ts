import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const mainGradient = 'linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%)';

export const gradientBorder = ({ borderRadius, border }: { borderRadius?: number; border?: string }) => css`
  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    border-radius: ${typeof borderRadius !== 'undefined' ? borderRadius : 4}px;
    padding: ${typeof border !== 'undefined' ? border : '2px'};
    background-image: ${mainGradient};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export const StyledDiv = styled.div`
  ${gradientBorder({ border: '0 0 4px 0' })};
`;

export const TabContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CardWrapper = styled.div`
  width: 143px;
  height: 117px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 0 14px 14px;
  cursor: pointer;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;
