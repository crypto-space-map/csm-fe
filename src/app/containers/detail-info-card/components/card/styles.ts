import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

export const linkStyles = css`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  ${link()}
`;

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
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

export const PostDate = styled.section`
  font-size: 14px;
  line-height: 18px;
  color: ${COLOR_PALLETTE.POST_DATE_COLOR};
`;

export const TitleTextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;

  & > h5 {
    margin: 0;
  }
`;

export const Icon = styled.img`
  width: 49px;
  height: fit-content;
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
