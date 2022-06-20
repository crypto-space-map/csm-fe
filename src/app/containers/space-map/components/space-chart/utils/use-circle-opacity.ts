import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { selectedProjectIdListFromInvestors } from 'app/containers/detail-fund-card/selectors';
import { selectFilters, selectMapTreeCaps, selectPartnerships } from 'app/containers/space-map/selectors';
import { selectedProjectName } from 'store/pageStore/selectors';

import { PackedCategories } from '../types';
// deprecated
export const useCircleOpacity = ({
  marketCap,
  projectId = '',
  projectWeight = 0,
  exchanges: itemExchangesArr,
}: PackedCategories) => {
  const { maxMarketCap, minMarketCap } = useSelector(selectMapTreeCaps);
  const { mCapFrom, mCapTo, exchanges, partnersWeight } = useSelector(selectFilters);
  const { projectPartnerships: reducerPartnerShips = [] } = useSelector(selectPartnerships);
  const selectedProject = useSelector(selectedProjectName);
  const projectAtFunds = useSelector(selectedProjectIdListFromInvestors);

  const projectPartnerships = useMemo(
    () => (selectedProject ? [...reducerPartnerShips, selectedProject] : []),
    [reducerPartnerShips, selectedProject]
  );
  /* console.log('useCircleOpacity call'); */

  const isHidden = useMemo(() => {
    let opacity = false;
    const lessCapFrom = mCapFrom || minMarketCap || 0;
    const moreCapTo = mCapTo || maxMarketCap || 0;
    if (mCapTo || mCapFrom) {
      if (marketCap < lessCapFrom || marketCap > moreCapTo) {
        opacity = true;
      }
    }
    const isIncludesFunds = projectAtFunds.includes(projectId);
    const isIncludes = itemExchangesArr?.some(item => exchanges.includes(item));
    const isLinked = projectId && projectPartnerships?.includes(projectId);
    const roundedWeight = Math.round(projectWeight / 10) * 10;
    const isPartnerWeightFiltered = !!partnersWeight.filter(
      item => roundedWeight >= item && (roundedWeight <= item + 9 || (item === 100 && roundedWeight > 100))
    ).length;
    if (!isIncludes) opacity = true;
    if (isIncludes && projectPartnerships.length && !isLinked) opacity = true;
    if (partnersWeight.length && !isPartnerWeightFiltered) opacity = true;
    if (projectAtFunds.length && !isIncludesFunds) opacity = true;
    return opacity;
  }, [
    exchanges,
    itemExchangesArr,
    mCapFrom,
    mCapTo,
    marketCap,
    maxMarketCap,
    minMarketCap,
    partnersWeight,
    projectAtFunds,
    projectId,
    projectPartnerships,
    projectWeight,
  ]);
  return { isHidden };
};
