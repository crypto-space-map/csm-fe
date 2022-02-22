import { useMemo } from 'react';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { PackedCategories } from '../types';

export const useCircleOpacity = ({
  marketCap,
  projectId,
  projectWeight = 0,
  exchanges: itemExchangesArr,
}: PackedCategories) => {
  const {
    spaceMapData: { maxMarketCap, minMarketCap },
    filters: { mCapFrom, mCapTo, exchanges, partnersWeight },
    projectPartnerships,
  } = useSpaceMap();
  const isHidden = useMemo(() => {
    let opacity = false;
    const lessCapFrom = mCapFrom || minMarketCap || 0;
    const moreCapTo = mCapTo || maxMarketCap || 0;
    if (mCapTo || mCapFrom) {
      if (marketCap < lessCapFrom || marketCap > moreCapTo) {
        opacity = true;
      }
    }
    const isIncludes = itemExchangesArr?.some(item => exchanges.includes(item));
    const isLinked = projectId && projectPartnerships?.includes(projectId);
    const roundedWeight = Math.round(projectWeight / 10) * 10;
    const isPartnerWeightFiltered = !!partnersWeight.filter(
      item => roundedWeight >= item && (roundedWeight <= item + 9 || (item === 100 && roundedWeight > 100))
    ).length;
    if (!isIncludes) opacity = true;
    if (isIncludes && projectPartnerships.length && !isLinked) opacity = true;
    if (partnersWeight.length && !isPartnerWeightFiltered) opacity = true;
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
    projectId,
    projectPartnerships,
    projectWeight,
  ]);
  return isHidden;
};
