import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBorder, link } from 'global/styles';

export const TabContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CardWrapper = styled.a`
  width: 143px;
  height: 117px;
  margin: 0 0 14px 14px;
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
