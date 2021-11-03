import styled from '@emotion/styled';

export const HeaderSectionWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 43px;
  height: fit-content;
`;

export const CompanyName = styled.span`
  font-size: 20px;
  line-height: 39px;
  color: #ffffff;
  margin: 0 14px;
`;

export const CompanyTiker = styled.span`
  font-size: 20px;
  line-height: 39px;
  color: #b2b2b2;
`;

export const RankWrapper = styled.div`
  display: flex;
  margin-left: 26px;
`;

export const RankText = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 6px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-right: 38px;
  & > svg:first-child {
    margin-right: 20px;
  }
`;
