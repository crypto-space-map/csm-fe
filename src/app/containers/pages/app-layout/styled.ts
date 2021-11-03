import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  grid-template-rows: 64px 1fr 48px;
  width: 100%;
  height: 100vh;
  background: #242424;
  grid-template-areas:
    '. hd .'
    '. route .'
    '. ft .';
`;
export const RouteWrapper = styled.div`
  grid-area: route;
  display: flex;
  width: 100%;
  height: 100%;
`;
