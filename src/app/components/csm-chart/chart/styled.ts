import styled from '@emotion/styled';

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const RandomSvg = styled.svg`
  width: 100%;
  height: 100%;
  & .county-centroid {
    cursor: pointer;
    transition: 0.2s linear;
    &:hover {
      transform: scale(1.1);
      overflow: auto;
    }
  }
`;
