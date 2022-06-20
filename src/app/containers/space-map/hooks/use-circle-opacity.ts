import { useMemo, useCallback, useState, useEffect } from 'react';

import { HierarchyCircularNode } from 'd3';
import { useSelector } from 'react-redux';

import { selectedProjectIdListFromInvestors } from 'app/containers/detail-fund-card/selectors';
import { selectFilters, selectMapTreeCaps, selectPartnerships } from 'app/containers/space-map/selectors';
import { selectedProjectName } from 'store/pageStore/selectors';

import { PackedCategories } from '../components/space-chart/types';

export const useCircleOpacity = (simulatedCircles?: HierarchyCircularNode<PackedCategories>[]) => {
  const [opacityList, setOpacityList] = useState<Record<string, boolean>>({});
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
  const calcOpacity = useCallback(
    (elem: HierarchyCircularNode<PackedCategories>) => {
      const { marketCap, projectId = '', projectWeight = 0, exchanges: itemExchangesArr } = elem.data;
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
    },
    [
      exchanges,
      mCapFrom,
      mCapTo,
      maxMarketCap,
      minMarketCap,
      partnersWeight,
      projectAtFunds,
      projectPartnerships,
    ]
  );

  const getOpacityList = useCallback(
    (data: HierarchyCircularNode<PackedCategories>[]) => {
      let result = {};
      const getRoundData = (nodes: HierarchyCircularNode<PackedCategories>[]) => {
        if (nodes.length) {
          nodes.map(item => {
            if (item.children?.length) {
              getRoundData(item.children);
            }
            const opacity = calcOpacity(item);
            result = { ...result, [item.data.id]: opacity };
            return { ...result, [item.data.id]: opacity };
          });
        }
      };
      getRoundData(data);
      return result;
    },
    [calcOpacity]
  );

  useEffect(() => {
    if (simulatedCircles) {
      const list = getOpacityList(simulatedCircles);
      setOpacityList(list);
    }
  }, [getOpacityList, simulatedCircles]);

  return { opacityList };
};
/* var agr = null;
var getOpacityList = data => {
  if (data.length) {
    data.map(item => {
      if (item.children?.length) {
        getOpacityList(item.children);
      }
      const opacity = true;
      agr = { ...agr, [item.data.id]: opacity };
      // return { ...agr, [item.data.id]: opacity };
    });
  }
};

var getOpacityList = data => {
    return data.map(item => {
      const paretnOpacity = true; // change
      if (item.children && item.children.length) {
        const cd = item.children.map(childrenItem => {
          const opacity = true; // change
          return { [childrenItem.data.id]: opacity };
        });
        return [...cd, { [item.data.id]: paretnOpacity }];
      }
      return [{ [item.data.id]: paretnOpacity }];
    });
  };
  

var arr = [
  {
    data: { id: '12' },
    children: [{ data: { id: '123' } }],
  },
  {
    data: { id: '34' },
    children: [{ data: { id: '345' } }],
  },
  {
    data: { id: '37' },
  },
];

console.log(getOpacityList(arr));
 */
