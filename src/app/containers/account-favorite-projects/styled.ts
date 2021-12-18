import styled from '@emotion/styled';

enum Areas {
  CONTENT = 'CONTENT',
  SIDE_DATA = 'SIDE_DATA',
}

export const StyledFavoriteProject = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-auto-flow: column;
  gap: 2em;
  grid-template-areas: '${Areas.CONTENT} ${Areas.SIDE_DATA}';
  width: 100%;
  overflow: hidden;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: inherit;
  grid-area: ${Areas.CONTENT};
`;
export const SideDataSection = styled.section`
  grid-area: ${Areas.SIDE_DATA};
  max-width: 480px;
  width: 100%;
  justify-self: end;
`;
