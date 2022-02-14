import { useCallback } from 'react';

import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';

import { InvestorWrapper, StyledLink } from './styles';

interface InvestorsCellProps {
  id: string;
  name: string;
  website: string;
  isLastElement: boolean;
}

export const InvestorsCell = ({ id, name, website, isLastElement }: InvestorsCellProps) => {
  const transformedName = isLastElement ? `${name},` : name;
  const { setFundName, setFundOptions } = pageStoreDispatchAction();

  const handleClick = useCallback(() => {
    setFundName(id);
    setFundOptions({ id, name, website });
  }, [setFundName, id, setFundOptions, name, website]);

  return (
    <InvestorWrapper onClick={handleClick}>
      <StyledLink to={`/fund/${id}`}>{transformedName}</StyledLink>
    </InvestorWrapper>
  );
};
