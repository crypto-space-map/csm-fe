import { useCallback } from 'react';

import { CryptoLogo } from 'app/components';
import { Tooltip } from 'common/components';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { addNewPath } from 'utils/router-history';

import { ProjectWrapper, StyledLink, StyledText } from './styles';

interface InvestorsCellProps {
  id: string;
  name: string;
  icon: string;
  isOnMap?: boolean;
}

const iconSize = 16;
const notOnMapMessage = 'project is not on the map';

export const ProjectCell = ({ id, name, icon, isOnMap }: InvestorsCellProps) => {
  const { setFundName, setProjectName } = pageStoreDispatchAction();
  const pathName = `/project/${id}`;

  const handleClick = useCallback(() => {
    if (id && isOnMap) {
      setProjectName(id);
      setFundName(null);
      addNewPath(pathName);
    }
  }, [id, isOnMap, setProjectName, setFundName, pathName]);

  return (
    <ProjectWrapper onClick={handleClick}>
      {icon && <CryptoLogo path={icon} size={iconSize} />}

      {id && isOnMap ? (
        <Tooltip title={name}>
          <StyledLink to={pathName}>{name}</StyledLink>
        </Tooltip>
      ) : (
        <Tooltip title={notOnMapMessage}>
          <StyledText>{name}</StyledText>
        </Tooltip>
      )}
    </ProjectWrapper>
  );
};

ProjectCell.defaultProps = {
  isOnMap: true,
};
