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
  & a {
    ${link()}
  }
`;

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CompanyInfo = styled.section`
  display: flex;
`;

export const PostDate = styled.section`
  font-size: 14px;
  line-height: 19px;
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

export const TextSection = styled.section``;

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