import { useCallback, useMemo } from 'react';

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
const notOnMapMessage = 'Project is not on the map';

export const ProjectCell = ({ id, name, icon, isOnMap }: InvestorsCellProps) => {
  const { setFundName, setProjectName } = pageStoreDispatchAction();
  const pathName = `/project/${id}`;
  const tooltipId = useMemo(() => `${id}_${name}`, [id, name]);

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
        <StyledLink to={pathName} data-tip={name} data-for={tooltipId}>
          {name}
        </StyledLink>
      ) : (
        <StyledText data-tip={notOnMapMessage} data-for={tooltipId}>
          {name}
        </StyledText>
      )}
      <Tooltip id={tooltipId} />
    </ProjectWrapper>
  );
};

ProjectCell.defaultProps = {
  isOnMap: true,
};
