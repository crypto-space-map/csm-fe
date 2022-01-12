import { useCallback } from 'react';

import { useRouteMatch } from 'react-router-dom';

import { useDispatchAction as pageStoreDispatchAction } from 'store/pageStore/slice';

import { InvestorWrapper, StyledLink } from '../styles';

interface InvestorsCellProps {
  id: string;
  title: string;
  isLastElement: boolean;
}

export const InvestorsCell = ({ id, title, isLastElement }: InvestorsCellProps) => {
  const { setFundName } = pageStoreDispatchAction();
  const { url } = useRouteMatch();

  const handleClick = useCallback(() => {
    setFundName(id);
  }, [setFundName, id]);

  return (
    <InvestorWrapper onClick={handleClick}>
      <StyledLink to={`${url}/fund/${id}`}>{title}</StyledLink>
      {isLastElement ? <span>,</span> : null}
    </InvestorWrapper>
  );
};
