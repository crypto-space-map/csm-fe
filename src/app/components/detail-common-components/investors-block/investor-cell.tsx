import { useCallback } from 'react';

import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';
import { addNewPath } from 'utils/router-history';

import { InvestorWrapper, StyledLink } from './styles';
import { InvestorProps } from './types';

interface InvestorsCellProps extends InvestorProps {
  isLastElement: boolean;
}

export const InvestorsCell = ({ id, name, isLastElement }: InvestorsCellProps) => {
  const transformedName = isLastElement ? `${name},` : name;
  const { setFundName, setProjectName } = pageStoreDispatchAction();
  const pathName = `/fund/${id}`;

  const handleClick = useCallback(() => {
    setFundName(id);
    setProjectName(null);
    addNewPath(pathName);
  }, [setFundName, id, setProjectName, pathName]);

  return (
    <InvestorWrapper onClick={handleClick}>
      <StyledLink to={pathName}>{transformedName}</StyledLink>
    </InvestorWrapper>
  );
};
