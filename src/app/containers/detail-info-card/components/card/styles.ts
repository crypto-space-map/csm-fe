import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

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
  & > img {
    border-radius: 26px;
  }
`;

export const StyledAccountName = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const StyledAccountLink = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  ${link()}
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

  margin-left: 16px;
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
  & > button:not(:first-of-type) {
    margin-left: 8px;
  }
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
  ${link(COLOR_PALLETTE.MAIN_BLACK)}
`;
