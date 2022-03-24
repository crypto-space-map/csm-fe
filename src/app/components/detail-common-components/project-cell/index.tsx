import { useCallback } from 'react';

import { CryptoLogo } from 'app/components';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { addNewPath } from 'utils/router-history';

import { ProjectWrapper, StyledLink, StyledText } from './styles';

interface InvestorsCellProps {
  id: string;
  name: string;
  icon: string;
}

const iconSize = 16;

export const ProjectCell = ({ id, name, icon }: InvestorsCellProps) => {
  const { setFundName, setProjectName } = pageStoreDispatchAction();
  const pathName = `/project/${id}`;

  const handleClick = useCallback(() => {
    if (id) setProjectName(id);
    setFundName(null);
    addNewPath(pathName);
  }, [id, setProjectName, setFundName, pathName]);

  return (
    <ProjectWrapper onClick={handleClick}>
      {icon && <CryptoLogo path={icon} size={iconSize} />}
      {id ? <StyledLink to={`/project/${id}`}>{name}</StyledLink> : <StyledText>{name}</StyledText>}
    </ProjectWrapper>
  );
};
