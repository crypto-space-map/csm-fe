import { useCallback } from 'react';

import { CryptoLogo } from 'app/components';
import { Tooltip } from 'common/components';
import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { addNewPath } from 'utils/router-history';

import { ProjectCellWithoutLink } from './project-cell-without-link';
import { ProjectWrapper, StyledLink } from './styles';

interface InvestorsCellProps {
  id: string;
  name: string;
  icon: string;
  isOnMap?: boolean;
}

const iconSize = 16;

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
      <Tooltip title={name}>
        {id && isOnMap ? (
          <StyledLink to={pathName}>{name}</StyledLink>
        ) : (
          <ProjectCellWithoutLink name={name} />
        )}
      </Tooltip>
    </ProjectWrapper>
  );
};

ProjectCell.defaultProps = {
  isOnMap: true,
};
