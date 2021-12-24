import styled from '@emotion/styled';

const LOGIN_PAGE_CONTENT = 'login-page-content';

export const StyledLoginPage = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 32px 1fr 32px;
  grid-template-columns: 32px 1fr 32px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(252.36deg, #83d9f5 0%, #242424 22.31%);
  grid-template-areas:
    '. . .'
    '. ${LOGIN_PAGE_CONTENT} .'
    '. . .';
`;

export const ContentContainer = styled.div`
  grid-area: ${LOGIN_PAGE_CONTENT};
  display: grid;
  grid-auto-rows: max-content;
  width: 100%;
  align-items: baseline;
  & > svg {
    justify-self: center;
    padding-bottom: 48px;
  }
`;
