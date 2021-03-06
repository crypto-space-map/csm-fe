import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';
import { link, gradientBackground } from 'global/styles';

const getColor = ({ isBefore, isToday }: { isBefore: boolean; isToday: boolean }) => {
  if (isBefore) return `background-color: ${COLOR_PALLETTE.MAIN_WHITE};`;
  if (isToday) return gradientBackground;
  return `background-color: ${COLOR_PALLETTE.CARD_COLOR};`;
};

export const linkStyles = css`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  ${link()}
`;

export const CardWrapper = styled.article<{
  isBefore: boolean;
  isToday: boolean;
}>`
  display: flex;
  flex-direction: column;
  ${props => getColor(props)}
  border: 2px solid ${COLOR_PALLETTE.CARD_COLOR};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 19px;
  font-size: 16px;
  line-height: 22px;
`;

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const CompanyInfo = styled.section`
  display: flex;
`;

export const IconWrapper = styled.div`
  margin-right: 16px;
  width: 43px;
  height: 43px;
  & > img {
    border-radius: 26px;
  }
`;

export const StyledTitleLink = styled.a`
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  ${link(COLOR_PALLETTE.MAIN_BLACK)}
  &:hover {
    color: ${COLOR_PALLETTE.LINK_COLOR};
  }
`;

export const StyledTitle = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;

export const StyledSubTitleLink = styled.a`
  ${linkStyles}
  width: 350px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

export const StyledTextLink = styled.a`
  ${linkStyles}
`;

export const StyledTodayText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const PostDate = styled.section`
  font-size: 14px;
  line-height: 18px;
  color: ${COLOR_PALLETTE.POST_DATE_COLOR};
`;

export const TitleTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;

  & > h5 {
    margin: 0;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextSection = styled.section`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const ButtonsContentWrapper = styled.section`
  margin-top: 12px;
  display: flex;
  grid-gap: 8px;
`;

export const StyledButton = styled(MuiButton)<ButtonProps>`
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  color: #242424;
  text-transform: none;
  background: ${COLOR_PALLETTE.MAIN_WHITE};
  border: 2px solid #e1e1e1;
  border-radius: 24px;
  &:disabled {
    background: #bdbdbd;
    &:before {
      background-image: none;
    }
  }
`;

export const StyledButtonWrapper = styled.a`
  text-decoration: none;
  ${link(COLOR_PALLETTE.MAIN_BLACK, COLOR_PALLETTE.MAIN_BLACK)}
`;
