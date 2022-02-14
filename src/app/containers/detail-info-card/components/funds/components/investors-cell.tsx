import { useCallback } from 'react';

import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';

import { InvestorWrapper, StyledLink } from '../styles';

interface InvestorsCellProps {
  id: string;
  name: string;
  isLastElement: boolean;
}

export const InvestorsCell = ({ id, name, isLastElement }: InvestorsCellProps) => {
  const { setFundName } = pageStoreDispatchAction();

  const handleClick = useCallback(() => {
    setFundName(id);
  }, [setFundName, id]);

  return (
    <InvestorWrapper onClick={handleClick}>
      {id ? <StyledLink to={`/fund/${id}`}>{name}</StyledLink> : <span>{name}</span>}
      {isLastElement ? <span>,</span> : null}
    </InvestorWrapper>
  );
};
