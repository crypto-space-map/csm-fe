import { useMemo } from 'react';

import { MoreLess } from 'common/components';

import { InvestorsCell } from './investor-cell';
import { InvestorProps } from './types';

interface InvestorsBlockProps<R> {
  investors: R[];
}

export const InvestorsBlock = <R extends InvestorProps>({ investors }: InvestorsBlockProps<R>) => {
  const investorsList = useMemo(
    () =>
      investors.map((item, i, array) => (
        <InvestorsCell
          key={`investorLinkWrapper ${item.id}`}
          isLastElement={array.length - 1 !== i}
          {...item}
        />
      )),
    [investors]
  );

  return <MoreLess list={investorsList} />;
};
