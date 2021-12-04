import { useCallback, useMemo } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import {
  infiniteScrollTarget,
  getHasMoreFlag,
  shouldDoRequestIfDataAlreadyExist,
  startedPage,
} from '../../utils';
import { EndMessage } from './end-message';
import { Loader } from './loader';

interface InfiniteScrollComponentProps {
  count: number;
  loading?: boolean;
  page?: number;
  fetchData: (page: number) => void;
}

export const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({
  count,
  loading,
  children,
  page = 1,
  fetchData,
}) => {
  const hasMore = useMemo(() => getHasMoreFlag(count, page), [count, page]);

  const fetchAnotherPartOfData = useCallback(() => {
    const isShouldDoRequest = shouldDoRequestIfDataAlreadyExist(count, page);
    if (isShouldDoRequest) {
      fetchData(page + 1);
    }
  }, [fetchData, page, count]);

  if (page === startedPage && count === 0 && loading) {
    return <Loader />;
  }

  return (
    <InfiniteScroll
      dataLength={count}
      next={fetchAnotherPartOfData}
      hasMore={hasMore}
      loader={<Loader />}
      scrollableTarget={infiniteScrollTarget}
      endMessage={<EndMessage />}>
      {children}
    </InfiniteScroll>
  );
};
