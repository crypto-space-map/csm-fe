import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  grid-template-rows: 64px 1fr 48px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #242424;
  grid-template-areas:
    '. hd .'
    '. route .'
    '. ft .';
  & > :nth-of-type(2) {
    grid-area: route;
  }
`;
