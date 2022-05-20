import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBorder, link } from 'global/styles';

export const TabContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 14px;
  margin-top: 24px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CardWrapper = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  width: 143px;
  ${gradientBorder({ borderRadius: 10 })}
  ${link(COLOR_PALLETTE.MAIN_BLACK, COLOR_PALLETTE.MAIN_BLACK)}
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;

export const StyledCount = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

export const DoubleCardWrapper = styled(CardWrapper)`
  width: max-content;
`;

export const DoubleCardContent = styled.div`
  display: flex;
  padding: 16px 18px;
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(108px, 1fr));
  grid-gap: 14px;
  margin-left: 16px;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
