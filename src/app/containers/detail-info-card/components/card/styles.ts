import styled from '@emotion/styled';
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
    ${link}
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
