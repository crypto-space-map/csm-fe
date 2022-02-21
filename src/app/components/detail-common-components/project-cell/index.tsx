import { useCallback } from 'react';

import { CryptoLogo } from 'app/components';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';

import { ProjectWrapper, StyledLink, StyledText } from './styles';

interface InvestorsCellProps {
  id: string;
  name: string;
  icon: string;
}

export const ProjectCell = ({ id, name, icon }: InvestorsCellProps) => {
  const { setProjectName } = pageStoreDispatchAction();

  const handleClick = useCallback(() => {
    if (id) setProjectName(id);
  }, [setProjectName, id]);

  return (
    <ProjectWrapper onClick={handleClick}>
      <CryptoLogo path={icon} />
      {id ? <StyledLink to={`/project/${id}`}>{name}</StyledLink> : <StyledText>{name}</StyledText>}
    </ProjectWrapper>
  );
};
