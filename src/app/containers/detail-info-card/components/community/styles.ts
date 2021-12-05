import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBorder, link } from 'global/styles';

export const TabContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(143px, 1fr));
  grid-gap: 14px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CardWrapper = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  ${gradientBorder({ borderRadius: 10 })}
  ${link(COLOR_PALLETTE.MAIN_BLACK)}
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;
